//INCLUDES------------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom";

import MainView from "./View/Main/index.jsx";
//SETUP------------------------------------------------------------------
//LOGIC--------------------------------------------------------------------
window.addEventListener("load", ()=>{
    var reactRoot = document.createElement("div");
    reactRoot.id = "reactRoot";
    document.body.appendChild(reactRoot);
    ReactDOM.render(<MainView/>, reactRoot);
});