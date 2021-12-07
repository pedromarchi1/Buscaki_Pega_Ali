import img_produto from '../../img/Iphoneimg-removebg-preview.png'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CompProduto (){
  
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/api/produtos').then(function (response) {
        return response.json();
    }).then((products) => {
        setProducts(products);
    })
}, [])

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [texto, setTexto] = useState('');
  const [estoque, setEstoque] = useState('');


  const uploadImage = async e => {
    e.preventDefault();
    console.log("uploded");
    console.log(categoria);
    console.log(valor);
    console.log(nome);
    console.log(texto);
    console.log(estoque);

    let test = {nome: nome, categoria: categoria, valor: valor, descricao: texto, estoque: estoque}
    console.log('rest => ' + JSON.stringify(test))


    alert("add")
    return axios.post('http://localhost:8081/api/produtos/', test)
  }
  
    return (
    <div className="container">
      <div className="border-row row justify-content-between">
        <div className="Imagem_Produto col-6">
          <div>
            <img className="Img_Elemento" src={img_produto} />
          </div>
        </div>
          <div className="Nome_Produto col-6">
            <h1 className="fonte-texto">iPhone 13 Pro Apple (256GB) Grafite, Tela de 6,1", 5G e Câmera Tripla de 12MP</h1>
            <h3 className="preço_produto"><strong>R$9.239,12</strong> em 1x no cartão</h3>
            <br />
            <h5 className="preço_produto2">R$ 10.499,00 
            à vista ou em até 12x de R$ 874,92
             sem juros no cartão de crédito</h5>
            <form onSubmit={uploadImage}>

              <input id="nome" type="texto" name="image" onChange={e => setNome(e.target.value)} placeholder="Nome Do Produto" /> 
              <input id="categoria" type="text" onChange={e => setCategoria(e.target.value)} name="categoria" placeholder="Categoria"/>
              <input id="valor" type="number" onChange={e => setValor(e.target.value)} name="valor" placeholder="Valor" />
              <input type="text" name="descicao" onChange={e => setTexto(e.target.value)} placeholder="Descição" /> 
              <input type="number" name="estoque" onChange={e => setEstoque(e.target.value)} placeholder="Quant. em estoque" />

              <button type="submit">Salvat</button>
              


            </form>
          </div>
      </div>
    </div>




  )
}
export default CompProduto;