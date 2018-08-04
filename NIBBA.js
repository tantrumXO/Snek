this.eatLit = function(pos1) {
    var d = dist(this.x, this.y, pos1.x, pos1.y);
    if (d < 1) {
      frameRate(13);
      return true;
    } else {
      return false;
    }
  }

  this.eatBig = function(pos2) {
    var d = dist(this.x, this.y, pos2.x, pos2.y);
    if (d < 1) {
      this.total=this.total+2;
      return true;
    } else {
      return false;
    }
  }

  this.eatZzz = function(pos3) {
    var d = dist(this.x, this.y, pos3.x, pos3.y);
    if (d < 1) {
      frameRate(5);
      return true;
    } else {
      return false;
    }
  }



   if (count == 4) {
      randi = random(3);
      if(randi==0){
        pickLitLocation();
        fill(255,0,0);
        rect(lfood.x, lfood.y, scl, scl);
      }
      else if (randi==1) {
        pickBigLocation();
        fill(0,255,0);
        rect(bfood.x, bfood.y, scl, scl);
      }
      else if (randi==2) {
        pickZzzLocation();
        fill(0,0,255);
        rect(zfood.x, zfood.y, scl, scl);
      }
      count=0;
    }




    if(s.eatLit(lfood)) {
    pickLocation();
  }

  if(s.eatBig(bfood)) {
    pickLocation();
  }

  if(s.eatZzz(zfood)) {
    pickLocation();
  }