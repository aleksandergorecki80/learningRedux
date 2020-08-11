import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    break;
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    break;
    case 'RESET':
      return {
        count: 0
      }
    break;
    default:
      return state;
  }
});



console.log(store.getState());

// Actions - an object that gets sent to the store


// I'd like to increment the count

const increment = {
  type: 'INCREMENT'
}

const decrement = {
  type: 'DECREMENT'
}

const reset = {
  type: 'RESET'
}

store.dispatch(increment);
console.log(store.getState());

store.dispatch(decrement);
console.log(store.getState());

store.dispatch(decrement);
console.log(store.getState());



// I'd like to reset the count to zero

store.dispatch(reset);
console.log(store.getState());
