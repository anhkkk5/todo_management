import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import { loadState, saveState } from "./utils/localStorage";

// Load persisted state from localStorage
const persistedState = loadState();

// Create store with persisted state
const store = createStore(allReducers, persistedState);

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
