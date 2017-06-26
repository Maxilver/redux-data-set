import * as _ from 'lodash';
import {
  DATA_SET_PUSH_ITEMS,
  DATA_SET_REMOVE_ITEMS,
  DATA_SET_CLEAN_COLLECTION
} from './actionTypes';

export default function createDataReducer ({ name, initialState = { collection: [] } }) {
  return (state = initialState, action) => {
    if (action.name === name) {
      switch (action.type) {
        case DATA_SET_PUSH_ITEMS: {
          const collection = (action.reverse)
            ? _.concat(action.data, state.collection)
            : _.concat(state.collection, action.data);
          return {
            collection,
          };
        }
        case DATA_SET_REMOVE_ITEMS: {
          const collection = _.reject(state.collection, action.query);
          return (collection.length === state.collection.length) ? state : { collection };
        }
        case DATA_SET_CLEAN_COLLECTION: {
          return { initialState };
        }
        default:
          return state;
      }
    }

    return state;
  };
}
