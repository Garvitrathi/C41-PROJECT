const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var drops = [];

function preload() {

}

function setup() {
    createCanvas(400, 625);
    engine = Engine.create();
    world = engine.world;

    
}

function draw() {
    background("black");

    var maxDrops = 100;
    for (var i = 0; i < maxDrops; i++) {
        drops.push(new createDrops(random(0, 400), random(0, 400)))
    }


    drawSprites();
}