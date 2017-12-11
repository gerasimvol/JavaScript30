const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    cities.push(...data)
    search.addEventListener('input', displayMatches)
  })

const search = document.querySelector('.search')
const result = document.querySelector('.result')

// FUNCTIONS
function findMatches(word) {
  return cities.filter(city => {
    const regex = new RegExp(word, 'gi')
    return city.city.match(regex) || city.state.match(regex)
  })
}

function displayMatches() {
  let items = findMatches(this.value).map(place => {
  const regex = new RegExp(this.value, 'gi');
  const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
  const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
  return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
  `
  }).join('')
  result.innerHTML = items
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

