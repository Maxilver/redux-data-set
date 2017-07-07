import React from 'react';
import * as _ from 'lodash';

export default function ExtendedItem (props) {
  return (
    <div key={props.id}>
      <button className="btn btn-danger delete-item" onClick={props.onDelete}>X</button>
      {_.map(props.item, (item, key) => <div key={key}>{`${key}: ${item}`}</div>)}
    </div>
  );
}
