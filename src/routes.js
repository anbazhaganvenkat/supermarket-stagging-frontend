import React from "react";


// Login
import Login from "./views/login";


// List of routes
const routes = [

  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login
  }
];

export default routes;
