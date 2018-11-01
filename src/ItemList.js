import React, { Component } from "react";

import ItemContainer from "./containers/ItemContainer";

class ItemList extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.me.username}!</p>
        <p>Your List contains</p>
        <div>
          {this.props.items.map(i => (
            <ItemContainer key={i.id} me={this.props.me} item={i} />
          ))}
        </div>
        {this.props.hasMore && (
          <button
            onClick={this.props.onLoadMore}
            disabled={this.props.disableLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    );
  }
}

export default ItemList;
