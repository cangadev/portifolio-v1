import React from 'react';
import './App.css';
import GlobalStyles from "./Styles/globalStyles.jsx";
import Rotas from './routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
        <Rotas/>
        <GlobalStyles/>
    </BrowserRouter>
   </>
  );
}

export default App;
