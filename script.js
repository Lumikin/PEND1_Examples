const API_URL = "https://api.openf1.org/v1/drivers?session_key=latest";

const imagensPilotos = {
  "lando norris":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp",

  "oscar piastri":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp",

  "lewis hamilton":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp",

  "charles leclerc":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp",

  "george russell":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp",

  "kimi antonelli":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp",

  "esteban ocon":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp",

  "oliver bearman":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp",

  "max verstappen":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp",

  "isack hadjar":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp",

  "liam lawson":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/lialaw01/2026racingbullslialaw01right.webp",

  "arvid lindblad":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp",

  "pierre gasly":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp",

  "franco colapinto":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp",

  "nico hulkenberg":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp",

  "gabriel bortoleto":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp",

  "carlos sainz":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp",

  "alexander albon":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp",

  "sergio perez":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp",

  "valtteri bottas":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp",

  "fernando alonso":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp",

  "lance stroll":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp",
};

const imagensCarros = {
  mercedes:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp",
  ferrari:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/ferrari/2026ferraricarright.webp",
  mclaren:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarencarright.webp",
  "haas f1 team":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/haas/2026haascarright.webp",
  "red bull racing":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.webp",
  "racing bulls":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.webp",
  alpine:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/alpine/2026alpinecarright.webp",
  audi: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/audi/2026audicarright.webp",
  williams:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/williams/2026williamscarright.webp",
  cadillac:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaccarright.webp",
  "aston martin":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.webp",
};

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
  img.src =
    imagensPilotos[piloto.full_name.toLowerCase()] || piloto.headshot_url;
  img.className = "img-piloto drop-shadow";
  return img;
}

function criarCardPiloto(piloto) {
  const card = document.createElement("div");
  card.className = "card-piloto";
  card.style.background = `linear-gradient(to left top,
    rgba(255,255,255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255, 0.2) 50%,
    rgba(255,255,255, 0.2) 75%,
    transparent 75%,
    transparent
  ), #${piloto.team_colour}`;

  card.style.backgroundSize = `40px 40px`;
  card.style.boxShadow = `0 0 10px #${piloto.team_colour}`;

  const titulo = document.createElement("h2");
  titulo.className = "titulo-card";
  titulo.innerText = piloto.first_name;

  const span = document.createElement("span");
  span.className = "span-card";
  span.innerText = piloto.last_name.toUpperCase();

  titulo.appendChild(span);

  const paragrafoEquipe = document.createElement("p");
  paragrafoEquipe.className = "paragrafo-equipe";
  paragrafoEquipe.innerText = piloto.team_name;

  const imagem = criarImagemPiloto(piloto);

  const carro = document.createElement("img");
  carro.src = imagensCarros[piloto.team_name.toLowerCase()];
  carro.className = "car";

  const numeroCar = document.createElement("span");
  numeroCar.innerText = piloto.driver_number;
  numeroCar.className = "numero-car";

  card.append(titulo, imagem, paragrafoEquipe, carro, numeroCar);
  return card;
}

async function exibirPilotos() {
  const listaPilotos = await buscarPilotos();
  const driversConteiner = document.querySelector("#drivers");

  listaPilotos.forEach((piloto) => {
    if (piloto.headshot_url) {
      const coluna = criarColuna();
      const card = criarCardPiloto(piloto);
      coluna.appendChild(card);
      driversConteiner.appendChild(coluna);
    }
  });
}

exibirPilotos();
