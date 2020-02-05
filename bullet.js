function Bullet(x,y,yspeed, c1,c2,c3) {

  this.cachedEnemies = [];

  this.isInYRange = function(enemy) {
     if(enemy == undefined) return false;
      var c = y - enemy.y;
      return c <= 10;
  }
  this.isInXRange = function(enemy) { 
    if(x == 0) return false;
    var c = Math.abs(enemy.x - x);
    return c <= 25;
  }

  this.getHitEnemy = function() {
    for(var i = 0; i < this.cachedEnemies.length; i++) {
      
      var e = this.cachedEnemies[i];
      var enemy = e.enemy;
      if(this.isInYRange(enemy)) {
        if(enemies[e.i] != enemy) continue;
        enemies.splice(e.i, 1);
        if(enemy.red && c1 == 244 || !enemy.red && c1 != 244) {
          points--;
          if(points < 0) lose();
        } else {
          points++;
        }
        return true;
      }
    }
    return false;
  }

  this.populatePossibleEnemies = function() {
    for(var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      if(this.isInXRange(enemy)) {
        this.cachedEnemies.push({enemy: enemy, i: i});
      }
    }
  }

  this.show = function() {
    if(y < 1) {
      return false;
    }
    var e = this.getHitEnemy();
    if(e) {
      return false;
    }
    y -= yspeed;
    fill(c1,c2,c3);
    ellipse(x,y,20,20);
    return true;
  }
}
