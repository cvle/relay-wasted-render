import React, { Component } from "react";

import ItemListContainer from "./containers/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <ItemListContainer me={this.props.me} list={this.props.list} />
      </div>
    );
  }
}

export default App;
