let qtdeCartas;
let carta;
let carta1;



function totalCartas() {
    
    qtdeCartas = Number((prompt('Escolha uma quantidade par de cartas entre 4 e 14.')));
    while((qtdeCartas <4) || (qtdeCartas > 14) || (qtdeCartas %2 != 0)) {
    qtdeCartas = Number(prompt("A quantidade de cartas precisa ser entre 4 e 14."));
    }
    return qtdeCartas;
    
}
totalCartas();

// pegar a quantidade de cartas que o usuário digitou


let contador = 0;

function colocarCartas(qtdeCartas) {
    const cartas = document.querySelector('.cartas-jogo');
    
    while(qtdeCartas > contador) {

    cartas.innerHTML = cartas.innerHTML +`
    <div onclick="cartaVirada(this)" class="carta">
        <img class="frente" src="./imagens/front.png"/>
        <img class="tras" src="./imagens/metalparrot.gif"/>

       
    </div>
    `;
    contador++;

    }
    
}
colocarCartas(qtdeCartas);

function embaralhar(qtdeCartas){
    return Math.random(qtdeCartas) - 0.5;
}

function cartaVirada(){

let elemento = document.querySelector(".frente");
elemento.classList.add("oculto");
let elemento1 = document.querySelector(".tras");
elemento1.classList.add("revelado");
}