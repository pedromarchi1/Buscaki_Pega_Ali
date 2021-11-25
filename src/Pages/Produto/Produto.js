import { useState } from 'react'
import feijao from "../../img/feijao.png"
import celular from '../../img/celular.png'
import cafe from '../../img/cafe.png'


function Prod(){

    const [SumirX, setSumirX] = useState(0)

    const Sumir = () => {


        if ( SumirX == 0) { 

            let element = document.getElementById("ptsumir");
            let border = document.getElementById("trocarColuna2")
            let botao = document.getElementById("botaoSumir")
            let x = document.getElementById("X")
            let i = document.getElementById("trocarIcone")

            setSumirX(1);
            console.log(element.style);
            console.log(SumirX);

            element.style.display = "block";
            border.style.border = "solid cyan";
            botao.style.display = "none";
            border.style.borderRadius = "15px 15px 15px 15px"
            x.style.display = "flex";
            i.style.display = "none";

        }else if(SumirX==1){
            
            
            let element = document.getElementById("ptsumir");
            let border = document.getElementById("trocarColuna2")
            let botao = document.getElementById("botaoSumir")
            let x = document.getElementById("X")
            let i = document.getElementById("trocarIcone")


            setSumirX(0);
            console.log(element.style);
            console.log(SumirX);

            element.style.display = "none";
            border.style.border = "none";
            botao.style.display = "block";
            border.style.borderRadius = "none"
            x.style.display = "none";
            i.style.display = "flex";
        }

        
    }


    return(
    <div>
        <div class="container j-boxshadow p-3 mt-5 mb-5">
            <div class="row">
                <div class="col-1">
                    <div class="d-flex align-items-start flex-column bd-highlight mb-3">{/* 3 IMAGENS PEQUENA */}
                        <img src={feijao} id="mud" onClick={Fotoum} class="img-fluid j-img j-border j-pointer p-2 m-1" />
                        <img src={celular} onClick={Fotodois} class="img-fluid j-img j-border j-pointer p-2 m-1" />
                        <img src={cafe} onClick={Fototres} class="img-fluid j-img j-border j-pointer p-2 m-1" />
                    </div>
                </div>
                <div class="col-5 j-margin">{/* IMG GRANDE */}
                    <img id="myImage1" src={celular} alt="" class="img-fluid j-img" />
                </div>
                <div id="trocarColuna2" class="col-5 m-2">{/* INFO DOS PRODUTOS */}
                    <div classNmae="torcasColuna2">
                        <div class="d-flex justify-content-between bd-highlight m-2">
                            <h6 class="bi bi-heart j-icone-frete"> Favoritar Produto</h6>
                            <i id="trocarIcone" onClick={Sumir} class="bi bi-info-circle j-pointer"></i>
                            <i id="X" onClick={Sumir} class="bi bi-x j-pointer" style={{display:"none"}}></i>
                        </div>
                        <div class="row">
                            <div>
                                <h4 class="m-2 mb-3 col-12">Nintendo Switch 32GB Standard cor vermelho-néon, azul-néon e preto</h4>
                                <h4 class="m-2 mb-3 col-12">R$ 2.400,00 <span class="lead">ou em 12x 173,25 sem juros</span></h4>
                            </div>
                    </div>
                        <div >
                            <button id="botaoSumir" type="button" class="btn btn-outline-info j-button col-12">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div id="ptsumir" style={{display: "none"}}>
                        <h4 class="m-2 mb-3">
                            <ul class="lead">
                                <li>Inclui 2 controles sem fio.</li>
                                <li>Resolução de 1920px x 1080px.</li>
                                <li>Memória RAM de 4GB.</li>
                                <li>Tela de 6.2".</li>
                                <li>Tem tela tátil.</li>
                                <li>Horas de diversão garantidas.</li>
                                <li>Conta com: 1 joy-con grip, 2 correias para joy-con, 1 dock, 1 cabo hdmi, 1 adaptador de corrente.</li>
                            </ul>
                        </h4>
                        <div class="row mt-4 p-1">
                            <h6 class="col-12 p-2">Nome Vendedor(Classificação Vendedor)</h6>
                            <button type="button" class="btn btn-outline-info j-button col-12">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}




// function Sumir() {
    

//     var trocarColuna2 = document.getElementById("trocarColuna2");
//     trocarColuna2.classList.toggle("j-border")

//     var botaoSumir = document.getElementById("botaoSumir");
//     botaoSumir.classList.toggle("d-none");

//     var trocarIcone = document.getElementById("trocarIcone");
//     trocarIcone.classList.toggle("bi-info-circle");
//     trocarIcone.classList.toggle("")
// }      



function Fotoum() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/feijao.5a52aaf7.png');
}
function Fotodois() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/celular.9f6f7756.png');
}
function Fototres() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/cafe.aab6663a.png');
}





export default Prod;