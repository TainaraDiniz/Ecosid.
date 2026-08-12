/* ==========================================
   ECOSID - MAPA DOS ECOPONTOS
========================================== */


/* ==========================================
   MAPA PRINCIPAL
========================================== */

const mapa = L.map("map").setView(
    [-20.9319, -54.9686],
    13
);


/* ==========================================
   OPENSTREETMAP
========================================== */

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(mapa);


/* ==========================================
   LOCALIZAÇÃO DOS ECOPONTOS
========================================== */

const ecopontos = {

    central: {
        nome: "Ecoponto Central",
        endereco: "Região Central",
        latitude: -20.9319,
        longitude: -54.9686
    },

    "sao-bento": {
        nome: "Ecoponto São Bento",
        endereco: "Bairro São Bento",
        latitude: -20.9380,
        longitude: -54.9620
    },

    jandaia: {
        nome: "Ecoponto Jandaia",
        endereco: "Região Jandaia",
        latitude: -20.9250,
        longitude: -54.9780
    }

};


/* ==========================================
   ÍCONE DO ECOPONTO
========================================== */

const iconeEcoponto = L.icon({

    iconUrl:
        "https://cdn-icons-png.flaticon.com/512/684/684908.png",

    iconSize: [38, 38],

    iconAnchor: [19, 38],

    popupAnchor: [0, -38]

});


/* ==========================================
   CRIAR MARCADORES
========================================== */

Object.keys(ecopontos).forEach(function(id) {

    const ponto = ecopontos[id];


    const marcador = L.marker(
        [ponto.latitude, ponto.longitude],
        {
            icon: iconeEcoponto
        }
    ).addTo(mapa);


    marcador.bindPopup(`

        <div style="text-align:center">

            <h5 style="margin-bottom:8px">
                ${ponto.nome}
            </h5>

            <p style="margin-bottom:0">
                <i class="fa-solid fa-location-dot"></i>
                ${ponto.endereco}
            </p>

        </div>

    `);

});


/* ==========================================
   IDENTIFICAR O ECOPONTO SELECIONADO
========================================== */

const parametros =
    new URLSearchParams(window.location.search);

const localSelecionado =
    parametros.get("local");


/* ==========================================
   ABRIR DIRETAMENTE NO ECOPONTO
========================================== */

if (
    localSelecionado &&
    ecopontos[localSelecionado]
) {

    const ponto =
        ecopontos[localSelecionado];


    /* Centraliza o mapa */

    mapa.setView(
        [ponto.latitude, ponto.longitude],
        17
    );


    /* Cria marcador destacado */

    const marcadorSelecionado =
        L.marker(
            [ponto.latitude, ponto.longitude],
            {
                icon: iconeEcoponto
            }
        ).addTo(mapa);


    marcadorSelecionado.bindPopup(`

        <div style="text-align:center">

            <h5>
                ${ponto.nome}
            </h5>

            <p>
                <i class="fa-solid fa-location-dot"></i>
                ${ponto.endereco}
            </p>

        </div>

    `);


    /* Abre automaticamente */

    marcadorSelecionado.openPopup();

}