//particles persist after they are generated
//instead of being cleared each frame
boolean persistence = false;
boolean renderFrames = false;
boolean renderKeys = true;

int sW = 640;
int sH = 360;
int dW = 1920;
int dH = 1080;

int fps = 24;
int masterSize = 256;

int numColumns = 32;
int numRows = 18;
//**************
int numParticles = numColumns * numRows;
boolean motionBlur = true;
boolean applyEffects = false;
boolean applySmoothing = true;
//smoothing
int smoothNum = 1; //6
float weight = 18;
float scaleNum  = 1.0 / (weight + 2);
//**************

PImage mapImg;
PImage scaleImg;
boolean showImg = false;

ParticleFrame[] particleFrame;
int particleFramelength;
int leadOutCounter = 0;
int leadOutCounterMax = 2 * fps;  //frames to record after end

String readFilePath = "frames";
String readFileName = "draw";
String readFileType = "png"; // record with tga for speed
String writeFilePath = "render";
String writeFileName = "frame_";
String writeFileType = "png";  // render with png to save space
String scriptsFilePath = "scripts";
int counterOrig = 1;
int counter = counterOrig;
int counterMax;
int writeFrameNum = counter;
File dataFolder;
String[] numFiles; 
Data dataAE, dataMaya;
boolean writeAE = true;
boolean writeMaya = true;

void writeAllKeys() {
  if (persistence) {
    println("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
    println("Sorry, writing keyframes currently doesn't work with \"persistence\" enabled.");
    println("You can still render video frames to disk, though.");
    exit();
  }
  else {
    if(writeAE) AEkeysMain();  // After Effects, JavaScript
    if(writeMaya) mayaKeysMain();  // Maya, Python
  }
}

void initSettings(){
  Settings settings = new Settings("settings.txt");
  numParticles = numColumns * numRows;
}

void setup() {
  initSettings();
  size(sW, sH, P2D);
  frameRate(fps);
  countFolder();
  if (persistence) {
    particleFramelength = numFiles.length;
  }
  else {
    particleFramelength = 1;
  }
  //mapImg = loadImage("test.png");
  scaleImg = createImage(numColumns, numRows, RGB);
  particleFrame = new ParticleFrame[particleFramelength];
  for (int i=0;i<particleFramelength;i++) {
    particleFrame[i] = new ParticleFrame();
  }
}

void draw() {
  if (counter<counterMax) {
    String readString = readFilePath + "/" + readFileName + counter + "." + readFileType;
    mapImg = loadImage(readString);

    mainRender();

    counter++;

    console();
  } 
  else if (persistence && counter>=counterMax && leadOutCounter<leadOutCounterMax) {

    mainRender();

    leadOutCounter++;

    console();
  } 
  else {
    if (renderKeys) {
      writeAllKeys();
    }
    exit();
  }
}

void mainRender() {
  //~~~~~~~~~~~~~~~~
  image(mapImg, 0, 0, numColumns, numRows);

  scaleImg = get(0, 0, numColumns, numRows);
  background(128);

  //main
  if (!showImg) {
    //~~~~~~~~~~~~~~~
    if (persistence) {
      for (int i=0;i<counter;i++) {
        if (i==counter-1) {
          particleFrame[i].pixelTrack();
        }
        if (!particleFrame[i].firstRun) {
          particleFrame[i].update();
        }
      }
    }
    else {
      particleFrame[0].pixelTrack();
      particleFrame[0].update();
    }
    //~~~~~~~~~~~~~~~~
  }
  else {
    image(mapImg, 0, 0, sW, sH);
  }

  if (renderFrames) {
    writeFile(1);
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~
}

void console() {
  if (persistence) {
    println("saved frame " + (counter+leadOutCounter-1) + " of " + (counterMax+leadOutCounterMax-1) + ".");
  }
  else {
    println("saved frame " + (counter-1) + " of " + (counterMax-1) + ".");
  }
}

