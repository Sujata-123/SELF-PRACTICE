import { INC_COUNT,DEC_COUNT } from "./actionTypes.js";
export const reducer = (store, action) => {
    switch (action.type) {
      case INC_COUNT:
        return { ...store, count: store.count + action.payload };
      case DEC_COUNT:
        return { ...store, count: store.count - action.payload };
      // case "ADD_TODO":
      //   return { ...store, todo: [...store.todo, action.payload] };
      default:
        return store;
    }
  };