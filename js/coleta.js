/* ==========================================
   ECOSID - CALENDÁRIO DE COLETA
========================================== */


/* ==========================================
   DADOS DA COLETA
========================================== */

const locaisColeta = [

    /* SEGUNDA-FEIRA */

    {
        local: "Avenida Dorvalino dos Santos",
        dia: "Segunda-feira",
        horario: "Durante o dia"
    },

    {
        local: "Rua João Márcio Ferreira Terra entre Avenida Dorvalino dos Santos e Rua Mato Grosso",
        dia: "Segunda-feira",
        horario: "Durante o dia"
    },

    {
        local: "Trecho entre as ruas Aquidaban e Ponta Porã",
        dia: "Segunda-feira",
        horario: "Durante o dia"
    },


    /* TERÇA-FEIRA */

    {
        local: "Bairro Sol Nascente",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Jardim das Paineiras",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Portal das Flores",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Parque das Flores",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Residencial Park Fratelli",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Porto Seguro I e II",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Porto Royale",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Da Vinci Residencial",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Jardim do Sul",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Vila Santa Marta",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Jardim Alfa",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Cascatinha I e II",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Pérola do Planalto",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },

    {
        local: "Alto da Figueira",
        dia: "Terça-feira",
        horario: "Durante o dia"
    },


    /* QUARTA-FEIRA */

    {
        local: "Avenida Dorvalino dos Santos",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Reserva do Vale",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Jardim Petrópolis",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Morada da Serra I e II",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Vila Tereré",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Aldeia Tereré",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Vival dos Ipês",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Pé de Cedro",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Dona Maria Marta",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Diva Nantes",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Pindorama",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Condomínio Sofia",
        dia: "Quarta-feira",
        horario: "Durante o dia"
    },


    /* QUINTA-FEIRA */

    {
        local: "Sidrolar I e II",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Campina Ipacaray",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Sitiolândia",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Jardim Paraíso I e II",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Malvinas",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Carandazal",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Grande São Bento",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "João Márcio Ferreira Terra da rodoviária sentido São Bento",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Jatobá",
        dia: "Quinta-feira",
        horario: "Durante o dia"
    },


    /* SEXTA-FEIRA */

    {
        local: "Avenida Dorvalino dos Santos",
        dia: "Sexta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Vacaria",
        dia: "Sexta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Residencial Golden",
        dia: "Sexta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Nova Era",
        dia: "Sexta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Vilas Golden",
        dia: "Sexta-feira",
        horario: "Durante o dia"
    },

    {
        local: "Distrito do Quebra Coco",
        dia: "Sexta-feira",
        horario: "Durante o dia"
    }

];


/* ==========================================
   ELEMENTOS DO HTML
========================================== */

const tabela = document.getElementById("tabela-coleta");

const campoBusca = document.getElementById("buscar-bairro");

const botaoConsultar = document.getElementById("btn-consultar");

const mensagemSemResultado =
    document.getElementById("sem-resultado");


/* ==========================================
   NORMALIZAR TEXTO
========================================== */

function normalizarTexto(texto) {

    return texto
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* ==========================================
   PESQUISAR LOCAL
========================================== */

function pesquisarLocal() {

    const textoDigitado = campoBusca.value;

    const busca = normalizarTexto(textoDigitado);


    /* Campo vazio */

    if (busca === "") {

        mostrarResultados(locaisColeta);

        return;

    }


    /* Pesquisa ignorando acentos */

    const resultados = locaisColeta.filter(function(item) {

        const local = normalizarTexto(item.local);

        return local.includes(busca);

    });


    mostrarResultados(resultados);

}


/* ==========================================
   BOTÃO CONSULTAR
========================================== */

botaoConsultar.addEventListener(
    "click",
    pesquisarLocal
);


/* ==========================================
   PESQUISA ENQUANTO DIGITA
========================================== */

campoBusca.addEventListener(
    "input",
    pesquisarLocal
);


/* ==========================================
   TECLA ENTER
========================================== */

campoBusca.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            pesquisarLocal();

        }

    }
);


/* ==========================================
   CARREGAR TODOS OS LOCAIS
========================================== */

mostrarResultados(locaisColeta);


/* ==========================================
   MOSTRAR RESULTADOS
========================================== */

function mostrarResultados(lista) {

    tabela.innerHTML = "";


    if (lista.length === 0) {

        mensagemSemResultado.classList.remove("d-none");

        return;

    }


    mensagemSemResultado.classList.add("d-none");


    lista.forEach(function(item) {

        const linha = document.createElement("tr");


        linha.innerHTML = `

            <td>
                ${item.local}
            </td>

            <td>
                ${item.dia}
            </td>

            <td>
                ${item.horario}
            </td>

        `;


        tabela.appendChild(linha);

    });

}


/* ==========================================
   PESQUISAR BAIRRO
========================================== */

function pesquisarLocal() {

    const busca = normalizarTexto(
        campoBusca.value
    );


    /* Campo vazio */

    if (busca === "") {

        mostrarResultados(locaisColeta);

        return;

    }


    /* Pesquisa ignorando acentos */

    const resultados = locaisColeta.filter(
        function(item) {

            const nomeLocal =
                normalizarTexto(item.local);

            return nomeLocal.includes(busca);

        }
    );


    mostrarResultados(resultados);

}


/* ==========================================
   BOTÃO CONSULTAR
========================================== */

botaoConsultar.addEventListener(
    "click",
    pesquisarLocal
);


/* ==========================================
   PESQUISA AUTOMÁTICA AO DIGITAR
========================================== */

campoBusca.addEventListener(
    "input",
    pesquisarLocal
);


/* ==========================================
   PESQUISA COM ENTER
========================================== */

campoBusca.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            pesquisarLocal();

        }

    }
);


/* ==========================================
   CARREGAR TABELA
========================================== */

mostrarResultados(locaisColeta);