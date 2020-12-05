var enemies = [];

function EnemySpawner() {
  this.main = function () {
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      if (!enemy.show()) {
        continue;
      }
      lose();
    }
    this.trySpawn();
  };

  this.trySpawn = function () {
    if (Math.random() >= 0.009) {
      return;
    }
    var speed = (Date.now() - started) / 1000 / 7 + 1;
    var enemy = new Enemy(Math.floor(Math.random() * wi), 10, speed);
    enemy.init();
    enemies.push(enemy);
  };
}
