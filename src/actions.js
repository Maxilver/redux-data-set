import {
  DATA_SET_PUSH_ITEMS,
  DATA_SET_REMOVE_ITEMS,
  DATA_SET_CLEAN_COLLECTION
} from './actionTypes';

export function dataCollectionPush (name, data, { reverse = false } = {}) {
  return {
    type: DATA_SET_PUSH_ITEMS,
    name,
    data,
    reverse,
  };
}

export function dataCollectionRemove (name, query) {
  return {
    type: DATA_SET_REMOVE_ITEMS,
    name,
    query,
  };
}

export function dataCollectionClean (name) {
  return {
    type: DATA_SET_CLEAN_COLLECTION,
    name,
  };
}
