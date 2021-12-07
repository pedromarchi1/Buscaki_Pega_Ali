
  // Arquivos

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
 
  //  CSS
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './index.css';

  // API



  //  Conteudo Main Page
  import Main from './Main'
  import Produto from './Produtos';
  import PedroProduto from './Pedro_produt'
  import Pesquisa from './Pesquisa'
  import RegistrarProduto from './Pages/RegistroProduto/RegistroProduto'
import Perfil from './Perfil';


  // const Product = () => {
  //   const params = useParams();

    
  // }

  ReactDOM.render(
      < Router >
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/user" element={<Produto />} />
          <Route path="/Pesquisa" element={<Pesquisa />} />
          <Route path="/produto/:id" element={<PedroProduto />} />
          <Route path="/RegistroProduto" element={<RegistrarProduto />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>, 
    document.getElementById('root')
  );


  

