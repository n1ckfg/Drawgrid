class Particle {
  PVector[] AEpath = new PVector[counterMax];
  float[] AErot = new float[counterMax];
  PVector[] AEscale = new PVector[counterMax];
  
  PVector p, s, q;
  float spread = 10;
  int alphaNumOrig = 100;
  int alphaNum = alphaNumOrig;
  int alphaDelta = 5;

  Particle(float _px, float _py, float _sx, float _sy) {
    p = new PVector(_px, _py);
    s = new PVector(_sx, _sy);
  }

  void init(float _r) {
    q = new PVector(s.x*(_r/masterSize), s.y*(_r/masterSize));
  }

  void run() {
    update();
    render(q.x, q.y);
    if (counter<counterMax) {
      AEpath[counter] = new PVector((p.x/sW)*dW, (p.y/sH)*dH);
      AEscale[counter] = new PVector(q.x, q.y);
      println(q.x + " " + q.y);
      //println(AEpath[counter]);
    }
  }

  void update() {
    p.x += random(spread) - random(spread);
    p.y += random(spread) - random(spread);
  }

  void render(float _qx, float _qy) {
    noStroke();
    fill(0, alphaNum);
    if (persistence) {
      alphaNum-=alphaDelta;
      if (alphaNum<0) {
        alphaNum=0;
      }
    }
    ellipseMode(CENTER);
    ellipse(p.x, p.y, _qx, _qy);
  }
}

