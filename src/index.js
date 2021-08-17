//Carga la variable React en Scope
import React from "react"

//Carga la variable ReactDOM en Scope
import ReactDom from "react-dom"

//Agrega un componente React
import App from "./App"
import './scss/app.scss';

//Agrega una función render corriendo
ReactDom.render(<App />, document.querySelector("#root"))