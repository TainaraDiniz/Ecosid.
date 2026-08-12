const lista = document.getElementById(
"lista-ecopontos"
);


const busca = document.getElementById(
"buscar-ecoponto"
);



let dados = [];



// Carregar JSON

fetch("../data/ecopontos.json")

.then(res => res.json())

.then(ecopontos => {


dados = ecopontos;


mostrarEcopontos(dados);


});





function mostrarEcopontos(ecopontos){


lista.innerHTML = "";



ecopontos.forEach(ponto => {



lista.innerHTML += `


<div class="eco-card">


<i class="fa-solid fa-location-dot"></i>



<h2>

${ponto.nome}

</h2>



<p>

📍 ${ponto.bairro}

</p>



<p>

🕒 ${ponto.horario}

</p>



<p>

♻ ${ponto.materiais}

</p>





<button onclick="verMapa(${ponto.latitude}, ${ponto.longitude})">

Ver no mapa

</button>


</div>


`;


});


}





// Pesquisa


busca.addEventListener(
"keyup",
()=>{


const texto =
busca.value.toLowerCase();



const resultado =
dados.filter(ponto =>


ponto.bairro
.toLowerCase()
.includes(texto)


);



mostrarEcopontos(resultado);



});
function verMapa(lat,lng){


localStorage.setItem(
"localMapa",
JSON.stringify({

lat:lat,

lng:lng

})

);



window.location.href="mapa.html";


}