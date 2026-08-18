1. INTRODUÇÃO

A utilização de sistemas digitais para organizar e disponibilizar informações tornou-se importante para diferentes áreas da sociedade, inclusive para ações relacionadas à sustentabilidade e à gestão de resíduos. No contexto da coleta de materiais recicláveis, a organização das informações sobre locais, dias, horários e materiais aceitos pode contribuir para facilitar o acesso da população aos serviços disponíveis.

O projeto EcoSid foi desenvolvido com o propósito de disponibilizar informações relacionadas à coleta de lixo reciclável e aos ecopontos da cidade de Sidrolândia-MS. A aplicação reúne informações sobre os locais de coleta, calendário, ecopontos e materiais recicláveis, buscando apresentar esses dados de maneira organizada e acessível aos usuários.

Para estruturar as informações utilizadas pela aplicação, foi desenvolvido um banco de dados relacional utilizando MySQL. A modelagem foi organizada em tabelas que representam as entidades necessárias ao funcionamento da solução, incluindo coleta, ecoponto, material e ecoponto_material. A utilização de um banco relacional permite organizar os dados em estruturas relacionadas e realizar consultas específicas por meio da linguagem SQL.

Além do banco de dados, o projeto utiliza o GitHub para o controle de versão do código-fonte. O versionamento permite acompanhar a evolução do projeto, registrar alterações realizadas durante o desenvolvimento e manter uma versão organizada dos arquivos da aplicação.

Dessa forma, o projeto integra conceitos de modelagem de dados, SQL e controle de versão para desenvolver uma solução digital voltada à organização e divulgação de informações sobre a coleta de materiais recicláveis no município de Sidrolândia.

2. OBJETIVO GERAL

Desenvolver e estruturar um banco de dados relacional para a aplicação EcoSid, destinado a organizar informações sobre coleta de materiais recicláveis, ecopontos e materiais aceitos, utilizando SQL para a manipulação dos dados e GitHub para o controle de versão do código-fonte do projeto.

3. OBJETIVOS ESPECÍFICOS

Projetar um modelo de dados adequado às informações utilizadas pela aplicação EcoSid.

Definir as entidades, atributos, chaves primárias e relacionamentos necessários ao banco de dados.

Implementar o banco de dados utilizando MySQL e comandos SQL.

Inserir e organizar dados referentes aos locais de coleta, ecopontos e materiais recicláveis.

Realizar consultas utilizando comandos SELECT e JOIN para obter informações armazenadas no banco de dados.

Aplicar operações de UPDATE e DELETE para demonstrar a manipulação dos registros.

Utilizar o GitHub para armazenar o código-fonte e acompanhar a evolução do projeto por meio do controle de versão.

Documentar o desenvolvimento e os resultados obtidos durante a implementação da solução.

4. JUSTIFICATIVA E DELIMITAÇÃO DO PROBLEMA

A organização adequada das informações é fundamental para o desenvolvimento de aplicações que necessitam armazenar, consultar e relacionar dados de maneira estruturada. No contexto do projeto EcoSid, existe a necessidade de organizar informações referentes aos locais de coleta de materiais recicláveis, aos ecopontos disponíveis e aos materiais aceitos em cada local.

A ausência de uma estrutura organizada para esses dados pode dificultar a manutenção das informações e a realização de consultas. Dessa forma, a utilização de um banco de dados relacional permite centralizar os dados e estabelecer relacionamentos entre as informações, tornando sua manipulação mais organizada e reduzindo a possibilidade de inconsistências.

O banco de dados foi implementado utilizando o MySQL, sistema de gerenciamento de banco de dados relacional que oferece suporte à linguagem SQL e a operações de consulta e manipulação de dados. Durante a implementação do EcoSid foram utilizadas operações como SELECT, UPDATE, DELETE e JOIN, permitindo consultar, alterar, excluir e relacionar informações armazenadas nas tabelas.

O projeto também utiliza o GitHub para o controle de versão do código-fonte. O controle de versão permite acompanhar o histórico de modificações realizadas no projeto, identificar alterações e recuperar versões anteriores quando necessário.

A delimitação do projeto está concentrada na organização e disponibilização de informações relacionadas à coleta de materiais recicláveis e aos ecopontos de Sidrolândia-MS. O banco de dados desenvolvido contempla as tabelas coleta, ecoponto, material e ecoponto_material. A aplicação não tem como objetivo realizar a gestão operacional da coleta ou substituir os sistemas administrativos responsáveis pelo serviço público, mas disponibilizar informações organizadas para facilitar o acesso da população.

