/*//let pokemon = "jigglypuff";
const startList = document.getElementById("stats");
const ruido = document.getElementById("ruido");
const input = document.getElementById("pokemonInput")
const btn = document.getElementById("buscarBtn");

btn.addEventListener("click", () => {
    const pokemon = input.value.trim().toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
        const stats = data.stats;
        stats.forEach((stat) => {
            const statLi = document.createElement("li");
            statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            statsList.appendChild(statLi);
        });
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
})*/

