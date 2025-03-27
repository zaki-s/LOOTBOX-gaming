

const API_KEY = "807097788a7c46689035f30089d1035a"; 
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
const fetchGameBtn = document.getElementById("fetchGameBtn");
const gameDisplay = document.getElementById("gameDisplay");


// function to fetch a game at random from the API
async function fetchRandomGame() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const randomGame = data.results[Math.floor(Math.random() * data.results.length)];


// to fetch detailed game info plus its description
    const gameDetailsResponse = await fetch(`https://api.rawg.io/api/games/${randomGame.id}?key=${API_KEY}`);
    const gameDetails = await gameDetailsResponse.json();

    gameDisplay.innerHTML = `
  <div class="game-card">
    <img src="${randomGame.background_image}" alt="${randomGame.name}">
    <div class="game-info">
      <h3>${randomGame.name}</h3>
      <p>⭐ Rating: ${randomGame.rating}</p>
      <p class="description">${gameDetails.description_raw}</p>
      <a href="#" class="get-game-btn">Get Game</a>
    </div>
  </div>
`;

  } catch (error) {
    console.error("Error fetching game:", error);
  }
}

fetchGameBtn.addEventListener("click", fetchRandomGame);
