/**
 * @flow
 * @relayHash 62cbdf3831e24de1f8471ed291898874
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

fragment ItemContainer_item on Item {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor",
    "defaultValue": null
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ItemListContainerPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
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
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ItemListContainerPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
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
            "storageKey": null,
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
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
    "name": "ItemListContainerPaginationQuery",
    "id": null,
    "text": "query ItemListContainerPaginationQuery(\n  $count: Int!\n  $cursor: Cursor\n) {\n  list {\n    ...ItemListContainer_list_1G22uz\n  }\n}\n\nfragment ItemListContainer_list_1G22uz on List {\n  items(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...ItemContainer_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ItemContainer_item on Item {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17fdd9fd152ec35b12c6c96465eef063';
module.exports = node;
