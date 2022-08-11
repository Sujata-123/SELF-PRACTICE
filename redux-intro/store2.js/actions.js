import { DEC_COUNT, INC_COUNT } from "./actionTypes.js";
export const incCount = (data) => {
  // now payload is getting dynamic data
  return { type: INC_COUNT, payload: data };
};

export const decCount = (data) => {
  return { type: DEC_COUNT, payload: data };
};

// 4 types
// actionTypes
// actions (action creators) are basically the functions that return like this object=>{...store, count: store.count + action.payload}
// reducer
// store
