class ParticleFrame {
  boolean firstRun = true;

  Particle[][] bob = new Particle[numColumns][numRows];

  PVector particleSize = new PVector(sW/numColumns, sH/numRows);
  PVector particleStart = new PVector(particleSize.x/2, particleSize.y/2);

  ParticleFrame() { 
    for (int y = 0; y<numRows; y++) {
      for (int x=0; x<numColumns; x++) {
        particlesInit(x, y);
      }
    }
  }

  void update() {
    for (int y = 0; y<numRows; y++) {
      for (int x=0; x<numColumns; x++) {
        bob[x][y].update();
      }
    }
  }

  void particlesInit(int x, int y) {
    bob[x][y] = new Particle(particleStart.x, particleStart.y, particleSize.x, particleSize.y);
    if (particleStart.x<sW-particleSize.x) {
      particleStart.x += particleSize.x;
    } 
    else {
      particleStart.x = particleSize.x/2;
      particleStart.y += particleSize.y;
    }
    //~~~~~~~~~~~~~
  }

  void pixelTrack() {
    if (firstRun) {
      for (int y = 0; y<numRows; y++) {
        for (int x=0; x<numColumns; x++) {
          int loc = x + (y*numColumns);

          float r = red(scaleImg.pixels[loc]);
          float g = green(scaleImg.pixels[loc]);
          float b = blue(scaleImg.pixels[loc]);
          int target = int((r+g+b)/3);

          bob[x][y].init(target);
        }
      }
      firstRun=false;
    }
  }
  
}

