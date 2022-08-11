import { createStore } from "redux";
import { INC_COUNT, DEC_COUNT } from "./store2.js/actionTypes.js";
import { incCount, decCount } from "./store2.js/actions.js";
import { reducer } from "./store2.js/reducer.js";
// actions
// here type is unique.
// const addCount = { type: INC_COUNT, payload: 1 };
// const decCount = { type: DEC_COUNT, payload: 1 };
const addTODo = {
  type: "ADD_TODO",
  payload: { id: 1, status: false, title: "Learn Redux" },
};

// const deleteTodo = {
//   type: "DELETE_TODO",
//   payload: 1,
// };

// count:0 means giving initial state.
// ---------------------reducer init state
const init = { count: 0 };
// const store = createStore(reducer, { count: 0, todo: [] });
const store = createStore(reducer, { count: 0, init });
// store is here content creater and we are subscrbing there channel.
// so whenever there would be any change in store this anonomous function will call.
store.subscribe((e) => {
  console.log("Store changed");
});
// view:
console.log(store.getState());
// store.dispatch({ type: INC_COUNT, payload: 1 });
store.dispatch(incCount(1));
console.log(store.getState());

store.dispatch(decCount(3));
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { id: 1, status: false, title: "Learn Redux" },
});
console.log(store.getState());
// npm init -y =>this will create package.json file
// npm install redux.
// redux is also use for state management for us.
// but global state.
