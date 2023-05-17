const list = document.querySelector('#movie-list');
const form = document.querySelector('#search-form');

const insertMovies = (json) => {
  list.innerHTML = ''; // remove the previous lis in the list

  const movies = json.Search; // array of movies

  movies.forEach((movie) => {
    const liContent = `<li class="list-inline-item">
      <img src="${movie.Poster}" />
      <p>${movie.Title}</p>
    </li>`;

    list.insertAdjacentHTML('afterbegin', liContent);
  });
};

// callback
const handleSearch = (event) => {
  event.preventDefault();

  const input = document.querySelector('#search-input');
  const url = `http://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;

  fetch(url)
    .then((data) => data.json())
    .then((json) => insertMovies(json));
};

form.addEventListener('submit', handleSearch);

fetch('http://www.omdbapi.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ Poster: 'http://gogoleco.com/image.png', Title: 'Portuguese Spiderman' }),
});
