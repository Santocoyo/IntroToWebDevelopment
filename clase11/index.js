var gatos = require("./gatos");
const jokes = require("give-me-a-joke");
const colors = require("colors");

console.log(gatos);
console.log(colors.green(gatos[1].name));

jokes.getRandomCNJoke(function(joke){
    console.log(joke.rainbow);
})