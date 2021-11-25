import Card from './Card'
import { useState } from 'react'




//  Faz o card
function MakeCard(){
    const cardsMain = [
        
        {
            "id": 1,
            "img": "https://static.lojanba.com/produtos/camiseta-nike-fran-swoosh-masculina/14/HZM-3651-014/HZM-3651-014_zoom1.jpg?ts=1585331283",
            "title": "Camiseta Nike - Branco",
            "value": "17"
        },
        {
            "id": 2,
            "img": "https://images.lojanike.com.br/1024x1024/produto/camiseta-nike-sportswear-just-do-it-masculina-AR5006-010-1-11627568092.jpg",
            "title": "Camiseta NIKE preta",
            "value": "16"
        },
        {
            "id": 3,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler Azul",
            "value": "15"
        },
        {
            "id": 4,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler",
            "value": "1000"
        },
        {
            "id": 5,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 6,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 7,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 8,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 9,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 10,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 11,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 12,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 13,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 14,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        }
    ]
    return ( 
        cardsMain.map(cardMain=>(
            
                <Card key={cardMain.id} mg={cardMain.value} alt={cardMain.title} img={cardMain.img} title={cardMain.title} value={cardMain.value}  />
            
        ))
    )
};



//  Centraliza o card





function Vendedores() {

    const [scrollX, setScrollX] = useState(0)

    
    
    

    const handleLeftArrow = () => {
        let tamanhoTela = window.innerWidth * 0.8;
        let quantidadeCards = 15;
        let tamanhoCards = 0.21;


        if(window.innerWidth < 800){
            tamanhoCards = 0.34;
        }
        else if(window.innerWidth < 1200){
            tamanhoCards = 0.25;
        }
        else {
            tamanhoCards = 0.20;
        }
        let listW =  tamanhoTela * tamanhoCards * quantidadeCards;
        let x = scrollX + Math.round(tamanhoTela / 2);
        if(x >= 0) {
            if(scrollX !== 0){
                x = 0;
            }
            else {
                x = ( tamanhoTela - listW )
            }
        }
        
        setScrollX(x)
        console.log(x)
    } 



    const handleRightArrow = () => {
        let tamanhoTela = window.innerWidth * 0.8;
        let quantidadeCards = 15;
        let tamanhoCards = 0.21;
    
         if(window.innerWidth < 800){
            tamanhoCards = 0.34;
        }
        else if(window.innerWidth < 1200){
            tamanhoCards = 0.25;
        }
        else {
            tamanhoCards = 0.20;
        }
        let x = scrollX - Math.round(tamanhoTela / 2);
        let listW =  tamanhoTela * tamanhoCards * quantidadeCards;

        if ((tamanhoTela - listW) > x) {
            if(scrollX !== (tamanhoTela - listW)) {
                x = (tamanhoTela - listW);
            } 
            else {
                x = 0;
            }
        }
        

        setScrollX(x)
        console.log(x)
    }

    
    return(  

    <div className="center">
        <i className="bi bi-chevron-left BBG" onClick={handleLeftArrow}></i>
        <div className="cards" >
            
                <div className="card" style={{marginLeft: scrollX}}>
                    
                    <img className="img-card" src="https://static.lojanba.com/produtos/camiseta-nike-fran-swoosh-masculina/14/HZM-3651-014/HZM-3651-014_zoom1.jpg?ts=1585331283" className="card-img-top"  />
                    <div className="card-body">
                        <h5 className="card-title">Camiseta Nike Branco -</h5>
                        <p className="h6">A partir de <br/>R$ 17 </p>
                    </div>
                    <div className="button">
                        <button href="#" className="btn btn-primary">Confira</button>
                    </div>
                </div>
                <MakeCard />
        </div>
        <i className="bi bi-chevron-right BBG" onClick={handleRightArrow}></i>
    </div>
    )
}




// Exporta o Card

export default Vendedores;