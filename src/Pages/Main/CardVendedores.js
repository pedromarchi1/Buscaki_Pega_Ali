import guilherme from '../../img/guilhermebroda.jpg'

function CardVendedor() {

    return(
        <div className="card_vendedor">
            <div className="card-header-vendedor">
                <img src={guilherme} alt="Profile Image" className="profile-img" />
            </div>

            <div className="card-body-vendedor">
                <p className="nome">Guilherme Bodra</p>
                <a href="mailto:gui.bguimaraes@senacp.edu.br" className="mail">enviar Email</a>
                <br />
                <a href="https://web.whatsapp.com/send/?phone=5517981344583&text=Bomdia">whatsapp</a>
                <p className="trabalho">Vendedor de Notebook</p>
            </div>
            
            <div className="social-links">
              <p className="ouro" >OURO<a href="#" className="fas fa-medal"></a></p>
            </div>
    
            <div className="card-footer-vendedor">
                <p className="count"> Melhor vendedor da semana</p>
            </div>
        </div>
    )       
}

export default CardVendedor;






