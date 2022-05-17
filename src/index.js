import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { NextUIProvider, Container } from '@nextui-org/react';
import App from "./App";


const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <NextUIProvider>
      <Container  lg gap={2} css={{ mt:'$10', backgroundColor:'$accents0'}}>
        <App />
      </Container>
    </NextUIProvider>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

