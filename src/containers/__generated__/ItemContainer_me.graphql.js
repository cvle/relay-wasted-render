/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemContainer_me$ref: FragmentReference;
declare export opaque type ItemContainer_me$fragmentType: ItemContainer_me$ref;
export type ItemContainer_me = {|
  +id: string,
  +$refType: ItemContainer_me$ref,
|};
export type ItemContainer_me$data = ItemContainer_me;
export type ItemContainer_me$key = {
  +$data?: ItemContainer_me$data,
  +$fragmentRefs: ItemContainer_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemContainer_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '5f4beca0e8d62c795d4101d28c4f0ea9';

module.exports = node;
