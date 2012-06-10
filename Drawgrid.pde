int sW = 640;
int sH = 480;
int fps = 24;
int masterSize = 256;

int numColumns = 64;
int numRows = 48;

PImage mapImg;
PImage scaleImg;
boolean showImg = false;

ParticleFrame[] mary;
int marylength;
int leadOut = 0;
int leadOutMax = 2 * fps;  //frames to record after end

void setup() {
  size(sW, sH, P2D);
  frameRate(fps);
  countFolder();
  marylength = numFiles.length;
  //mapImg = loadImage("test.png");
  scaleImg = createImage(numColumns, numRows, RGB);
  mary = new ParticleFrame[marylength];
  for (int i=0;i<marylength;i++) {
    mary[i] = new ParticleFrame();
  }
}

void draw() {
  if (readFrameNum<readFrameNumMax) {
    String readString = readFilePath + "/" + readFileName + readFrameNum + "." + readFileType;
    mapImg = loadImage(readString);

    mainRender();

    readFrameNum++;
  } else if(readFrameNum>=readFrameNumMax&&leadOut<leadOutMax){
    
    mainRender();
  
    leadOut++;
    
  } else {
    exit();
  }
 println("saved frame " + (readFrameNum+leadOut-1) + " of " + (readFrameNumMax+leadOutMax-1) + ".");
}

void mainRender(){
    //~~~~~~~~~~~~~~~~
    image(mapImg, 0, 0, numColumns, numRows);

    scaleImg = get(0, 0, numColumns, numRows);
    background(128);

    //main
    if (!showImg) {
      for (int i=0;i<readFrameNum;i++) {
        if(i==readFrameNum-1){
        mary[i].pixelTrack();
        }
        if(!mary[i].firstRun){
          mary[i].update();
        }
      }
    }
    else {
      image(mapImg, 0, 0, sW, sH);
    }
    
        writeFile(1);
    //~~~~~~~~~~~~~~~~~~~~~~~~~
}

