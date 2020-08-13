import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {} ) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
};

const decrementCount = ({ decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
};

//set

const setCount = ({ setTo } ) => {    // value is required, no default value
  return {
    type: 'SET',
    setTo
  }
}
//reset

const resetCount = () => {
  return {
    type: 'RESET',
    count: 0
  }
}

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    break;
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    break;
    case 'RESET':
      return {
        count: action.count
      }
    break;
    case 'SET':
        return {
          count: action.setTo
        }
    break;
    default:
      return state;
  }
}

const store = createStore(countReducer);



console.log(store.getState());
// Actions - an object that gets sent to the store
// I'd like to increment the count

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(incrementCount());
store.dispatch(incrementCount( { incrementBy: 5 } ));
store.dispatch(decrementCount( {decrementBy: 3} ));
store.dispatch(decrementCount());
store.dispatch(setCount( {setTo: 102 }));
store.dispatch(resetCount());


// I'd like to reset the count to zero


