import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Rent from "./rent";

import Login from "./account/login"

import { createRoot } from 'react-dom/client'; 


//displays the mainpage of app
//ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');
const conainer_1 = document.getElementById('rent-page');
const root = createRoot(container);
const root1 = createRoot(conainer_1);

//root.render(<App tab = "home" />);
root1.render(<Login tab = "rent"/>);
