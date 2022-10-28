const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
let movies = [];

const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ae94fd5cc975a62c6581678503579f60&query=${search}`
  ).then((res) => res.json());
  console.log(movies);
};

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
      <li>
        <h2>${movie.original_title}</h2>
        <div class="card-content">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
          <div class="infos">
          <p class="descr1">Popularité : ${movie.popularity} ⭐</p>
          <p class="descr">${movie.overview}</p>
            
          </div>
        </div>
      </li>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
});
