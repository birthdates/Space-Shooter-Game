let y = 100;

var player = new Player(244, 66, 66);
var otherPlayer = new Player(66, 134, 244);
var enemySpawner = new EnemySpawner();
var started = Date.now();
var focus;
var penemy;
var potherEnemy;
var he;
var wi;

function lose() {
    alert("You have lost.");
    enemies = [];
    bullets = [];
    started = Date.now();
    points = 0;
}

function setup() {
  he = windowHeight-5;
  wi = windowWidth-20;
  createCanvas(wi,he);
  frameRate(60);
  player.img = loadImage("otherplayer.png");
  otherPlayer.img = loadImage("player.png");
  penemy = loadImage("enemy.png");
  potherEnemy = loadImage("otherenemy.png");
  player.setup();
  otherPlayer.setup();
  //when tab out, pause timer
  window.addEventListener("blur", function() {
    focus = Date.now();
  });
    window.addEventListener("focus", function() {
    started += Date.now() - focus;
  });
  
}
function draw() {
  background(0);
  otherPlayer.show();
  player.show();
  textSize(20);
  fill(255,255,255);
  text('Points: ' + points, 10, 30);
  text('Elapsed: ' + ((Date.now() - started) / 1000).toString().toHHMMSS(), 10, 60);
  if(keyIsDown(LEFT_ARROW)) {
    player.move(-10);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    player.move(10);
  }
  if(keyIsDown(UP_ARROW) || keyIsDown(32)) {
    player.fire();
  }

  if(keyIsDown(65)) {
    otherPlayer.move(-10);
  }
  if(keyIsDown(68)) {
    otherPlayer.move(10);
  }
  if(keyIsDown(87)) {
    otherPlayer.fire();
  } 
  enemySpawner.main();
}

function keyPressed() {
  if(keyCode == 18) player.fireCooldown = player.fireCooldown == 200 ? 50 : 200;
  if (keyCode === LEFT_ARROW) {
    player.move(-10);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(10);
  } else if (keyCode == UP_ARROW || keyCode == 32) {
    player.fire();
  }
}
