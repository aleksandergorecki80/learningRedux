import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  console.log('store is running')
  return state;
});



console.log(store.getState());

// Actions - an object that gets sent to the store


// I'd like to increment the count

const increment = {
  type: 'INCREMENT'
}

store.dispatch(increment);

console.log(store.getState());

// I'd like to reset the count to zero
