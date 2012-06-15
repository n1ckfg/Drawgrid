void countFolder() {
  dataFolder = new File(sketchPath, readFilePath);
  numFiles = dataFolder.list();
  counterMax = numFiles.length;
}

void writeFile(int reps) {
  for (int i=0;i<reps;i++) {
    String writeString = writeFilePath + "/" + writeFileName + writeFrameNum+"."+writeFileType;
    saveFrame(writeString);
    writeFrameNum++;
  }
}
