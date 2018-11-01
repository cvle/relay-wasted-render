/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ItemContainer_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemListContainer_me$ref: FragmentReference;
export type ItemListContainer_me = {|
  +username: string,
  +$fragmentRefs: ItemContainer_me$ref,
  +$refType: ItemListContainer_me$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ItemListContainer_me",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "username",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ItemContainer_me",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '21e0b67fce29fe173388904d9a56e242';
module.exports = node;
