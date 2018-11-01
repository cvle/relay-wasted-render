import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import Item from "../Item";

export class ItemContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    const keys = [...Object.keys(nextProps), ...Object.keys(this.props)].filter(
      (s, i, array) => array.indexOf(s) === i
    );
    const changed = keys.filter(k => nextProps[k] !== this.props[k]);

    console.log(
      `Item Container ${
        nextProps.item.id
      } rerendered. Following props changed:`,
      changed
    );
  }

  render() {
    return <Item name={this.props.item.name} />;
  }
}

export default createFragmentContainer(ItemContainer, {
  me: graphql`
    fragment ItemContainer_me on User {
      id
    }
  `,
  item: graphql`
    fragment ItemContainer_item on Item {
      id
      name
    }
  `
});
