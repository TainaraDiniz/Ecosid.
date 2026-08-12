// ==============================
// EcoSid - Script Principal
// ==============================


// ==============================
// PESQUISA DE BAIRROS
// ==============================


// =====================================
// CARREGAR ECOPONTOS DO JSON
// =====================================


fetch("../data/ecopontos.json")

.then(response => response.json())


.then(ecopontos => {



ecopontos.forEach((ponto)=>{


let icone;



if(ponto.status === "Disponível"){


icone = iconeVerde;


}

else if(ponto.status === "Atenção"){


icone = iconeAmarelo;


}

else{


icone = iconeVermelho;


}




const marcador = L.marker(

[
ponto.latitude,
ponto.longitude
],

{

icon:icone

}

)

.addTo(mapa);



marker.bindPopup(`
    <h3>${ecoponto.nome}</h3>

    <p><strong>📍 Endereço:</strong><br>${ecoponto.endereco}</p>

    <p><strong>♻ Materiais aceitos:</strong><br>${ecoponto.materiais}</p>

    <p><strong>🕒 Horário:</strong><br>${ecoponto.horario}</p>
`);

`);



});



})

.catch(error=>{


console.log(

"Erro ao carregar ecopontos:",
error

);


});



// Seleciona elementos

const inputBairro = document.querySelector(".search-box input");

const botaoPesquisa = document.querySelector(".search-box button");




// Criar área de resultado

const resultado = document.createElement("div");

resultado.classList.add("resultado-pesquisa");

document.querySelector(".search").appendChild(resultado);




// Evento botão


botaoPesquisa.addEventListener("click", () => {


    let bairro = inputBairro.value
        .toLowerCase()
        .trim();



    if(bairros[bairro]){


        resultado.innerHTML = `



});





// ==============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==============================


const elementos = document.querySelectorAll(
    ".card, .news-card, .numbers div"
);



window.addEventListener("scroll", ()=>{


    elementos.forEach(elemento=>{


        let posicao = elemento.getBoundingClientRect()
        .top;


        let alturaTela = window.innerHeight;


        if(posicao < alturaTela - 100){

            elemento.style.opacity = "1";

            elemento.style.transform =
            "translateY(0)";

        }


    });


});




// ==============================
// ANO AUTOMÁTICO FOOTER
// ==============================


const ano = new Date().getFullYear();


const footer = document.querySelector("footer p");


if(footer){

    footer.innerHTML =
    `© ${ano} EcoSid - Sistema de Coleta Seletiva`;

}

// ==============================
// MENU MOBILE
// ==============================


const menuButton = document.querySelector(".menu-mobile");

const menu = document.querySelector("#menu");


if(menuButton){


menuButton.addEventListener("click",()=>{


    menu.classList.toggle("active");


});


}})
