import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import { StrictMode } from "react";

ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);