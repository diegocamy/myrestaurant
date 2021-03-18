import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import api from "./api/axios";

import App from "./App";

import { store, persistor } from "./redux/store";

// const checkLoggedUser = async () => {
//   const { data } = await api.get("/user/me");
//   store.dispatch();
// };

// checkLoggedUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
