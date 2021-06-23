import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

function RedditProvider(props) {
  const [postsBySubreddit, setpostsBySubreddit ] = useState({
    frontend: {},
    reactjs: {},
  })
  const [selectedSubreddit, setselectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setshouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchPosts();
  } ,[shouldRefreshSubreddit])

  useEffect(() => {
    fetchPosts();
  } ,[selectedSubreddit])

  function fetchPosts() {
    if (!shouldFetchPosts()) return;

    setshouldRefreshSubreddit(false);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  }

  function shouldFetchPosts() {

    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  function handleFetchSuccess(json) {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

      setshouldRefreshSubreddit(false);
      setIsFetching(false);

      setpostsBySubreddit({
        ...postsBySubreddit,
        [selectedSubreddit]: { items, lastUpdated }
      })

      return postsBySubreddit;
  };

  function handleFetchError(error) {

    setshouldRefreshSubreddit(false);
    setIsFetching(false);

    setpostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: { error: error.message, items: [] }
    })
      return postsBySubreddit;
  };

  function handleSubredditChange(selectedSubreddit) {
    setselectedSubreddit(selectedSubreddit)
  }

  function handleRefreshSubreddit() {
    setshouldRefreshSubreddit(true);
  }
    const context = {
      postsBySubreddit,
      selectedSubreddit,
      shouldRefreshSubreddit,
      isFetching,
      selectSubreddit: handleSubredditChange,
      fetchPosts: fetchPosts,
      refreshSubreddit: handleRefreshSubreddit,
      availableSubreddits: Object.keys(postsBySubreddit),
      posts: postsBySubreddit[selectedSubreddit].items,
    };
    const { children } = props;

    return (
      <Provider value={context}>
        {children}
      </Provider>
    );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };