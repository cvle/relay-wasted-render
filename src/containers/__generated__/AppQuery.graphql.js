/**
 * @flow
 * @relayHash af904dba8bdad6ac31e9cc0852727cfb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemListContainer_list$ref = any;
type ItemListContainer_me$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +me: ?{|
    +$fragmentRefs: ItemListContainer_me$ref
  |},
  +list: ?{|
    +$fragmentRefs: ItemListContainer_list$ref
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  me {
    ...ItemListContainer_me
    id
  }
  list {
    ...ItemListContainer_list
  }
}

fragment ItemListContainer_me on User {
  username
  ...ItemContainer_me
}

fragment ItemListContainer_list on List {
  items(first: 1) {
    edges {
      node {
        id
        ...ItemContainer_item
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ItemContainer_item on Item {
  id
  name
}

fragment ItemContainer_me on User {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ItemListContainer_me",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "list",
        "storageKey": null,
        "args": null,
        "concreteType": "List",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ItemListContainer_list",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "list",
        "storageKey": null,
        "args": null,
        "concreteType": "List",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": "items(first:1)",
            "args": (v1/*: any*/),
            "concreteType": "ItemsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ItemEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Item",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "items",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "ItemList_items",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  me {\n    ...ItemListContainer_me\n    id\n  }\n  list {\n    ...ItemListContainer_list\n  }\n}\n\nfragment ItemListContainer_me on User {\n  username\n  ...ItemContainer_me\n}\n\nfragment ItemListContainer_list on List {\n  items(first: 1) {\n    edges {\n      node {\n        id\n        ...ItemContainer_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ItemContainer_item on Item {\n  id\n  name\n}\n\nfragment ItemContainer_me on User {\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f998b916574e5fe23a41eb2abc06e939';
module.exports = node;
