const statsList = document.getElementById("stats");
const ruido = document.getElementById("ruido");
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
      stats.forEach((stat) => {
        const statLi = document.createElement("li");
        statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsList.appendChild(statLi);
      });

      ruido.src = cries;
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
});
