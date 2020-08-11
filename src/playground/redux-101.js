import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    break;
    case 'DECREMENT':
      const cecrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - cecrementBy
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
  type: 'INCREMENT',
}

const incrementBy = {
  type: 'INCREMENT',
  incrementBy: 5
}

const decrement = {
  type: 'DECREMENT',
}

const decrementBy = {
  type: 'DECREMENT',
  decrementBy: 10
}

const reset = {
  type: 'RESET'
}

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(increment);
store.dispatch(incrementBy);
store.dispatch(decrement);
store.dispatch(decrementBy);

// I'd like to reset the count to zero
store.dispatch(reset);