Assim, a proposta concentra-se na aplicação prática dos conceitos de banco de dados relacionais, SQL e controle de versão, utilizando o EcoSid como solução para organizar e disponibilizar informações relacionadas à coleta de materiais recicláveis.

5. FUNDAMENTAÇÃO TEÓRICA

5.1 Banco de Dados

Banco de dados pode ser compreendido como uma estrutura organizada para armazenamento e gerenciamento de informações. Em aplicações computacionais, sua utilização permite armazenar dados de forma estruturada e realizar operações de consulta e manipulação de acordo com as necessidades do sistema.

No projeto EcoSid, o banco de dados foi estruturado de forma relacional, utilizando tabelas para representar diferentes conjuntos de informações. Essa organização permite separar os dados de acordo com suas características e estabelecer relacionamentos entre tabelas.

5.2 Modelo Relacional e Modelagem de Dados

O modelo relacional organiza os dados em tabelas compostas por linhas e colunas. Cada tabela representa uma entidade ou conjunto de informações, enquanto seus atributos representam as características armazenadas.

Na modelagem do EcoSid foram definidas quatro tabelas principais: coleta, ecoponto, material e ecoponto_material. A tabela ecoponto_material funciona como uma tabela associativa entre ecopontos e materiais, permitindo representar a relação entre os materiais aceitos e os diferentes pontos de coleta.

A modelagem contribui para que os dados sejam organizados de maneira estruturada e para que os relacionamentos necessários à aplicação sejam representados corretamente.

5.3 Normalização

A normalização é uma técnica utilizada na modelagem de bancos de dados para organizar as informações e reduzir problemas relacionados à redundância e à inconsistência dos dados. A separação das informações em diferentes tabelas permite que cada conjunto de dados tenha uma finalidade específica.

No EcoSid, por exemplo, as informações sobre materiais recicláveis foram separadas da tabela de ecopontos. A relação entre essas informações é representada pela tabela ecoponto_material. Dessa maneira, um mesmo material pode estar associado a diferentes ecopontos sem que seja necessário repetir todas as informações do material em cada registro.

5.4 SQL

SQL (Structured Query Language) é utilizada para realizar operações em bancos de dados relacionais. Entre suas operações estão consultas, inserções, alterações e exclusões de registros.

Durante o desenvolvimento do EcoSid foram realizadas consultas utilizando SELECT, alterações utilizando UPDATE, exclusões utilizando DELETE e consultas relacionando diferentes tabelas por meio de JOIN.

Como exemplo, foi realizada uma consulta para identificar os locais cuja coleta ocorre na terça-feira. Também foi realizada uma consulta com JOIN para relacionar os ecopontos aos materiais cadastrados, utilizando as tabelas ecoponto, ecoponto_material e material.

5.5 Controle de Versão com Git e GitHub

O controle de versão é utilizado para acompanhar a evolução de um projeto de software. Por meio dele, é possível registrar modificações realizadas nos arquivos, consultar o histórico do desenvolvimento e recuperar versões anteriores.

O Git é um sistema de controle de versão distribuído, enquanto o GitHub fornece uma plataforma para hospedagem e colaboração em repositórios Git. Os commits registram alterações no histórico do projeto e os branches podem ser utilizados para organizar diferentes linhas de desenvolvimento.

No projeto EcoSid, o GitHub foi utilizado para armazenar o código-fonte e acompanhar a evolução da aplicação. O repositório permite manter os arquivos do projeto organizados e registrar as modificações realizadas durante seu desenvolvimento.

5.6 Importância do Banco de Dados e do Versionamento

A combinação entre banco de dados e controle de versão contribui para a organização do desenvolvimento de software. Enquanto o banco de dados possibilita estruturar e manipular as informações utilizadas pela aplicação, o controle de versão permite acompanhar a evolução do código responsável pelo funcionamento do sistema.

No EcoSid, essas duas tecnologias foram utilizadas de forma complementar: o MySQL foi empregado para estruturar e manipular os dados relacionados à coleta e aos ecopontos, enquanto o GitHub foi utilizado para armazenar e versionar o código-fonte da aplicação.

6. METODOLOGIA

O desenvolvimento do projeto EcoSid foi realizado de forma gradual, envolvendo as etapas de modelagem do banco de dados, implementação das tabelas, inserção e manipulação dos dados e utilização de controle de versão para o código-fonte da aplicação.

