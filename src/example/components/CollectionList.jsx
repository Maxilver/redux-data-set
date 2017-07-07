import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import v4 from 'uuid';
import { collectionSelector, dataCollectionPush, dataCollectionClean, dataCollectionRemove } from '../..';

function CollectionList (props) {
  return (
    <div>
      <div>
        <div className="actions">
          <button className="btn btn-success" onClick={() => props.add()}>Append</button>
          <button className="btn btn-success" onClick={() => props.add(true)}>Prepend</button>
          <button className="btn btn-warning" onClick={props.clean}>Clean</button>
        </div>
        <div className="actions">
          {_.map(props.removingActions, (action, key) => (
            <button className="btn btn-danger" key={key} onClick={() => props.remove(action.query)}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
      <div className="list-items">
        {_.map(props.data, (item, key) => props.component
          ? <props.component item={item} onDelete={() => props.remove({ id: item.id })} />
          : <div key={key}>{item}</div>)
        }
      </div>
    </div>
  );
}

function getRandomElement (items) {
  return items[Math.floor(Math.random() * items.length)];
}

function mapDispatchToProps (dispatch, { name, items, addId }) {

  const add = addId
    ? (reverse => dispatch(dataCollectionPush(name, { ...getRandomElement(items), id: v4() }, { reverse })))
    : (reverse => dispatch(dataCollectionPush(name, getRandomElement(items), { reverse })));

  return {
    add,
    clean: () => dispatch(dataCollectionClean(name)),
    remove: (query) => dispatch(dataCollectionRemove(name, query)),
  }
}

export default connect(
  (state, props) => ({ data: collectionSelector(state, props.name) }),
  mapDispatchToProps
)(CollectionList);
