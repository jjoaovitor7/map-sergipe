document.addEventListener("readystatechange", (e) => {
  if (document.readyState == "complete") {
    const cidades = [
      "Tobias Barreto",
      "Poço Verde",
      "Arauá",
      "Cristinápolis",
      "Estância",
      "Indiaroba",
      "Itabaianinha",
      "Pedrinhas",
      "Santa Luzia do Itanhy",
      "Tomar do Geru",
      "Umbaúba",
      "Areia Branca",
      "Boquim",
      "Itaporanga d'Ajuda",
      "Lagarto",
      "Riachão do Dantas",
      "Salgado",
      "São Domingos",
      "Campo do Brito",
      "Carira",
      "Frei Paulo",
      "Itabaiana",
      "Macambira",
      "Malhador",
      "Moita Bonita",
      "Nossa Senhora da Aparecida",
      "Pedra Mole",
      "Pinhão",
      "Ribeirópolis",
      "São Miguel do Aleixo",
      "Simão Dias",
      "Monte Alegre de Sergipe",
      "Nossa Senhora da Glória",
      "Canindé de São Francisco",
      "Poço Redondo",
      "Aracaju",
      "Barra dos Coqueiros",
      "Laranjeiras",
      "Maruim",
      "Nossa Senhora do Socorro",
      "Pirambu",
      "Santo Amaro das Brotas",
      "São Cristovão",
      "Capela",
      "Carmópolis",
      "Cumbe",
      "Divina Pastora",
      "General Maynard",
      "Japaratuba",
      "Japoatã",
      "Malhada dos Bois",
      "Muribeca",
      "Nossa Senhora das Dores",
      "Pacatuba",
      "Rosário do Catete",
      "Santo Rosa de Lima",
      "São Francisco",
      "Siriri",
      "Amparo do São Francisco",
      "Aquidabã",
      "Canhoba",
      "Cedro de São João",
      "Gararu",
      "Graccho Cardoso",
      "Itabi",
      "Nossa Senhora de Lourdes",
      "Porto da Folha",
      "Propriá",
      "Telha",
      "Brejo Grande",
      "Ilha das Flores",
      "Neópolis",
      "Feira Nova",
      "Riachuelo",
      "Santana do São Francisco",
    ];

    const map_obj = document.getElementById("map_obj");
    const svg = map_obj.getSVGDocument();
    const paths = svg.querySelectorAll("path");

    paths.forEach((path, idx) => {
      path.addEventListener("mouseover", (e) => {
        e.target.style.fill = "#a9a9a9";
        document.getElementById("city").innerHTML = cidades[idx];
      });

      path.addEventListener("mouseleave", (e) => {
        e.target.style.fill = "#00923f";
        document.getElementById("city").innerHTML = "";
      });
    });
  }
});
