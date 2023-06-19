import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import Main from "./Pages/Main"; 
import Rotas from "./Pages/Rotas";
import Contato from './components/Contato/Contato';

function App() {
   return (
    <>
      <Rotas />
    </>
  );
}

export default App;
