// Import function để kết hợp các reducers
import { combineReducers } from "redux";

import todoListReducer from "./todo";

// Kết hợp tất cả reducers thành một root reducer
const allReducers = combineReducers({
  todoListReducer,
});

export default allReducers;
