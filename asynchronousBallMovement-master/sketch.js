var canvas,backgroundImg;
var database;
var form,game,player;
var gameState = 0;
var playerCount;
var allPlayers;

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear ();
        game.play();
    }
}