import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Connects app with redux store
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider
    //  app acces to the store
    store={store}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
