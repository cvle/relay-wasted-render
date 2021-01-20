/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemContainer_item$ref: FragmentReference;
declare export opaque type ItemContainer_item$fragmentType: ItemContainer_item$ref;
export type ItemContainer_item = {|
  +id: string,
  +name: ?string,
  +$refType: ItemContainer_item$ref,
|};
export type ItemContainer_item$data = ItemContainer_item;
export type ItemContainer_item$key = {
  +$data?: ItemContainer_item$data,
  +$fragmentRefs: ItemContainer_item$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItemContainer_item",
  "type": "Item",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '41ed2206d9c0420d8c0a145c5db67492';
module.exports = node;
