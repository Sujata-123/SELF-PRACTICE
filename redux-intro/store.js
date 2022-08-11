// actions
// here type is unique.
const addCount = { type: "INC_COUNT", payload: 1 };
const decCount = { type: "DEC_COUNT", payload: 1 };
const addTODo = {
  type: "ADD_TODO",
  payload: { id: 1, status: false, title: "Learn Redux" },
};

// const deleteTodo = {
//   type: "DELETE_TODO",
//   payload: 1,
// };

class Store {
  constructor(reducer, init) {
    (this.reducer = reducer), // this.reducer here means we are calling reducer function which we wrote below.
      (this.state = init);
  }

  getState() {
    // whenever I will call getState on store it will tell the current state of the store.
    return this.state;
  }
  //   what dispatch do, it takes the actions and give to the store, this is the only work of reducer, it act as bridge.
  dispatch(actions) {
    this.state = this.reducer(this.state, actions); // this.reducer is returing a new state
  }
}
// reducer takes entire store and actions, in reducer we write logic.
const reducer = (store, action) => {
  // using if way
  //   if (action.type === "INC_COUNT") {
  //     store.count += action.payload;
  //   }

  //   if (action.type === "ADD_TODO") {
  //     store.count += action.payload;
  //   }
  //   return store;
  // using switch way
  switch (action.type) {
    case "INC_COUNT":
      // ---1.copied the entire store so that I don't loose other keys on it and I am only overriding count, current_count is 0 +action.payload which is 1
      return { ...store, count: store.count + action.payload };
    case "DEC_COUNT":
      return { ...store, count: store.count - action.payload };
    case "ADD_TODO":
      return { ...store, todo: [...store.todo, action.payload] };
    default:
      return store;
  }
};
// instance of that class
// count:0 means giving initial state.
// ---------------------reducer init state
// const init = { count: 0 };
const store = new Store(reducer, { count: 0, todo: [] });
// const store = new Store(reducer, { count: 0, init });
console.log(store.getState());
store.dispatch({ type: "INC_COUNT", payload: 4 });
console.log(store.getState());
console.log(store.getState());
store.dispatch({ type: "DEC_COUNT", payload: 1 });
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









// import { createStore } from "redux";
// // actions
// // here type is unique.
// const addCount = { type: "INC_COUNT", payload: 1 };
// const decCount = { type: "DEC_COUNT", payload: 1 };
// const addTODo = {
//   type: "ADD_TODO",
//   payload: { id: 1, status: false, title: "Learn Redux" },
// };

// // const deleteTodo = {
// //   type: "DELETE_TODO",
// //   payload: 1,
// // };

// const reducer = (store, action) => {
//   switch (action.type) {
//     case "INC_COUNT":
//       return { ...store, count: store.count + action.payload };
//     case "DEC_COUNT":
//       return { ...store, count: store.count - action.payload };
//     case "ADD_TODO":
//       return { ...store, todo: [...store.todo, action.payload] };
//     default:
//       return store;
//   }
// };
// // count:0 means giving initial state.
// // ---------------------reducer init state
// const init = { count: 0 };
// // const store = createStore(reducer, { count: 0, todo: [] });
// const store = createStore(reducer, { count: 0, init });
// console.log(store.getState());
// store.dispatch({ type: "INC_COUNT", payload: 1 });
// console.log(store.getState());
// console.log(store.getState());
// store.dispatch({ type: "DEC_COUNT", payload: 1 });
// console.log(store.getState());
// store.dispatch({
//   type: "ADD_TODO",
//   payload: { id: 1, status: false, title: "Learn Redux" },
// });
// console.log(store.getState());
// // npm init -y =>this will create package.json file
// // npm install redux.
// // redux is also use for state management for us.
// // but global state.
