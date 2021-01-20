/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemContainer_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemListContainer_me$ref: FragmentReference;
declare export opaque type ItemListContainer_me$fragmentType: ItemListContainer_me$ref;
export type ItemListContainer_me = {|
  +username: string,
  +$fragmentRefs: ItemContainer_me$ref,
  +$refType: ItemListContainer_me$ref,
|};
export type ItemListContainer_me$data = ItemListContainer_me;
export type ItemListContainer_me$key = {
  +$data?: ItemListContainer_me$data,
  +$fragmentRefs: ItemListContainer_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemListContainer_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemContainer_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '21e0b67fce29fe173388904d9a56e242';

module.exports = node;
