[![npm version](https://badge.fury.io/js/redux-data-set.svg)](https://badge.fury.io/js/redux-data-set)

# Redux Data Set
Simple Redux data manager

## Installation

### Standart npm installation

```
npm i --save redux-data-set
```

### Adding of the dataSet Reducer

```javascript
import { combineReducers } from 'redux';
import createDataReducer from 'redux-data-set';

const yourReducer = createDataReducer({ name: 'yourDataSlice' });

export default combineReducers({
  ...otherReducers,
  yourReducer
});
```

## Usage

### Actions

```javascript
import { dataCollectionClean, dataCollectionPush, dataCollectionRemove } from 'redux-data-set';

// Add item(s) to data set.
dataCollectionPush('yourDataSlice', 'foo');
dataCollectionPush('yourDataSlice', ['foo', 'bar']);
dataCollectionPush('yourDataSlice', [
    { id: 'foo', value: 'Foo', ...otherProperties },
    { id: 'bar', value: 'Bar', ...otherProperties },
]);

// Remove items.
return dataCollectionRemove('yourDataSlice', { id: 'foo' });
return dataCollectionRemove('yourDataSlice', ({ value }) => value !== 'Bar' && value.length > 3);

// Reset whole collection.
return dataCollectionClean('yourDataSlice');
```

### Data selection

```javascript
import { connect } from 'redux';
import { collectionSelector } from 'redux-data-set';

connect(state => ({
  items: collectionSelector(state, 'yourDataSlice'),
  otherItems: collectionSelector(state, 'otherDataSlice')
}))(YourComponent);
```

## Example

Clone and run a dummy example

```
git clone git@github.com:Maxilver/redux-data-set.git
npm i
npm start
```

Now you can see the example on your localhost:8080
