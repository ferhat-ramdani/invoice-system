/*
Document Object Model (DOM) is an API (a sort of protocol) 
that allows for the structuring of HTML documents.

React DOM is a package that allows for the structuring
of React components.

React Router is a library that defines how the React app 
reacts to changes in url.

react-router-dom is a specific package of React Router.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);