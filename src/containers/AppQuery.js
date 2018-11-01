import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../data/environment";
import App from "../App";

const AppQuery = () => (
  <QueryRenderer
    query={graphql`
      query AppQuery {
        me {
          ...ItemListContainer_me
        }
        list {
          ...ItemListContainer_list
        }
      }
    `}
    environment={environment}
    render={({ error, props }) => {
      if (error) {
        console.log(error);
        return <div>{error.message}</div>;
      }

      if (props) {
        return <App me={props.me} list={props.list} />;
      }

      return <div>Loading</div>;
    }}
  />
);

export default AppQuery;
