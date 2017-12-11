const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data))

const search = document.querySelector('.search')
const result = document.querySelector('.result')

search.addEventListener('input', displayMatches)

// FUNCTIONS
function findMatches(word) {
  return cities.filter(city => {
    const regex = new RegExp(word, 'gi')
    return city.city.match(regex) || city.state.match(regex)
  })
}

function displayMatches() {
   let items = findMatches(this.value).map(place => {
    return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
      </li>
    `
   }).join('')
   result.innerHTML = items
}

