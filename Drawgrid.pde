int sW = 640;
int sH = 480;
int fps = 60;
int masterSize = 256;

int numColumns = 64;
int numRows = 48;

PVector particleStart, particleSize;
PImage mapImg;
PImage scaleImg;
Particle[][] bob = new Particle[numColumns][numRows];
boolean showImg = false;

void setup(){
size(sW,sH);
frameRate(fps);
mapImg = loadImage("test.png");
scaleImg = createImage(numColumns,numRows,RGB);
particleSize = new PVector(sW/numColumns, sH/numRows);
particleStart = new PVector(particleSize.x/2,particleSize.y/2);
  for(int y = 0; y<numRows; y++) {
    for(int x=0; x<numColumns; x++) {
      particlesInit(x,y);
    }
  }
}

void draw(){
  image(mapImg,0,0,numColumns,numRows);
  scaleImg = get(0,0,numColumns,numRows);
  background(128);
  
  if(!showImg){
    for(int y = 0; y<numRows; y++) {
    for(int x=0; x<numColumns; x++) {
      int loc = x + (y*numColumns);
      
      float r = red(scaleImg.pixels[loc]);
      float g = green(scaleImg.pixels[loc]);
      float b = blue(scaleImg.pixels[loc]);
      int target = int((r+g+b)/3);

      bob[x][y].update(target);
    }
  }
  }else{
    image(mapImg,0,0,sW,sH);
  }
}

void keyPressed(){
if(key==' '){
  showImg = !showImg;
}
}

void particlesInit(int x, int y) {
  bob[x][y] = new Particle(particleStart.x,particleStart.y,particleSize.x,particleSize.y);
  if(particleStart.x<sW-particleSize.x) {
    particleStart.x += particleSize.x;
  } 
  else {
    particleStart.x = particleSize.x/2;
    particleStart.y += particleSize.y;
  }
}

class Particle{
  
  PVector p, s, q;
  
  Particle(float _px, float _py, float _sx, float _sy){
    p = new PVector(_px,_py);
    s = new PVector(_sx,_sy);    
  }
  
  void update(float _r){
    PVector q = new PVector(s.x*(_r/masterSize),s.y*(_r/masterSize));
    p.x += random(1) - random(1);
    p.y += random(1) - random(1);
    render(q.x,q.y);
  }

  void render(float _qx, float _qy){
    noStroke();
    fill(0);
    ellipseMode(CENTER);
    ellipse(p.x,p.y,_qx,_qy);
  }
  
}




