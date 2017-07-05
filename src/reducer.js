import * as _ from 'lodash';
import {
  DATA_SET_PUSH_ITEMS,
  DATA_SET_REMOVE_ITEMS,
  DATA_SET_CLEAN_COLLECTION
} from './actionTypes';

export default function createDataReducer ({ name, initialState = { collection: [] } }) {
  const defaultState = _.assign(initialState, { isDataSet: true });

  return (state = defaultState, action) => {
    if (action.name === name) {
      switch (action.type) {
        case DATA_SET_PUSH_ITEMS: {
          const collection = (action.reverse)
            ? _.concat(action.data, state.collection)
            : _.concat(state.collection, action.data);
          return {
            ...state,
            collection,
          };
        }
        case DATA_SET_REMOVE_ITEMS: {
          const collection = _.reject(state.collection, action.query);
          return (collection.length === state.collection.length) ? state : { ...state, collection };
        }
        case DATA_SET_CLEAN_COLLECTION: {
          return { ...defaultState };
        }
        default:
          return state;
      }
    }

    return state;
  };
}
