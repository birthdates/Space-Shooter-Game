function Enemy(x, y, yspeed) {

  this.x = x;
  this.y = y;
  this.red = Math.random() >= 0.6;
  this.img;
  
  this.show = function() {
    image(this.img, x, this.y, 40, 40);
    this.y += yspeed;
    if(this.hasTouchedBottom()) {
      return true;
    }
    return false;
  }

  this.init = function() {
    if(this.red) {
      this.img = penemy;
    } else this.img = potherEnemy;
    //todo fix:
    /*for(var i =0; i < bullets.length; i++) {
      var bullet = bullets[i];
      if(bullet.isInXRange(this)) {
        console.log("Added");
        bullet.cachedEnemies.push(this);
      }
    }*/
  }

  this.hasTouchedBottom = function() {
    return this.y >= he-25;
  }
}