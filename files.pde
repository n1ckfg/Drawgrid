String readFilePath = "data";
String readFileName = "cellosback_";
String readFileType = "png"; // record with tga for speed
String writeFilePath = "render";
String writeFileName = "frame_";
String writeFileType = "png";  // render with png to save space
int readFrameNumOrig = 1;
int readFrameNum = readFrameNumOrig;
int readFrameNumMax;
int writeFrameNum = readFrameNum;
File dataFolder;
String[] numFiles; 

void countFolder() {
  dataFolder = new File(sketchPath, readFilePath);
  numFiles = dataFolder.list();
  readFrameNumMax = numFiles.length;
}

void writeFile(int reps) {
  for (int i=0;i<reps;i++) {
    String writeString = writeFilePath + "/" + writeFileName + writeFrameNum+"."+writeFileType;
    saveFrame(writeString);
    writeFrameNum++;
  }
}
