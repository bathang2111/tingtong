import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import App from "./app/App";
import { Globalstyled } from "./app/GlobalStyle";
import store from "./app/store";
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
      <Globalstyled />
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
