
  // Arquivos

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";

  //  CSS

  import './index.css';

  // API



  //  Conteudo Main Page
  import Main from './Main'
  import Produto from './Produtos';
  import PedroProduto from './Pedro_produt'
  import Pesquisa from './Pesquisa'
  



  ReactDOM.render(
      <Router >
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/user" element={<Produto />} />
          <Route path="/comparacao" element={<PedroProduto />} />
          <Route path="/Pesquisa" element={<Pesquisa />} />
        </Routes>
      </Router>, 
    document.getElementById('root')
  );


  

