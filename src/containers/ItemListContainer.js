import React from "react";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import ItemList from "../ItemList";

export class ItemListContainer extends React.Component {
  state = {
    disableLoadMore: false
  };

  componentWillReceiveProps(nextProps) {
    const keys = [...Object.keys(nextProps), ...Object.keys(this.props)].filter(
      (s, i, array) => array.indexOf(s) === i
    );
    const changed = keys.filter(k => nextProps[k] !== this.props[k]);

    console.log(
      "Item List Pagination Container rerendered. Following props changed:",
      changed
    );
  }

  render() {
    const items = this.props.list.items.edges.map(edge => edge.node);
    return (
      <ItemList
        items={items}
        onLoadMore={this.loadMore}
        hasMore={this.props.relay.hasMore()}
        disableLoadMore={this.state.disableLoadMore}
        me={this.props.me}
      />
    );
  }

  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    console.log("Loading more...");
    this.setState({ disableLoadMore: true });
    this.props.relay.loadMore(
      1, // Fetch the next 10 feed items
      error => {
        this.setState({ disableLoadMore: false });
        if (error) {
          // tslint:disable-next-line:no-console
          console.error(error);
        }
      }
    );
  };
}

export default createPaginationContainer(
  ItemListContainer,
  {
    me: graphql`
      fragment ItemListContainer_me on User {
        username
        ...ItemContainer_me
      }
    `,
    list: graphql`
      fragment ItemListContainer_list on List
        @argumentDefinitions(
          count: { type: "Int!", defaultValue: 1 }
          cursor: { type: "Cursor" }
        ) {
        items(first: $count, after: $cursor)
          @connection(key: "ItemList_items") {
          edges {
            node {
              id
              ...ItemContainer_item
            }
          }
        }
      }
    `
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.list && props.list.items;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query ItemListContainerPaginationQuery($count: Int!, $cursor: Cursor) {
        list {
          ...ItemListContainer_list @arguments(count: $count, cursor: $cursor)
        }
      }
    `
  }
);
