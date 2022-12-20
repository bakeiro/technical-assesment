// import { configureStore } from "@reduxjs/toolkit";
// import botSlice from "./components/redux/botSlice";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import { botStore } from "./components/redux/botStore";

import("preline"); // PreLine.js

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={botStore}>
    <App />
  </Provider>
)
