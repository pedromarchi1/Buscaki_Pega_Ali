import iphone1 from '../../img/Iphoneimg-removebg-preview.png'
import iphone2 from '../../img/iphone1.png'
import iphone3 from '../../img/iphone2.png'
import iphone4 from '../../img/iphone3.png'
import iphone5 from '../../img/iphone1.png'


import Repeat from './Comp_repeat'


  function CompPrincipal(){
    const PropsProdutos =[
      {
        id:226,
        Image: iphone1,
        Nome: "Loja1",
        Title:"Iphone1",
        Preço:"9.239,12",
        Frete:"30,00",
      },
      {
        id:326,
        Image: iphone2,
        Nome: "Loja2",
        Title:"Iphone2",
        Preço:"9.300,12",
        Frete:"30,00",
      },
      {
        id:366,
        Image: iphone3,
        Nome: "Loja3",
        Title:"Iphone3",
        Preço:"9.350,12",
        Frete:"30,00",
      },
      {
        id:426,
        Image: iphone4,
        Nome: "Loja4",
        Title:"Iphone4",
        Preço:"9.400,12",
        Frete:"30,00",
      },
      {
        id:466,
        Image: iphone5,
        Nome: "Loja5",
        Title:"Iphone5",
        Preço:"9.435,12",
        Frete:"30,00",
      },
    ]
    return PropsProdutos.map(Produtos=>(
      <div>
        <Repeat key={Produtos.id} nome={Produtos.Nome} title={Produtos.Title} img={Produtos.Image} Preço={Produtos.Preço} Frete={Produtos.Frete} />
      </div>
    ))
  }

  export default CompPrincipal;
