import guilherme from '../../img/guilhermebroda.jpg'

export default (props) => { 
    return(
        <div className="card_vendedor" key={props.id}>
            <div className="card-header-vendedor">
                <img src={props.image} alt="Profile Image" className="profile-img" />
            </div>
            <div className="card-body-vendedor">
                <p className="nome">{props.nome}</p>
                <a href={"mailto:" + props.email} className="mail">Enviar Email</a>
                <br />
                <p className="trabalho">Vendedor de Notebook</p>
            </div>
            <div className="social-links">
              <p className="ouro" >{props.nivel}<a href="#" className="fas fa-medal"></a></p>
            </div>
            <div className="card-footer-vendedor">
                <p className="count"> Melhor vendedor da semana</p>
            </div>
        </div>
    )       
}
