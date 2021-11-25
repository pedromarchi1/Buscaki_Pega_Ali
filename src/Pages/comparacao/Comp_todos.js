import img_produto from '../../img/Iphoneimg-removebg-preview.png'



function CompProduto (){
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

          </div>
      </div>
    </div>
  )
}
export default CompProduto;