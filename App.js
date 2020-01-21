import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ReduxExample from "./source/ReduxExample";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };
    case "DECREASE":
      return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxExample />
      </Provider>
    );
  }
}

export default App;
