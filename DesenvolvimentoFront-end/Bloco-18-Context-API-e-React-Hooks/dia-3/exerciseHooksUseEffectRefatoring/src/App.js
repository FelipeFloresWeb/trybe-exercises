import React, { useEffect, useContext } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import { Context } from './components/RedditContext';

function App() {
  // componentDidMount() {
  //   const { fetchPosts } = this.context;
  //   fetchPosts();
  // }
  const { selectedSubreddit, postsBySubreddit } = useContext(Context);
  const { fetchPosts } = useContext(Context);
  const { isFetching, refreshSubreddit } = useContext(Context);
  
  useEffect(() => fetchPosts(), [])

  function renderLastUpdatedAt() {
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    if (!lastUpdated) return null;

    return (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    );
  }

  function renderRefreshButton() {

    if (isFetching) return null;

    return (
      <button
        type="button"
        onClick={(event) => refreshSubreddit(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

    const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector />
        <div>
          {renderLastUpdatedAt()}
          {renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts />}
      </div>
    );
}

// App.contextType = Context;

export default App;