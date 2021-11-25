//Imagem do Banner
import Pedrao from '../../img/logo-branca.png'



// Controi o Banner

function Banner(){
    return (
        <div className="bannersize mt-3 container-fluid banner-bg">
            <div className="container">
                <div className="row bannerimg">
                    <div className="col-12 col-md-12 col-lg-6 bannerimg">
                        <img  className="" src={Pedrao} alt="" />
                    </div>
                    <div className=" col-12 col-md-12 col-lg-6">
                        <div className="text-white bannerimg">
                            <div className="texto-banner pa">
                                <h1>Este o é melhor  <br /> site de vendas </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    )
}

// Exporta o Banner pronto
export default Banner;