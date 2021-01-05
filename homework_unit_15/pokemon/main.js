const pokemons = [
  { id: 1, name: 'Charmander', hp: 39, atk: 52 },
  { id: 2, name: 'Pikachu', hp: 35, atk: 55 },
  { id: 3, name: 'Squirtle', hp: 44, atk: 48 },
  { id: 4, name: 'Bulbasaur', hp: 45, atk: 49 },

  { id: 5, name: 'Mew', hp: 100, atk: 100 },
  { id: 6, name: 'Pidgey', hp: 40, atk: 45 },
  { id: 7, name: 'Abra', hp: 25, atk: 20 },
  { id: 8, name: 'Snorlax', hp: 160, atk: 110 },

  { id: 9, name: 'Caterpie', hp: 45, atk: 30 },
  { id: 10, name: 'Dratini', hp: 41, atk: 64 },
  { id: 11, name: 'Eevee', hp: 55, atk: 55 },
  { id: 12, name: 'Jigglypuff', hp: 115, atk: 45 }
]

const renderChoosePokemon = () => {
  const choose = document.querySelector('.choose-pokemon')
  let html = ''

  pokemons.forEach(item => {
    html += `<li class="pokemon" idPokemon="${item.id}" namepokemon="${item.name}" hp="${item.hp}" atk="${item.atk}"  onclick="selectPokemon(event)"><img src="img/${item.name}.png" alt=""></li>`
  })

  choose.innerHTML = html
}

renderChoosePokemon()

const liElement = document.querySelectorAll('.choose-pokemon li')
liElement[0].classList.add('active')

const selectPokemon = event => {
  liElement.forEach(item => {
    item.classList.remove('active')
  })

  event.target.classList.add('active')

  const namePokemon = event.target.getAttribute('namepokemon')
  const hpPokemon = event.target.getAttribute('hp')
  const atkPokemon = event.target.getAttribute('atk')
  const idPokemon = event.target.getAttribute('idPokemon')


  const getInfoPokemon = () => {
    const showPokemon = document.querySelector('.show-Pokemon')

    let html = `<img src="img/${namePokemon}.png" alt="">
    <div class="name-pokemon" idPokemon="${idPokemon}">${namePokemon}</div>
    <div class="hp">
        <span>HP</span>
        <span>${hpPokemon}</span>
        <div class="chart">
            <div class="chart-gray"></div>
            <div class="chart-green" style="width:${hpPokemon * 100 /200}%"></div>
        </div>
    </div>
    <div class="atk">
        <span>ATK</span>
        <span>${atkPokemon}</span>
        <div class="chart">
            <div class="chart-gray"></div>
            <div class="chart-green" style="width:${atkPokemon * 100 /200}%"></div>
        </div>
    </div>
    <button class="btn-add" onclick="addPokemon(event)">ADD</button>`

    showPokemon.innerHTML = html

    return html
  }

  getInfoPokemon()
}
let getPokemon =  []
const addPokemon = event => {
  const pokemonList = document.querySelector('.pokemon__list')
  const pokemonLength = document.querySelectorAll('.pokemon__list li')
  const idPokemon = event.target.parentNode.querySelector('.name-pokemon').getAttribute('idPokemon')
  const selectedPokemon = pokemons.find(item => item.id === Number(idPokemon))

  getPokemon.push(`<li class="pokemon__item"><i class="fas fa-times" onclick="removePokemon(event)"></i><img src="img/${selectedPokemon.name}.png" alt=""></li>`)
  const print = Array.from(new Set(getPokemon))

  if (pokemonLength.length < 5) {
    pokemonList.innerHTML = print.join('')
  }
}
