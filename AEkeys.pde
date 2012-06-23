String aeFileName = "AEscript";
String aeFilePath = scriptsFilePath;
String aeFileType = "jsx";

void AEkeysMain() {
  AEkeysBegin();
  for (int y = 0; y<numRows; y++) {
    for (int x=0; x<numColumns; x++) {
      dataAE.add("\t" + "var solid = myComp.layers.addSolid([1.0, 1.0, 0], \"my square\", 50, 50, 1);" + "\r");
      if (motionBlur) {
        dataAE.add("\t" + "solid.motionBlur = true;" + "\r");
      }
      if (applyEffects) {
        AEeffects();
      }
      dataAE.add("\r");
      dataAE.add("\t" + "var p = solid.property(\"position\");" + "\r");
      dataAE.add("\t" + "var r = solid.property(\"rotation\");" + "\r");
      dataAE.add("\t" + "var s = solid.property(\"scale\");" + "\r");
      dataAE.add("\r");

      for (int j=0;j<counterMax-1;j++) {
        AEkeyPos(x, y, j);
        //AEkeyRot(i,j);
        AEkeyScale(x,y,j);
      }
    }
  }
  AEkeysEnd();
}

float AEkeyTime(int frameNum) {
  return (float(frameNum)/float(counterMax)) * (float(counterMax)/float(fps));
}

void AEkeyPos(int spriteNumX, int spriteNumY, int frameNum) {

  // smoothing algorithm by Golan Levin

  PVector lower, upper, centerNum;

  centerNum = particleFrame[0].particle[spriteNumX][spriteNumY].AEpath[frameNum+1];

  if (applySmoothing && frameNum>smoothNum && frameNum<counterMax-smoothNum) {
    lower = new PVector(particleFrame[0].particle[spriteNumX][spriteNumY].AEpath[frameNum-smoothNum].x, particleFrame[0].particle[spriteNumX][spriteNumY].AEpath[frameNum-smoothNum].y);
    upper = new PVector(particleFrame[0].particle[spriteNumX][spriteNumY].AEpath[frameNum+smoothNum].x, particleFrame[0].particle[spriteNumX][spriteNumY].AEpath[frameNum+smoothNum].y);
    centerNum.x = (lower.x + weight*centerNum.x + upper.x)*scaleNum;
    centerNum.y = (lower.y + weight*centerNum.y + upper.y)*scaleNum;
  }

  if (frameNum%smoothNum==0||frameNum==0||frameNum==counterMax-1) {
    dataAE.add("\t\t" + "p.setValueAtTime(" + AEkeyTime(frameNum) + ", [ " + centerNum.x + ", " + centerNum.y + "]);" + "\r");
  }
}

void AEkeyScale(int spriteNumX, int spriteNumY, int frameNum) {

  PVector lower, upper, centerNum;

  centerNum = particleFrame[0].particle[spriteNumX][spriteNumY].AEscale[frameNum+1];

  if (applySmoothing && frameNum>smoothNum && frameNum<counterMax-smoothNum) {
    lower = new PVector(particleFrame[0].particle[spriteNumX][spriteNumY].AEscale[frameNum-smoothNum].x, particleFrame[0].particle[spriteNumX][spriteNumY].AEscale[frameNum-smoothNum].y);
    upper = new PVector(particleFrame[0].particle[spriteNumX][spriteNumY].AEscale[frameNum+smoothNum].x, particleFrame[0].particle[spriteNumX][spriteNumY].AEscale[frameNum+smoothNum].y);
    centerNum.x = (lower.x + weight*centerNum.x + upper.x)*scaleNum;
    centerNum.y = (lower.y + weight*centerNum.y + upper.y)*scaleNum;
  }

  if (frameNum%smoothNum==0||frameNum==0||frameNum==counterMax-1) {
    println(centerNum);
    dataAE.add("\t\t" + "s.setValueAtTime(" + AEkeyTime(frameNum) + ", [ " + (centerNum.x*10) + ", " + (centerNum.y*10) + "]);" + "\r");
  }

}

void AEkeyRot(int spriteNumX, int spriteNumY, int frameNum) {
//FIX, turn PVector to float
/*
  PVector lower, upper, centerNum;

  centerNum = particleFrame[0].particle[spriteNumX][spriteNumY].AErot[frameNum+1];

  if (applySmoothing && frameNum>smoothNum && frameNum<counterMax-smoothNum) {
    lower = new PVector(particleFrame[0].particle[spriteNumX][spriteNumY].AErot[frameNum-smoothNum].x, particleFrame[0].particle[spriteNumX][spriteNumY].AErot[frameNum-smoothNum].y);
    upper = new PVector(particleFrame[0].particle[spriteNumX][spriteNumY].AErot[frameNum+smoothNum].x, particleFrame[0].particle[spriteNumX][spriteNumY].AErot[frameNum+smoothNum].y);
    centerNum.x = (lower.x + weight*centerNum.x + upper.x)*scaleNum;
    centerNum.y = (lower.y + weight*centerNum.y + upper.y)*scaleNum;
  }

  if (frameNum%smoothNum==0||frameNum==0||frameNum==counterMax-1) {
    dataAE.add("\t\t" + "r.setValueAtTime(" + AEkeyTime(frameNum) + ", [ " + centerNum.x + ", " + centerNum.y + "]);" + "\r");
  }
  */
}

void AEeffects() {
  dataAE.add("\t" + "var myEffect = solid.property(\"Effects\").addProperty(\"Fast Blur\")(\"Blurriness\").setValue(61);");
  //dataAE.add("\t" + "var myEffect = solid.property(\"Effects\").addProperty(\"Slider Control\")(\"Slider\").setValue(61);");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

void AEkeysBegin() {
  dataAE = new Data();
  dataAE.beginSave();
  dataAE.add("{  //start script" + "\r");
  dataAE.add("\t" + "app.beginUndoGroup(\"foo\");" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "// create project if necessary" + "\r");
  dataAE.add("\t" + "var proj = app.project;" + "\r");
  dataAE.add("\t" + "if(!proj) proj = app.newProject();" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "// create new comp named 'my comp'" + "\r");
  dataAE.add("\t" + "var compW = " + dW + "; // comp width" + "\r");
  dataAE.add("\t" + "var compH = " + dH + "; // comp height" + "\r");
  dataAE.add("\t" + "var compL = " + (counterMax/fps) + ";  // comp length (seconds)" + "\r");
  dataAE.add("\t" + "var compRate = " + fps + "; // comp frame rate" + "\r");
  dataAE.add("\t" + "var compBG = [0/255,0/255,0/255] // comp background color" + "\r");
  dataAE.add("\t" + "var myItemCollection = app.project.items;" + "\r");
  dataAE.add("\t" + "var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);" + "\r");
  dataAE.add("\t" + "myComp.bgColor = compBG;" + "\r");
  dataAE.add("\r");
}

void AEkeysEnd() {
  dataAE.add("\r");
  dataAE.add("\t" + "app.endUndoGroup();" + "\r");
  dataAE.add("}  //end script" + "\r");
  dataAE.endSave(aeFilePath + "/" + aeFileName + "." + aeFileType);
}

