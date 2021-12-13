import img from '../../img/3portas.png'

    function TitleCards(props){
        return (
        <div className="container oferta-title text-black py-5">
          <h1 className={props.classe} >{props.title}</h1>
          {/* <img src={img} /> */}
        </div>

        )
    }
    export default TitleCards;