Inicialmente, foram identificadas as principais informações necessárias para o funcionamento da solução, considerando os locais de coleta, os ecopontos, os materiais recicláveis e os relacionamentos entre essas informações. Em seguida, foi elaborado o modelo do banco de dados e realizada sua implementação utilizando o MySQL.

Após a criação da estrutura do banco, foram inseridos dados para representar as informações utilizadas pelo projeto. Também foram realizadas consultas e operações de manipulação utilizando a linguagem SQL, permitindo verificar o funcionamento das tabelas e dos relacionamentos.

Paralelamente, o código-fonte da aplicação foi organizado em um repositório GitHub, permitindo acompanhar a evolução do projeto e manter os arquivos da aplicação disponíveis de forma organizada.

6.1 Modelagem do Banco de Dados

A modelagem do banco de dados foi realizada considerando as principais entidades necessárias para o funcionamento do EcoSid. Foram definidas quatro tabelas: coleta, ecoponto, material e ecoponto_material.

A tabela coleta armazena informações relacionadas aos locais, dias da semana e horários de coleta. Sua chave primária é id_coleta.

A tabela ecoponto armazena os dados dos pontos de entrega de materiais recicláveis, incluindo nome, bairro, endereço e coordenadas geográficas. Sua chave primária é id_ecoponto.

A tabela material armazena os tipos de materiais recicláveis, contendo um identificador, nome e descrição. Sua chave primária é id_material.

A tabela ecoponto_material foi utilizada para estabelecer o relacionamento entre ecopontos e materiais. Ela possui os campos id_ecoponto e id_material, que funcionam como chaves estrangeiras e formam uma chave primária composta.

O relacionamento entre ecoponto e material é do tipo muitos-para-muitos, sendo representado pela tabela associativa ecoponto_material. Dessa forma, um ecoponto pode aceitar diferentes tipos de materiais e um mesmo material pode estar associado a diferentes ecopontos.

Figura 1 – Diagrama do banco de dados do EcoSid

[INSERIR AQUI A IMAGEM DO DIAGRAMA DO BANCO DE DADOS]

Fonte: Elaborado pela autora (2026).

6.2 Implementação e Manipulação de Dados

A implementação do banco de dados foi realizada utilizando o MySQL. Após a criação do banco ecosid, foram criadas as tabelas necessárias para armazenar as informações da aplicação.

Durante essa etapa foram utilizadas chaves primárias para identificar exclusivamente os registros e chaves estrangeiras para estabelecer os relacionamentos entre as tabelas.

Após a implementação, foram realizados testes para verificar a inserção, consulta, alteração, exclusão e relacionamento dos dados.

Consulta SELECT

Foi realizada uma consulta utilizando o comando SELECT para identificar os locais cuja coleta ocorre na terça-feira:

USE ecosid;

SELECT
    local,
    dia_semana,
    horario
FROM coleta
WHERE dia_semana = 'Terça-feira'
ORDER BY local;

A consulta apresentou somente os locais cadastrados para a terça-feira, comprovando o funcionamento da filtragem dos dados.

Teste UPDATE

Também foi realizado um teste utilizando o comando UPDATE. O horário de um registro foi temporariamente alterado para Manhã, sendo posteriormente restaurado ao valor original, Durante o dia. Esse procedimento permitiu verificar a capacidade de alteração dos registros sem manter modificações indevidas nos dados finais.

Teste DELETE

Para testar o comando DELETE, foram criados registros identificados como TESTE DELETE. Após confirmar sua inserção, os registros foram removidos utilizando uma condição específica:

USE ecosid;

DELETE FROM coleta
WHERE local = 'TESTE DELETE';

Após a execução, uma nova consulta confirmou que os registros de teste haviam sido removidos.

Consulta JOIN

Por fim, foi realizada uma consulta utilizando JOIN entre as tabelas ecoponto, ecoponto_material e material:

USE ecosid;

SELECT
    e.nome AS ecoponto,
    e.bairro,
    e.endereco,
    m.nome AS material
FROM ecoponto e
INNER JOIN ecoponto_material em
    ON e.id_ecoponto = em.id_ecoponto
INNER JOIN material m
    ON em.id_material = m.id_material
ORDER BY e.nome;

A consulta permitiu identificar os materiais associados a cada ecoponto, demonstrando o funcionamento dos relacionamentos entre as tabelas.

6.3 Uso do Controle de Versão

O controle de versão do projeto foi realizado utilizando Git e GitHub. O repositório foi utilizado para armazenar o código-fonte da aplicação EcoSid e acompanhar sua evolução durante o desenvolvimento.

