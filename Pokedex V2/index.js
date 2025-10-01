const statsList = document.getElementById("stats");
const ruido = document.getElementById("ruido");
const fotos = document.getElementById("fotos");
const input = document.getElementById("pokemonInput");
const btn = document.getElementById("buscarBtn");

const limpiar = () => {
  statsList.innerHTML = "";
};

btn.addEventListener("click", () => {
  const pokemon = input.value.trim().toLowerCase();
  limpiar();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      const stats = data.stats;
      const cries = data.cries.latest;
      const foto = data.sprites.front_default;
      stats.forEach((stat) => {
        const statLi = document.createElement("li");
        statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsList.appendChild(statLi);
      });

      ruido.src = cries;
      fotos.src = foto
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
});
