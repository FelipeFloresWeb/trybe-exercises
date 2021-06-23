const MyContext = createContext();

class MyComponent extends React.Component {
  componentDidMount() {
    const value = this.context;
    // ...
  }
  render() {
    const value = this.context;
    // ...
  }
}

MyComponent.contextType = MyContext;