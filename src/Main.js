import Oferta from './Pages/Main/Oferta'
import Carrossel from './Pages/Main/Carosel-BT'
import Navbar from './Pages/Navbar'
import Banner from './Pages/Main/Banner'
import TitleCards from './Pages/Main/TitleCards'
import BarraPesq from './Pages/Main/Pesquisa'
import Foryou from './Pages/Main/4you'
import Vendedores from './Pages/Main/Vendedores'
import Footer from './Pages/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    return(
        <div>
            <Navbar />
            <Carrossel />
            <BarraPesq />
            <TitleCards title="Oferta do dia" classe="text-center text-light bg-blue" />
            <Oferta />
            <TitleCards title="Para você" classe="text-center text-light bg-blue outros" />
            <Foryou />
            <Banner />
            <TitleCards title="Melhores Vendedores" classe="text-center text-light bg-blue outros" />
            <Vendedores />
            <Footer />
        </div>
    )
}

export default Main;