import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";
import { Globalstyled } from "./app/GlobalStyle";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Globalstyled />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