O projeto foi organizado em arquivos e pastas referentes às diferentes partes da aplicação, incluindo páginas HTML, arquivos CSS, JavaScript, dados e documentação.

As alterações realizadas durante o desenvolvimento foram registradas por meio de commits no repositório. Dessa forma, foi possível manter um histórico das modificações realizadas no projeto.

O repositório utilizado para o projeto é público e está disponível no GitHub:

Repositório: https://github.com/tainaradiniz/Ecosid.

A aplicação também foi publicada por meio do GitHub Pages:

Aplicação: https://tainaradiniz.github.io/Ecosid./

Durante o desenvolvimento, o versionamento foi utilizado principalmente para registrar a evolução dos arquivos do projeto e manter uma versão organizada do código-fonte.

7. RESULTADOS PRELIMINARES: SOLUÇÃO INICIAL

Como resultado inicial do desenvolvimento, foi implementado o banco de dados relacional do projeto EcoSid utilizando o MySQL. A estrutura foi organizada em quatro tabelas principais: coleta, ecoponto, material e ecoponto_material.

A tabela coleta foi utilizada para armazenar os locais, dias da semana e horários relacionados à coleta de materiais recicláveis. A tabela ecoponto contém informações sobre os pontos de entrega, incluindo nome, bairro, endereço e coordenadas geográficas. A tabela material armazena os materiais cadastrados, enquanto a tabela ecoponto_material estabelece os relacionamentos entre os ecopontos e os materiais aceitos.

Durante os testes, foi possível realizar consultas utilizando SQL. Uma das consultas realizadas filtrou os registros da tabela coleta pelo dia da semana, apresentando somente os locais cuja coleta ocorre na terça-feira. Esse resultado demonstrou que os dados podem ser consultados de acordo com critérios específicos.

Também foram realizados testes de alteração e exclusão de registros. O comando UPDATE foi utilizado para alterar temporariamente o horário de um registro, sendo posteriormente restaurado ao valor original. Para testar o DELETE, foram criados registros de teste identificados como TESTE DELETE. Após a exclusão, uma nova consulta confirmou que os registros não permaneciam na tabela.

Outro resultado importante foi a execução de uma consulta utilizando JOIN entre as tabelas ecoponto, ecoponto_material e material. A consulta permitiu apresentar os ecopontos juntamente com os materiais relacionados a cada um deles. Por exemplo, o Ecoponto Central foi relacionado aos materiais Papel, Plástico, Vidro e Metal, demonstrando que o relacionamento entre as tabelas está funcionando corretamente.

Além do banco de dados, a aplicação EcoSid foi disponibilizada por meio do GitHub Pages. A solução apresenta informações relacionadas aos ecopontos, calendário de coleta, educação ambiental e demais conteúdos desenvolvidos para a aplicação.

O código-fonte foi armazenado em um repositório público no GitHub, permitindo acompanhar a evolução do projeto por meio do histórico de commits.

CONCLUSÃO

O desenvolvimento do projeto EcoSid possibilitou aplicar, na prática, conceitos relacionados à modelagem, implementação e manipulação de bancos de dados relacionais, além dos princípios de controle de versão utilizados no desenvolvimento de software.

A criação do banco de dados permitiu organizar informações relacionadas aos locais de coleta, ecopontos e materiais recicláveis. A utilização das tabelas coleta, ecoponto, material e ecoponto_material possibilitou estruturar os dados de forma organizada e estabelecer os relacionamentos necessários para a aplicação.

Os testes realizados com comandos SQL demonstraram o funcionamento das operações de consulta, alteração, exclusão e relacionamento de dados. As consultas SELECT permitiram filtrar informações específicas, o UPDATE possibilitou testar alterações nos registros, o DELETE foi utilizado para remover registros de teste e o JOIN permitiu relacionar informações armazenadas em diferentes tabelas.

O uso do Git e do GitHub também contribuiu para a organização do projeto, permitindo armazenar o código-fonte, registrar alterações e acompanhar a evolução da aplicação por meio do controle de versão.

Como possibilidade de melhoria futura, o projeto pode receber novas funcionalidades, aprimoramentos na interface, atualização dos dados de coleta e expansão da estrutura do banco de dados conforme novas necessidades forem identificadas.

Dessa forma, o desenvolvimento do EcoSid contribuiu para consolidar conhecimentos sobre bancos de dados relacionais, linguagem SQL, modelagem de dados e controle de versão, demonstrando a importância dessas tecnologias para a construção e organização de aplicações de software.