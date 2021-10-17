//declaring variables
let x = document.getElementById("input").value;
//get value of input
//const btn = document.getElementById("run");                     //link button to actions
let Pokemon = function (id, name, sprites, moves, past_types) {          //declare elements of specific pokemon
    this.id = id;
    this.name = name;
    this.sprites = sprites;
    this.moves = moves;
    this.past_types = past_types
}



//fetch the information
/*getPokemon();
async function getPokemon() {
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon');
    const data = await response.text();

    const split = data.split(':[').slice(1)

    const join = split.join(',')

    const result = join.split('},{')
    console.log(result)

    document.getElementById("name").innerHTML = result
}*/


//get specific pokemon
getPokemon();
async function getPokemon () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + 1);
    const data = await response.json();
    console.log(data)
    const {name, id, abilities, moves} = data
    document.getElementById("name").innerHTML=name;
    document.getElementById("id").innerHTML=id;
    document.getElementById("abilities").innerHTML=abilities[1];
    document.getElementById("moves").innerHTML=moves[1];
    console.log(name)
    console.log(id)
    console.log(abilities)
    console.log(moves)
}




//display the information
/*async function displayPokemon() {
    btn.addEventListener("click", () => {
        document.getElementById("evolution").innerHTML = past_types;
        document.getElementById("img-evolution").innerHTML = x;
        document.getElementById("abilities").innerHTML = x;
        document.getElementById("moves").innerHTML = obj.moves;
    })
}*/
//display img
//let x = document.getElementById("input").value;
//x = 1
pokeImg();
async function pokeImg() {
    fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + x + 1 + ".png")
        .then(res => {return res.blob()})
        .then(blob => {
            let img = URL.createObjectURL(blob);
            document.getElementById("img-poke").setAttribute('src', img);
        })
}

//display name
/*async function pokeName(){
    fetch("https://pokeapi.co/api/v2/pokemon-form/"  + 1) //+ x
        .then(res => {return res.text()})
        .then(text => {
            let name = URL.call(name);
            document.getElementById("name").textContent(name);
        })
}*/
