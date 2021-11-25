

    function TitleCards(props){
        return (
        <div className="container oferta-title text-black py-5">
          <h1 className={props.classe} >{props.title}</h1>
        </div>
        )
    }
    export default TitleCards;