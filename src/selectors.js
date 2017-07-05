import * as _ from 'lodash';
import { createSelector } from 'reselect';

const sliceSelector = (state, name) => state[name] || void 0;

export const dataSliceSelector = createSelector(
  sliceSelector,
  slice => slice && (slice.isDataSet ? slice : void 0)
);

export const collectionSelector = createSelector(
  dataSliceSelector,
  dataSlice => dataSlice && dataSlice.collection
);

export const filterItemsSelector = createSelector(
  dataSliceSelector,
  (state, name, query) => query,
  (dataSlice, query) => _.filter(dataSlice, query)
);
