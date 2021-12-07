
import { Link } from "react-router-dom"
// estrutura Dos Cards 


export default (props) => {   
    console.log(props.id)
    return (
        <div className="card" key={props.id}  style={props.style} >
            <img className="img-card" src={props.categoria} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="h6">A partir de <br/>{"R$" + props.valor}</p>
            </div>
            <div className="button">
                <Link to={`/produto/${props.id}`}  className="btn btn-primary">Confira</Link>
            </div>
        </div>
    )
}

