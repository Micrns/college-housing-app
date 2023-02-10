import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Rent from "./rent";

import { createRoot } from 'react-dom/client'; 


//displays the mainpage of app
//ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab = "home" />);
root.render(<Rent tab = "rent"/>);
