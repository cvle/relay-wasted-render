/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemContainer_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemListContainer_list$ref: FragmentReference;
declare export opaque type ItemListContainer_list$fragmentType: ItemListContainer_list$ref;
export type ItemListContainer_list = {|
  +items: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +$fragmentRefs: ItemContainer_item$ref,
      |}
    |}>
  |},
  +$refType: ItemListContainer_list$ref,
|};
export type ItemListContainer_list$data = ItemListContainer_list;
export type ItemListContainer_list$key = {
  +$data?: ItemListContainer_list$data,
  +$fragmentRefs: ItemListContainer_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "items"
        ]
      }
    ]
  },
  "name": "ItemListContainer_list",
  "selections": [
    {
      "alias": "items",
      "args": null,
      "concreteType": "ItemsConnection",
      "kind": "LinkedField",
      "name": "__ItemList_items_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ItemContainer_item"
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
    }
  ],
  "type": "List",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '57a4773d51a3663262909800e382adc2';

module.exports = node;
