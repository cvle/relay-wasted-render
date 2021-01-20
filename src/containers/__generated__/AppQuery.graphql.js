/**
 * @flow
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

fragment ItemContainer_item on Item {
  id
  name
}

fragment ItemContainer_me on User {
  id
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

fragment ItemListContainer_me on User {
  username
  ...ItemContainer_me
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemListContainer_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "List",
        "kind": "LinkedField",
        "name": "list",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemListContainer_list"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "List",
        "kind": "LinkedField",
        "name": "list",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ItemsConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Item",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "items(first:1)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ItemList_items",
            "kind": "LinkedHandle",
            "name": "items"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bdf09aa65dff704227f5f8f6bddb5f97",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  me {\n    ...ItemListContainer_me\n    id\n  }\n  list {\n    ...ItemListContainer_list\n  }\n}\n\nfragment ItemContainer_item on Item {\n  id\n  name\n}\n\nfragment ItemContainer_me on User {\n  id\n}\n\nfragment ItemListContainer_list on List {\n  items(first: 1) {\n    edges {\n      node {\n        id\n        ...ItemContainer_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ItemListContainer_me on User {\n  username\n  ...ItemContainer_me\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f998b916574e5fe23a41eb2abc06e939';

module.exports = node;
