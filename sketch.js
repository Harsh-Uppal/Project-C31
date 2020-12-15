// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Colors = ["red","lime","cyan","black","yellow"];

//All Variables
var particles = [], plinkos = [], divisions = [],ground,frame = 0;

function setup() {

    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;
    rectMode("center");

    //Give values to variables
    ground = new Ground(175, 650, 450, 30);

    var index = 0;
    var divIndex = 0;


    for (var y = 0; y < 6; y++) {
        for (var i = 1; i < 10; i++) {
            plinkos[index] = new Plinko(i * 30 + 25, 80 + y * 80);
            index++;
            plinkos[index] = new Plinko(i * 40, 100 + y * 80);
            index++;
            plinkos[index] = new Plinko(i * 40, 60 + y * 80);
            index++;
        }
    }

    for (var i = 1; i < 10; i++) {
        divisions[divIndex] = new Division(i * 40, 585);
        divIndex++;
    }
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    ground.display();

    if (frame % 100 == 0) {
        particles[frame/100] = new Particle(random(150, 250), 10);
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
    }

    frame++;

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
    for (var i = 0; i < divisions.length; i++) {
        divisions[i].display();
    }
}

function keyPressed() {
    //catch key presses
}