import React, { Component } from 'react';
import CollectionList from './CollectionList'
import ExtendedItem from './ExtendedItem'

const SIMPLE = {
  items: ['milk', 'bread', 'salad', 'tea', 'tomatoes', 'shrimp', 'cheese', 'fish', 'peanuts', 'jalapenos'],
  removingActions: [
    { label: 'Remove shorter than 5', query: (item) => item.length < 5 },
    { label: 'Remove random', query: () => Math.random() < 0.5 },
    { label: 'Remove shrimps and tomatoes', query: (item) => item === 'shrimp' || item === 'tomatoes'},
  ],
};

const EXTENDED = {
  items: [
    { name: 'milk', vegan: false, cost: 10, allergic: false },
    { name: 'bread', vegan: true, cost: 5, allergic: false },
    { name: 'salad', vegan: true, cost: 20, allergic: false },
    { name: 'tea', vegan: true, cost: 15, allergic: false },
    { name: 'tomatoes', vegan: true, cost: 8, allergic: false },
    { name: 'shrimp', vegan: false, cost: 40, allergic: true },
    { name: 'cheese', vegan: false, cost: 30, allergic: false },
    { name: 'fish', vegan: false, cost: 17, allergic: false },
    { name: 'peanuts', vegan: true, cost: 4, allergic: true },
    { name: 'jalapenos', vegan: true, cost: 7, allergic: false },
  ],
  removingActions: [
    { label: 'Remove expensive', query: (item) => item.cost > 15 },
    { label: 'I am vegan', query: { vegan: false } },
  ],
};

export default function Example () {
  return (
    <div className="example-lists">
      <div className="col-md-4">
        <h4>Simple Items List</h4>
        <CollectionList name="simple" items={SIMPLE.items} removingActions={SIMPLE.removingActions} />
      </div>
      <div className="col-md-4">
        <h4>Extended Items List</h4>
        <CollectionList
          name="extended"
          items={EXTENDED.items}
          removingActions={EXTENDED.removingActions}
          component={ExtendedItem}
          addId
        />
      </div>
    </div>
  );
}

