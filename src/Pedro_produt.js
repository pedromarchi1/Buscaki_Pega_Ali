import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer';

import CompPrincipal from './Pages/comparacao/Comp_prood';
import CompProduto from './Pages/comparacao/Comp_todos';

function PedroProduto () {
        return(
            <div>
                <Navbar />
                <CompProduto />
                <CompPrincipal />
                <Footer />
            </div>
        )
    }

    export default PedroProduto;