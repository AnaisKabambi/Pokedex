//declaring variables
let x = document.getElementById("input").value;//get value of input
//const btn = document.getElementById("run");                     //link button to actions
/*let Pokemon = function (id, name, sprites, moves, past_types) {          //declare elements of specific pokemon
    obj.id = id;
    obj.name = name;
    obj.sprites = sprites;
    obj.moves = moves;
    obj.past_types = past_types
}*/

//fetch the information
fetch ('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(getPokemon)
    //.then(Pokemon)
    .then(pokeImg)
    .then(pokeName)


//get specific pokemon
async function getPokemon () {
    fetch("https://pokeapi.co/api/v2/pokemon-form/" + x + 1)
        .then(response => response.json())
        .then(data => console.log(data))
}

//display the information
async function displayPokemon() {
    btn.addEventListener("click", () => {
        document.getElementById("evolution").innerHTML = past_types;
        document.getElementById("img-evolution").innerHTML = x;
        document.getElementById("abilities").innerHTML = x;
        document.getElementById("moves").innerHTML = obj.moves;
    })
}
//display img
async function pokeImg() {
    fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + x + 1 + ".png")
        .then(res => {return res.blob()})
        .then(blob => {
            let img = URL.createObjectURL(blob);
            document.getElementById("img-poke").setAttribute('src', img);
        })
}
//display name
async function pokeName(){
    fetch("https://pokeapi.co/api/v2/pokemon-form/" + x + 1)
        .then(res => {return res.blob()})
        .then(blob => {
            let name = URL.createObjectURL(blob);
            document.getElementById("name").innerHTML= this.name;
        })
}
