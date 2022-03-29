import { createGlobalStyle } from "styled-components";

import img from "../assets/img/fundo.jpg";

export default createGlobalStyle`


body {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-image:url(${img}) ;
  background-repeat: no-repeat;
  background-size: cover;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

button {
    cursor: pointer;
}

form{
    display: flex;
    width: 90%;
    height: 70%;
    justify-content: center;
    align-items: center;
}

section{
    display: flex;
    width: 50%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

label{
    color: #f9f9f9;
}

input{
  width: 80%;
  background-color: rgba(204, 202, 202, 0.747) ;
  border-style: none;

}

input:hover{
  border-style: 1px solid rgba(46, 46, 46, 0.747)  ;
  background-color: rgba(156, 155, 155, 0.842) ;
  color: aliceblue;
}


table{
    width: 100%;
    height: auto;
    border-spacing: 5px;
    border-collapse: none;
    border: 0.5px solid black;
    margin-bottom: 30px;
    margin-top:20px;
    color: #f9f9f9;
}

th{
    background-color: rgba(204, 202, 202, 0.747) ;
    border: 1px solid black;
    padding: 5px;
    font-weight: 500;
    color: rgb(37, 37, 37);
}

tr{
    color: black;
    height: 3em;
    background-color: #f9f9f9 ;
  }
  // Adicione quais mais regras desejar!
`
