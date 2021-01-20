/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemListContainer_list$ref = any;
export type ItemListContainerPaginationQueryVariables = {|
  count: number,
  cursor?: ?any,
|};
export type ItemListContainerPaginationQueryResponse = {|
  +list: ?{|
    +$fragmentRefs: ItemListContainer_list$ref
  |}
|};
export type ItemListContainerPaginationQuery = {|
  variables: ItemListContainerPaginationQueryVariables,
  response: ItemListContainerPaginationQueryResponse,
|};
*/


/*
query ItemListContainerPaginationQuery(
  $count: Int!
  $cursor: Cursor
) {
  list {
    ...ItemListContainer_list_1G22uz
  }
}

fragment ItemContainer_item on Item {
  id
  name
}

fragment ItemListContainer_list_1G22uz on List {
  items(first: $count, after: $cursor) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemListContainerPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "List",
        "kind": "LinkedField",
        "name": "list",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemListContainerPaginationQuery",
    "selections": [
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      },
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
            "storageKey": null
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
    "cacheID": "125903346e870622a241cc2cd056587e",
    "id": null,
    "metadata": {},
    "name": "ItemListContainerPaginationQuery",
    "operationKind": "query",
    "text": "query ItemListContainerPaginationQuery(\n  $count: Int!\n  $cursor: Cursor\n) {\n  list {\n    ...ItemListContainer_list_1G22uz\n  }\n}\n\nfragment ItemContainer_item on Item {\n  id\n  name\n}\n\nfragment ItemListContainer_list_1G22uz on List {\n  items(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...ItemContainer_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17fdd9fd152ec35b12c6c96465eef063';

module.exports = node;
