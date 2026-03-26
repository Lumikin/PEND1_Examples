const API_URL = "https://api.openf1.org/v1/drivers?session_key=latest";

async function buscarPilotos() {
  try {
    const resposta = await axios.get(API_URL);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao buscar pilotos", error);
    return [];
  }
}

function criarColuna() {
  const coluna = document.createElement("div");
  coluna.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3";
  return coluna;
}

function criarImagemPiloto(piloto) {
  const img = document.createElement("img");
  img.alt = piloto.full_name;
  img.src = piloto.headshot_url;
  img.className = "img-piloto drop-shadow";
  return img;
}

async function exibirPilotos() {
  const listaPilotos = await buscarPilotos();
  const driversConteiner = document.querySelector("#drivers");

  listaPilotos.forEach((piloto) => {
    if (piloto.headshot_url) {
      const coluna = criarColuna();
      const imgPiloto = criarImagemPiloto(piloto);
      coluna.appendChild(imgPiloto);
      driversConteiner.appendChild(coluna);
    }
  });
}

exibirPilotos();
