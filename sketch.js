// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

// var engine, world;

// var array1;
// var particles = [];
// var plinkos = [];
// var divisions = [];
// var divisionHeight = 300;

// function preload() {}

// function setup() {
//   var canvas = createCanvas(480, 800);
//   engine = Engine.create();
//   world = engine.world;

//   ground = new Ground(600, height, 1200, 20);

//   stand1 = new Ground(0, 680, 5, 200);
//   stand2 = new Ground(80, 680, 10, 200);
//   stand3 = new Ground(170, 680, 10, 200);
//   stand4 = new Ground(250, 680, 10, 200);
//   stand5 = new Ground(330, 680, 10, 200);
//   stand6 = new Ground(410, 680, 10, 200);
//   stand7 = new Ground(475, 680, 5, 200);

//   var array2 = ["red", "yello", "green"];

//   array1 = [
//     2,
//     "array",
//     null,
//     undefined,
//     { x: 0, y: 1 },
//     "3",
//     [5, 6, "all", "every", "some"],
//     ["hi", "hello"],
//     "HELLO",
//     array2,
//   ];

//   // if (frameCount % 60 === 0) {
//   //   particles.push(
//   //     new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10)
//   //   );
//   // }

//   for (var j = 40; j <= width; j = j + 50) {
//     plinkos.push(new Plinko(j, 75));
//   }
//   for (var j = 15; j <= width - 10; j = j + 50) {
//     plinkos.push(new Plinko(j, 175));
//   }

//   console.log(array1[9][3]);

//   // pushes the element at the end of the array
//   array1.push("Romas");
//   console.log(array1);

//   // pushes the element to the beginning of the array
//   array1.unshift("Abby");
//   console.log(array1);

//   // removes from the end of the array
//   array1.pop();
//   console.log(array1);

//   // removes from beginning of the array
//   array1.shift();
//   console.log(array1);
// }

// function draw() {
//   background("black");
//   Engine.update(engine);
//   strokeWeight(4);

//   ground.display();

//   // for (var k = 0; (k = width); k = k + 80) {
//   //   divisions.push(
//   //     (division = new Divisions(
//   //       k,
//   //       height - divisionHeight / 2,
//   //       10,
//   //       divisionHeight
//   //     ))
//   //   );
//   // }
// }
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);

  div1 = new Ground(4, 675, 8, 200);
  div2 = new Ground(80, 675, 10, 200);
  div3 = new Ground(170, 675, 10, 200);
  div4 = new Ground(250, 675, 10, 200);
  div5 = new Ground(330, 675, 10, 200);
  div6 = new Ground(410, 675, 10, 200);
  div7 = new Ground(474, 675, 8, 200);

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plink(j, 75, 10));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plink(j, 175, 10));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plink(j, 275, 10));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plink(j, 375, 10));
  }
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  div4.display();
  div5.display();
  div6.display();
  div7.display();

  div1.display();
  div2.display();
  div3.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount % 90 === 0) {
    particles.push(
      new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10)
    );
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}
