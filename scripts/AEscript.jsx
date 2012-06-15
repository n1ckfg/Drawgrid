{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 2;  // comp length (seconds)
	var compRate = 24; // comp frame rate
	var compBG = [0/255,0/255,0/255] // comp background color
	var myItemCollection = app.project.items;
	var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);
	myComp.bgColor = compBG;

	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 33.526154, 42.44652]);
		p.setValueAtTime(0.25, [ 52.62403, 77.79517]);
		p.setValueAtTime(0.5, [ 35.707882, 59.570656]);
		p.setValueAtTime(0.75, [ 51.44636, 61.358166]);
		p.setValueAtTime(1.0, [ 76.81366, 53.081936]);
		p.setValueAtTime(1.25, [ 10.769265, 33.084408]);
		p.setValueAtTime(1.5, [ -4.747438, 20.564491]);
		p.setValueAtTime(1.75, [ 9.463058, 38.35632]);
		p.setValueAtTime(2.0, [ -20.262075, 64.24303]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 63.024296, 15.621079]);
		p.setValueAtTime(0.25, [ 121.20232, 31.744774]);
		p.setValueAtTime(0.5, [ 83.315346, 40.02427]);
		p.setValueAtTime(0.75, [ 72.9657, 49.13397]);
		p.setValueAtTime(1.0, [ 20.38996, 71.14512]);
		p.setValueAtTime(1.25, [ 15.605372, 54.155396]);
		p.setValueAtTime(1.5, [ 14.182897, 78.20105]);
		p.setValueAtTime(1.75, [ 21.458935, 137.70163]);
		p.setValueAtTime(2.0, [ 55.39889, 74.90479]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 171.55943, 40.944794]);
		p.setValueAtTime(0.25, [ 143.47896, 32.923912]);
		p.setValueAtTime(0.5, [ 148.31181, 41.704273]);
		p.setValueAtTime(0.75, [ 149.26767, 21.603453]);
		p.setValueAtTime(1.0, [ 140.88365, 37.065502]);
		p.setValueAtTime(1.25, [ 129.6339, 83.992386]);
		p.setValueAtTime(1.5, [ 113.36794, 63.6232]);
		p.setValueAtTime(1.75, [ 100.03738, 107.3459]);
		p.setValueAtTime(2.0, [ 158.37158, 66.573906]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 217.83757, 26.039497]);
		p.setValueAtTime(0.25, [ 229.24713, 36.767536]);
		p.setValueAtTime(0.5, [ 224.40164, 10.11769]);
		p.setValueAtTime(0.75, [ 266.00284, 69.09225]);
		p.setValueAtTime(1.0, [ 247.9265, 70.06365]);
		p.setValueAtTime(1.25, [ 255.95518, 7.0639253]);
		p.setValueAtTime(1.5, [ 296.6383, 5.1858077]);
		p.setValueAtTime(1.75, [ 325.75018, 55.189297]);
		p.setValueAtTime(2.0, [ 352.97635, 50.19571]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 273.24295, 35.546738]);
		p.setValueAtTime(0.25, [ 313.63394, 16.561584]);
		p.setValueAtTime(0.5, [ 342.68613, -22.183943]);
		p.setValueAtTime(0.75, [ 356.27322, -16.529013]);
		p.setValueAtTime(1.0, [ 420.72458, 11.657604]);
		p.setValueAtTime(1.25, [ 460.148, -68.34446]);
		p.setValueAtTime(1.5, [ 466.53278, -58.948647]);
		p.setValueAtTime(1.75, [ 470.4297, -40.807446]);
		p.setValueAtTime(2.0, [ 487.33417, -81.74312]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 352.8181, 16.77593]);
		p.setValueAtTime(0.25, [ 362.45673, 20.08848]);
		p.setValueAtTime(0.5, [ 355.13428, 22.475063]);
		p.setValueAtTime(0.75, [ 298.99, 46.460045]);
		p.setValueAtTime(1.0, [ 277.97803, 16.39465]);
		p.setValueAtTime(1.25, [ 265.6531, -15.662348]);
		p.setValueAtTime(1.5, [ 265.57187, -45.52223]);
		p.setValueAtTime(1.75, [ 295.51437, -38.923603]);
		p.setValueAtTime(2.0, [ 266.45145, -36.00857]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 403.90018, 28.709026]);
		p.setValueAtTime(0.25, [ 446.61694, 70.309586]);
		p.setValueAtTime(0.5, [ 448.86432, 33.38887]);
		p.setValueAtTime(0.75, [ 439.9362, 8.870852]);
		p.setValueAtTime(1.0, [ 436.38156, 38.8122]);
		p.setValueAtTime(1.25, [ 401.58627, 49.513493]);
		p.setValueAtTime(1.5, [ 394.32825, 34.020123]);
		p.setValueAtTime(1.75, [ 399.48608, 46.42071]);
		p.setValueAtTime(2.0, [ 395.5517, 15.373077]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 451.13342, 47.55166]);
		p.setValueAtTime(0.25, [ 393.91708, 57.482746]);
		p.setValueAtTime(0.5, [ 392.26718, 43.785408]);
		p.setValueAtTime(0.75, [ 413.34396, 39.348278]);
		p.setValueAtTime(1.0, [ 408.69894, 70.63369]);
		p.setValueAtTime(1.25, [ 399.55862, 85.51241]);
		p.setValueAtTime(1.5, [ 367.91998, 120.05163]);
		p.setValueAtTime(1.75, [ 344.19214, 90.30397]);
		p.setValueAtTime(2.0, [ 341.71393, 114.03082]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 489.08936, 25.259672]);
		p.setValueAtTime(0.25, [ 484.08444, -33.620483]);
		p.setValueAtTime(0.5, [ 467.19626, -18.754408]);
		p.setValueAtTime(0.75, [ 427.3967, -30.592295]);
		p.setValueAtTime(1.0, [ 359.1262, 8.361881]);
		p.setValueAtTime(1.25, [ 353.6747, 39.614452]);
		p.setValueAtTime(1.5, [ 343.54852, 86.238365]);
		p.setValueAtTime(1.75, [ 348.41364, 78.53109]);
		p.setValueAtTime(2.0, [ 356.01694, 59.183224]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 555.6126, 34.60309]);
		p.setValueAtTime(0.25, [ 543.3603, 63.291874]);
		p.setValueAtTime(0.5, [ 516.17535, 134.11916]);
		p.setValueAtTime(0.75, [ 474.94864, 150.20572]);
		p.setValueAtTime(1.0, [ 516.925, 139.61952]);
		p.setValueAtTime(1.25, [ 532.5334, 141.6345]);
		p.setValueAtTime(1.5, [ 554.9503, 141.5292]);
		p.setValueAtTime(1.75, [ 560.0909, 118.28977]);
		p.setValueAtTime(2.0, [ 562.2475, 107.45581]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 648.52686, 10.786121]);
		p.setValueAtTime(0.25, [ 676.45776, -8.691238]);
		p.setValueAtTime(0.5, [ 689.15656, -45.28439]);
		p.setValueAtTime(0.75, [ 723.92206, -27.537985]);
		p.setValueAtTime(1.0, [ 725.9235, -11.713498]);
		p.setValueAtTime(1.25, [ 739.1851, 22.53475]);
		p.setValueAtTime(1.5, [ 788.14856, 22.365643]);
		p.setValueAtTime(1.75, [ 805.2156, -21.778767]);
		p.setValueAtTime(2.0, [ 775.7005, -12.922565]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 675.59235, 37.72719]);
		p.setValueAtTime(0.25, [ 666.8327, 5.0334206]);
		p.setValueAtTime(0.5, [ 652.3134, 25.44161]);
		p.setValueAtTime(0.75, [ 669.14343, 30.937092]);
		p.setValueAtTime(1.0, [ 653.4914, 31.115498]);
		p.setValueAtTime(1.25, [ 616.32043, 39.3643]);
		p.setValueAtTime(1.5, [ 665.78094, -19.446142]);
		p.setValueAtTime(1.75, [ 687.8426, -55.44568]);
		p.setValueAtTime(2.0, [ 712.40485, -7.6259527]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 744.5942, 15.996114]);
		p.setValueAtTime(0.25, [ 704.9822, -18.241446]);
		p.setValueAtTime(0.5, [ 719.86926, 16.372686]);
		p.setValueAtTime(0.75, [ 665.82513, 33.31097]);
		p.setValueAtTime(1.0, [ 699.1783, 31.899845]);
		p.setValueAtTime(1.25, [ 675.01154, 7.821088]);
		p.setValueAtTime(1.5, [ 688.12714, 49.952713]);
		p.setValueAtTime(1.75, [ 703.6537, 40.884716]);
		p.setValueAtTime(2.0, [ 742.8855, 41.49997]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 821.0344, 35.16174]);
		p.setValueAtTime(0.25, [ 825.97375, -2.4968176]);
		p.setValueAtTime(0.5, [ 836.43353, -10.40515]);
		p.setValueAtTime(0.75, [ 857.13934, 16.51258]);
		p.setValueAtTime(1.0, [ 851.36993, 20.046783]);
		p.setValueAtTime(1.25, [ 847.96906, 23.239557]);
		p.setValueAtTime(1.5, [ 855.5459, 18.520086]);
		p.setValueAtTime(1.75, [ 859.2718, 1.1673397]);
		p.setValueAtTime(2.0, [ 844.786, 3.643889]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 880.8336, 18.85174]);
		p.setValueAtTime(0.25, [ 931.788, 53.74816]);
		p.setValueAtTime(0.5, [ 927.31506, 58.821163]);
		p.setValueAtTime(0.75, [ 922.6076, 61.441536]);
		p.setValueAtTime(1.0, [ 911.52637, 74.38827]);
		p.setValueAtTime(1.25, [ 928.4139, 33.677654]);
		p.setValueAtTime(1.5, [ 927.82434, 51.497387]);
		p.setValueAtTime(1.75, [ 940.272, 46.56424]);
		p.setValueAtTime(2.0, [ 966.7243, 55.075733]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 942.345, 35.9722]);
		p.setValueAtTime(0.25, [ 914.67285, 2.821626]);
		p.setValueAtTime(0.5, [ 959.0786, 7.262384]);
		p.setValueAtTime(0.75, [ 991.6297, -17.104877]);
		p.setValueAtTime(1.0, [ 957.7497, -67.783264]);
		p.setValueAtTime(1.25, [ 917.7799, -61.218822]);
		p.setValueAtTime(1.5, [ 919.075, -115.337296]);
		p.setValueAtTime(1.75, [ 885.3764, -111.10581]);
		p.setValueAtTime(2.0, [ 894.8587, -93.20833]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 995.3272, 12.957004]);
		p.setValueAtTime(0.25, [ 1030.9761, 33.436897]);
		p.setValueAtTime(0.5, [ 1019.62665, 44.175457]);
		p.setValueAtTime(0.75, [ 1049.9208, 54.02079]);
		p.setValueAtTime(1.0, [ 1061.4905, 26.689505]);
		p.setValueAtTime(1.25, [ 1066.1171, 22.185087]);
		p.setValueAtTime(1.5, [ 1108.6501, 12.298416]);
		p.setValueAtTime(1.75, [ 1117.4297, 23.559782]);
		p.setValueAtTime(2.0, [ 1098.9248, 37.469543]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1045.6963, 53.171333]);
		p.setValueAtTime(0.25, [ 1040.4476, 77.75855]);
		p.setValueAtTime(0.5, [ 1042.5029, 62.785725]);
		p.setValueAtTime(0.75, [ 1013.81976, 24.178383]);
		p.setValueAtTime(1.0, [ 1036.7777, 2.7826428]);
		p.setValueAtTime(1.25, [ 1033.6844, -7.895421]);
		p.setValueAtTime(1.5, [ 1039.3123, -23.53884]);
		p.setValueAtTime(1.75, [ 1024.6083, -6.492145]);
		p.setValueAtTime(2.0, [ 1022.9502, -41.849518]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1127.0988, 41.108746]);
		p.setValueAtTime(0.25, [ 1096.4473, 70.57305]);
		p.setValueAtTime(0.5, [ 1137.7142, 61.920452]);
		p.setValueAtTime(0.75, [ 1131.2819, 105.65719]);
		p.setValueAtTime(1.0, [ 1164.6941, 101.283806]);
		p.setValueAtTime(1.25, [ 1159.908, 100.35888]);
		p.setValueAtTime(1.5, [ 1178.3926, 76.38976]);
		p.setValueAtTime(1.75, [ 1158.7728, 65.4924]);
		p.setValueAtTime(2.0, [ 1176.3635, 40.56324]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1168.764, 28.102757]);
		p.setValueAtTime(0.25, [ 1193.6993, 50.803185]);
		p.setValueAtTime(0.5, [ 1218.6802, 30.433125]);
		p.setValueAtTime(0.75, [ 1236.9907, 9.574727]);
		p.setValueAtTime(1.0, [ 1233.5082, 32.143295]);
		p.setValueAtTime(1.25, [ 1223.2928, 47.565586]);
		p.setValueAtTime(1.5, [ 1216.0906, 9.441873]);
		p.setValueAtTime(1.75, [ 1209.2383, 35.430763]);
		p.setValueAtTime(2.0, [ 1164.4802, 27.240114]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1250.6687, 37.10058]);
		p.setValueAtTime(0.25, [ 1291.1409, 34.98745]);
		p.setValueAtTime(0.5, [ 1253.6516, 46.25901]);
		p.setValueAtTime(0.75, [ 1238.2617, -29.037266]);
		p.setValueAtTime(1.0, [ 1289.838, -96.41726]);
		p.setValueAtTime(1.25, [ 1314.6016, -78.004555]);
		p.setValueAtTime(1.5, [ 1283.8099, -85.862816]);
		p.setValueAtTime(1.75, [ 1308.439, -71.82891]);
		p.setValueAtTime(2.0, [ 1346.0099, -76.6581]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1280.6661, 37.67395]);
		p.setValueAtTime(0.25, [ 1240.0815, 98.82944]);
		p.setValueAtTime(0.5, [ 1240.4557, 107.82582]);
		p.setValueAtTime(0.75, [ 1259.6118, 94.47137]);
		p.setValueAtTime(1.0, [ 1255.8274, 116.02822]);
		p.setValueAtTime(1.25, [ 1228.3068, 77.44617]);
		p.setValueAtTime(1.5, [ 1249.1342, 20.657875]);
		p.setValueAtTime(1.75, [ 1265.5962, -14.122225]);
		p.setValueAtTime(2.0, [ 1263.8134, -40.913006]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1364.6356, 26.799042]);
		p.setValueAtTime(0.25, [ 1377.5393, 12.015976]);
		p.setValueAtTime(0.5, [ 1372.3331, 18.845129]);
		p.setValueAtTime(0.75, [ 1301.3738, 66.98095]);
		p.setValueAtTime(1.0, [ 1295.7891, 107.85404]);
		p.setValueAtTime(1.25, [ 1267.6469, 118.86743]);
		p.setValueAtTime(1.5, [ 1269.9606, 104.70143]);
		p.setValueAtTime(1.75, [ 1288.1693, 99.44881]);
		p.setValueAtTime(2.0, [ 1289.9426, 66.433846]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1402.4999, 40.82927]);
		p.setValueAtTime(0.25, [ 1349.5283, 36.839146]);
		p.setValueAtTime(0.5, [ 1394.1458, 63.207703]);
		p.setValueAtTime(0.75, [ 1368.4281, 60.03193]);
		p.setValueAtTime(1.0, [ 1388.2821, 59.76581]);
		p.setValueAtTime(1.25, [ 1358.5575, 71.56477]);
		p.setValueAtTime(1.5, [ 1345.6005, 80.27492]);
		p.setValueAtTime(1.75, [ 1299.4966, 118.72137]);
		p.setValueAtTime(2.0, [ 1355.3165, 109.61252]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1464.6481, 1.1910725]);
		p.setValueAtTime(0.25, [ 1430.7479, -75.505394]);
		p.setValueAtTime(0.5, [ 1442.3612, -31.530441]);
		p.setValueAtTime(0.75, [ 1433.0892, -9.215562]);
		p.setValueAtTime(1.0, [ 1439.2648, 6.796142]);
		p.setValueAtTime(1.25, [ 1414.3473, -45.331795]);
		p.setValueAtTime(1.5, [ 1383.12, -41.02147]);
		p.setValueAtTime(1.75, [ 1334.5988, -21.703917]);
		p.setValueAtTime(2.0, [ 1338.332, 18.55346]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1521.2483, 19.20787]);
		p.setValueAtTime(0.25, [ 1570.0659, -5.8514886]);
		p.setValueAtTime(0.5, [ 1569.5425, -31.900305]);
		p.setValueAtTime(0.75, [ 1557.9312, -46.13809]);
		p.setValueAtTime(1.0, [ 1600.8309, -36.25325]);
		p.setValueAtTime(1.25, [ 1603.4066, -34.115604]);
		p.setValueAtTime(1.5, [ 1577.4923, -72.29091]);
		p.setValueAtTime(1.75, [ 1598.5343, -80.30755]);
		p.setValueAtTime(2.0, [ 1617.2395, -123.60116]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1599.3746, 29.531311]);
		p.setValueAtTime(0.25, [ 1663.1466, 56.976906]);
		p.setValueAtTime(0.5, [ 1623.4471, 50.807644]);
		p.setValueAtTime(0.75, [ 1591.5929, 11.514468]);
		p.setValueAtTime(1.0, [ 1539.4662, 52.60315]);
		p.setValueAtTime(1.25, [ 1516.3514, 76.20127]);
		p.setValueAtTime(1.5, [ 1492.2207, 111.57471]);
		p.setValueAtTime(1.75, [ 1477.3202, 90.60421]);
		p.setValueAtTime(2.0, [ 1502.1495, 113.15282]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1649.937, 29.236448]);
		p.setValueAtTime(0.25, [ 1655.3506, 16.516489]);
		p.setValueAtTime(0.5, [ 1660.2773, 48.111065]);
		p.setValueAtTime(0.75, [ 1678.4631, 72.203575]);
		p.setValueAtTime(1.0, [ 1694.1161, 103.32452]);
		p.setValueAtTime(1.25, [ 1701.2041, 137.29698]);
		p.setValueAtTime(1.5, [ 1760.1104, 140.80894]);
		p.setValueAtTime(1.75, [ 1742.6377, 169.94249]);
		p.setValueAtTime(2.0, [ 1749.7546, 240.06953]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1700.0718, 39.897717]);
		p.setValueAtTime(0.25, [ 1673.5586, 82.08309]);
		p.setValueAtTime(0.5, [ 1718.8018, 64.75732]);
		p.setValueAtTime(0.75, [ 1666.7328, 17.284718]);
		p.setValueAtTime(1.0, [ 1717.2557, -37.244946]);
		p.setValueAtTime(1.25, [ 1724.051, -85.221245]);
		p.setValueAtTime(1.5, [ 1688.6078, -121.10408]);
		p.setValueAtTime(1.75, [ 1703.0354, -155.2609]);
		p.setValueAtTime(2.0, [ 1714.9629, -136.61012]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1790.7957, 28.961115]);
		p.setValueAtTime(0.25, [ 1831.9402, -3.904453]);
		p.setValueAtTime(0.5, [ 1846.3934, -25.715702]);
		p.setValueAtTime(0.75, [ 1843.2135, -0.17153406]);
		p.setValueAtTime(1.0, [ 1847.8557, -20.653837]);
		p.setValueAtTime(1.25, [ 1845.2147, -0.81190056]);
		p.setValueAtTime(1.5, [ 1835.4651, 5.929728]);
		p.setValueAtTime(1.75, [ 1869.8782, -63.68466]);
		p.setValueAtTime(2.0, [ 1857.984, -101.79737]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1840.0912, 17.393444]);
		p.setValueAtTime(0.25, [ 1874.0826, -0.6037681]);
		p.setValueAtTime(0.5, [ 1850.0824, 1.6873312]);
		p.setValueAtTime(0.75, [ 1845.1517, 0.82837164]);
		p.setValueAtTime(1.0, [ 1823.5205, -7.5104613]);
		p.setValueAtTime(1.25, [ 1838.9928, 4.4557323]);
		p.setValueAtTime(1.5, [ 1826.9847, -4.8941135]);
		p.setValueAtTime(1.75, [ 1866.0615, 31.457947]);
		p.setValueAtTime(2.0, [ 1904.5675, 17.07753]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1895.7914, 22.727634]);
		p.setValueAtTime(0.25, [ 1855.6364, 59.719475]);
		p.setValueAtTime(0.5, [ 1878.7313, 20.832127]);
		p.setValueAtTime(0.75, [ 1856.707, 46.33137]);
		p.setValueAtTime(1.0, [ 1862.07, 57.756355]);
		p.setValueAtTime(1.25, [ 1832.6672, 80.53962]);
		p.setValueAtTime(1.5, [ 1846.2543, 115.30389]);
		p.setValueAtTime(1.75, [ 1837.3998, 78.10878]);
		p.setValueAtTime(2.0, [ 1874.0914, 84.12444]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 50.15846, 86.91276]);
		p.setValueAtTime(0.25, [ 14.16596, 54.080273]);
		p.setValueAtTime(0.5, [ 3.3875847, 65.58516]);
		p.setValueAtTime(0.75, [ -31.802649, 77.83024]);
		p.setValueAtTime(1.0, [ 8.727134, 53.845375]);
		p.setValueAtTime(1.25, [ -24.680468, 95.01474]);
		p.setValueAtTime(1.5, [ -30.9747, 87.3359]);
		p.setValueAtTime(1.75, [ -22.230963, 74.5162]);
		p.setValueAtTime(2.0, [ -69.715675, 60.58239]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 100.271416, 100.373764]);
		p.setValueAtTime(0.25, [ 135.79756, 60.92434]);
		p.setValueAtTime(0.5, [ 107.383804, 52.479336]);
		p.setValueAtTime(0.75, [ 106.86521, 68.09463]);
		p.setValueAtTime(1.0, [ 91.79368, 70.786575]);
		p.setValueAtTime(1.25, [ 84.534294, 75.832146]);
		p.setValueAtTime(1.5, [ 111.00713, 59.949768]);
		p.setValueAtTime(1.75, [ 146.9647, 43.69895]);
		p.setValueAtTime(2.0, [ 109.52217, 57.110348]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 158.50226, 107.81838]);
		p.setValueAtTime(0.25, [ 174.20886, 165.40146]);
		p.setValueAtTime(0.5, [ 194.64494, 196.63562]);
		p.setValueAtTime(0.75, [ 211.79698, 251.4796]);
		p.setValueAtTime(1.0, [ 265.7379, 272.99567]);
		p.setValueAtTime(1.25, [ 265.40952, 255.03384]);
		p.setValueAtTime(1.5, [ 276.47635, 267.15356]);
		p.setValueAtTime(1.75, [ 297.4606, 286.07266]);
		p.setValueAtTime(2.0, [ 350.67413, 331.69595]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 210.56653, 94.90225]);
		p.setValueAtTime(0.25, [ 182.34695, 42.23254]);
		p.setValueAtTime(0.5, [ 184.46513, 72.853455]);
		p.setValueAtTime(0.75, [ 198.79771, 74.83885]);
		p.setValueAtTime(1.0, [ 165.75247, 89.2628]);
		p.setValueAtTime(1.25, [ 182.13292, 151.32646]);
		p.setValueAtTime(1.5, [ 183.96834, 117.78932]);
		p.setValueAtTime(1.75, [ 188.38203, 126.08386]);
		p.setValueAtTime(2.0, [ 219.17404, 128.44962]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 261.8993, 72.05731]);
		p.setValueAtTime(0.25, [ 269.92023, 64.59274]);
		p.setValueAtTime(0.5, [ 286.40527, 50.1797]);
		p.setValueAtTime(0.75, [ 275.44843, 59.478893]);
		p.setValueAtTime(1.0, [ 292.94562, 54.164845]);
		p.setValueAtTime(1.25, [ 278.2617, 51.966175]);
		p.setValueAtTime(1.5, [ 285.13034, 73.69882]);
		p.setValueAtTime(1.75, [ 288.22348, 64.18563]);
		p.setValueAtTime(2.0, [ 298.98132, 86.30612]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 325.27844, 83.6577]);
		p.setValueAtTime(0.25, [ 322.2668, 121.61204]);
		p.setValueAtTime(0.5, [ 245.84447, 146.4733]);
		p.setValueAtTime(0.75, [ 229.0406, 151.2296]);
		p.setValueAtTime(1.0, [ 237.04991, 174.89952]);
		p.setValueAtTime(1.25, [ 255.665, 156.62389]);
		p.setValueAtTime(1.5, [ 263.5745, 155.76585]);
		p.setValueAtTime(1.75, [ 259.4823, 134.64749]);
		p.setValueAtTime(2.0, [ 303.82712, 159.51077]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 374.44678, 95.17209]);
		p.setValueAtTime(0.25, [ 363.8508, 87.00917]);
		p.setValueAtTime(0.5, [ 338.65744, 71.29716]);
		p.setValueAtTime(0.75, [ 323.54428, 85.42687]);
		p.setValueAtTime(1.0, [ 316.4077, 113.02327]);
		p.setValueAtTime(1.25, [ 315.69522, 168.74748]);
		p.setValueAtTime(1.5, [ 318.93698, 158.73491]);
		p.setValueAtTime(1.75, [ 342.06754, 154.06741]);
		p.setValueAtTime(2.0, [ 340.0241, 152.25183]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 462.58606, 82.83507]);
		p.setValueAtTime(0.25, [ 510.6947, 90.65623]);
		p.setValueAtTime(0.5, [ 530.7495, 126.36511]);
		p.setValueAtTime(0.75, [ 506.058, 85.2193]);
		p.setValueAtTime(1.0, [ 496.64468, 107.23473]);
		p.setValueAtTime(1.25, [ 449.62863, 67.8867]);
		p.setValueAtTime(1.5, [ 412.39337, 42.91823]);
		p.setValueAtTime(1.75, [ 404.33237, 31.10402]);
		p.setValueAtTime(2.0, [ 365.36136, 3.374013]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 505.3645, 71.34368]);
		p.setValueAtTime(0.25, [ 511.96906, 75.278885]);
		p.setValueAtTime(0.5, [ 500.20963, 47.421722]);
		p.setValueAtTime(0.75, [ 516.1701, 29.329435]);
		p.setValueAtTime(1.0, [ 526.26514, 60.860607]);
		p.setValueAtTime(1.25, [ 509.3967, 76.29618]);
		p.setValueAtTime(1.5, [ 483.1006, 45.391632]);
		p.setValueAtTime(1.75, [ 407.30502, 54.8691]);
		p.setValueAtTime(2.0, [ 372.34937, 66.04813]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 582.27673, 83.70259]);
		p.setValueAtTime(0.25, [ 576.3041, 91.912056]);
		p.setValueAtTime(0.5, [ 612.7812, 65.691635]);
		p.setValueAtTime(0.75, [ 641.9697, 26.318872]);
		p.setValueAtTime(1.0, [ 661.0411, 40.74357]);
		p.setValueAtTime(1.25, [ 661.54065, 16.258987]);
		p.setValueAtTime(1.5, [ 618.7205, 43.9039]);
		p.setValueAtTime(1.75, [ 604.9634, 41.2233]);
		p.setValueAtTime(2.0, [ 611.30597, 50.77564]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 615.3712, 79.03252]);
		p.setValueAtTime(0.25, [ 630.8439, 28.163527]);
		p.setValueAtTime(0.5, [ 623.01654, 76.944115]);
		p.setValueAtTime(0.75, [ 642.1051, 28.21356]);
		p.setValueAtTime(1.0, [ 591.3498, 65.026085]);
		p.setValueAtTime(1.25, [ 592.20935, 62.766872]);
		p.setValueAtTime(1.5, [ 541.1243, 103.431335]);
		p.setValueAtTime(1.75, [ 544.19037, 106.22858]);
		p.setValueAtTime(2.0, [ 523.34375, 94.22354]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 681.3247, 91.226105]);
		p.setValueAtTime(0.25, [ 661.4745, 48.91752]);
		p.setValueAtTime(0.5, [ 624.89374, 67.509224]);
		p.setValueAtTime(0.75, [ 620.5036, 54.941315]);
		p.setValueAtTime(1.0, [ 644.6939, 38.036053]);
		p.setValueAtTime(1.25, [ 647.4797, 39.58839]);
		p.setValueAtTime(1.5, [ 659.43945, 2.0850823]);
		p.setValueAtTime(1.75, [ 648.4766, 16.90959]);
		p.setValueAtTime(2.0, [ 610.9983, -45.959034]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 733.17236, 102.963104]);
		p.setValueAtTime(0.25, [ 694.9412, 34.09852]);
		p.setValueAtTime(0.5, [ 661.52625, 47.673096]);
		p.setValueAtTime(0.75, [ 637.4943, 60.342335]);
		p.setValueAtTime(1.0, [ 635.3098, 112.55428]);
		p.setValueAtTime(1.25, [ 672.127, 146.04097]);
		p.setValueAtTime(1.5, [ 685.0578, 178.67413]);
		p.setValueAtTime(1.75, [ 684.10815, 182.88145]);
		p.setValueAtTime(2.0, [ 682.6044, 200.81584]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 815.7054, 81.836945]);
		p.setValueAtTime(0.25, [ 814.8243, 104.891884]);
		p.setValueAtTime(0.5, [ 789.7806, 146.37456]);
		p.setValueAtTime(0.75, [ 754.56305, 142.13748]);
		p.setValueAtTime(1.0, [ 715.2554, 155.71173]);
		p.setValueAtTime(1.25, [ 725.39185, 185.20738]);
		p.setValueAtTime(1.5, [ 713.70795, 143.54352]);
		p.setValueAtTime(1.75, [ 707.40155, 125.8807]);
		p.setValueAtTime(2.0, [ 705.1209, 89.36035]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 869.33777, 71.12818]);
		p.setValueAtTime(0.25, [ 843.73883, 78.89227]);
		p.setValueAtTime(0.5, [ 823.6977, 77.819695]);
		p.setValueAtTime(0.75, [ 807.9142, 99.0873]);
		p.setValueAtTime(1.0, [ 760.2962, 121.760735]);
		p.setValueAtTime(1.25, [ 711.0557, 121.901855]);
		p.setValueAtTime(1.5, [ 647.28107, 142.85735]);
		p.setValueAtTime(1.75, [ 612.68524, 177.52597]);
		p.setValueAtTime(2.0, [ 580.24536, 166.12856]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 918.75244, 86.88989]);
		p.setValueAtTime(0.25, [ 947.003, 84.65536]);
		p.setValueAtTime(0.5, [ 947.8706, 122.50227]);
		p.setValueAtTime(0.75, [ 1001.16125, 108.428734]);
		p.setValueAtTime(1.0, [ 1031.534, 108.73925]);
		p.setValueAtTime(1.25, [ 1027.656, 106.96403]);
		p.setValueAtTime(1.5, [ 1010.2887, 79.32467]);
		p.setValueAtTime(1.75, [ 999.29706, 91.618866]);
		p.setValueAtTime(2.0, [ 963.6349, 38.193626]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 974.3412, 102.16736]);
		p.setValueAtTime(0.25, [ 984.8074, 93.82072]);
		p.setValueAtTime(0.5, [ 934.7873, 87.336655]);
		p.setValueAtTime(0.75, [ 901.35004, 106.05088]);
		p.setValueAtTime(1.0, [ 875.7548, 83.89074]);
		p.setValueAtTime(1.25, [ 848.45996, 86.53878]);
		p.setValueAtTime(1.5, [ 854.06604, 78.46727]);
		p.setValueAtTime(1.75, [ 834.96747, 90.36429]);
		p.setValueAtTime(2.0, [ 831.9302, 109.153175]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1047.7305, 91.912704]);
		p.setValueAtTime(0.25, [ 1030.2048, 89.23693]);
		p.setValueAtTime(0.5, [ 1056.2706, 129.5305]);
		p.setValueAtTime(0.75, [ 1033.768, 170.33234]);
		p.setValueAtTime(1.0, [ 1055.3228, 198.85663]);
		p.setValueAtTime(1.25, [ 1036.7491, 163.30351]);
		p.setValueAtTime(1.5, [ 1012.37616, 180.7501]);
		p.setValueAtTime(1.75, [ 1016.5744, 191.72513]);
		p.setValueAtTime(2.0, [ 984.11, 172.76707]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1110.7743, 88.905174]);
		p.setValueAtTime(0.25, [ 1101.7006, 83.361694]);
		p.setValueAtTime(0.5, [ 1108.8284, 73.48859]);
		p.setValueAtTime(0.75, [ 1070.0272, 59.026234]);
		p.setValueAtTime(1.0, [ 1068.7295, 79.34234]);
		p.setValueAtTime(1.25, [ 1089.9663, 81.04061]);
		p.setValueAtTime(1.5, [ 1123.7526, 120.49418]);
		p.setValueAtTime(1.75, [ 1157.0663, 150.62753]);
		p.setValueAtTime(2.0, [ 1131.2869, 157.11868]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1175.4143, 69.05283]);
		p.setValueAtTime(0.25, [ 1197.694, 113.76317]);
		p.setValueAtTime(0.5, [ 1199.0087, 114.6818]);
		p.setValueAtTime(0.75, [ 1203.6962, 130.1972]);
		p.setValueAtTime(1.0, [ 1195.6797, 149.79584]);
		p.setValueAtTime(1.25, [ 1235.9417, 144.77618]);
		p.setValueAtTime(1.5, [ 1266.5526, 97.26553]);
		p.setValueAtTime(1.75, [ 1314.6451, 148.42995]);
		p.setValueAtTime(2.0, [ 1293.2052, 178.55782]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1246.7421, 98.01335]);
		p.setValueAtTime(0.25, [ 1284.4479, 61.071247]);
		p.setValueAtTime(0.5, [ 1277.9224, 57.446198]);
		p.setValueAtTime(0.75, [ 1303.316, 43.30714]);
		p.setValueAtTime(1.0, [ 1299.7892, 16.756695]);
		p.setValueAtTime(1.25, [ 1302.1683, 59.732765]);
		p.setValueAtTime(1.5, [ 1269.959, 95.59579]);
		p.setValueAtTime(1.75, [ 1246.1086, 104.19387]);
		p.setValueAtTime(2.0, [ 1242.9806, 110.43319]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1312.3345, 101.18254]);
		p.setValueAtTime(0.25, [ 1321.6913, 96.60188]);
		p.setValueAtTime(0.5, [ 1335.3114, 85.21279]);
		p.setValueAtTime(0.75, [ 1339.6807, 63.296173]);
		p.setValueAtTime(1.0, [ 1336.0938, 66.848305]);
		p.setValueAtTime(1.25, [ 1365.7075, 24.66886]);
		p.setValueAtTime(1.5, [ 1394.9471, -42.132507]);
		p.setValueAtTime(1.75, [ 1384.1243, -64.73518]);
		p.setValueAtTime(2.0, [ 1408.5306, -81.66061]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1358.1848, 113.69131]);
		p.setValueAtTime(0.25, [ 1365.6283, 187.61191]);
		p.setValueAtTime(0.5, [ 1340.5486, 185.4908]);
		p.setValueAtTime(0.75, [ 1314.6698, 147.61612]);
		p.setValueAtTime(1.0, [ 1330.6239, 114.49603]);
		p.setValueAtTime(1.25, [ 1332.3685, 147.44595]);
		p.setValueAtTime(1.5, [ 1329.0845, 186.56522]);
		p.setValueAtTime(1.75, [ 1332.5769, 240.16019]);
		p.setValueAtTime(2.0, [ 1356.0918, 229.83763]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1417.9609, 110.92737]);
		p.setValueAtTime(0.25, [ 1396.3036, 71.3693]);
		p.setValueAtTime(0.5, [ 1413.9218, 86.524895]);
		p.setValueAtTime(0.75, [ 1402.6757, 110.57993]);
		p.setValueAtTime(1.0, [ 1421.287, 60.13048]);
		p.setValueAtTime(1.25, [ 1427.2645, 91.05376]);
		p.setValueAtTime(1.5, [ 1391.4658, 51.44624]);
		p.setValueAtTime(1.75, [ 1408.7417, 95.67722]);
		p.setValueAtTime(2.0, [ 1376.3853, 87.79132]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1472.3711, 74.93909]);
		p.setValueAtTime(0.25, [ 1446.4606, 36.700863]);
		p.setValueAtTime(0.5, [ 1394.5223, 68.0834]);
		p.setValueAtTime(0.75, [ 1398.1915, 54.482807]);
		p.setValueAtTime(1.0, [ 1413.9574, 61.69351]);
		p.setValueAtTime(1.25, [ 1370.3348, 51.601467]);
		p.setValueAtTime(1.5, [ 1407.8352, 66.4965]);
		p.setValueAtTime(1.75, [ 1370.077, 110.21055]);
		p.setValueAtTime(2.0, [ 1357.5486, 84.89699]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1545.4698, 96.4382]);
		p.setValueAtTime(0.25, [ 1566.738, 123.29048]);
		p.setValueAtTime(0.5, [ 1570.5831, 213.66649]);
		p.setValueAtTime(0.75, [ 1570.96, 211.56505]);
		p.setValueAtTime(1.0, [ 1605.9172, 242.11949]);
		p.setValueAtTime(1.25, [ 1599.9056, 226.29793]);
		p.setValueAtTime(1.5, [ 1601.4613, 213.333]);
		p.setValueAtTime(1.75, [ 1591.4327, 181.27519]);
		p.setValueAtTime(2.0, [ 1542.8359, 171.85785]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1583.0387, 101.426254]);
		p.setValueAtTime(0.25, [ 1615.0316, 112.75337]);
		p.setValueAtTime(0.5, [ 1590.5878, 104.095726]);
		p.setValueAtTime(0.75, [ 1593.6835, 94.37299]);
		p.setValueAtTime(1.0, [ 1611.7826, 99.40849]);
		p.setValueAtTime(1.25, [ 1633.914, 41.464905]);
		p.setValueAtTime(1.5, [ 1631.9573, 27.455997]);
		p.setValueAtTime(1.75, [ 1598.3794, 28.363312]);
		p.setValueAtTime(2.0, [ 1559.2527, 9.007813]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1644.8522, 108.03183]);
		p.setValueAtTime(0.25, [ 1666.8726, 117.53664]);
		p.setValueAtTime(0.5, [ 1657.8506, 123.68455]);
		p.setValueAtTime(0.75, [ 1671.7426, 179.52339]);
		p.setValueAtTime(1.0, [ 1709.5885, 199.51967]);
		p.setValueAtTime(1.25, [ 1708.6877, 228.42036]);
		p.setValueAtTime(1.5, [ 1758.7533, 243.08032]);
		p.setValueAtTime(1.75, [ 1747.169, 267.85263]);
		p.setValueAtTime(2.0, [ 1741.3517, 303.96683]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1699.6615, 112.1401]);
		p.setValueAtTime(0.25, [ 1692.7362, 128.25545]);
		p.setValueAtTime(0.5, [ 1709.8031, 122.91833]);
		p.setValueAtTime(0.75, [ 1749.225, 168.89362]);
		p.setValueAtTime(1.0, [ 1737.7972, 167.9171]);
		p.setValueAtTime(1.25, [ 1735.6252, 152.75359]);
		p.setValueAtTime(1.5, [ 1747.9766, 187.63507]);
		p.setValueAtTime(1.75, [ 1745.7421, 163.5724]);
		p.setValueAtTime(2.0, [ 1720.1304, 185.90645]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1772.9908, 85.87898]);
		p.setValueAtTime(0.25, [ 1804.3134, 119.54535]);
		p.setValueAtTime(0.5, [ 1786.748, 42.39139]);
		p.setValueAtTime(0.75, [ 1758.498, -8.004042]);
		p.setValueAtTime(1.0, [ 1767.3674, -33.545986]);
		p.setValueAtTime(1.25, [ 1788.4794, -40.580887]);
		p.setValueAtTime(1.5, [ 1779.3115, -17.556593]);
		p.setValueAtTime(1.75, [ 1771.1598, -15.392058]);
		p.setValueAtTime(2.0, [ 1779.716, -43.096527]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1819.0586, 83.92631]);
		p.setValueAtTime(0.25, [ 1825.1919, 89.4062]);
		p.setValueAtTime(0.5, [ 1838.97, 88.4537]);
		p.setValueAtTime(0.75, [ 1883.1278, 129.20604]);
		p.setValueAtTime(1.0, [ 1900.595, 117.777565]);
		p.setValueAtTime(1.25, [ 1860.4387, 80.962425]);
		p.setValueAtTime(1.5, [ 1853.1317, 68.14736]);
		p.setValueAtTime(1.75, [ 1833.1123, 71.14909]);
		p.setValueAtTime(2.0, [ 1785.7328, 36.21657]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1876.9501, 88.724625]);
		p.setValueAtTime(0.25, [ 1925.403, 75.9627]);
		p.setValueAtTime(0.5, [ 1939.5862, 39.591503]);
		p.setValueAtTime(0.75, [ 1942.0726, 20.136427]);
		p.setValueAtTime(1.0, [ 1940.9514, 13.240668]);
		p.setValueAtTime(1.25, [ 1976.1268, 9.817563]);
		p.setValueAtTime(1.5, [ 1996.175, 8.297778]);
		p.setValueAtTime(1.75, [ 1972.9098, 16.699663]);
		p.setValueAtTime(2.0, [ 1942.1508, -5.4406686]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 57.05143, 133.71469]);
		p.setValueAtTime(0.25, [ 30.338753, 145.32979]);
		p.setValueAtTime(0.5, [ 86.28947, 183.171]);
		p.setValueAtTime(0.75, [ 84.561455, 130.04268]);
		p.setValueAtTime(1.0, [ 73.99982, 107.83966]);
		p.setValueAtTime(1.25, [ 72.745155, 140.42343]);
		p.setValueAtTime(1.5, [ 60.811005, 143.60782]);
		p.setValueAtTime(1.75, [ 58.733944, 161.17896]);
		p.setValueAtTime(2.0, [ 43.095997, 149.8803]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 88.0876, 147.17876]);
		p.setValueAtTime(0.25, [ 112.2019, 129.72879]);
		p.setValueAtTime(0.5, [ 52.354836, 110.66909]);
		p.setValueAtTime(0.75, [ 112.31954, 61.80743]);
		p.setValueAtTime(1.0, [ 114.214165, 19.823372]);
		p.setValueAtTime(1.25, [ 75.00784, 30.800583]);
		p.setValueAtTime(1.5, [ 83.948524, 35.156322]);
		p.setValueAtTime(1.75, [ 106.28373, 34.7187]);
		p.setValueAtTime(2.0, [ 109.60781, 47.960308]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 151.12451, 158.6525]);
		p.setValueAtTime(0.25, [ 99.138756, 149.16331]);
		p.setValueAtTime(0.5, [ 112.27718, 133.9413]);
		p.setValueAtTime(0.75, [ 120.19869, 120.86477]);
		p.setValueAtTime(1.0, [ 127.166954, 174.19484]);
		p.setValueAtTime(1.25, [ 134.00844, 164.74811]);
		p.setValueAtTime(1.5, [ 80.49566, 176.3954]);
		p.setValueAtTime(1.75, [ 71.7069, 145.33247]);
		p.setValueAtTime(2.0, [ 67.482315, 161.36934]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 209.72044, 172.4215]);
		p.setValueAtTime(0.25, [ 239.29427, 163.96158]);
		p.setValueAtTime(0.5, [ 206.65034, 185.16803]);
		p.setValueAtTime(0.75, [ 153.05226, 134.29869]);
		p.setValueAtTime(1.0, [ 139.11977, 175.0112]);
		p.setValueAtTime(1.25, [ 165.86845, 168.19664]);
		p.setValueAtTime(1.5, [ 201.9189, 179.79442]);
		p.setValueAtTime(1.75, [ 228.58842, 243.35918]);
		p.setValueAtTime(2.0, [ 241.90875, 236.9048]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 262.02847, 162.54724]);
		p.setValueAtTime(0.25, [ 283.21353, 218.58554]);
		p.setValueAtTime(0.5, [ 251.63622, 216.79004]);
		p.setValueAtTime(0.75, [ 228.76997, 211.7517]);
		p.setValueAtTime(1.0, [ 231.92159, 204.95866]);
		p.setValueAtTime(1.25, [ 230.60034, 126.74387]);
		p.setValueAtTime(1.5, [ 247.10716, 153.17693]);
		p.setValueAtTime(1.75, [ 254.42497, 216.54695]);
		p.setValueAtTime(2.0, [ 270.185, 219.38182]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 309.9358, 172.2207]);
		p.setValueAtTime(0.25, [ 330.33447, 176.67604]);
		p.setValueAtTime(0.5, [ 286.4597, 197.10039]);
		p.setValueAtTime(0.75, [ 340.59152, 169.18927]);
		p.setValueAtTime(1.0, [ 364.2428, 210.87743]);
		p.setValueAtTime(1.25, [ 365.39294, 211.5125]);
		p.setValueAtTime(1.5, [ 375.76633, 212.07549]);
		p.setValueAtTime(1.75, [ 348.52548, 244.94873]);
		p.setValueAtTime(2.0, [ 309.90646, 260.22345]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 363.01358, 134.95105]);
		p.setValueAtTime(0.25, [ 278.97903, 138.85895]);
		p.setValueAtTime(0.5, [ 247.39124, 155.99779]);
		p.setValueAtTime(0.75, [ 221.68736, 191.56549]);
		p.setValueAtTime(1.0, [ 233.38809, 174.57872]);
		p.setValueAtTime(1.25, [ 212.72014, 197.55817]);
		p.setValueAtTime(1.5, [ 229.44254, 171.78528]);
		p.setValueAtTime(1.75, [ 267.08292, 164.48117]);
		p.setValueAtTime(2.0, [ 243.00087, 181.27925]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 443.76312, 160.96466]);
		p.setValueAtTime(0.25, [ 432.57413, 152.00887]);
		p.setValueAtTime(0.5, [ 439.39883, 182.70085]);
		p.setValueAtTime(0.75, [ 455.68478, 184.63629]);
		p.setValueAtTime(1.0, [ 458.71628, 160.44957]);
		p.setValueAtTime(1.25, [ 444.7985, 174.32787]);
		p.setValueAtTime(1.5, [ 411.5838, 167.09427]);
		p.setValueAtTime(1.75, [ 430.6644, 170.82239]);
		p.setValueAtTime(2.0, [ 424.09662, 153.1008]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 519.86975, 140.89783]);
		p.setValueAtTime(0.25, [ 529.26373, 163.2153]);
		p.setValueAtTime(0.5, [ 539.51776, 109.14595]);
		p.setValueAtTime(0.75, [ 499.39825, 125.42509]);
		p.setValueAtTime(1.0, [ 490.97055, 169.41411]);
		p.setValueAtTime(1.25, [ 511.93393, 148.75209]);
		p.setValueAtTime(1.5, [ 483.66293, 165.3202]);
		p.setValueAtTime(1.75, [ 523.8825, 198.82497]);
		p.setValueAtTime(2.0, [ 555.0546, 184.828]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 565.2854, 148.96803]);
		p.setValueAtTime(0.25, [ 522.1773, 133.50203]);
		p.setValueAtTime(0.5, [ 564.13385, 175.7]);
		p.setValueAtTime(0.75, [ 590.66034, 181.86386]);
		p.setValueAtTime(1.0, [ 583.0547, 233.13037]);
		p.setValueAtTime(1.25, [ 582.7731, 245.99516]);
		p.setValueAtTime(1.5, [ 563.463, 274.65372]);
		p.setValueAtTime(1.75, [ 527.2937, 322.69003]);
		p.setValueAtTime(2.0, [ 508.08438, 349.08267]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 613.1938, 134.73453]);
		p.setValueAtTime(0.25, [ 641.09973, 153.42326]);
		p.setValueAtTime(0.5, [ 605.6312, 175.74956]);
		p.setValueAtTime(0.75, [ 556.3778, 221.54137]);
		p.setValueAtTime(1.0, [ 583.1671, 210.0666]);
		p.setValueAtTime(1.25, [ 578.35266, 155.34038]);
		p.setValueAtTime(1.5, [ 609.94037, 166.90404]);
		p.setValueAtTime(1.75, [ 595.41565, 202.43527]);
		p.setValueAtTime(2.0, [ 651.54456, 205.86172]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 700.38727, 158.61252]);
		p.setValueAtTime(0.25, [ 743.9541, 151.13055]);
		p.setValueAtTime(0.5, [ 705.726, 173.9193]);
		p.setValueAtTime(0.75, [ 699.4174, 159.44579]);
		p.setValueAtTime(1.0, [ 650.81726, 170.06436]);
		p.setValueAtTime(1.25, [ 686.21924, 147.8404]);
		p.setValueAtTime(1.5, [ 720.64746, 106.231316]);
		p.setValueAtTime(1.75, [ 709.93884, 106.927734]);
		p.setValueAtTime(2.0, [ 701.06226, 127.31535]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 776.29443, 150.66728]);
		p.setValueAtTime(0.25, [ 792.31903, 147.63345]);
		p.setValueAtTime(0.5, [ 778.4991, 186.03569]);
		p.setValueAtTime(0.75, [ 777.85675, 260.04074]);
		p.setValueAtTime(1.0, [ 779.7939, 244.81023]);
		p.setValueAtTime(1.25, [ 751.2275, 219.502]);
		p.setValueAtTime(1.5, [ 755.23883, 223.37694]);
		p.setValueAtTime(1.75, [ 761.80475, 237.71086]);
		p.setValueAtTime(2.0, [ 741.58777, 220.28627]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 814.70416, 140.93993]);
		p.setValueAtTime(0.25, [ 776.21136, 96.14325]);
		p.setValueAtTime(0.5, [ 796.03094, 79.09588]);
		p.setValueAtTime(0.75, [ 856.3507, 98.731865]);
		p.setValueAtTime(1.0, [ 853.9622, 82.79618]);
		p.setValueAtTime(1.25, [ 857.5024, 63.99239]);
		p.setValueAtTime(1.5, [ 865.77277, 95.7347]);
		p.setValueAtTime(1.75, [ 910.8214, 83.103935]);
		p.setValueAtTime(2.0, [ 912.9472, 72.250946]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 867.8908, 145.57289]);
		p.setValueAtTime(0.25, [ 889.78534, 183.10506]);
		p.setValueAtTime(0.5, [ 882.2148, 143.71898]);
		p.setValueAtTime(0.75, [ 861.3598, 121.26068]);
		p.setValueAtTime(1.0, [ 809.2112, 112.84065]);
		p.setValueAtTime(1.25, [ 833.4892, 65.832596]);
		p.setValueAtTime(1.5, [ 871.34344, 59.523487]);
		p.setValueAtTime(1.75, [ 847.1886, 76.97198]);
		p.setValueAtTime(2.0, [ 823.71594, 92.40286]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 908.9531, 136.11877]);
		p.setValueAtTime(0.25, [ 864.7405, 136.4179]);
		p.setValueAtTime(0.5, [ 827.0385, 155.82716]);
		p.setValueAtTime(0.75, [ 826.4303, 179.32475]);
		p.setValueAtTime(1.0, [ 833.51056, 172.13466]);
		p.setValueAtTime(1.25, [ 879.92755, 171.64854]);
		p.setValueAtTime(1.5, [ 836.6084, 211.1282]);
		p.setValueAtTime(1.75, [ 857.5756, 200.26366]);
		p.setValueAtTime(2.0, [ 859.0602, 173.47597]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 998.24915, 156.30621]);
		p.setValueAtTime(0.25, [ 1038.5317, 128.1756]);
		p.setValueAtTime(0.5, [ 1031.3158, 161.29536]);
		p.setValueAtTime(0.75, [ 1089.1024, 155.51332]);
		p.setValueAtTime(1.0, [ 1058.2537, 196.37595]);
		p.setValueAtTime(1.25, [ 1057.199, 224.85172]);
		p.setValueAtTime(1.5, [ 996.4091, 202.78589]);
		p.setValueAtTime(1.75, [ 1018.3748, 172.44669]);
		p.setValueAtTime(2.0, [ 1022.6868, 168.8315]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1045.1956, 144.76099]);
		p.setValueAtTime(0.25, [ 1029.5328, 119.91529]);
		p.setValueAtTime(0.5, [ 1025.185, 87.37902]);
		p.setValueAtTime(0.75, [ 990.097, 83.58216]);
		p.setValueAtTime(1.0, [ 962.6715, 113.90529]);
		p.setValueAtTime(1.25, [ 919.4255, 113.634056]);
		p.setValueAtTime(1.5, [ 913.2786, 142.60689]);
		p.setValueAtTime(1.75, [ 945.1271, 154.26747]);
		p.setValueAtTime(2.0, [ 958.23724, 147.50435]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1120.6467, 154.16278]);
		p.setValueAtTime(0.25, [ 1153.7762, 230.84294]);
		p.setValueAtTime(0.5, [ 1140.9623, 213.91504]);
		p.setValueAtTime(0.75, [ 1126.7881, 226.13292]);
		p.setValueAtTime(1.0, [ 1133.1199, 215.77855]);
		p.setValueAtTime(1.25, [ 1179.7743, 216.26778]);
		p.setValueAtTime(1.5, [ 1159.9467, 195.69736]);
		p.setValueAtTime(1.75, [ 1194.159, 199.18599]);
		p.setValueAtTime(2.0, [ 1190.1434, 228.3701]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1172.6963, 134.36963]);
		p.setValueAtTime(0.25, [ 1203.6327, 174.94856]);
		p.setValueAtTime(0.5, [ 1233.1713, 186.83289]);
		p.setValueAtTime(0.75, [ 1204.3416, 194.18924]);
		p.setValueAtTime(1.0, [ 1201.0793, 198.79205]);
		p.setValueAtTime(1.25, [ 1193.8506, 169.5657]);
		p.setValueAtTime(1.5, [ 1183.4247, 181.60661]);
		p.setValueAtTime(1.75, [ 1180.1152, 183.6636]);
		p.setValueAtTime(2.0, [ 1138.9869, 181.3039]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1227.0444, 163.33687]);
		p.setValueAtTime(0.25, [ 1236.7291, 190.58728]);
		p.setValueAtTime(0.5, [ 1223.9808, 220.81787]);
		p.setValueAtTime(0.75, [ 1210.1583, 239.6226]);
		p.setValueAtTime(1.0, [ 1231.3505, 237.69104]);
		p.setValueAtTime(1.25, [ 1233.4794, 249.73592]);
		p.setValueAtTime(1.5, [ 1181.3767, 244.8887]);
		p.setValueAtTime(1.75, [ 1200.5181, 214.18811]);
		p.setValueAtTime(2.0, [ 1194.271, 202.92842]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1300.9109, 126.25335]);
		p.setValueAtTime(0.25, [ 1325.6078, 133.36829]);
		p.setValueAtTime(0.5, [ 1280.2134, 126.15187]);
		p.setValueAtTime(0.75, [ 1295.9343, 191.70079]);
		p.setValueAtTime(1.0, [ 1284.1731, 247.64001]);
		p.setValueAtTime(1.25, [ 1304.2144, 204.38658]);
		p.setValueAtTime(1.5, [ 1305.6178, 133.27443]);
		p.setValueAtTime(1.75, [ 1329.1023, 116.56252]);
		p.setValueAtTime(2.0, [ 1372.8105, 139.00429]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1337.5889, 148.14397]);
		p.setValueAtTime(0.25, [ 1340.2993, 85.567154]);
		p.setValueAtTime(0.5, [ 1345.6635, 69.60238]);
		p.setValueAtTime(0.75, [ 1360.8029, 84.9967]);
		p.setValueAtTime(1.0, [ 1377.4186, 106.14898]);
		p.setValueAtTime(1.25, [ 1366.0508, 82.0544]);
		p.setValueAtTime(1.5, [ 1325.648, 72.944145]);
		p.setValueAtTime(1.75, [ 1279.1664, 57.98224]);
		p.setValueAtTime(2.0, [ 1249.9734, 63.2342]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1419.7559, 133.0479]);
		p.setValueAtTime(0.25, [ 1405.4407, 146.39594]);
		p.setValueAtTime(0.5, [ 1389.4171, 117.72727]);
		p.setValueAtTime(0.75, [ 1393.4528, 161.53728]);
		p.setValueAtTime(1.0, [ 1418.091, 168.30766]);
		p.setValueAtTime(1.25, [ 1416.0946, 211.6753]);
		p.setValueAtTime(1.5, [ 1441.4987, 260.8835]);
		p.setValueAtTime(1.75, [ 1445.9761, 240.00703]);
		p.setValueAtTime(2.0, [ 1422.0504, 248.66644]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1458.061, 155.45654]);
		p.setValueAtTime(0.25, [ 1442.257, 189.08368]);
		p.setValueAtTime(0.5, [ 1446.1455, 223.77261]);
		p.setValueAtTime(0.75, [ 1476.3585, 184.60393]);
		p.setValueAtTime(1.0, [ 1501.4979, 186.91559]);
		p.setValueAtTime(1.25, [ 1503.5796, 192.68399]);
		p.setValueAtTime(1.5, [ 1513.7192, 191.23286]);
		p.setValueAtTime(1.75, [ 1524.8887, 217.22893]);
		p.setValueAtTime(2.0, [ 1491.1936, 175.30945]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1553.6721, 145.5399]);
		p.setValueAtTime(0.25, [ 1558.2095, 152.72057]);
		p.setValueAtTime(0.5, [ 1585.0913, 192.82133]);
		p.setValueAtTime(0.75, [ 1618.5754, 196.85876]);
		p.setValueAtTime(1.0, [ 1622.2572, 135.39954]);
		p.setValueAtTime(1.25, [ 1640.8489, 92.39074]);
		p.setValueAtTime(1.5, [ 1615.2836, 73.87638]);
		p.setValueAtTime(1.75, [ 1586.101, 90.361595]);
		p.setValueAtTime(2.0, [ 1641.5991, 135.17041]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1587.6279, 174.232]);
		p.setValueAtTime(0.25, [ 1641.1035, 157.21233]);
		p.setValueAtTime(0.5, [ 1678.0332, 166.54564]);
		p.setValueAtTime(0.75, [ 1696.925, 148.43495]);
		p.setValueAtTime(1.0, [ 1732.2281, 162.99919]);
		p.setValueAtTime(1.25, [ 1709.3456, 170.85085]);
		p.setValueAtTime(1.5, [ 1741.2952, 138.53645]);
		p.setValueAtTime(1.75, [ 1668.2347, 153.04135]);
		p.setValueAtTime(2.0, [ 1670.893, 179.77145]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1646.1237, 139.79254]);
		p.setValueAtTime(0.25, [ 1640.7513, 144.60788]);
		p.setValueAtTime(0.5, [ 1666.8436, 163.05379]);
		p.setValueAtTime(0.75, [ 1651.5902, 167.76364]);
		p.setValueAtTime(1.0, [ 1681.8221, 144.35825]);
		p.setValueAtTime(1.25, [ 1670.6025, 138.1219]);
		p.setValueAtTime(1.5, [ 1700.3759, 147.52664]);
		p.setValueAtTime(1.75, [ 1705.4375, 142.79977]);
		p.setValueAtTime(2.0, [ 1699.5837, 118.21173]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1711.2448, 163.19116]);
		p.setValueAtTime(0.25, [ 1723.8406, 163.76137]);
		p.setValueAtTime(0.5, [ 1736.6278, 165.82378]);
		p.setValueAtTime(0.75, [ 1739.1777, 133.41776]);
		p.setValueAtTime(1.0, [ 1782.8422, 109.68377]);
		p.setValueAtTime(1.25, [ 1767.184, 53.42395]);
		p.setValueAtTime(1.5, [ 1714.2235, 47.711533]);
		p.setValueAtTime(1.75, [ 1712.0205, 52.084167]);
		p.setValueAtTime(2.0, [ 1731.7981, 45.818653]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1755.0266, 151.62753]);
		p.setValueAtTime(0.25, [ 1773.5715, 170.15224]);
		p.setValueAtTime(0.5, [ 1753.1764, 202.18352]);
		p.setValueAtTime(0.75, [ 1755.4244, 191.962]);
		p.setValueAtTime(1.0, [ 1832.718, 182.17784]);
		p.setValueAtTime(1.25, [ 1836.4143, 167.71515]);
		p.setValueAtTime(1.5, [ 1826.275, 160.239]);
		p.setValueAtTime(1.75, [ 1777.6924, 142.68231]);
		p.setValueAtTime(2.0, [ 1771.5818, 181.07133]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1836.8038, 160.63506]);
		p.setValueAtTime(0.25, [ 1865.0327, 189.22334]);
		p.setValueAtTime(0.5, [ 1847.176, 177.02623]);
		p.setValueAtTime(0.75, [ 1864.6403, 153.0362]);
		p.setValueAtTime(1.0, [ 1820.6844, 111.69942]);
		p.setValueAtTime(1.25, [ 1804.1063, 126.79128]);
		p.setValueAtTime(1.5, [ 1800.5653, 132.67828]);
		p.setValueAtTime(1.75, [ 1790.4137, 113.3102]);
		p.setValueAtTime(2.0, [ 1752.403, 165.31432]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1877.2327, 155.32275]);
		p.setValueAtTime(0.25, [ 1903.576, 168.43555]);
		p.setValueAtTime(0.5, [ 1923.5663, 139.41936]);
		p.setValueAtTime(0.75, [ 1902.7083, 15.758588]);
		p.setValueAtTime(1.0, [ 1893.2168, 19.60058]);
		p.setValueAtTime(1.25, [ 1903.6986, 20.54335]);
		p.setValueAtTime(1.5, [ 1934.7301, -14.911551]);
		p.setValueAtTime(1.75, [ 1942.7604, 28.45687]);
		p.setValueAtTime(2.0, [ 1896.2262, 6.2588754]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 16.608135, 217.0681]);
		p.setValueAtTime(0.25, [ 12.998144, 287.14307]);
		p.setValueAtTime(0.5, [ 28.541174, 268.64447]);
		p.setValueAtTime(0.75, [ -8.385074, 269.79474]);
		p.setValueAtTime(1.0, [ -1.8572737, 281.2488]);
		p.setValueAtTime(1.25, [ 14.492093, 281.1092]);
		p.setValueAtTime(1.5, [ 22.746342, 292.17627]);
		p.setValueAtTime(1.75, [ 9.442781, 289.35785]);
		p.setValueAtTime(2.0, [ -2.1620293, 289.6866]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 71.55012, 196.93909]);
		p.setValueAtTime(0.25, [ 52.787216, 169.24007]);
		p.setValueAtTime(0.5, [ 53.15, 185.34709]);
		p.setValueAtTime(0.75, [ 35.398083, 124.5198]);
		p.setValueAtTime(1.0, [ 65.339615, 136.19786]);
		p.setValueAtTime(1.25, [ 96.57367, 174.66544]);
		p.setValueAtTime(1.5, [ 108.959526, 210.80132]);
		p.setValueAtTime(1.75, [ 68.53853, 163.95294]);
		p.setValueAtTime(2.0, [ 86.980736, 188.30467]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 135.99963, 201.72469]);
		p.setValueAtTime(0.25, [ 121.66091, 194.3348]);
		p.setValueAtTime(0.5, [ 101.97797, 186.92776]);
		p.setValueAtTime(0.75, [ 89.98371, 164.29637]);
		p.setValueAtTime(1.0, [ 135.04335, 156.55394]);
		p.setValueAtTime(1.25, [ 143.73323, 196.70372]);
		p.setValueAtTime(1.5, [ 131.31602, 174.42163]);
		p.setValueAtTime(1.75, [ 107.92686, 163.89417]);
		p.setValueAtTime(2.0, [ 124.06002, 113.419235]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 224.90585, 209.99513]);
		p.setValueAtTime(0.25, [ 164.00949, 200.09433]);
		p.setValueAtTime(0.5, [ 177.64998, 183.29227]);
		p.setValueAtTime(0.75, [ 228.86392, 210.79826]);
		p.setValueAtTime(1.0, [ 204.2797, 231.96855]);
		p.setValueAtTime(1.25, [ 239.56978, 256.29172]);
		p.setValueAtTime(1.5, [ 225.22916, 258.32907]);
		p.setValueAtTime(1.75, [ 217.18779, 205.04436]);
		p.setValueAtTime(2.0, [ 225.68909, 221.90889]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 288.9593, 208.27667]);
		p.setValueAtTime(0.25, [ 295.53702, 200.6375]);
		p.setValueAtTime(0.5, [ 279.93573, 210.52324]);
		p.setValueAtTime(0.75, [ 259.76593, 134.22505]);
		p.setValueAtTime(1.0, [ 306.06894, 80.57768]);
		p.setValueAtTime(1.25, [ 303.3901, 27.44643]);
		p.setValueAtTime(1.5, [ 319.30045, 41.35628]);
		p.setValueAtTime(1.75, [ 307.09146, 72.78359]);
		p.setValueAtTime(2.0, [ 266.4705, 82.70851]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 325.1202, 202.26292]);
		p.setValueAtTime(0.25, [ 236.48915, 210.81465]);
		p.setValueAtTime(0.5, [ 265.55087, 165.54239]);
		p.setValueAtTime(0.75, [ 272.9203, 124.61442]);
		p.setValueAtTime(1.0, [ 278.99695, 71.27625]);
		p.setValueAtTime(1.25, [ 263.55017, 39.15245]);
		p.setValueAtTime(1.5, [ 262.84195, 56.37677]);
		p.setValueAtTime(1.75, [ 217.65178, 73.464966]);
		p.setValueAtTime(2.0, [ 197.90474, 75.33222]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 411.2384, 202.92836]);
		p.setValueAtTime(0.25, [ 410.53198, 219.40613]);
		p.setValueAtTime(0.5, [ 409.8531, 233.68819]);
		p.setValueAtTime(0.75, [ 401.28815, 244.63187]);
		p.setValueAtTime(1.0, [ 409.45584, 279.68137]);
		p.setValueAtTime(1.25, [ 410.7874, 270.11627]);
		p.setValueAtTime(1.5, [ 456.52008, 259.20883]);
		p.setValueAtTime(1.75, [ 488.25714, 254.03758]);
		p.setValueAtTime(2.0, [ 520.4009, 266.42178]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 436.38135, 217.26259]);
		p.setValueAtTime(0.25, [ 422.93564, 209.33752]);
		p.setValueAtTime(0.5, [ 384.81808, 210.8337]);
		p.setValueAtTime(0.75, [ 346.2414, 225.4322]);
		p.setValueAtTime(1.0, [ 356.53122, 220.424]);
		p.setValueAtTime(1.25, [ 349.43527, 150.20142]);
		p.setValueAtTime(1.5, [ 362.60278, 164.94025]);
		p.setValueAtTime(1.75, [ 407.12375, 159.74171]);
		p.setValueAtTime(2.0, [ 388.33328, 184.34698]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 516.0745, 219.78522]);
		p.setValueAtTime(0.25, [ 514.6632, 241.6945]);
		p.setValueAtTime(0.5, [ 514.37823, 264.8602]);
		p.setValueAtTime(0.75, [ 510.94553, 269.3861]);
		p.setValueAtTime(1.0, [ 511.93643, 269.47592]);
		p.setValueAtTime(1.25, [ 552.8899, 256.2758]);
		p.setValueAtTime(1.5, [ 571.1815, 226.8867]);
		p.setValueAtTime(1.75, [ 573.6523, 222.21275]);
		p.setValueAtTime(2.0, [ 551.0457, 178.79257]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 569.874, 202.58844]);
		p.setValueAtTime(0.25, [ 623.83356, 202.52083]);
		p.setValueAtTime(0.5, [ 611.0688, 199.8624]);
		p.setValueAtTime(0.75, [ 654.8673, 221.37796]);
		p.setValueAtTime(1.0, [ 686.24805, 154.64293]);
		p.setValueAtTime(1.25, [ 696.9892, 187.55188]);
		p.setValueAtTime(1.5, [ 682.49457, 230.91129]);
		p.setValueAtTime(1.75, [ 692.10754, 270.01935]);
		p.setValueAtTime(2.0, [ 686.6536, 251.24144]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 655.78644, 213.81316]);
		p.setValueAtTime(0.25, [ 660.5228, 225.09229]);
		p.setValueAtTime(0.5, [ 706.26483, 225.91368]);
		p.setValueAtTime(0.75, [ 655.48755, 236.57103]);
		p.setValueAtTime(1.0, [ 660.738, 208.79344]);
		p.setValueAtTime(1.25, [ 617.00336, 224.26135]);
		p.setValueAtTime(1.5, [ 669.9318, 217.98123]);
		p.setValueAtTime(1.75, [ 723.6619, 220.96477]);
		p.setValueAtTime(2.0, [ 714.2793, 209.34549]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 702.13477, 199.50389]);
		p.setValueAtTime(0.25, [ 705.80273, 161.72441]);
		p.setValueAtTime(0.5, [ 660.1265, 164.31053]);
		p.setValueAtTime(0.75, [ 626.2606, 175.22704]);
		p.setValueAtTime(1.0, [ 626.4202, 188.61447]);
		p.setValueAtTime(1.25, [ 569.79926, 136.79082]);
		p.setValueAtTime(1.5, [ 542.55634, 96.6741]);
		p.setValueAtTime(1.75, [ 530.1192, 121.42572]);
		p.setValueAtTime(2.0, [ 509.7547, 116.30518]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 744.53503, 210.88335]);
		p.setValueAtTime(0.25, [ 745.236, 252.43756]);
		p.setValueAtTime(0.5, [ 739.39325, 280.84906]);
		p.setValueAtTime(0.75, [ 769.6535, 292.70456]);
		p.setValueAtTime(1.0, [ 776.4621, 333.2672]);
		p.setValueAtTime(1.25, [ 813.5768, 309.9336]);
		p.setValueAtTime(1.5, [ 825.13586, 337.53302]);
		p.setValueAtTime(1.75, [ 764.2516, 374.86972]);
		p.setValueAtTime(2.0, [ 757.41406, 355.34753]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 797.57336, 204.29686]);
		p.setValueAtTime(0.25, [ 837.8285, 195.3638]);
		p.setValueAtTime(0.5, [ 820.2749, 229.9836]);
		p.setValueAtTime(0.75, [ 818.06104, 194.75963]);
		p.setValueAtTime(1.0, [ 866.91486, 219.0002]);
		p.setValueAtTime(1.25, [ 887.88116, 206.23145]);
		p.setValueAtTime(1.5, [ 875.06445, 207.37271]);
		p.setValueAtTime(1.75, [ 883.0192, 130.93419]);
		p.setValueAtTime(2.0, [ 905.90594, 155.90036]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 873.2788, 197.32896]);
		p.setValueAtTime(0.25, [ 893.871, 226.1331]);
		p.setValueAtTime(0.5, [ 931.9419, 257.45352]);
		p.setValueAtTime(0.75, [ 973.45966, 296.42188]);
		p.setValueAtTime(1.0, [ 992.69305, 276.55838]);
		p.setValueAtTime(1.25, [ 979.1748, 257.82303]);
		p.setValueAtTime(1.5, [ 939.7011, 248.33047]);
		p.setValueAtTime(1.75, [ 959.25323, 272.61084]);
		p.setValueAtTime(2.0, [ 950.32227, 285.63553]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 949.2161, 211.69272]);
		p.setValueAtTime(0.25, [ 932.50867, 169.26376]);
		p.setValueAtTime(0.5, [ 898.28906, 140.63536]);
		p.setValueAtTime(0.75, [ 931.9665, 103.44613]);
		p.setValueAtTime(1.0, [ 936.352, 157.43993]);
		p.setValueAtTime(1.25, [ 935.042, 169.29915]);
		p.setValueAtTime(1.5, [ 927.8506, 201.76534]);
		p.setValueAtTime(1.75, [ 926.4678, 207.91295]);
		p.setValueAtTime(2.0, [ 1009.6259, 231.6522]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 987.4459, 218.11842]);
		p.setValueAtTime(0.25, [ 1008.6985, 180.55426]);
		p.setValueAtTime(0.5, [ 996.68536, 189.64258]);
		p.setValueAtTime(0.75, [ 983.5678, 186.82018]);
		p.setValueAtTime(1.0, [ 961.4264, 204.21176]);
		p.setValueAtTime(1.25, [ 928.66205, 226.56558]);
		p.setValueAtTime(1.5, [ 928.7282, 237.1251]);
		p.setValueAtTime(1.75, [ 915.7848, 218.07498]);
		p.setValueAtTime(2.0, [ 912.4651, 201.9785]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1043.0945, 194.17561]);
		p.setValueAtTime(0.25, [ 989.03204, 190.52034]);
		p.setValueAtTime(0.5, [ 995.45685, 155.91246]);
		p.setValueAtTime(0.75, [ 965.7251, 167.8397]);
		p.setValueAtTime(1.0, [ 905.9136, 142.82336]);
		p.setValueAtTime(1.25, [ 894.35333, 143.65648]);
		p.setValueAtTime(1.5, [ 854.4017, 114.34719]);
		p.setValueAtTime(1.75, [ 906.77924, 141.4999]);
		p.setValueAtTime(2.0, [ 903.0075, 159.47575]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1091.0859, 233.18033]);
		p.setValueAtTime(0.25, [ 1109.3928, 238.04083]);
		p.setValueAtTime(0.5, [ 1099.712, 221.73027]);
		p.setValueAtTime(0.75, [ 1120.6244, 229.3571]);
		p.setValueAtTime(1.0, [ 1083.7437, 188.60997]);
		p.setValueAtTime(1.25, [ 1065.705, 197.3931]);
		p.setValueAtTime(1.5, [ 1052.4723, 179.38818]);
		p.setValueAtTime(1.75, [ 1025.6683, 194.47778]);
		p.setValueAtTime(2.0, [ 1050.2327, 225.18338]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1166.8214, 218.37463]);
		p.setValueAtTime(0.25, [ 1180.4221, 141.71404]);
		p.setValueAtTime(0.5, [ 1154.3181, 171.08138]);
		p.setValueAtTime(0.75, [ 1182.3109, 136.34952]);
		p.setValueAtTime(1.0, [ 1184.0619, 160.84094]);
		p.setValueAtTime(1.25, [ 1186.8114, 169.45438]);
		p.setValueAtTime(1.5, [ 1197.3015, 196.36783]);
		p.setValueAtTime(1.75, [ 1221.6699, 178.10336]);
		p.setValueAtTime(2.0, [ 1239.9905, 185.08118]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1238.256, 225.59477]);
		p.setValueAtTime(0.25, [ 1208.2172, 173.227]);
		p.setValueAtTime(0.5, [ 1243.0664, 190.2984]);
		p.setValueAtTime(0.75, [ 1210.532, 143.14851]);
		p.setValueAtTime(1.0, [ 1242.1323, 194.08214]);
		p.setValueAtTime(1.25, [ 1266.2904, 210.77588]);
		p.setValueAtTime(1.5, [ 1296.8071, 260.035]);
		p.setValueAtTime(1.75, [ 1322.5668, 263.18854]);
		p.setValueAtTime(2.0, [ 1341.6223, 237.96]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1271.7604, 210.72516]);
		p.setValueAtTime(0.25, [ 1289.6547, 209.69827]);
		p.setValueAtTime(0.5, [ 1325.7327, 207.80508]);
		p.setValueAtTime(0.75, [ 1355.4315, 166.09732]);
		p.setValueAtTime(1.0, [ 1353.451, 159.45923]);
		p.setValueAtTime(1.25, [ 1359.7811, 145.81894]);
		p.setValueAtTime(1.5, [ 1345.0656, 151.99855]);
		p.setValueAtTime(1.75, [ 1319.785, 174.1823]);
		p.setValueAtTime(2.0, [ 1294.581, 214.28252]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1373.1416, 233.29514]);
		p.setValueAtTime(0.25, [ 1409.4244, 235.96822]);
		p.setValueAtTime(0.5, [ 1418.3772, 219.62471]);
		p.setValueAtTime(0.75, [ 1398.4578, 259.8889]);
		p.setValueAtTime(1.0, [ 1341.0741, 274.58087]);
		p.setValueAtTime(1.25, [ 1324.9852, 324.54343]);
		p.setValueAtTime(1.5, [ 1282.2249, 307.67163]);
		p.setValueAtTime(1.75, [ 1284.5492, 288.7399]);
		p.setValueAtTime(2.0, [ 1321.6508, 325.11514]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1380.8159, 209.42097]);
		p.setValueAtTime(0.25, [ 1387.5718, 216.82166]);
		p.setValueAtTime(0.5, [ 1383.1533, 216.21866]);
		p.setValueAtTime(0.75, [ 1347.3324, 225.19408]);
		p.setValueAtTime(1.0, [ 1393.6238, 208.76878]);
		p.setValueAtTime(1.25, [ 1393.745, 224.9163]);
		p.setValueAtTime(1.5, [ 1375.589, 195.5813]);
		p.setValueAtTime(1.75, [ 1374.9346, 162.8134]);
		p.setValueAtTime(2.0, [ 1352.2393, 201.86342]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1464.8978, 207.60434]);
		p.setValueAtTime(0.25, [ 1503.5571, 294.8835]);
		p.setValueAtTime(0.5, [ 1508.5061, 275.8008]);
		p.setValueAtTime(0.75, [ 1514.7942, 275.95905]);
		p.setValueAtTime(1.0, [ 1476.2384, 278.19165]);
		p.setValueAtTime(1.25, [ 1462.9814, 277.3474]);
		p.setValueAtTime(1.5, [ 1459.3795, 267.1811]);
		p.setValueAtTime(1.75, [ 1477.2626, 263.4424]);
		p.setValueAtTime(2.0, [ 1492.0027, 283.9531]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1530.235, 208.22713]);
		p.setValueAtTime(0.25, [ 1570.0931, 212.32379]);
		p.setValueAtTime(0.5, [ 1545.1136, 169.90675]);
		p.setValueAtTime(0.75, [ 1567.7872, 178.58916]);
		p.setValueAtTime(1.0, [ 1574.991, 159.62604]);
		p.setValueAtTime(1.25, [ 1587.677, 121.66128]);
		p.setValueAtTime(1.5, [ 1610.5721, 101.60168]);
		p.setValueAtTime(1.75, [ 1592.0852, 85.703606]);
		p.setValueAtTime(2.0, [ 1595.6715, 111.93324]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1601.4493, 227.35948]);
		p.setValueAtTime(0.25, [ 1595.0177, 211.53796]);
		p.setValueAtTime(0.5, [ 1646.5472, 242.20996]);
		p.setValueAtTime(0.75, [ 1635.2147, 244.3756]);
		p.setValueAtTime(1.0, [ 1620.5969, 238.67688]);
		p.setValueAtTime(1.25, [ 1592.1561, 225.9331]);
		p.setValueAtTime(1.5, [ 1598.7435, 233.4574]);
		p.setValueAtTime(1.75, [ 1608.0555, 210.92253]);
		p.setValueAtTime(2.0, [ 1642.2998, 233.80687]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1653.9297, 210.02838]);
		p.setValueAtTime(0.25, [ 1663.0356, 187.77841]);
		p.setValueAtTime(0.5, [ 1648.4531, 202.11858]);
		p.setValueAtTime(0.75, [ 1677.7083, 205.66756]);
		p.setValueAtTime(1.0, [ 1686.0471, 208.87866]);
		p.setValueAtTime(1.25, [ 1726.8313, 209.20312]);
		p.setValueAtTime(1.5, [ 1703.8138, 206.78075]);
		p.setValueAtTime(1.75, [ 1727.6895, 205.40446]);
		p.setValueAtTime(2.0, [ 1731.9825, 205.63646]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1708.4662, 216.55777]);
		p.setValueAtTime(0.25, [ 1715.232, 179.55025]);
		p.setValueAtTime(0.5, [ 1703.2338, 199.4573]);
		p.setValueAtTime(0.75, [ 1715.596, 163.44121]);
		p.setValueAtTime(1.0, [ 1718.2653, 179.21432]);
		p.setValueAtTime(1.25, [ 1764.1064, 160.58008]);
		p.setValueAtTime(1.5, [ 1792.1025, 153.11258]);
		p.setValueAtTime(1.75, [ 1819.7223, 177.34854]);
		p.setValueAtTime(2.0, [ 1807.9758, 173.4396]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1772.699, 194.04245]);
		p.setValueAtTime(0.25, [ 1739.933, 252.83942]);
		p.setValueAtTime(0.5, [ 1723.1904, 224.15828]);
		p.setValueAtTime(0.75, [ 1766.1439, 198.52159]);
		p.setValueAtTime(1.0, [ 1782.4628, 186.77946]);
		p.setValueAtTime(1.25, [ 1761.516, 190.55952]);
		p.setValueAtTime(1.5, [ 1768.7821, 210.80777]);
		p.setValueAtTime(1.75, [ 1779.5067, 211.94261]);
		p.setValueAtTime(2.0, [ 1777.6526, 198.75739]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1825.4879, 206.38715]);
		p.setValueAtTime(0.25, [ 1803.9221, 203.41472]);
		p.setValueAtTime(0.5, [ 1850.3622, 189.63359]);
		p.setValueAtTime(0.75, [ 1878.469, 206.58208]);
		p.setValueAtTime(1.0, [ 1905.6656, 229.6737]);
		p.setValueAtTime(1.25, [ 1928.9807, 244.44868]);
		p.setValueAtTime(1.5, [ 1907.8688, 245.84329]);
		p.setValueAtTime(1.75, [ 1930.0859, 210.65569]);
		p.setValueAtTime(2.0, [ 1881.1296, 138.60124]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1898.342, 200.43265]);
		p.setValueAtTime(0.25, [ 1861.5613, 166.17946]);
		p.setValueAtTime(0.5, [ 1879.217, 246.37358]);
		p.setValueAtTime(0.75, [ 1880.7357, 256.28748]);
		p.setValueAtTime(1.0, [ 1851.5719, 197.14265]);
		p.setValueAtTime(1.25, [ 1862.3635, 201.39938]);
		p.setValueAtTime(1.5, [ 1862.1901, 196.81198]);
		p.setValueAtTime(1.75, [ 1835.441, 177.5625]);
		p.setValueAtTime(2.0, [ 1791.0415, 192.19542]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 10.653056, 269.1844]);
		p.setValueAtTime(0.25, [ -2.550366, 278.58875]);
		p.setValueAtTime(0.5, [ -1.1936512, 300.96512]);
		p.setValueAtTime(0.75, [ 5.96371, 260.15045]);
		p.setValueAtTime(1.0, [ 38.877514, 230.42949]);
		p.setValueAtTime(1.25, [ 62.87852, 204.73412]);
		p.setValueAtTime(1.5, [ 80.59291, 270.43253]);
		p.setValueAtTime(1.75, [ 65.09262, 300.0863]);
		p.setValueAtTime(2.0, [ 75.823425, 299.33643]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 84.024796, 279.6081]);
		p.setValueAtTime(0.25, [ 125.44541, 281.39218]);
		p.setValueAtTime(0.5, [ 63.613323, 275.51572]);
		p.setValueAtTime(0.75, [ 49.57026, 230.997]);
		p.setValueAtTime(1.0, [ 61.343994, 200.54356]);
		p.setValueAtTime(1.25, [ 65.75384, 180.13599]);
		p.setValueAtTime(1.5, [ 73.88999, 187.8972]);
		p.setValueAtTime(1.75, [ 100.44014, 222.88402]);
		p.setValueAtTime(2.0, [ 99.105934, 202.4578]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 168.73189, 252.29245]);
		p.setValueAtTime(0.25, [ 185.88281, 267.40112]);
		p.setValueAtTime(0.5, [ 188.51347, 223.94334]);
		p.setValueAtTime(0.75, [ 215.2865, 252.56108]);
		p.setValueAtTime(1.0, [ 244.76045, 281.00122]);
		p.setValueAtTime(1.25, [ 252.08904, 292.63]);
		p.setValueAtTime(1.5, [ 231.00313, 221.02017]);
		p.setValueAtTime(1.75, [ 214.6353, 226.40994]);
		p.setValueAtTime(2.0, [ 278.17822, 247.69006]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 207.37724, 260.8057]);
		p.setValueAtTime(0.25, [ 159.44884, 338.763]);
		p.setValueAtTime(0.5, [ 128.41531, 338.9791]);
		p.setValueAtTime(0.75, [ 92.28073, 303.1726]);
		p.setValueAtTime(1.0, [ 107.061485, 310.52957]);
		p.setValueAtTime(1.25, [ 119.69009, 296.73782]);
		p.setValueAtTime(1.5, [ 75.682236, 324.43857]);
		p.setValueAtTime(1.75, [ 116.53805, 380.83466]);
		p.setValueAtTime(2.0, [ 85.77374, 387.25754]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 264.16064, 263.97018]);
		p.setValueAtTime(0.25, [ 259.39505, 244.59663]);
		p.setValueAtTime(0.5, [ 220.56868, 252.9458]);
		p.setValueAtTime(0.75, [ 212.09476, 284.95615]);
		p.setValueAtTime(1.0, [ 204.28485, 263.28488]);
		p.setValueAtTime(1.25, [ 221.49194, 233.8856]);
		p.setValueAtTime(1.5, [ 213.85295, 217.47615]);
		p.setValueAtTime(1.75, [ 218.61497, 241.93846]);
		p.setValueAtTime(2.0, [ 234.22981, 271.26407]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 321.66922, 255.60141]);
		p.setValueAtTime(0.25, [ 355.61163, 251.19527]);
		p.setValueAtTime(0.5, [ 356.53342, 282.03098]);
		p.setValueAtTime(0.75, [ 347.1179, 262.093]);
		p.setValueAtTime(1.0, [ 336.08698, 257.61148]);
		p.setValueAtTime(1.25, [ 333.06876, 251.04716]);
		p.setValueAtTime(1.5, [ 353.0901, 275.7617]);
		p.setValueAtTime(1.75, [ 400.08725, 287.44504]);
		p.setValueAtTime(2.0, [ 353.89642, 302.9734]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 401.50858, 271.4352]);
		p.setValueAtTime(0.25, [ 439.78656, 261.8391]);
		p.setValueAtTime(0.5, [ 482.49918, 273.15436]);
		p.setValueAtTime(0.75, [ 506.76904, 240.12732]);
		p.setValueAtTime(1.0, [ 469.72076, 265.59073]);
		p.setValueAtTime(1.25, [ 501.95776, 276.30743]);
		p.setValueAtTime(1.5, [ 473.53897, 276.93158]);
		p.setValueAtTime(1.75, [ 472.08112, 276.3658]);
		p.setValueAtTime(2.0, [ 474.86945, 276.63354]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 443.02432, 266.80435]);
		p.setValueAtTime(0.25, [ 448.72595, 286.21298]);
		p.setValueAtTime(0.5, [ 490.2906, 306.12402]);
		p.setValueAtTime(0.75, [ 492.55777, 311.89343]);
		p.setValueAtTime(1.0, [ 481.0169, 266.77777]);
		p.setValueAtTime(1.25, [ 440.46768, 267.09808]);
		p.setValueAtTime(1.5, [ 428.6428, 271.23532]);
		p.setValueAtTime(1.75, [ 447.59283, 264.35513]);
		p.setValueAtTime(2.0, [ 430.95215, 266.16592]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 500.30704, 282.8021]);
		p.setValueAtTime(0.25, [ 494.3745, 312.254]);
		p.setValueAtTime(0.5, [ 449.42856, 245.24352]);
		p.setValueAtTime(0.75, [ 410.5074, 205.93262]);
		p.setValueAtTime(1.0, [ 404.71188, 190.01976]);
		p.setValueAtTime(1.25, [ 448.37628, 168.28221]);
		p.setValueAtTime(1.5, [ 404.13467, 117.58666]);
		p.setValueAtTime(1.75, [ 417.46362, 88.81429]);
		p.setValueAtTime(2.0, [ 437.321, 78.93386]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 568.0038, 281.74063]);
		p.setValueAtTime(0.25, [ 598.7086, 355.842]);
		p.setValueAtTime(0.5, [ 617.6882, 389.73935]);
		p.setValueAtTime(0.75, [ 594.5889, 347.83005]);
		p.setValueAtTime(1.0, [ 608.18713, 336.39255]);
		p.setValueAtTime(1.25, [ 605.8318, 318.99792]);
		p.setValueAtTime(1.5, [ 633.0809, 299.16135]);
		p.setValueAtTime(1.75, [ 623.1451, 304.3954]);
		p.setValueAtTime(2.0, [ 580.662, 300.51816]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 639.4097, 270.10675]);
		p.setValueAtTime(0.25, [ 697.18854, 284.09735]);
		p.setValueAtTime(0.5, [ 718.5229, 286.3538]);
		p.setValueAtTime(0.75, [ 741.0569, 272.24155]);
		p.setValueAtTime(1.0, [ 715.46704, 289.51572]);
		p.setValueAtTime(1.25, [ 737.9843, 294.35205]);
		p.setValueAtTime(1.5, [ 717.1361, 341.74405]);
		p.setValueAtTime(1.75, [ 728.64087, 388.20892]);
		p.setValueAtTime(2.0, [ 746.46893, 379.9851]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 696.00684, 261.23984]);
		p.setValueAtTime(0.25, [ 716.64935, 282.306]);
		p.setValueAtTime(0.5, [ 742.01324, 298.4375]);
		p.setValueAtTime(0.75, [ 702.0849, 283.05917]);
		p.setValueAtTime(1.0, [ 711.6864, 274.9931]);
		p.setValueAtTime(1.25, [ 700.5468, 281.00674]);
		p.setValueAtTime(1.5, [ 702.37714, 259.31503]);
		p.setValueAtTime(1.75, [ 711.20465, 243.49292]);
		p.setValueAtTime(2.0, [ 718.41925, 283.50455]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 738.0467, 249.78784]);
		p.setValueAtTime(0.25, [ 746.3553, 256.89795]);
		p.setValueAtTime(0.5, [ 751.8647, 215.78564]);
		p.setValueAtTime(0.75, [ 791.65784, 232.29243]);
		p.setValueAtTime(1.0, [ 821.38983, 255.67163]);
		p.setValueAtTime(1.25, [ 879.49365, 245.7058]);
		p.setValueAtTime(1.5, [ 887.4225, 248.56029]);
		p.setValueAtTime(1.75, [ 851.74023, 256.37134]);
		p.setValueAtTime(2.0, [ 836.965, 207.12671]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 804.8009, 291.6905]);
		p.setValueAtTime(0.25, [ 781.48334, 319.85587]);
		p.setValueAtTime(0.5, [ 808.29175, 326.40186]);
		p.setValueAtTime(0.75, [ 776.49225, 284.91098]);
		p.setValueAtTime(1.0, [ 742.98505, 245.98611]);
		p.setValueAtTime(1.25, [ 769.12115, 241.21964]);
		p.setValueAtTime(1.5, [ 779.3295, 253.91048]);
		p.setValueAtTime(1.75, [ 792.404, 260.64322]);
		p.setValueAtTime(2.0, [ 827.93427, 233.76376]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 866.4749, 279.9257]);
		p.setValueAtTime(0.25, [ 876.74854, 283.9267]);
		p.setValueAtTime(0.5, [ 881.4674, 291.14008]);
		p.setValueAtTime(0.75, [ 909.23114, 279.8264]);
		p.setValueAtTime(1.0, [ 890.67267, 273.54587]);
		p.setValueAtTime(1.25, [ 899.4274, 304.5635]);
		p.setValueAtTime(1.5, [ 904.18085, 290.2757]);
		p.setValueAtTime(1.75, [ 909.2211, 301.2302]);
		p.setValueAtTime(2.0, [ 908.41425, 318.48853]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 925.1153, 287.33658]);
		p.setValueAtTime(0.25, [ 937.56055, 241.68373]);
		p.setValueAtTime(0.5, [ 944.35315, 293.238]);
		p.setValueAtTime(0.75, [ 928.88916, 308.2733]);
		p.setValueAtTime(1.0, [ 950.7088, 282.18124]);
		p.setValueAtTime(1.25, [ 927.0291, 300.50604]);
		p.setValueAtTime(1.5, [ 975.73724, 324.73593]);
		p.setValueAtTime(1.75, [ 950.21643, 345.30847]);
		p.setValueAtTime(2.0, [ 909.7295, 350.59106]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 968.6231, 290.21942]);
		p.setValueAtTime(0.25, [ 953.432, 291.6038]);
		p.setValueAtTime(0.5, [ 976.0934, 296.80026]);
		p.setValueAtTime(0.75, [ 1009.71967, 325.5763]);
		p.setValueAtTime(1.0, [ 1008.0805, 302.18478]);
		p.setValueAtTime(1.25, [ 961.21014, 313.77097]);
		p.setValueAtTime(1.5, [ 894.55365, 345.09958]);
		p.setValueAtTime(1.75, [ 874.70636, 401.44672]);
		p.setValueAtTime(2.0, [ 871.05853, 327.7276]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1051.5938, 243.5413]);
		p.setValueAtTime(0.25, [ 1022.94836, 235.75594]);
		p.setValueAtTime(0.5, [ 979.40717, 275.64822]);
		p.setValueAtTime(0.75, [ 990.79944, 325.51273]);
		p.setValueAtTime(1.0, [ 1014.3591, 313.0119]);
		p.setValueAtTime(1.25, [ 1028.0808, 325.83783]);
		p.setValueAtTime(1.5, [ 1003.02704, 321.62347]);
		p.setValueAtTime(1.75, [ 1030.5355, 336.83054]);
		p.setValueAtTime(2.0, [ 1029.1119, 371.13422]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1132.3676, 271.1116]);
		p.setValueAtTime(0.25, [ 1134.1093, 229.4642]);
		p.setValueAtTime(0.5, [ 1174.3586, 189.69406]);
		p.setValueAtTime(0.75, [ 1195.9471, 171.93132]);
		p.setValueAtTime(1.0, [ 1200.2279, 191.88707]);
		p.setValueAtTime(1.25, [ 1202.791, 189.77318]);
		p.setValueAtTime(1.5, [ 1181.5096, 181.07024]);
		p.setValueAtTime(1.75, [ 1181.2435, 200.47466]);
		p.setValueAtTime(2.0, [ 1168.2349, 222.31897]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1182.5247, 269.04892]);
		p.setValueAtTime(0.25, [ 1174.1304, 264.53195]);
		p.setValueAtTime(0.5, [ 1216.0453, 254.83195]);
		p.setValueAtTime(0.75, [ 1230.0183, 221.8387]);
		p.setValueAtTime(1.0, [ 1245.468, 214.90178]);
		p.setValueAtTime(1.25, [ 1248.4677, 213.74431]);
		p.setValueAtTime(1.5, [ 1216.8705, 207.03394]);
		p.setValueAtTime(1.75, [ 1237.0648, 137.46353]);
		p.setValueAtTime(2.0, [ 1242.0059, 108.81631]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1220.0721, 282.64996]);
		p.setValueAtTime(0.25, [ 1207.7501, 253.55745]);
		p.setValueAtTime(0.5, [ 1196.8124, 281.1899]);
		p.setValueAtTime(0.75, [ 1203.1869, 310.22388]);
		p.setValueAtTime(1.0, [ 1179.3381, 302.44574]);
		p.setValueAtTime(1.25, [ 1206.0321, 311.84735]);
		p.setValueAtTime(1.5, [ 1212.0887, 286.4279]);
		p.setValueAtTime(1.75, [ 1174.191, 292.81458]);
		p.setValueAtTime(2.0, [ 1174.5151, 334.2887]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1289.6302, 256.33075]);
		p.setValueAtTime(0.25, [ 1234.8318, 310.9196]);
		p.setValueAtTime(0.5, [ 1229.972, 336.56754]);
		p.setValueAtTime(0.75, [ 1228.8712, 334.31326]);
		p.setValueAtTime(1.0, [ 1258.1045, 320.422]);
		p.setValueAtTime(1.25, [ 1270.9838, 307.58405]);
		p.setValueAtTime(1.5, [ 1278.9764, 254.93777]);
		p.setValueAtTime(1.75, [ 1271.1956, 239.22427]);
		p.setValueAtTime(2.0, [ 1261.5005, 268.18286]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1362.7612, 271.60657]);
		p.setValueAtTime(0.25, [ 1351.7479, 281.66785]);
		p.setValueAtTime(0.5, [ 1345.7465, 288.77887]);
		p.setValueAtTime(0.75, [ 1348.0963, 301.74338]);
		p.setValueAtTime(1.0, [ 1351.5446, 325.25034]);
		p.setValueAtTime(1.25, [ 1343.0756, 356.2757]);
		p.setValueAtTime(1.5, [ 1304.6855, 332.76172]);
		p.setValueAtTime(1.75, [ 1282.0477, 357.21524]);
		p.setValueAtTime(2.0, [ 1274.7882, 370.83472]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1401.8145, 253.90508]);
		p.setValueAtTime(0.25, [ 1445.021, 246.44794]);
		p.setValueAtTime(0.5, [ 1413.5194, 274.9094]);
		p.setValueAtTime(0.75, [ 1422.3035, 275.92184]);
		p.setValueAtTime(1.0, [ 1441.3822, 261.3919]);
		p.setValueAtTime(1.25, [ 1480.1482, 267.11374]);
		p.setValueAtTime(1.5, [ 1464.5059, 237.77303]);
		p.setValueAtTime(1.75, [ 1460.3876, 218.23181]);
		p.setValueAtTime(2.0, [ 1466.2236, 226.80074]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1485.7955, 277.05154]);
		p.setValueAtTime(0.25, [ 1491.418, 300.4974]);
		p.setValueAtTime(0.5, [ 1490.9476, 271.35626]);
		p.setValueAtTime(0.75, [ 1514.4374, 284.09113]);
		p.setValueAtTime(1.0, [ 1532.6882, 255.86845]);
		p.setValueAtTime(1.25, [ 1499.4257, 236.85428]);
		p.setValueAtTime(1.5, [ 1561.4617, 205.74931]);
		p.setValueAtTime(1.75, [ 1601.7534, 188.31058]);
		p.setValueAtTime(2.0, [ 1559.675, 104.58715]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1533.1389, 273.07687]);
		p.setValueAtTime(0.25, [ 1550.7104, 307.52478]);
		p.setValueAtTime(0.5, [ 1586.6512, 272.79526]);
		p.setValueAtTime(0.75, [ 1589.8099, 303.68747]);
		p.setValueAtTime(1.0, [ 1588.6246, 298.29068]);
		p.setValueAtTime(1.25, [ 1598.3593, 274.12146]);
		p.setValueAtTime(1.5, [ 1573.1073, 269.5234]);
		p.setValueAtTime(1.75, [ 1601.9751, 282.40695]);
		p.setValueAtTime(2.0, [ 1603.6458, 244.01999]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1602.1542, 280.01212]);
		p.setValueAtTime(0.25, [ 1593.3322, 282.96198]);
		p.setValueAtTime(0.5, [ 1584.421, 353.46432]);
		p.setValueAtTime(0.75, [ 1564.9027, 371.23663]);
		p.setValueAtTime(1.0, [ 1561.6351, 392.37558]);
		p.setValueAtTime(1.25, [ 1573.0431, 424.85983]);
		p.setValueAtTime(1.5, [ 1573.5006, 454.1418]);
		p.setValueAtTime(1.75, [ 1583.8217, 439.4767]);
		p.setValueAtTime(2.0, [ 1596.5243, 469.3084]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1665.4092, 253.84634]);
		p.setValueAtTime(0.25, [ 1625.9974, 221.77652]);
		p.setValueAtTime(0.5, [ 1646.1637, 273.08206]);
		p.setValueAtTime(0.75, [ 1606.2275, 245.0795]);
		p.setValueAtTime(1.0, [ 1569.5977, 271.93585]);
		p.setValueAtTime(1.25, [ 1590.2888, 225.51729]);
		p.setValueAtTime(1.5, [ 1626.7789, 230.13838]);
		p.setValueAtTime(1.75, [ 1647.9159, 242.62703]);
		p.setValueAtTime(2.0, [ 1707.1428, 259.3344]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1701.4231, 272.02362]);
		p.setValueAtTime(0.25, [ 1697.9397, 248.00954]);
		p.setValueAtTime(0.5, [ 1683.82, 277.77402]);
		p.setValueAtTime(0.75, [ 1716.6982, 300.63663]);
		p.setValueAtTime(1.0, [ 1728.8505, 318.85852]);
		p.setValueAtTime(1.25, [ 1819.774, 327.35886]);
		p.setValueAtTime(1.5, [ 1835.4149, 343.8784]);
		p.setValueAtTime(1.75, [ 1830.0497, 340.5827]);
		p.setValueAtTime(2.0, [ 1812.8569, 286.64804]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1759.6249, 270.79102]);
		p.setValueAtTime(0.25, [ 1745.8573, 238.85078]);
		p.setValueAtTime(0.5, [ 1758.68, 227.64021]);
		p.setValueAtTime(0.75, [ 1742.9053, 211.89934]);
		p.setValueAtTime(1.0, [ 1724.4694, 198.04082]);
		p.setValueAtTime(1.25, [ 1738.7177, 218.55057]);
		p.setValueAtTime(1.5, [ 1716.7567, 216.97063]);
		p.setValueAtTime(1.75, [ 1690.0139, 190.3085]);
		p.setValueAtTime(2.0, [ 1715.1703, 199.75868]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1838.3339, 280.31128]);
		p.setValueAtTime(0.25, [ 1767.1118, 265.8762]);
		p.setValueAtTime(0.5, [ 1729.8871, 216.87437]);
		p.setValueAtTime(0.75, [ 1687.8955, 230.65547]);
		p.setValueAtTime(1.0, [ 1598.5985, 298.79108]);
		p.setValueAtTime(1.25, [ 1597.2103, 304.61487]);
		p.setValueAtTime(1.5, [ 1592.9684, 320.7382]);
		p.setValueAtTime(1.75, [ 1565.8661, 348.4071]);
		p.setValueAtTime(2.0, [ 1490.5004, 343.10852]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1868.1604, 269.53082]);
		p.setValueAtTime(0.25, [ 1871.521, 288.69714]);
		p.setValueAtTime(0.5, [ 1868.7988, 243.11234]);
		p.setValueAtTime(0.75, [ 1855.4237, 223.78325]);
		p.setValueAtTime(1.0, [ 1886.8251, 215.90002]);
		p.setValueAtTime(1.25, [ 1894.7073, 209.12515]);
		p.setValueAtTime(1.5, [ 1894.6787, 242.03185]);
		p.setValueAtTime(1.75, [ 1902.4908, 255.43408]);
		p.setValueAtTime(2.0, [ 1934.1055, 276.07138]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 34.18205, 334.02054]);
		p.setValueAtTime(0.25, [ 48.698376, 348.45474]);
		p.setValueAtTime(0.5, [ 65.65945, 305.61093]);
		p.setValueAtTime(0.75, [ 93.54953, 300.44458]);
		p.setValueAtTime(1.0, [ 85.64791, 319.37228]);
		p.setValueAtTime(1.25, [ 60.377186, 332.7988]);
		p.setValueAtTime(1.5, [ 53.922302, 331.9361]);
		p.setValueAtTime(1.75, [ 81.77359, 319.9328]);
		p.setValueAtTime(2.0, [ 113.76331, 283.6994]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 90.91605, 327.9394]);
		p.setValueAtTime(0.25, [ 59.838398, 285.2212]);
		p.setValueAtTime(0.5, [ 54.8865, 294.80106]);
		p.setValueAtTime(0.75, [ 5.561898, 361.07822]);
		p.setValueAtTime(1.0, [ 8.28223, 377.62134]);
		p.setValueAtTime(1.25, [ -27.550634, 367.48456]);
		p.setValueAtTime(1.5, [ -64.56412, 418.93683]);
		p.setValueAtTime(1.75, [ -75.64089, 385.2861]);
		p.setValueAtTime(2.0, [ -96.6614, 391.94833]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 167.7062, 336.3433]);
		p.setValueAtTime(0.25, [ 182.87727, 357.45728]);
		p.setValueAtTime(0.5, [ 165.52165, 370.25284]);
		p.setValueAtTime(0.75, [ 149.04662, 329.6259]);
		p.setValueAtTime(1.0, [ 161.50568, 365.81018]);
		p.setValueAtTime(1.25, [ 202.63315, 354.77902]);
		p.setValueAtTime(1.5, [ 174.92867, 352.64426]);
		p.setValueAtTime(1.75, [ 200.30644, 349.81232]);
		p.setValueAtTime(2.0, [ 163.86543, 339.7952]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 233.78703, 333.57034]);
		p.setValueAtTime(0.25, [ 173.85411, 284.34256]);
		p.setValueAtTime(0.5, [ 182.0313, 308.37885]);
		p.setValueAtTime(0.75, [ 165.08249, 313.44714]);
		p.setValueAtTime(1.0, [ 147.98633, 320.86325]);
		p.setValueAtTime(1.25, [ 140.02983, 290.15308]);
		p.setValueAtTime(1.5, [ 142.12378, 333.58624]);
		p.setValueAtTime(1.75, [ 140.0566, 354.26608]);
		p.setValueAtTime(2.0, [ 151.92061, 357.94568]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 258.99164, 331.56656]);
		p.setValueAtTime(0.25, [ 284.02277, 342.3113]);
		p.setValueAtTime(0.5, [ 329.3826, 409.68912]);
		p.setValueAtTime(0.75, [ 320.82663, 412.35483]);
		p.setValueAtTime(1.0, [ 311.80685, 446.98007]);
		p.setValueAtTime(1.25, [ 290.3253, 469.40723]);
		p.setValueAtTime(1.5, [ 288.0433, 463.90817]);
		p.setValueAtTime(1.75, [ 308.62946, 468.63535]);
		p.setValueAtTime(2.0, [ 294.47177, 473.5297]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 336.67755, 339.82224]);
		p.setValueAtTime(0.25, [ 353.88385, 352.86868]);
		p.setValueAtTime(0.5, [ 404.04227, 366.71844]);
		p.setValueAtTime(0.75, [ 411.59503, 400.90622]);
		p.setValueAtTime(1.0, [ 402.82062, 395.1407]);
		p.setValueAtTime(1.25, [ 388.5996, 406.5118]);
		p.setValueAtTime(1.5, [ 393.36508, 406.5928]);
		p.setValueAtTime(1.75, [ 359.75168, 420.28082]);
		p.setValueAtTime(2.0, [ 350.56464, 433.9659]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 390.7111, 324.00146]);
		p.setValueAtTime(0.25, [ 377.01645, 315.23737]);
		p.setValueAtTime(0.5, [ 419.82935, 285.6461]);
		p.setValueAtTime(0.75, [ 434.6827, 273.8159]);
		p.setValueAtTime(1.0, [ 427.40747, 263.08612]);
		p.setValueAtTime(1.25, [ 437.98135, 227.72105]);
		p.setValueAtTime(1.5, [ 450.53952, 215.75847]);
		p.setValueAtTime(1.75, [ 473.76187, 230.78506]);
		p.setValueAtTime(2.0, [ 459.52704, 209.60664]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 430.8922, 318.16895]);
		p.setValueAtTime(0.25, [ 386.70905, 308.23004]);
		p.setValueAtTime(0.5, [ 377.65536, 294.12622]);
		p.setValueAtTime(0.75, [ 390.18515, 341.8159]);
		p.setValueAtTime(1.0, [ 420.24493, 374.91977]);
		p.setValueAtTime(1.25, [ 477.0371, 356.47168]);
		p.setValueAtTime(1.5, [ 459.0524, 343.9709]);
		p.setValueAtTime(1.75, [ 440.89948, 324.62683]);
		p.setValueAtTime(2.0, [ 431.05402, 339.27814]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 505.50443, 327.42783]);
		p.setValueAtTime(0.25, [ 478.36664, 302.71307]);
		p.setValueAtTime(0.5, [ 481.5607, 324.08704]);
		p.setValueAtTime(0.75, [ 473.89175, 321.26956]);
		p.setValueAtTime(1.0, [ 474.6211, 328.90573]);
		p.setValueAtTime(1.25, [ 439.06934, 304.4017]);
		p.setValueAtTime(1.5, [ 400.1975, 311.33414]);
		p.setValueAtTime(1.75, [ 373.4918, 336.98257]);
		p.setValueAtTime(2.0, [ 364.7143, 307.71622]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 562.1124, 342.3393]);
		p.setValueAtTime(0.25, [ 535.07117, 329.00366]);
		p.setValueAtTime(0.5, [ 583.2356, 314.6092]);
		p.setValueAtTime(0.75, [ 579.88196, 300.9775]);
		p.setValueAtTime(1.0, [ 539.93195, 270.63873]);
		p.setValueAtTime(1.25, [ 575.50433, 308.73138]);
		p.setValueAtTime(1.5, [ 546.69946, 291.50555]);
		p.setValueAtTime(1.75, [ 493.41748, 272.40338]);
		p.setValueAtTime(2.0, [ 457.0858, 298.33136]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 616.5422, 329.12134]);
		p.setValueAtTime(0.25, [ 630.2003, 370.53745]);
		p.setValueAtTime(0.5, [ 600.22626, 399.99753]);
		p.setValueAtTime(0.75, [ 580.81555, 407.2615]);
		p.setValueAtTime(1.0, [ 600.25226, 432.01025]);
		p.setValueAtTime(1.25, [ 624.1526, 449.3359]);
		p.setValueAtTime(1.5, [ 577.17084, 433.4086]);
		p.setValueAtTime(1.75, [ 547.927, 443.3605]);
		p.setValueAtTime(2.0, [ 577.73016, 424.79684]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 675.2789, 302.63226]);
		p.setValueAtTime(0.25, [ 600.47107, 312.28757]);
		p.setValueAtTime(0.5, [ 596.28186, 325.54593]);
		p.setValueAtTime(0.75, [ 594.5007, 288.5958]);
		p.setValueAtTime(1.0, [ 573.662, 217.17744]);
		p.setValueAtTime(1.25, [ 569.8884, 198.84077]);
		p.setValueAtTime(1.5, [ 550.9912, 192.61069]);
		p.setValueAtTime(1.75, [ 603.5791, 181.79515]);
		p.setValueAtTime(2.0, [ 586.33716, 163.5438]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 730.3094, 331.70914]);
		p.setValueAtTime(0.25, [ 679.13416, 313.96484]);
		p.setValueAtTime(0.5, [ 646.497, 293.17706]);
		p.setValueAtTime(0.75, [ 606.9564, 311.93015]);
		p.setValueAtTime(1.0, [ 597.93066, 318.97946]);
		p.setValueAtTime(1.25, [ 618.37634, 376.93008]);
		p.setValueAtTime(1.5, [ 632.90784, 392.37045]);
		p.setValueAtTime(1.75, [ 615.13654, 387.95798]);
		p.setValueAtTime(2.0, [ 610.1773, 406.19196]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 791.5692, 334.6101]);
		p.setValueAtTime(0.25, [ 789.3472, 346.36768]);
		p.setValueAtTime(0.5, [ 812.9234, 369.72943]);
		p.setValueAtTime(0.75, [ 772.31415, 358.53406]);
		p.setValueAtTime(1.0, [ 806.7328, 341.9694]);
		p.setValueAtTime(1.25, [ 866.5096, 298.93417]);
		p.setValueAtTime(1.5, [ 868.51544, 291.34998]);
		p.setValueAtTime(1.75, [ 873.00146, 273.76797]);
		p.setValueAtTime(2.0, [ 903.017, 282.91724]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 846.38947, 339.02853]);
		p.setValueAtTime(0.25, [ 812.22986, 374.88947]);
		p.setValueAtTime(0.5, [ 770.2668, 390.45267]);
		p.setValueAtTime(0.75, [ 800.02325, 394.90628]);
		p.setValueAtTime(1.0, [ 799.2844, 390.04617]);
		p.setValueAtTime(1.25, [ 856.84296, 409.22495]);
		p.setValueAtTime(1.5, [ 866.46387, 372.47943]);
		p.setValueAtTime(1.75, [ 864.7513, 362.94128]);
		p.setValueAtTime(2.0, [ 865.2554, 418.29913]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 935.2783, 316.21613]);
		p.setValueAtTime(0.25, [ 936.02783, 305.75507]);
		p.setValueAtTime(0.5, [ 919.36066, 315.73404]);
		p.setValueAtTime(0.75, [ 881.6888, 381.73495]);
		p.setValueAtTime(1.0, [ 896.7715, 405.44257]);
		p.setValueAtTime(1.25, [ 881.59326, 426.60495]);
		p.setValueAtTime(1.5, [ 894.6124, 416.728]);
		p.setValueAtTime(1.75, [ 866.7171, 381.2545]);
		p.setValueAtTime(2.0, [ 863.423, 380.76584]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 988.51843, 338.84528]);
		p.setValueAtTime(0.25, [ 1018.68097, 344.81534]);
		p.setValueAtTime(0.5, [ 1019.33527, 334.39612]);
		p.setValueAtTime(0.75, [ 1022.9699, 358.11026]);
		p.setValueAtTime(1.0, [ 1018.0747, 336.44308]);
		p.setValueAtTime(1.25, [ 989.622, 363.17328]);
		p.setValueAtTime(1.5, [ 999.55194, 337.32516]);
		p.setValueAtTime(1.75, [ 1049.9802, 361.05402]);
		p.setValueAtTime(2.0, [ 1050.5328, 382.62183]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1059.7731, 350.91806]);
		p.setValueAtTime(0.25, [ 1075.4221, 340.55273]);
		p.setValueAtTime(0.5, [ 1048.8417, 367.9148]);
		p.setValueAtTime(0.75, [ 1043.5009, 357.9859]);
		p.setValueAtTime(1.0, [ 1080.7207, 366.31433]);
		p.setValueAtTime(1.25, [ 1074.3628, 336.89313]);
		p.setValueAtTime(1.5, [ 1120.5259, 338.05704]);
		p.setValueAtTime(1.75, [ 1076.0786, 356.25797]);
		p.setValueAtTime(2.0, [ 1084.0066, 324.02164]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1114.4236, 315.71527]);
		p.setValueAtTime(0.25, [ 1128.575, 305.35672]);
		p.setValueAtTime(0.5, [ 1098.2408, 289.1702]);
		p.setValueAtTime(0.75, [ 1103.1008, 288.72128]);
		p.setValueAtTime(1.0, [ 1103.9746, 269.63892]);
		p.setValueAtTime(1.25, [ 1070.9888, 260.04666]);
		p.setValueAtTime(1.5, [ 1065.3304, 274.6195]);
		p.setValueAtTime(1.75, [ 1072.2505, 252.93079]);
		p.setValueAtTime(2.0, [ 1053.9634, 222.18091]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1176.8137, 341.78336]);
		p.setValueAtTime(0.25, [ 1214.2356, 353.2424]);
		p.setValueAtTime(0.5, [ 1216.7708, 344.57422]);
		p.setValueAtTime(0.75, [ 1178.5609, 420.7358]);
		p.setValueAtTime(1.0, [ 1166.6322, 397.4296]);
		p.setValueAtTime(1.25, [ 1166.1449, 379.9633]);
		p.setValueAtTime(1.5, [ 1178.2206, 413.97476]);
		p.setValueAtTime(1.75, [ 1139.3313, 393.5809]);
		p.setValueAtTime(2.0, [ 1132.1963, 394.5098]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1218.953, 341.4548]);
		p.setValueAtTime(0.25, [ 1249.0226, 297.27106]);
		p.setValueAtTime(0.5, [ 1287.6239, 261.54724]);
		p.setValueAtTime(0.75, [ 1324.7142, 238.51859]);
		p.setValueAtTime(1.0, [ 1334.9603, 261.24615]);
		p.setValueAtTime(1.25, [ 1338.3738, 228.02554]);
		p.setValueAtTime(1.5, [ 1331.5946, 267.87643]);
		p.setValueAtTime(1.75, [ 1376.1683, 311.53265]);
		p.setValueAtTime(2.0, [ 1423.9227, 336.0539]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1282.4001, 332.44696]);
		p.setValueAtTime(0.25, [ 1281.5659, 313.36853]);
		p.setValueAtTime(0.5, [ 1241.4426, 246.94254]);
		p.setValueAtTime(0.75, [ 1252.2274, 221.698]);
		p.setValueAtTime(1.0, [ 1272.5234, 226.48318]);
		p.setValueAtTime(1.25, [ 1290.7876, 232.41626]);
		p.setValueAtTime(1.5, [ 1295.4773, 215.1564]);
		p.setValueAtTime(1.75, [ 1272.1193, 187.08556]);
		p.setValueAtTime(2.0, [ 1254.7134, 209.27225]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1335.7407, 328.61377]);
		p.setValueAtTime(0.25, [ 1333.1354, 294.53467]);
		p.setValueAtTime(0.5, [ 1313.5585, 326.93683]);
		p.setValueAtTime(0.75, [ 1305.6893, 307.5014]);
		p.setValueAtTime(1.0, [ 1305.1356, 275.41095]);
		p.setValueAtTime(1.25, [ 1271.3977, 296.9023]);
		p.setValueAtTime(1.5, [ 1272.9526, 312.6075]);
		p.setValueAtTime(1.75, [ 1265.2786, 312.89175]);
		p.setValueAtTime(2.0, [ 1250.4008, 286.36014]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1414.9161, 325.73715]);
		p.setValueAtTime(0.25, [ 1408.0543, 294.22522]);
		p.setValueAtTime(0.5, [ 1366.6473, 286.09174]);
		p.setValueAtTime(0.75, [ 1321.9794, 287.20505]);
		p.setValueAtTime(1.0, [ 1298.0569, 296.46576]);
		p.setValueAtTime(1.25, [ 1291.1652, 267.66647]);
		p.setValueAtTime(1.5, [ 1278.5062, 238.88203]);
		p.setValueAtTime(1.75, [ 1342.0922, 202.62317]);
		p.setValueAtTime(2.0, [ 1336.3694, 166.43901]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1467.1519, 314.0253]);
		p.setValueAtTime(0.25, [ 1458.7832, 301.72925]);
		p.setValueAtTime(0.5, [ 1448.2546, 268.4265]);
		p.setValueAtTime(0.75, [ 1471.9917, 237.93091]);
		p.setValueAtTime(1.0, [ 1470.8297, 247.51566]);
		p.setValueAtTime(1.25, [ 1496.5287, 276.25583]);
		p.setValueAtTime(1.5, [ 1520.8383, 267.79248]);
		p.setValueAtTime(1.75, [ 1489.7902, 256.6256]);
		p.setValueAtTime(2.0, [ 1474.6177, 234.31815]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1547.7158, 339.27896]);
		p.setValueAtTime(0.25, [ 1577.3395, 315.5377]);
		p.setValueAtTime(0.5, [ 1568.5327, 281.7645]);
		p.setValueAtTime(0.75, [ 1553.1425, 312.5259]);
		p.setValueAtTime(1.0, [ 1557.9893, 346.02026]);
		p.setValueAtTime(1.25, [ 1606.1371, 311.6278]);
		p.setValueAtTime(1.5, [ 1613.4943, 299.1762]);
		p.setValueAtTime(1.75, [ 1585.2969, 300.78522]);
		p.setValueAtTime(2.0, [ 1604.3181, 323.33118]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1590.4861, 334.93588]);
		p.setValueAtTime(0.25, [ 1531.7573, 331.01337]);
		p.setValueAtTime(0.5, [ 1526.8477, 362.8824]);
		p.setValueAtTime(0.75, [ 1496.8734, 374.90747]);
		p.setValueAtTime(1.0, [ 1495.5793, 422.3514]);
		p.setValueAtTime(1.25, [ 1554.0453, 443.5485]);
		p.setValueAtTime(1.5, [ 1598.8563, 431.92545]);
		p.setValueAtTime(1.75, [ 1598.9058, 432.69513]);
		p.setValueAtTime(2.0, [ 1588.1846, 468.05283]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1648.4117, 329.70056]);
		p.setValueAtTime(0.25, [ 1614.3817, 372.26074]);
		p.setValueAtTime(0.5, [ 1598.6248, 337.32617]);
		p.setValueAtTime(0.75, [ 1590.6141, 368.25107]);
		p.setValueAtTime(1.0, [ 1640.9785, 396.75192]);
		p.setValueAtTime(1.25, [ 1656.8334, 446.21042]);
		p.setValueAtTime(1.5, [ 1659.3461, 442.87256]);
		p.setValueAtTime(1.75, [ 1693.0514, 447.5248]);
		p.setValueAtTime(2.0, [ 1708.4714, 496.41043]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1710.4163, 309.39935]);
		p.setValueAtTime(0.25, [ 1781.911, 309.21466]);
		p.setValueAtTime(0.5, [ 1779.1981, 327.57553]);
		p.setValueAtTime(0.75, [ 1782.6418, 274.87164]);
		p.setValueAtTime(1.0, [ 1770.7086, 275.1537]);
		p.setValueAtTime(1.25, [ 1701.5908, 263.28546]);
		p.setValueAtTime(1.5, [ 1770.2206, 253.61552]);
		p.setValueAtTime(1.75, [ 1793.5969, 236.7635]);
		p.setValueAtTime(2.0, [ 1780.5594, 204.6388]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1790.9901, 353.122]);
		p.setValueAtTime(0.25, [ 1782.291, 362.00125]);
		p.setValueAtTime(0.5, [ 1764.7842, 375.1557]);
		p.setValueAtTime(0.75, [ 1771.9515, 379.5057]);
		p.setValueAtTime(1.0, [ 1789.9141, 397.5168]);
		p.setValueAtTime(1.25, [ 1792.6497, 416.03345]);
		p.setValueAtTime(1.5, [ 1838.8824, 430.23218]);
		p.setValueAtTime(1.75, [ 1816.723, 470.354]);
		p.setValueAtTime(2.0, [ 1868.2983, 459.3674]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1843.3766, 305.54727]);
		p.setValueAtTime(0.25, [ 1831.036, 316.082]);
		p.setValueAtTime(0.5, [ 1856.6865, 333.5921]);
		p.setValueAtTime(0.75, [ 1871.8125, 346.84778]);
		p.setValueAtTime(1.0, [ 1868.1895, 338.11566]);
		p.setValueAtTime(1.25, [ 1858.9963, 328.78687]);
		p.setValueAtTime(1.5, [ 1860.0673, 378.36008]);
		p.setValueAtTime(1.75, [ 1849.7457, 418.3608]);
		p.setValueAtTime(2.0, [ 1934.8915, 412.41727]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1884.4989, 329.4098]);
		p.setValueAtTime(0.25, [ 1852.6201, 332.203]);
		p.setValueAtTime(0.5, [ 1877.1559, 309.76913]);
		p.setValueAtTime(0.75, [ 1909.1885, 309.78275]);
		p.setValueAtTime(1.0, [ 1897.4502, 313.9441]);
		p.setValueAtTime(1.25, [ 1916.7802, 302.32617]);
		p.setValueAtTime(1.5, [ 1942.777, 318.47836]);
		p.setValueAtTime(1.75, [ 1930.513, 310.3497]);
		p.setValueAtTime(2.0, [ 1899.4535, 266.069]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 29.11235, 391.02914]);
		p.setValueAtTime(0.25, [ 17.699253, 371.49802]);
		p.setValueAtTime(0.5, [ -34.53919, 393.95297]);
		p.setValueAtTime(0.75, [ -63.318775, 399.71332]);
		p.setValueAtTime(1.0, [ -71.67495, 444.8628]);
		p.setValueAtTime(1.25, [ -32.129955, 486.5069]);
		p.setValueAtTime(1.5, [ -42.385593, 437.61807]);
		p.setValueAtTime(1.75, [ -60.63862, 465.37653]);
		p.setValueAtTime(2.0, [ -72.483406, 456.92935]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 83.41687, 391.23682]);
		p.setValueAtTime(0.25, [ 103.64815, 373.11517]);
		p.setValueAtTime(0.5, [ 137.28387, 385.328]);
		p.setValueAtTime(0.75, [ 135.66148, 338.63303]);
		p.setValueAtTime(1.0, [ 121.13074, 309.12268]);
		p.setValueAtTime(1.25, [ 167.10104, 316.87238]);
		p.setValueAtTime(1.5, [ 194.87941, 298.67633]);
		p.setValueAtTime(1.75, [ 149.3738, 289.08545]);
		p.setValueAtTime(2.0, [ 160.67407, 229.26942]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 127.83839, 374.3446]);
		p.setValueAtTime(0.25, [ 126.93244, 352.45816]);
		p.setValueAtTime(0.5, [ 86.38733, 334.91306]);
		p.setValueAtTime(0.75, [ 82.789696, 348.7947]);
		p.setValueAtTime(1.0, [ 77.171555, 429.47736]);
		p.setValueAtTime(1.25, [ 85.35546, 444.85635]);
		p.setValueAtTime(1.5, [ 79.326096, 454.96933]);
		p.setValueAtTime(1.75, [ 86.24666, 405.60727]);
		p.setValueAtTime(2.0, [ 135.15709, 394.8672]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 209.9356, 366.291]);
		p.setValueAtTime(0.25, [ 197.00267, 363.7006]);
		p.setValueAtTime(0.5, [ 209.09123, 389.4137]);
		p.setValueAtTime(0.75, [ 207.4119, 422.34317]);
		p.setValueAtTime(1.0, [ 196.15483, 366.71793]);
		p.setValueAtTime(1.25, [ 166.6569, 360.30023]);
		p.setValueAtTime(1.5, [ 173.34227, 342.59427]);
		p.setValueAtTime(1.75, [ 195.63335, 348.71677]);
		p.setValueAtTime(2.0, [ 212.1371, 313.91666]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 258.45148, 393.9691]);
		p.setValueAtTime(0.25, [ 211.63632, 419.88055]);
		p.setValueAtTime(0.5, [ 180.18266, 398.82504]);
		p.setValueAtTime(0.75, [ 177.34941, 408.89008]);
		p.setValueAtTime(1.0, [ 161.50995, 418.71335]);
		p.setValueAtTime(1.25, [ 138.56091, 415.54025]);
		p.setValueAtTime(1.5, [ 115.74536, 336.9874]);
		p.setValueAtTime(1.75, [ 131.59352, 341.2054]);
		p.setValueAtTime(2.0, [ 86.57204, 315.24014]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 347.24734, 392.03046]);
		p.setValueAtTime(0.25, [ 385.03912, 385.01898]);
		p.setValueAtTime(0.5, [ 377.30704, 424.05295]);
		p.setValueAtTime(0.75, [ 376.73825, 411.9354]);
		p.setValueAtTime(1.0, [ 383.0745, 410.93018]);
		p.setValueAtTime(1.25, [ 348.69366, 444.4996]);
		p.setValueAtTime(1.5, [ 317.08066, 472.5045]);
		p.setValueAtTime(1.75, [ 295.94034, 459.2373]);
		p.setValueAtTime(2.0, [ 300.95175, 435.56238]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 403.98224, 389.1058]);
		p.setValueAtTime(0.25, [ 407.74173, 360.82138]);
		p.setValueAtTime(0.5, [ 405.7624, 295.25146]);
		p.setValueAtTime(0.75, [ 354.9948, 277.6301]);
		p.setValueAtTime(1.0, [ 277.38242, 303.78772]);
		p.setValueAtTime(1.25, [ 311.99734, 360.93024]);
		p.setValueAtTime(1.5, [ 337.07883, 376.0997]);
		p.setValueAtTime(1.75, [ 346.0408, 400.05368]);
		p.setValueAtTime(2.0, [ 321.7213, 435.52066]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 455.552, 377.18872]);
		p.setValueAtTime(0.25, [ 439.71558, 369.2573]);
		p.setValueAtTime(0.5, [ 420.18164, 408.96368]);
		p.setValueAtTime(0.75, [ 451.17505, 451.16122]);
		p.setValueAtTime(1.0, [ 408.77173, 473.19357]);
		p.setValueAtTime(1.25, [ 459.18564, 444.38254]);
		p.setValueAtTime(1.5, [ 502.69016, 427.84253]);
		p.setValueAtTime(1.75, [ 470.02206, 438.34506]);
		p.setValueAtTime(2.0, [ 457.70572, 419.82224]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 534.96277, 377.57477]);
		p.setValueAtTime(0.25, [ 546.62115, 363.42273]);
		p.setValueAtTime(0.5, [ 540.7966, 384.1689]);
		p.setValueAtTime(0.75, [ 544.5254, 406.16763]);
		p.setValueAtTime(1.0, [ 574.1633, 379.43936]);
		p.setValueAtTime(1.25, [ 586.4007, 398.09335]);
		p.setValueAtTime(1.5, [ 593.93585, 445.16486]);
		p.setValueAtTime(1.75, [ 576.9218, 436.64883]);
		p.setValueAtTime(2.0, [ 621.64557, 482.82568]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 588.86346, 382.7868]);
		p.setValueAtTime(0.25, [ 528.2722, 372.45856]);
		p.setValueAtTime(0.5, [ 504.4708, 381.34247]);
		p.setValueAtTime(0.75, [ 519.5924, 364.37192]);
		p.setValueAtTime(1.0, [ 548.6357, 424.26364]);
		p.setValueAtTime(1.25, [ 526.4897, 446.64948]);
		p.setValueAtTime(1.5, [ 557.0944, 481.0129]);
		p.setValueAtTime(1.75, [ 543.29034, 459.08746]);
		p.setValueAtTime(2.0, [ 549.97906, 448.00098]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 619.6306, 401.78027]);
		p.setValueAtTime(0.25, [ 655.93896, 369.93393]);
		p.setValueAtTime(0.5, [ 653.786, 375.15805]);
		p.setValueAtTime(0.75, [ 695.85504, 383.79]);
		p.setValueAtTime(1.0, [ 710.4484, 354.20435]);
		p.setValueAtTime(1.25, [ 718.81757, 336.66278]);
		p.setValueAtTime(1.5, [ 763.09045, 398.79175]);
		p.setValueAtTime(1.75, [ 767.0131, 412.5686]);
		p.setValueAtTime(2.0, [ 796.12354, 416.2543]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 680.8118, 377.71506]);
		p.setValueAtTime(0.25, [ 671.8437, 335.13647]);
		p.setValueAtTime(0.5, [ 658.6805, 362.24734]);
		p.setValueAtTime(0.75, [ 632.7587, 341.97556]);
		p.setValueAtTime(1.0, [ 627.8969, 350.1567]);
		p.setValueAtTime(1.25, [ 615.90497, 296.18173]);
		p.setValueAtTime(1.5, [ 653.487, 315.33368]);
		p.setValueAtTime(1.75, [ 656.213, 306.73856]);
		p.setValueAtTime(2.0, [ 714.4772, 296.93942]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 751.88086, 382.8775]);
		p.setValueAtTime(0.25, [ 744.073, 337.4013]);
		p.setValueAtTime(0.5, [ 751.67426, 292.38855]);
		p.setValueAtTime(0.75, [ 725.4299, 299.89133]);
		p.setValueAtTime(1.0, [ 737.3527, 321.90427]);
		p.setValueAtTime(1.25, [ 716.1646, 327.08517]);
		p.setValueAtTime(1.5, [ 689.034, 292.19263]);
		p.setValueAtTime(1.75, [ 753.65295, 282.77133]);
		p.setValueAtTime(2.0, [ 763.7915, 306.30243]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 811.50574, 390.00146]);
		p.setValueAtTime(0.25, [ 870.20557, 407.343]);
		p.setValueAtTime(0.5, [ 878.9503, 403.23404]);
		p.setValueAtTime(0.75, [ 857.3737, 369.14044]);
		p.setValueAtTime(1.0, [ 856.1426, 412.2281]);
		p.setValueAtTime(1.25, [ 842.018, 399.3171]);
		p.setValueAtTime(1.5, [ 822.95667, 375.97522]);
		p.setValueAtTime(1.75, [ 829.09094, 422.98618]);
		p.setValueAtTime(2.0, [ 778.9337, 397.80713]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 893.61957, 396.18933]);
		p.setValueAtTime(0.25, [ 923.4358, 426.1289]);
		p.setValueAtTime(0.5, [ 890.57855, 437.9979]);
		p.setValueAtTime(0.75, [ 876.34894, 450.50137]);
		p.setValueAtTime(1.0, [ 905.3107, 453.2136]);
		p.setValueAtTime(1.25, [ 917.44806, 466.7396]);
		p.setValueAtTime(1.5, [ 927.9572, 454.52292]);
		p.setValueAtTime(1.75, [ 935.91797, 455.34006]);
		p.setValueAtTime(2.0, [ 940.77264, 420.83017]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 935.1374, 384.68802]);
		p.setValueAtTime(0.25, [ 979.1725, 353.39157]);
		p.setValueAtTime(0.5, [ 970.2163, 369.8854]);
		p.setValueAtTime(0.75, [ 957.6596, 339.16534]);
		p.setValueAtTime(1.0, [ 978.78906, 352.3641]);
		p.setValueAtTime(1.25, [ 958.1004, 326.23245]);
		p.setValueAtTime(1.5, [ 937.0379, 371.12555]);
		p.setValueAtTime(1.75, [ 899.6789, 334.20343]);
		p.setValueAtTime(2.0, [ 908.16504, 369.00568]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 997.66595, 387.60263]);
		p.setValueAtTime(0.25, [ 954.46857, 392.7744]);
		p.setValueAtTime(0.5, [ 953.6799, 408.13864]);
		p.setValueAtTime(0.75, [ 978.9004, 480.4056]);
		p.setValueAtTime(1.0, [ 975.3623, 485.56305]);
		p.setValueAtTime(1.25, [ 995.40594, 435.89224]);
		p.setValueAtTime(1.5, [ 947.85736, 432.55273]);
		p.setValueAtTime(1.75, [ 941.0378, 416.27838]);
		p.setValueAtTime(2.0, [ 878.9771, 404.3638]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1039.376, 392.79117]);
		p.setValueAtTime(0.25, [ 976.7396, 376.31873]);
		p.setValueAtTime(0.5, [ 985.92737, 378.72723]);
		p.setValueAtTime(0.75, [ 935.352, 397.75266]);
		p.setValueAtTime(1.0, [ 965.56946, 403.3264]);
		p.setValueAtTime(1.25, [ 948.03156, 387.84912]);
		p.setValueAtTime(1.5, [ 934.63293, 429.55826]);
		p.setValueAtTime(1.75, [ 933.6181, 398.2927]);
		p.setValueAtTime(2.0, [ 925.66455, 442.51968]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1120.5913, 401.105]);
		p.setValueAtTime(0.25, [ 1114.7793, 417.94693]);
		p.setValueAtTime(0.5, [ 1154.1329, 388.0019]);
		p.setValueAtTime(0.75, [ 1194.4944, 413.25763]);
		p.setValueAtTime(1.0, [ 1211.644, 436.754]);
		p.setValueAtTime(1.25, [ 1207.6848, 403.06723]);
		p.setValueAtTime(1.5, [ 1196.0765, 355.3637]);
		p.setValueAtTime(1.75, [ 1236.3354, 298.99387]);
		p.setValueAtTime(2.0, [ 1254.1144, 338.56702]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1162.719, 393.1283]);
		p.setValueAtTime(0.25, [ 1159.877, 433.30298]);
		p.setValueAtTime(0.5, [ 1181.1069, 453.2573]);
		p.setValueAtTime(0.75, [ 1173.1786, 453.16895]);
		p.setValueAtTime(1.0, [ 1200.7812, 419.1976]);
		p.setValueAtTime(1.25, [ 1197.914, 463.8331]);
		p.setValueAtTime(1.5, [ 1230.251, 509.98166]);
		p.setValueAtTime(1.75, [ 1226.2427, 528.97406]);
		p.setValueAtTime(2.0, [ 1242.8511, 510.9855]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1241.8743, 391.80084]);
		p.setValueAtTime(0.25, [ 1286.8352, 387.4357]);
		p.setValueAtTime(0.5, [ 1291.0507, 423.5527]);
		p.setValueAtTime(0.75, [ 1301.301, 408.66455]);
		p.setValueAtTime(1.0, [ 1332.6915, 416.2963]);
		p.setValueAtTime(1.25, [ 1386.4778, 385.42697]);
		p.setValueAtTime(1.5, [ 1381.7606, 382.4964]);
		p.setValueAtTime(1.75, [ 1377.4691, 357.075]);
		p.setValueAtTime(2.0, [ 1396.061, 326.52304]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1314.8323, 409.8447]);
		p.setValueAtTime(0.25, [ 1255.9597, 370.6394]);
		p.setValueAtTime(0.5, [ 1254.9362, 310.9165]);
		p.setValueAtTime(0.75, [ 1293.9014, 277.17856]);
		p.setValueAtTime(1.0, [ 1313.1758, 303.0522]);
		p.setValueAtTime(1.25, [ 1320.7699, 322.67703]);
		p.setValueAtTime(1.5, [ 1305.34, 334.91687]);
		p.setValueAtTime(1.75, [ 1340.195, 363.49805]);
		p.setValueAtTime(2.0, [ 1362.5973, 334.42584]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1336.4976, 396.676]);
		p.setValueAtTime(0.25, [ 1332.824, 381.70367]);
		p.setValueAtTime(0.5, [ 1332.2068, 399.99677]);
		p.setValueAtTime(0.75, [ 1339.7477, 372.526]);
		p.setValueAtTime(1.0, [ 1327.9662, 339.98605]);
		p.setValueAtTime(1.25, [ 1345.5271, 350.33487]);
		p.setValueAtTime(1.5, [ 1330.7145, 350.92328]);
		p.setValueAtTime(1.75, [ 1364.531, 342.82956]);
		p.setValueAtTime(2.0, [ 1380.6051, 352.02106]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1397.5276, 393.28253]);
		p.setValueAtTime(0.25, [ 1401.1295, 390.503]);
		p.setValueAtTime(0.5, [ 1340.2877, 380.8142]);
		p.setValueAtTime(0.75, [ 1342.1274, 352.22183]);
		p.setValueAtTime(1.0, [ 1325.9803, 354.80112]);
		p.setValueAtTime(1.25, [ 1296.6434, 343.36212]);
		p.setValueAtTime(1.5, [ 1265.9269, 332.9365]);
		p.setValueAtTime(1.75, [ 1322.9797, 284.6697]);
		p.setValueAtTime(2.0, [ 1341.8842, 271.03165]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1492.5985, 387.0608]);
		p.setValueAtTime(0.25, [ 1466.7338, 390.03964]);
		p.setValueAtTime(0.5, [ 1446.0289, 385.67404]);
		p.setValueAtTime(0.75, [ 1445.0826, 409.7285]);
		p.setValueAtTime(1.0, [ 1442.919, 433.3124]);
		p.setValueAtTime(1.25, [ 1450.0638, 457.95093]);
		p.setValueAtTime(1.5, [ 1392.7775, 488.94293]);
		p.setValueAtTime(1.75, [ 1430.5433, 454.84335]);
		p.setValueAtTime(2.0, [ 1441.6982, 467.3496]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1550.3986, 390.38583]);
		p.setValueAtTime(0.25, [ 1552.4668, 341.61618]);
		p.setValueAtTime(0.5, [ 1506.294, 322.87183]);
		p.setValueAtTime(0.75, [ 1472.8047, 289.64917]);
		p.setValueAtTime(1.0, [ 1451.6798, 307.38855]);
		p.setValueAtTime(1.25, [ 1457.8661, 300.3613]);
		p.setValueAtTime(1.5, [ 1494.6425, 299.40314]);
		p.setValueAtTime(1.75, [ 1469.952, 259.9741]);
		p.setValueAtTime(2.0, [ 1460.4373, 245.54375]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1594.0326, 382.1691]);
		p.setValueAtTime(0.25, [ 1561.4077, 413.7684]);
		p.setValueAtTime(0.5, [ 1517.8009, 452.11066]);
		p.setValueAtTime(0.75, [ 1497.603, 443.05637]);
		p.setValueAtTime(1.0, [ 1479.8202, 423.64194]);
		p.setValueAtTime(1.25, [ 1436.9093, 414.47974]);
		p.setValueAtTime(1.5, [ 1453.8701, 388.39865]);
		p.setValueAtTime(1.75, [ 1425.9374, 397.29428]);
		p.setValueAtTime(2.0, [ 1457.2222, 359.14722]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1635.2468, 383.14236]);
		p.setValueAtTime(0.25, [ 1661.6572, 372.06973]);
		p.setValueAtTime(0.5, [ 1704.5267, 341.28592]);
		p.setValueAtTime(0.75, [ 1646.5035, 349.4473]);
		p.setValueAtTime(1.0, [ 1655.4095, 347.08224]);
		p.setValueAtTime(1.25, [ 1603.6398, 335.28137]);
		p.setValueAtTime(1.5, [ 1612.8069, 265.54776]);
		p.setValueAtTime(1.75, [ 1577.1783, 281.8663]);
		p.setValueAtTime(2.0, [ 1557.9348, 311.7304]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1739.6976, 412.27234]);
		p.setValueAtTime(0.25, [ 1762.262, 407.179]);
		p.setValueAtTime(0.5, [ 1763.1688, 424.88492]);
		p.setValueAtTime(0.75, [ 1786.2318, 461.79034]);
		p.setValueAtTime(1.0, [ 1792.6273, 490.91495]);
		p.setValueAtTime(1.25, [ 1820.3715, 510.90234]);
		p.setValueAtTime(1.5, [ 1824.8235, 540.8437]);
		p.setValueAtTime(1.75, [ 1860.508, 585.99084]);
		p.setValueAtTime(2.0, [ 1858.8815, 541.6729]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1757.301, 389.6158]);
		p.setValueAtTime(0.25, [ 1754.9198, 374.92642]);
		p.setValueAtTime(0.5, [ 1757.2675, 346.30814]);
		p.setValueAtTime(0.75, [ 1770.284, 323.86777]);
		p.setValueAtTime(1.0, [ 1749.1881, 349.98892]);
		p.setValueAtTime(1.25, [ 1815.4443, 343.08426]);
		p.setValueAtTime(1.5, [ 1800.3948, 340.55835]);
		p.setValueAtTime(1.75, [ 1779.8652, 332.10406]);
		p.setValueAtTime(2.0, [ 1811.8711, 292.12164]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1817.2129, 402.99622]);
		p.setValueAtTime(0.25, [ 1809.5645, 365.3352]);
		p.setValueAtTime(0.5, [ 1843.6454, 363.75006]);
		p.setValueAtTime(0.75, [ 1804.8801, 377.81152]);
		p.setValueAtTime(1.0, [ 1783.2373, 375.5495]);
		p.setValueAtTime(1.25, [ 1770.7421, 430.3377]);
		p.setValueAtTime(1.5, [ 1839.9612, 398.3562]);
		p.setValueAtTime(1.75, [ 1875.2421, 378.0116]);
		p.setValueAtTime(2.0, [ 1868.2178, 400.4091]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1888.8477, 391.92792]);
		p.setValueAtTime(0.25, [ 1807.2788, 445.87253]);
		p.setValueAtTime(0.5, [ 1842.0956, 411.32785]);
		p.setValueAtTime(0.75, [ 1818.4518, 477.73087]);
		p.setValueAtTime(1.0, [ 1846.2568, 438.52097]);
		p.setValueAtTime(1.25, [ 1862.2689, 414.40796]);
		p.setValueAtTime(1.5, [ 1855.719, 412.88165]);
		p.setValueAtTime(1.75, [ 1826.5348, 379.30524]);
		p.setValueAtTime(2.0, [ 1791.4036, 368.60046]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 38.032597, 448.90845]);
		p.setValueAtTime(0.25, [ -42.39313, 494.69516]);
		p.setValueAtTime(0.5, [ -88.768265, 513.13104]);
		p.setValueAtTime(0.75, [ -101.93398, 523.9768]);
		p.setValueAtTime(1.0, [ -113.39707, 577.3855]);
		p.setValueAtTime(1.25, [ -110.85691, 601.3205]);
		p.setValueAtTime(1.5, [ -92.54177, 601.3515]);
		p.setValueAtTime(1.75, [ -127.17399, 620.25604]);
		p.setValueAtTime(2.0, [ -114.15983, 636.2156]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 82.25881, 459.10468]);
		p.setValueAtTime(0.25, [ 88.826614, 417.06427]);
		p.setValueAtTime(0.5, [ 91.16735, 412.59537]);
		p.setValueAtTime(0.75, [ 100.60129, 421.86758]);
		p.setValueAtTime(1.0, [ 77.786255, 450.58487]);
		p.setValueAtTime(1.25, [ 15.809079, 455.39468]);
		p.setValueAtTime(1.5, [ 0.23733309, 436.86826]);
		p.setValueAtTime(1.75, [ -6.2220316, 399.32153]);
		p.setValueAtTime(2.0, [ 9.497752, 431.62866]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 154.32492, 454.99393]);
		p.setValueAtTime(0.25, [ 181.80185, 485.46854]);
		p.setValueAtTime(0.5, [ 209.11722, 426.64743]);
		p.setValueAtTime(0.75, [ 200.38414, 444.21426]);
		p.setValueAtTime(1.0, [ 229.29927, 440.29233]);
		p.setValueAtTime(1.25, [ 218.83072, 471.71783]);
		p.setValueAtTime(1.5, [ 272.36694, 464.85703]);
		p.setValueAtTime(1.75, [ 279.7583, 449.5183]);
		p.setValueAtTime(2.0, [ 279.84647, 471.30753]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 204.52126, 470.0042]);
		p.setValueAtTime(0.25, [ 196.45767, 502.44745]);
		p.setValueAtTime(0.5, [ 224.07217, 523.1536]);
		p.setValueAtTime(0.75, [ 202.231, 521.36005]);
		p.setValueAtTime(1.0, [ 175.9478, 473.33945]);
		p.setValueAtTime(1.25, [ 184.00298, 485.49356]);
		p.setValueAtTime(1.5, [ 201.85164, 443.54575]);
		p.setValueAtTime(1.75, [ 165.6222, 408.29153]);
		p.setValueAtTime(2.0, [ 176.43036, 363.8127]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 254.92957, 448.79535]);
		p.setValueAtTime(0.25, [ 273.68298, 483.9038]);
		p.setValueAtTime(0.5, [ 288.1071, 497.24048]);
		p.setValueAtTime(0.75, [ 265.95038, 481.39606]);
		p.setValueAtTime(1.0, [ 270.2175, 482.8496]);
		p.setValueAtTime(1.25, [ 279.024, 512.69946]);
		p.setValueAtTime(1.5, [ 275.51755, 478.97443]);
		p.setValueAtTime(1.75, [ 264.28177, 458.2368]);
		p.setValueAtTime(2.0, [ 272.02258, 413.1336]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 334.23795, 462.60037]);
		p.setValueAtTime(0.25, [ 336.61194, 447.2136]);
		p.setValueAtTime(0.5, [ 322.52646, 463.15308]);
		p.setValueAtTime(0.75, [ 302.56625, 436.94293]);
		p.setValueAtTime(1.0, [ 276.92123, 442.8177]);
		p.setValueAtTime(1.25, [ 286.57547, 450.33243]);
		p.setValueAtTime(1.5, [ 250.7177, 453.47632]);
		p.setValueAtTime(1.75, [ 229.62515, 478.68515]);
		p.setValueAtTime(2.0, [ 262.2086, 485.198]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 408.45795, 453.9256]);
		p.setValueAtTime(0.25, [ 378.9792, 458.20288]);
		p.setValueAtTime(0.5, [ 371.01053, 450.27252]);
		p.setValueAtTime(0.75, [ 361.5635, 485.47775]);
		p.setValueAtTime(1.0, [ 387.00235, 545.65485]);
		p.setValueAtTime(1.25, [ 334.239, 494.10483]);
		p.setValueAtTime(1.5, [ 323.74432, 468.1517]);
		p.setValueAtTime(1.75, [ 302.88385, 494.8916]);
		p.setValueAtTime(2.0, [ 276.77557, 500.79333]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 454.68723, 450.6995]);
		p.setValueAtTime(0.25, [ 412.89322, 487.68735]);
		p.setValueAtTime(0.5, [ 392.94406, 458.20395]);
		p.setValueAtTime(0.75, [ 342.9618, 426.6384]);
		p.setValueAtTime(1.0, [ 332.99988, 401.22983]);
		p.setValueAtTime(1.25, [ 286.59903, 371.98383]);
		p.setValueAtTime(1.5, [ 262.92365, 400.1813]);
		p.setValueAtTime(1.75, [ 250.45708, 416.75153]);
		p.setValueAtTime(2.0, [ 233.69423, 393.10358]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 506.0869, 457.3386]);
		p.setValueAtTime(0.25, [ 485.38147, 443.5155]);
		p.setValueAtTime(0.5, [ 467.6621, 516.12915]);
		p.setValueAtTime(0.75, [ 463.4846, 545.745]);
		p.setValueAtTime(1.0, [ 443.72794, 553.68085]);
		p.setValueAtTime(1.25, [ 415.73386, 573.3256]);
		p.setValueAtTime(1.5, [ 422.6788, 604.3681]);
		p.setValueAtTime(1.75, [ 450.43137, 584.7403]);
		p.setValueAtTime(2.0, [ 437.86908, 560.92084]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 542.8964, 447.72336]);
		p.setValueAtTime(0.25, [ 586.995, 467.82382]);
		p.setValueAtTime(0.5, [ 607.0446, 490.7775]);
		p.setValueAtTime(0.75, [ 620.0108, 488.6652]);
		p.setValueAtTime(1.0, [ 605.27875, 496.5664]);
		p.setValueAtTime(1.25, [ 601.61304, 495.14548]);
		p.setValueAtTime(1.5, [ 578.72437, 492.8943]);
		p.setValueAtTime(1.75, [ 552.3427, 444.78067]);
		p.setValueAtTime(2.0, [ 524.2226, 428.49908]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 634.8403, 428.1744]);
		p.setValueAtTime(0.25, [ 654.3134, 459.48074]);
		p.setValueAtTime(0.5, [ 665.57935, 397.90927]);
		p.setValueAtTime(0.75, [ 628.71173, 426.86847]);
		p.setValueAtTime(1.0, [ 659.60736, 438.5188]);
		p.setValueAtTime(1.25, [ 642.3761, 440.6215]);
		p.setValueAtTime(1.5, [ 666.62494, 492.10724]);
		p.setValueAtTime(1.75, [ 634.71454, 480.35947]);
		p.setValueAtTime(2.0, [ 651.90466, 466.0366]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 684.80176, 429.4944]);
		p.setValueAtTime(0.25, [ 682.1905, 414.6253]);
		p.setValueAtTime(0.5, [ 687.684, 399.39447]);
		p.setValueAtTime(0.75, [ 690.2296, 372.07904]);
		p.setValueAtTime(1.0, [ 689.25586, 397.91663]);
		p.setValueAtTime(1.25, [ 645.498, 395.6022]);
		p.setValueAtTime(1.5, [ 671.4097, 413.44577]);
		p.setValueAtTime(1.75, [ 633.7853, 419.32736]);
		p.setValueAtTime(2.0, [ 589.2446, 403.8448]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 744.1465, 465.17508]);
		p.setValueAtTime(0.25, [ 794.9658, 448.0336]);
		p.setValueAtTime(0.5, [ 812.45795, 433.19455]);
		p.setValueAtTime(0.75, [ 834.9604, 476.45407]);
		p.setValueAtTime(1.0, [ 866.6803, 489.14597]);
		p.setValueAtTime(1.25, [ 858.17834, 504.47638]);
		p.setValueAtTime(1.5, [ 858.77637, 602.8356]);
		p.setValueAtTime(1.75, [ 878.47424, 596.1105]);
		p.setValueAtTime(2.0, [ 915.10254, 568.1579]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 810.43274, 464.017]);
		p.setValueAtTime(0.25, [ 825.70715, 497.17188]);
		p.setValueAtTime(0.5, [ 758.4665, 536.4485]);
		p.setValueAtTime(0.75, [ 751.40247, 521.33734]);
		p.setValueAtTime(1.0, [ 762.96027, 472.87387]);
		p.setValueAtTime(1.25, [ 786.05914, 460.86002]);
		p.setValueAtTime(1.5, [ 818.06, 467.88727]);
		p.setValueAtTime(1.75, [ 812.09564, 484.99493]);
		p.setValueAtTime(2.0, [ 821.01166, 524.00073]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 874.1994, 462.59604]);
		p.setValueAtTime(0.25, [ 809.046, 449.70615]);
		p.setValueAtTime(0.5, [ 826.2778, 461.68985]);
		p.setValueAtTime(0.75, [ 820.84064, 482.4409]);
		p.setValueAtTime(1.0, [ 844.98096, 468.03525]);
		p.setValueAtTime(1.25, [ 844.5639, 473.2303]);
		p.setValueAtTime(1.5, [ 848.21545, 477.20337]);
		p.setValueAtTime(1.75, [ 853.9975, 449.64136]);
		p.setValueAtTime(2.0, [ 881.30664, 494.01962]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 950.6786, 476.04984]);
		p.setValueAtTime(0.25, [ 959.635, 442.59332]);
		p.setValueAtTime(0.5, [ 910.47284, 472.9918]);
		p.setValueAtTime(0.75, [ 917.55414, 504.78433]);
		p.setValueAtTime(1.0, [ 905.44904, 484.3019]);
		p.setValueAtTime(1.25, [ 956.61957, 469.8264]);
		p.setValueAtTime(1.5, [ 936.3253, 458.119]);
		p.setValueAtTime(1.75, [ 918.61017, 518.9121]);
		p.setValueAtTime(2.0, [ 938.57056, 472.2435]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 974.1465, 461.21878]);
		p.setValueAtTime(0.25, [ 981.1432, 503.41074]);
		p.setValueAtTime(0.5, [ 988.7446, 492.69205]);
		p.setValueAtTime(0.75, [ 949.8952, 473.75748]);
		p.setValueAtTime(1.0, [ 926.93744, 509.3668]);
		p.setValueAtTime(1.25, [ 907.688, 522.6131]);
		p.setValueAtTime(1.5, [ 917.61633, 480.09677]);
		p.setValueAtTime(1.75, [ 890.64795, 423.94394]);
		p.setValueAtTime(2.0, [ 864.25366, 455.5666]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1038.5596, 457.82132]);
		p.setValueAtTime(0.25, [ 1039.5806, 477.18884]);
		p.setValueAtTime(0.5, [ 1053.0643, 489.16168]);
		p.setValueAtTime(0.75, [ 1122.2461, 536.2459]);
		p.setValueAtTime(1.0, [ 1179.6581, 535.3307]);
		p.setValueAtTime(1.25, [ 1176.2654, 541.62854]);
		p.setValueAtTime(1.5, [ 1200.5566, 563.361]);
		p.setValueAtTime(1.75, [ 1159.2913, 579.3437]);
		p.setValueAtTime(2.0, [ 1156.3204, 567.59937]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1121.3636, 431.49966]);
		p.setValueAtTime(0.25, [ 1112.302, 367.6983]);
		p.setValueAtTime(0.5, [ 1150.1173, 320.88672]);
		p.setValueAtTime(0.75, [ 1179.8812, 357.7427]);
		p.setValueAtTime(1.0, [ 1163.7133, 364.73758]);
		p.setValueAtTime(1.25, [ 1138.566, 395.01035]);
		p.setValueAtTime(1.5, [ 1171.6305, 406.8868]);
		p.setValueAtTime(1.75, [ 1152.3267, 404.10767]);
		p.setValueAtTime(2.0, [ 1106.0145, 440.4204]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1153.0443, 464.54395]);
		p.setValueAtTime(0.25, [ 1116.104, 442.03918]);
		p.setValueAtTime(0.5, [ 1082.7386, 414.16486]);
		p.setValueAtTime(0.75, [ 1076.8319, 408.87207]);
		p.setValueAtTime(1.0, [ 1089.1005, 353.3314]);
		p.setValueAtTime(1.25, [ 1064.4557, 335.9484]);
		p.setValueAtTime(1.5, [ 1089.1447, 335.3464]);
		p.setValueAtTime(1.75, [ 1064.0829, 304.0553]);
		p.setValueAtTime(2.0, [ 1055.1323, 337.64114]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1230.0767, 440.06918]);
		p.setValueAtTime(0.25, [ 1243.3439, 460.7449]);
		p.setValueAtTime(0.5, [ 1247.6625, 430.3915]);
		p.setValueAtTime(0.75, [ 1242.736, 428.28732]);
		p.setValueAtTime(1.0, [ 1174.894, 457.29123]);
		p.setValueAtTime(1.25, [ 1179.5112, 483.4631]);
		p.setValueAtTime(1.5, [ 1178.5107, 504.98663]);
		p.setValueAtTime(1.75, [ 1159.4164, 550.2841]);
		p.setValueAtTime(2.0, [ 1136.1364, 571.8425]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1292.3208, 454.43893]);
		p.setValueAtTime(0.25, [ 1316.0417, 489.8351]);
		p.setValueAtTime(0.5, [ 1291.902, 509.33414]);
		p.setValueAtTime(0.75, [ 1266.5054, 460.01645]);
		p.setValueAtTime(1.0, [ 1276.899, 434.81186]);
		p.setValueAtTime(1.25, [ 1294.0873, 454.17593]);
		p.setValueAtTime(1.5, [ 1257.7865, 495.56543]);
		p.setValueAtTime(1.75, [ 1247.1652, 461.2477]);
		p.setValueAtTime(2.0, [ 1274.5144, 492.57706]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1338.3236, 458.72626]);
		p.setValueAtTime(0.25, [ 1319.6722, 501.8258]);
		p.setValueAtTime(0.5, [ 1369.066, 500.2582]);
		p.setValueAtTime(0.75, [ 1347.3785, 485.58374]);
		p.setValueAtTime(1.0, [ 1362.7148, 474.65353]);
		p.setValueAtTime(1.25, [ 1322.1536, 462.78424]);
		p.setValueAtTime(1.5, [ 1312.4379, 385.86752]);
		p.setValueAtTime(1.75, [ 1338.2969, 425.5882]);
		p.setValueAtTime(2.0, [ 1372.3693, 416.26062]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1406.0469, 457.78497]);
		p.setValueAtTime(0.25, [ 1509.1467, 413.27933]);
		p.setValueAtTime(0.5, [ 1482.1835, 463.25684]);
		p.setValueAtTime(0.75, [ 1484.9009, 484.6257]);
		p.setValueAtTime(1.0, [ 1501.5464, 485.08258]);
		p.setValueAtTime(1.25, [ 1493.2709, 558.19495]);
		p.setValueAtTime(1.5, [ 1472.0886, 565.06244]);
		p.setValueAtTime(1.75, [ 1446.2075, 534.37225]);
		p.setValueAtTime(2.0, [ 1442.5706, 511.87405]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1486.7512, 446.75143]);
		p.setValueAtTime(0.25, [ 1490.7389, 438.79584]);
		p.setValueAtTime(0.5, [ 1498.0658, 444.31055]);
		p.setValueAtTime(0.75, [ 1489.315, 463.70908]);
		p.setValueAtTime(1.0, [ 1501.8379, 514.5739]);
		p.setValueAtTime(1.25, [ 1554.112, 561.0146]);
		p.setValueAtTime(1.5, [ 1510.9349, 584.7791]);
		p.setValueAtTime(1.75, [ 1474.8511, 578.8874]);
		p.setValueAtTime(2.0, [ 1493.9973, 608.7326]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1542.4707, 458.06296]);
		p.setValueAtTime(0.25, [ 1560.0354, 475.3036]);
		p.setValueAtTime(0.5, [ 1505.0452, 457.33008]);
		p.setValueAtTime(0.75, [ 1420.3856, 466.73087]);
		p.setValueAtTime(1.0, [ 1382.3607, 426.1091]);
		p.setValueAtTime(1.25, [ 1374.3461, 423.8741]);
		p.setValueAtTime(1.5, [ 1387.494, 475.09238]);
		p.setValueAtTime(1.75, [ 1389.0737, 492.93585]);
		p.setValueAtTime(2.0, [ 1382.4552, 493.8619]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1580.974, 462.79266]);
		p.setValueAtTime(0.25, [ 1575.0497, 534.1008]);
		p.setValueAtTime(0.5, [ 1566.9052, 475.7437]);
		p.setValueAtTime(0.75, [ 1579.3397, 482.0117]);
		p.setValueAtTime(1.0, [ 1613.9663, 489.4684]);
		p.setValueAtTime(1.25, [ 1589.2992, 515.8093]);
		p.setValueAtTime(1.5, [ 1603.225, 504.3137]);
		p.setValueAtTime(1.75, [ 1595.3523, 515.5257]);
		p.setValueAtTime(2.0, [ 1612.6454, 522.78064]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1636.4346, 460.57022]);
		p.setValueAtTime(0.25, [ 1626.2644, 487.47247]);
		p.setValueAtTime(0.5, [ 1675.9733, 500.3252]);
		p.setValueAtTime(0.75, [ 1646.3534, 488.02808]);
		p.setValueAtTime(1.0, [ 1639.9252, 510.7386]);
		p.setValueAtTime(1.25, [ 1610.6185, 529.5036]);
		p.setValueAtTime(1.5, [ 1603.6849, 572.8135]);
		p.setValueAtTime(1.75, [ 1611.5306, 635.48035]);
		p.setValueAtTime(2.0, [ 1659.8141, 621.6718]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1721.2231, 471.75687]);
		p.setValueAtTime(0.25, [ 1715.5269, 446.1038]);
		p.setValueAtTime(0.5, [ 1723.3967, 483.32126]);
		p.setValueAtTime(0.75, [ 1779.8525, 509.09348]);
		p.setValueAtTime(1.0, [ 1754.1936, 459.90186]);
		p.setValueAtTime(1.25, [ 1778.284, 478.00934]);
		p.setValueAtTime(1.5, [ 1832.0598, 462.60675]);
		p.setValueAtTime(1.75, [ 1815.3444, 447.17496]);
		p.setValueAtTime(2.0, [ 1833.0535, 460.82654]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1758.1335, 459.9342]);
		p.setValueAtTime(0.25, [ 1780.4183, 535.33264]);
		p.setValueAtTime(0.5, [ 1789.3964, 536.6528]);
		p.setValueAtTime(0.75, [ 1806.6399, 576.0114]);
		p.setValueAtTime(1.0, [ 1798.5247, 585.4589]);
		p.setValueAtTime(1.25, [ 1836.3938, 592.48663]);
		p.setValueAtTime(1.5, [ 1832.819, 615.8525]);
		p.setValueAtTime(1.75, [ 1875.6832, 647.9024]);
		p.setValueAtTime(2.0, [ 1855.144, 635.55524]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1838.7517, 445.07062]);
		p.setValueAtTime(0.25, [ 1820.25, 463.01743]);
		p.setValueAtTime(0.5, [ 1831.4729, 474.80655]);
		p.setValueAtTime(0.75, [ 1838.0546, 515.9413]);
		p.setValueAtTime(1.0, [ 1823.7421, 538.01105]);
		p.setValueAtTime(1.25, [ 1820.5674, 551.5168]);
		p.setValueAtTime(1.5, [ 1838.8971, 511.28223]);
		p.setValueAtTime(1.75, [ 1842.5208, 480.9384]);
		p.setValueAtTime(2.0, [ 1777.6835, 455.01572]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1910.1266, 427.7595]);
		p.setValueAtTime(0.25, [ 1937.4214, 408.09296]);
		p.setValueAtTime(0.5, [ 1936.7611, 417.9977]);
		p.setValueAtTime(0.75, [ 1966.7494, 401.7119]);
		p.setValueAtTime(1.0, [ 1947.5834, 375.40314]);
		p.setValueAtTime(1.25, [ 1992.3339, 336.17697]);
		p.setValueAtTime(1.5, [ 1996.5667, 363.11215]);
		p.setValueAtTime(1.75, [ 1999.2301, 373.21884]);
		p.setValueAtTime(2.0, [ 2038.3044, 362.05838]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 27.9528, 519.3523]);
		p.setValueAtTime(0.25, [ 0.025490284, 533.4916]);
		p.setValueAtTime(0.5, [ -17.470673, 579.9279]);
		p.setValueAtTime(0.75, [ -37.98429, 563.14435]);
		p.setValueAtTime(1.0, [ -70.225174, 582.5357]);
		p.setValueAtTime(1.25, [ -48.842052, 592.75476]);
		p.setValueAtTime(1.5, [ -38.744347, 544.0026]);
		p.setValueAtTime(1.75, [ -16.412575, 536.47235]);
		p.setValueAtTime(2.0, [ -15.860945, 545.53186]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 81.462, 495.19745]);
		p.setValueAtTime(0.25, [ 87.8458, 504.91077]);
		p.setValueAtTime(0.5, [ 133.82144, 508.8506]);
		p.setValueAtTime(0.75, [ 176.56374, 494.43057]);
		p.setValueAtTime(1.0, [ 178.50877, 464.4172]);
		p.setValueAtTime(1.25, [ 201.88158, 407.51462]);
		p.setValueAtTime(1.5, [ 247.2539, 410.47525]);
		p.setValueAtTime(1.75, [ 272.9941, 472.4648]);
		p.setValueAtTime(2.0, [ 279.3353, 504.69754]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 166.39307, 508.96866]);
		p.setValueAtTime(0.25, [ 176.9543, 550.9129]);
		p.setValueAtTime(0.5, [ 212.21468, 547.7209]);
		p.setValueAtTime(0.75, [ 166.29672, 550.0054]);
		p.setValueAtTime(1.0, [ 109.77439, 513.0959]);
		p.setValueAtTime(1.25, [ 119.02903, 512.3896]);
		p.setValueAtTime(1.5, [ 121.32546, 484.9077]);
		p.setValueAtTime(1.75, [ 73.98812, 501.44864]);
		p.setValueAtTime(2.0, [ 63.233658, 564.5366]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 212.89029, 512.5312]);
		p.setValueAtTime(0.25, [ 203.81781, 521.1861]);
		p.setValueAtTime(0.5, [ 157.70953, 555.19037]);
		p.setValueAtTime(0.75, [ 170.35226, 579.43054]);
		p.setValueAtTime(1.0, [ 174.4511, 539.065]);
		p.setValueAtTime(1.25, [ 160.7821, 533.7686]);
		p.setValueAtTime(1.5, [ 162.69682, 544.86224]);
		p.setValueAtTime(1.75, [ 141.93869, 548.6541]);
		p.setValueAtTime(2.0, [ 170.55681, 578.72534]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 281.95526, 512.12726]);
		p.setValueAtTime(0.25, [ 307.09067, 467.7312]);
		p.setValueAtTime(0.5, [ 362.5015, 431.01276]);
		p.setValueAtTime(0.75, [ 311.32193, 426.70352]);
		p.setValueAtTime(1.0, [ 302.32468, 435.54102]);
		p.setValueAtTime(1.25, [ 285.59152, 432.1026]);
		p.setValueAtTime(1.5, [ 345.25705, 419.4099]);
		p.setValueAtTime(1.75, [ 333.52136, 488.36105]);
		p.setValueAtTime(2.0, [ 318.18256, 518.7017]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 316.01624, 508.92502]);
		p.setValueAtTime(0.25, [ 306.18823, 445.65305]);
		p.setValueAtTime(0.5, [ 313.74405, 402.18295]);
		p.setValueAtTime(0.75, [ 265.51108, 380.65292]);
		p.setValueAtTime(1.0, [ 290.8193, 335.01074]);
		p.setValueAtTime(1.25, [ 303.75604, 337.6319]);
		p.setValueAtTime(1.5, [ 215.64407, 317.38742]);
		p.setValueAtTime(1.75, [ 185.20215, 330.17038]);
		p.setValueAtTime(2.0, [ 179.34496, 344.2412]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 377.02362, 498.0869]);
		p.setValueAtTime(0.25, [ 335.4922, 471.63474]);
		p.setValueAtTime(0.5, [ 354.9548, 455.09976]);
		p.setValueAtTime(0.75, [ 369.29666, 474.04776]);
		p.setValueAtTime(1.0, [ 387.28824, 507.39606]);
		p.setValueAtTime(1.25, [ 431.7268, 522.4879]);
		p.setValueAtTime(1.5, [ 430.64014, 513.2635]);
		p.setValueAtTime(1.75, [ 498.85156, 511.0257]);
		p.setValueAtTime(2.0, [ 521.7388, 511.8298]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 431.84824, 520.2905]);
		p.setValueAtTime(0.25, [ 429.95627, 512.68677]);
		p.setValueAtTime(0.5, [ 428.69772, 576.2337]);
		p.setValueAtTime(0.75, [ 429.09357, 557.1595]);
		p.setValueAtTime(1.0, [ 405.59933, 571.3146]);
		p.setValueAtTime(1.25, [ 446.58823, 612.7963]);
		p.setValueAtTime(1.5, [ 399.4376, 643.3122]);
		p.setValueAtTime(1.75, [ 410.56778, 623.2066]);
		p.setValueAtTime(2.0, [ 369.27362, 587.3455]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 494.14066, 504.74786]);
		p.setValueAtTime(0.25, [ 473.40344, 407.15598]);
		p.setValueAtTime(0.5, [ 463.56357, 409.84528]);
		p.setValueAtTime(0.75, [ 468.40234, 404.84857]);
		p.setValueAtTime(1.0, [ 517.1325, 432.9269]);
		p.setValueAtTime(1.25, [ 501.27545, 470.2813]);
		p.setValueAtTime(1.5, [ 531.1134, 483.3607]);
		p.setValueAtTime(1.75, [ 568.99554, 461.6716]);
		p.setValueAtTime(2.0, [ 568.22534, 481.38254]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 570.57715, 511.77695]);
		p.setValueAtTime(0.25, [ 539.506, 534.13135]);
		p.setValueAtTime(0.5, [ 583.8752, 545.095]);
		p.setValueAtTime(0.75, [ 596.53046, 572.8413]);
		p.setValueAtTime(1.0, [ 640.6334, 546.8535]);
		p.setValueAtTime(1.25, [ 621.014, 552.46747]);
		p.setValueAtTime(1.5, [ 611.056, 555.104]);
		p.setValueAtTime(1.75, [ 584.6213, 559.5653]);
		p.setValueAtTime(2.0, [ 529.27594, 598.1994]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 605.8045, 521.31213]);
		p.setValueAtTime(0.25, [ 605.0105, 564.294]);
		p.setValueAtTime(0.5, [ 656.32367, 630.4604]);
		p.setValueAtTime(0.75, [ 644.94696, 638.1765]);
		p.setValueAtTime(1.0, [ 656.6899, 622.17084]);
		p.setValueAtTime(1.25, [ 680.5642, 605.1481]);
		p.setValueAtTime(1.5, [ 661.86804, 536.9755]);
		p.setValueAtTime(1.75, [ 650.56433, 551.579]);
		p.setValueAtTime(2.0, [ 671.2746, 518.7807]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 684.5305, 533.6986]);
		p.setValueAtTime(0.25, [ 716.0332, 561.0815]);
		p.setValueAtTime(0.5, [ 709.8701, 534.9554]);
		p.setValueAtTime(0.75, [ 728.5861, 526.5341]);
		p.setValueAtTime(1.0, [ 686.82635, 541.7936]);
		p.setValueAtTime(1.25, [ 651.36926, 551.98016]);
		p.setValueAtTime(1.5, [ 643.6307, 540.2007]);
		p.setValueAtTime(1.75, [ 594.9733, 512.6545]);
		p.setValueAtTime(2.0, [ 596.231, 497.79788]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 743.069, 509.88583]);
		p.setValueAtTime(0.25, [ 725.1499, 520.00073]);
		p.setValueAtTime(0.5, [ 710.9604, 521.15326]);
		p.setValueAtTime(0.75, [ 694.58606, 483.68195]);
		p.setValueAtTime(1.0, [ 649.72845, 451.23288]);
		p.setValueAtTime(1.25, [ 655.9695, 418.5808]);
		p.setValueAtTime(1.5, [ 662.812, 397.62405]);
		p.setValueAtTime(1.75, [ 641.81213, 422.7086]);
		p.setValueAtTime(2.0, [ 635.70953, 433.14926]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 810.11707, 515.76556]);
		p.setValueAtTime(0.25, [ 816.6145, 528.4396]);
		p.setValueAtTime(0.5, [ 824.75323, 563.0443]);
		p.setValueAtTime(0.75, [ 853.145, 561.3077]);
		p.setValueAtTime(1.0, [ 843.0551, 599.5842]);
		p.setValueAtTime(1.25, [ 848.8955, 639.99866]);
		p.setValueAtTime(1.5, [ 868.33234, 664.04205]);
		p.setValueAtTime(1.75, [ 880.63153, 674.45294]);
		p.setValueAtTime(2.0, [ 945.8728, 731.9355]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 863.35034, 512.8229]);
		p.setValueAtTime(0.25, [ 879.54974, 508.88565]);
		p.setValueAtTime(0.5, [ 896.25244, 512.1245]);
		p.setValueAtTime(0.75, [ 902.23193, 493.34894]);
		p.setValueAtTime(1.0, [ 911.5444, 494.84747]);
		p.setValueAtTime(1.25, [ 934.1242, 496.5065]);
		p.setValueAtTime(1.5, [ 948.5031, 495.02267]);
		p.setValueAtTime(1.75, [ 955.893, 514.1794]);
		p.setValueAtTime(2.0, [ 993.3622, 541.7307]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 932.1924, 504.29013]);
		p.setValueAtTime(0.25, [ 937.68585, 543.6969]);
		p.setValueAtTime(0.5, [ 976.70844, 501.2656]);
		p.setValueAtTime(0.75, [ 1022.76605, 506.6043]);
		p.setValueAtTime(1.0, [ 1044.7179, 472.2547]);
		p.setValueAtTime(1.25, [ 1013.06445, 468.88898]);
		p.setValueAtTime(1.5, [ 990.0828, 414.79614]);
		p.setValueAtTime(1.75, [ 976.7243, 392.52692]);
		p.setValueAtTime(2.0, [ 980.1589, 361.26822]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 987.337, 529.29156]);
		p.setValueAtTime(0.25, [ 975.6278, 516.24817]);
		p.setValueAtTime(0.5, [ 1007.3707, 507.0515]);
		p.setValueAtTime(0.75, [ 1001.896, 447.77832]);
		p.setValueAtTime(1.0, [ 956.0978, 490.4916]);
		p.setValueAtTime(1.25, [ 975.5832, 495.81696]);
		p.setValueAtTime(1.5, [ 1020.2106, 498.33444]);
		p.setValueAtTime(1.75, [ 1061.7792, 471.4878]);
		p.setValueAtTime(2.0, [ 1007.74817, 507.50168]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1035.6447, 520.59424]);
		p.setValueAtTime(0.25, [ 1035.272, 496.27502]);
		p.setValueAtTime(0.5, [ 1063.2656, 482.73056]);
		p.setValueAtTime(0.75, [ 1063.8817, 467.49435]);
		p.setValueAtTime(1.0, [ 1036.9885, 462.07578]);
		p.setValueAtTime(1.25, [ 1062.4448, 497.70636]);
		p.setValueAtTime(1.5, [ 1076.4596, 519.5703]);
		p.setValueAtTime(1.75, [ 1068.829, 559.1307]);
		p.setValueAtTime(2.0, [ 1086.2283, 530.5702]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1128.1396, 514.9728]);
		p.setValueAtTime(0.25, [ 1164.5637, 549.5592]);
		p.setValueAtTime(0.5, [ 1162.4625, 551.2512]);
		p.setValueAtTime(0.75, [ 1171.2435, 561.1053]);
		p.setValueAtTime(1.0, [ 1141.3177, 594.05005]);
		p.setValueAtTime(1.25, [ 1161.2032, 592.7826]);
		p.setValueAtTime(1.5, [ 1089.647, 624.158]);
		p.setValueAtTime(1.75, [ 1103.7402, 655.5337]);
		p.setValueAtTime(2.0, [ 1081.3756, 665.5768]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1164.116, 506.15005]);
		p.setValueAtTime(0.25, [ 1160.1271, 464.89404]);
		p.setValueAtTime(0.5, [ 1188.2963, 484.29083]);
		p.setValueAtTime(0.75, [ 1174.9618, 492.69125]);
		p.setValueAtTime(1.0, [ 1227.3207, 521.12866]);
		p.setValueAtTime(1.25, [ 1233.8483, 490.08713]);
		p.setValueAtTime(1.5, [ 1228.1447, 510.48663]);
		p.setValueAtTime(1.75, [ 1229.8479, 499.2701]);
		p.setValueAtTime(2.0, [ 1242.828, 528.1987]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1242.8158, 512.98016]);
		p.setValueAtTime(0.25, [ 1244.3113, 513.76764]);
		p.setValueAtTime(0.5, [ 1193.4249, 528.6268]);
		p.setValueAtTime(0.75, [ 1233.4169, 573.91187]);
		p.setValueAtTime(1.0, [ 1228.0746, 615.1623]);
		p.setValueAtTime(1.25, [ 1201.6753, 593.2625]);
		p.setValueAtTime(1.5, [ 1217.934, 577.89764]);
		p.setValueAtTime(1.75, [ 1200.7648, 576.319]);
		p.setValueAtTime(2.0, [ 1162.0973, 564.787]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1294.6426, 491.03857]);
		p.setValueAtTime(0.25, [ 1348.0175, 497.81662]);
		p.setValueAtTime(0.5, [ 1356.8217, 471.27316]);
		p.setValueAtTime(0.75, [ 1356.7928, 447.31354]);
		p.setValueAtTime(1.0, [ 1364.9385, 434.62476]);
		p.setValueAtTime(1.25, [ 1332.8176, 415.0236]);
		p.setValueAtTime(1.5, [ 1328.19, 418.10275]);
		p.setValueAtTime(1.75, [ 1395.5273, 387.2524]);
		p.setValueAtTime(2.0, [ 1394.5598, 358.4667]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1367.1354, 522.02124]);
		p.setValueAtTime(0.25, [ 1368.4108, 521.31824]);
		p.setValueAtTime(0.5, [ 1329.3671, 498.79663]);
		p.setValueAtTime(0.75, [ 1360.0419, 458.62515]);
		p.setValueAtTime(1.0, [ 1381.9878, 501.2105]);
		p.setValueAtTime(1.25, [ 1391.2483, 513.59174]);
		p.setValueAtTime(1.5, [ 1332.0961, 537.00165]);
		p.setValueAtTime(1.75, [ 1314.7885, 514.9965]);
		p.setValueAtTime(2.0, [ 1291.2605, 469.38406]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1399.614, 497.1166]);
		p.setValueAtTime(0.25, [ 1353.6973, 474.45166]);
		p.setValueAtTime(0.5, [ 1325.9451, 496.1067]);
		p.setValueAtTime(0.75, [ 1330.7941, 451.87653]);
		p.setValueAtTime(1.0, [ 1346.7987, 445.8925]);
		p.setValueAtTime(1.25, [ 1390.3859, 454.81573]);
		p.setValueAtTime(1.5, [ 1448.6312, 438.32153]);
		p.setValueAtTime(1.75, [ 1434.5203, 490.59576]);
		p.setValueAtTime(2.0, [ 1452.5718, 495.0546]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1488.9595, 509.49872]);
		p.setValueAtTime(0.25, [ 1536.9034, 519.52216]);
		p.setValueAtTime(0.5, [ 1517.2257, 538.4728]);
		p.setValueAtTime(0.75, [ 1544.6262, 512.73]);
		p.setValueAtTime(1.0, [ 1537.2189, 505.04172]);
		p.setValueAtTime(1.25, [ 1552.2812, 513.13983]);
		p.setValueAtTime(1.5, [ 1530.7836, 511.32297]);
		p.setValueAtTime(1.75, [ 1503.1791, 497.88354]);
		p.setValueAtTime(2.0, [ 1526.5527, 478.11517]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1553.818, 505.83844]);
		p.setValueAtTime(0.25, [ 1501.6968, 456.6825]);
		p.setValueAtTime(0.5, [ 1510.854, 450.88174]);
		p.setValueAtTime(0.75, [ 1505.2825, 425.4546]);
		p.setValueAtTime(1.0, [ 1462.4746, 409.87558]);
		p.setValueAtTime(1.25, [ 1491.0065, 399.8462]);
		p.setValueAtTime(1.5, [ 1517.872, 385.44534]);
		p.setValueAtTime(1.75, [ 1525.3322, 378.45993]);
		p.setValueAtTime(2.0, [ 1512.2754, 372.76678]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1583.8341, 522.67993]);
		p.setValueAtTime(0.25, [ 1503.3517, 515.9318]);
		p.setValueAtTime(0.5, [ 1478.8138, 533.1994]);
		p.setValueAtTime(0.75, [ 1493.7592, 461.74338]);
		p.setValueAtTime(1.0, [ 1484.1663, 420.70016]);
		p.setValueAtTime(1.25, [ 1482.1648, 480.25195]);
		p.setValueAtTime(1.5, [ 1486.9835, 513.1503]);
		p.setValueAtTime(1.75, [ 1536.1162, 510.0234]);
		p.setValueAtTime(2.0, [ 1566.2836, 483.97467]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1644.4562, 502.9798]);
		p.setValueAtTime(0.25, [ 1697.8685, 494.4179]);
		p.setValueAtTime(0.5, [ 1713.8597, 484.61084]);
		p.setValueAtTime(0.75, [ 1711.2288, 477.57907]);
		p.setValueAtTime(1.0, [ 1692.127, 486.42676]);
		p.setValueAtTime(1.25, [ 1689.4873, 464.46945]);
		p.setValueAtTime(1.5, [ 1687.419, 443.9086]);
		p.setValueAtTime(1.75, [ 1691.4088, 424.36972]);
		p.setValueAtTime(2.0, [ 1684.4502, 447.87262]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1698.4006, 520.24414]);
		p.setValueAtTime(0.25, [ 1695.9088, 546.62854]);
		p.setValueAtTime(0.5, [ 1725.7867, 558.9756]);
		p.setValueAtTime(0.75, [ 1807.0488, 522.7212]);
		p.setValueAtTime(1.0, [ 1813.5287, 529.2009]);
		p.setValueAtTime(1.25, [ 1828.4299, 548.11005]);
		p.setValueAtTime(1.5, [ 1833.8164, 584.0937]);
		p.setValueAtTime(1.75, [ 1869.7162, 591.7944]);
		p.setValueAtTime(2.0, [ 1879.481, 587.7422]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1775.8829, 508.57068]);
		p.setValueAtTime(0.25, [ 1732.7, 462.24704]);
		p.setValueAtTime(0.5, [ 1707.8124, 474.0717]);
		p.setValueAtTime(0.75, [ 1755.0502, 459.5415]);
		p.setValueAtTime(1.0, [ 1775.8768, 406.85553]);
		p.setValueAtTime(1.25, [ 1766.7422, 429.70636]);
		p.setValueAtTime(1.5, [ 1743.6293, 414.09836]);
		p.setValueAtTime(1.75, [ 1717.7562, 467.12897]);
		p.setValueAtTime(2.0, [ 1755.5463, 483.9473]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1822.9644, 509.4439]);
		p.setValueAtTime(0.25, [ 1800.5801, 482.83868]);
		p.setValueAtTime(0.5, [ 1755.58, 545.0896]);
		p.setValueAtTime(0.75, [ 1758.8232, 549.355]);
		p.setValueAtTime(1.0, [ 1749.386, 564.2009]);
		p.setValueAtTime(1.25, [ 1785.9813, 545.30145]);
		p.setValueAtTime(1.5, [ 1796.2207, 586.5788]);
		p.setValueAtTime(1.75, [ 1741.1005, 590.0608]);
		p.setValueAtTime(2.0, [ 1737.5308, 611.9696]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1888.4342, 520.1447]);
		p.setValueAtTime(0.25, [ 1890.7266, 552.71277]);
		p.setValueAtTime(0.5, [ 1892.0077, 540.5883]);
		p.setValueAtTime(0.75, [ 1905.6835, 560.3055]);
		p.setValueAtTime(1.0, [ 1910.8837, 540.9147]);
		p.setValueAtTime(1.25, [ 1914.76, 595.3224]);
		p.setValueAtTime(1.5, [ 1918.969, 608.3764]);
		p.setValueAtTime(1.75, [ 1938.9164, 649.3131]);
		p.setValueAtTime(2.0, [ 1926.2837, 650.5645]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 44.054363, 560.8001]);
		p.setValueAtTime(0.25, [ 81.25913, 628.05206]);
		p.setValueAtTime(0.5, [ 104.82163, 629.6445]);
		p.setValueAtTime(0.75, [ 117.22793, 620.8707]);
		p.setValueAtTime(1.0, [ 139.44481, 666.1889]);
		p.setValueAtTime(1.25, [ 105.78674, 649.4389]);
		p.setValueAtTime(1.5, [ 106.768456, 653.2542]);
		p.setValueAtTime(1.75, [ 125.6249, 699.8762]);
		p.setValueAtTime(2.0, [ 88.21594, 689.3857]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 82.085144, 560.96985]);
		p.setValueAtTime(0.25, [ 109.94767, 546.59875]);
		p.setValueAtTime(0.5, [ 127.82826, 534.9646]);
		p.setValueAtTime(0.75, [ 135.8626, 559.72003]);
		p.setValueAtTime(1.0, [ 96.72057, 549.82666]);
		p.setValueAtTime(1.25, [ 96.742065, 541.7118]);
		p.setValueAtTime(1.5, [ 97.88289, 520.3315]);
		p.setValueAtTime(1.75, [ 127.62282, 543.0316]);
		p.setValueAtTime(2.0, [ 104.60225, 606.36237]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 171.05087, 582.6762]);
		p.setValueAtTime(0.25, [ 203.82397, 590.82587]);
		p.setValueAtTime(0.5, [ 168.55508, 632.31586]);
		p.setValueAtTime(0.75, [ 121.349625, 612.64496]);
		p.setValueAtTime(1.0, [ 84.58306, 666.53064]);
		p.setValueAtTime(1.25, [ 90.64826, 704.8715]);
		p.setValueAtTime(1.5, [ 61.184204, 763.0241]);
		p.setValueAtTime(1.75, [ 59.93514, 774.5783]);
		p.setValueAtTime(2.0, [ 101.87659, 760.7442]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 190.78694, 572.2278]);
		p.setValueAtTime(0.25, [ 190.96745, 581.7622]);
		p.setValueAtTime(0.5, [ 196.37239, 602.0131]);
		p.setValueAtTime(0.75, [ 216.3199, 544.8777]);
		p.setValueAtTime(1.0, [ 240.46265, 510.27066]);
		p.setValueAtTime(1.25, [ 221.56937, 462.72232]);
		p.setValueAtTime(1.5, [ 266.79245, 413.85776]);
		p.setValueAtTime(1.75, [ 286.04376, 385.475]);
		p.setValueAtTime(2.0, [ 329.77234, 365.94327]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 297.9483, 562.26117]);
		p.setValueAtTime(0.25, [ 320.51852, 557.7128]);
		p.setValueAtTime(0.5, [ 361.79453, 562.284]);
		p.setValueAtTime(0.75, [ 426.7932, 575.5708]);
		p.setValueAtTime(1.0, [ 436.90964, 558.5424]);
		p.setValueAtTime(1.25, [ 417.10245, 538.08594]);
		p.setValueAtTime(1.5, [ 408.3868, 474.56454]);
		p.setValueAtTime(1.75, [ 434.23828, 464.79]);
		p.setValueAtTime(2.0, [ 422.02725, 421.93954]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 322.2062, 579.16675]);
		p.setValueAtTime(0.25, [ 297.655, 569.42126]);
		p.setValueAtTime(0.5, [ 298.72272, 539.7278]);
		p.setValueAtTime(0.75, [ 297.19955, 575.38403]);
		p.setValueAtTime(1.0, [ 264.92273, 587.0836]);
		p.setValueAtTime(1.25, [ 237.40572, 594.52094]);
		p.setValueAtTime(1.5, [ 192.60399, 617.60944]);
		p.setValueAtTime(1.75, [ 187.59904, 630.9441]);
		p.setValueAtTime(2.0, [ 188.97977, 651.74384]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 382.06424, 557.4146]);
		p.setValueAtTime(0.25, [ 366.0406, 546.26086]);
		p.setValueAtTime(0.5, [ 369.51987, 533.5874]);
		p.setValueAtTime(0.75, [ 354.2829, 470.1917]);
		p.setValueAtTime(1.0, [ 320.2513, 445.85104]);
		p.setValueAtTime(1.25, [ 351.98825, 440.7189]);
		p.setValueAtTime(1.5, [ 356.47668, 453.83643]);
		p.setValueAtTime(1.75, [ 368.23434, 445.9614]);
		p.setValueAtTime(2.0, [ 369.13672, 448.77353]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 460.20203, 546.0544]);
		p.setValueAtTime(0.25, [ 419.4364, 540.44586]);
		p.setValueAtTime(0.5, [ 463.25327, 533.13367]);
		p.setValueAtTime(0.75, [ 502.61383, 537.6965]);
		p.setValueAtTime(1.0, [ 531.5096, 556.22064]);
		p.setValueAtTime(1.25, [ 548.9165, 584.8212]);
		p.setValueAtTime(1.5, [ 519.94806, 633.5615]);
		p.setValueAtTime(1.75, [ 490.03906, 671.0697]);
		p.setValueAtTime(2.0, [ 565.91705, 697.43896]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 525.99677, 555.51434]);
		p.setValueAtTime(0.25, [ 508.20517, 539.7904]);
		p.setValueAtTime(0.5, [ 533.16156, 577.30646]);
		p.setValueAtTime(0.75, [ 537.34845, 593.8594]);
		p.setValueAtTime(1.0, [ 531.4018, 648.08374]);
		p.setValueAtTime(1.25, [ 555.51154, 614.22437]);
		p.setValueAtTime(1.5, [ 562.9934, 622.9479]);
		p.setValueAtTime(1.75, [ 527.3711, 634.61865]);
		p.setValueAtTime(2.0, [ 536.3901, 650.0633]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 563.7473, 573.3134]);
		p.setValueAtTime(0.25, [ 569.90344, 604.0773]);
		p.setValueAtTime(0.5, [ 549.5209, 613.1933]);
		p.setValueAtTime(0.75, [ 568.07666, 650.9476]);
		p.setValueAtTime(1.0, [ 578.53937, 625.6521]);
		p.setValueAtTime(1.25, [ 608.98627, 650.0535]);
		p.setValueAtTime(1.5, [ 582.55896, 639.79065]);
		p.setValueAtTime(1.75, [ 614.69714, 652.9049]);
		p.setValueAtTime(2.0, [ 632.92554, 678.6275]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 617.375, 580.8693]);
		p.setValueAtTime(0.25, [ 613.7447, 533.6621]);
		p.setValueAtTime(0.5, [ 572.45215, 604.031]);
		p.setValueAtTime(0.75, [ 525.40356, 603.4635]);
		p.setValueAtTime(1.0, [ 559.72644, 602.6689]);
		p.setValueAtTime(1.25, [ 582.71436, 608.8419]);
		p.setValueAtTime(1.5, [ 598.72345, 551.53485]);
		p.setValueAtTime(1.75, [ 593.13666, 502.4365]);
		p.setValueAtTime(2.0, [ 590.12854, 475.82898]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 706.1152, 542.52814]);
		p.setValueAtTime(0.25, [ 677.2417, 577.6382]);
		p.setValueAtTime(0.5, [ 670.7934, 560.3901]);
		p.setValueAtTime(0.75, [ 687.9099, 569.7486]);
		p.setValueAtTime(1.0, [ 668.7281, 527.3678]);
		p.setValueAtTime(1.25, [ 671.04114, 524.3561]);
		p.setValueAtTime(1.5, [ 705.11664, 512.85004]);
		p.setValueAtTime(1.75, [ 671.6623, 483.95212]);
		p.setValueAtTime(2.0, [ 643.9668, 439.4752]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 732.9392, 591.4455]);
		p.setValueAtTime(0.25, [ 763.75616, 627.0048]);
		p.setValueAtTime(0.5, [ 778.72076, 649.9819]);
		p.setValueAtTime(0.75, [ 789.5339, 651.33014]);
		p.setValueAtTime(1.0, [ 768.2273, 648.24243]);
		p.setValueAtTime(1.25, [ 798.8867, 682.47894]);
		p.setValueAtTime(1.5, [ 846.57904, 694.1761]);
		p.setValueAtTime(1.75, [ 843.88715, 706.666]);
		p.setValueAtTime(2.0, [ 895.2655, 727.10815]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 792.0207, 551.0626]);
		p.setValueAtTime(0.25, [ 819.05444, 628.1776]);
		p.setValueAtTime(0.5, [ 784.1562, 586.70776]);
		p.setValueAtTime(0.75, [ 796.8195, 582.1428]);
		p.setValueAtTime(1.0, [ 822.71594, 597.2987]);
		p.setValueAtTime(1.25, [ 753.1018, 582.8326]);
		p.setValueAtTime(1.5, [ 785.216, 568.6318]);
		p.setValueAtTime(1.75, [ 793.3397, 566.8958]);
		p.setValueAtTime(2.0, [ 745.18774, 560.67]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 879.2305, 578.5803]);
		p.setValueAtTime(0.25, [ 853.49524, 594.3858]);
		p.setValueAtTime(0.5, [ 902.2786, 595.4558]);
		p.setValueAtTime(0.75, [ 927.96466, 622.35126]);
		p.setValueAtTime(1.0, [ 919.11816, 658.16626]);
		p.setValueAtTime(1.25, [ 834.1299, 645.9347]);
		p.setValueAtTime(1.5, [ 829.6274, 630.1556]);
		p.setValueAtTime(1.75, [ 839.39746, 629.1209]);
		p.setValueAtTime(2.0, [ 857.35675, 627.5016]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 938.0235, 587.8383]);
		p.setValueAtTime(0.25, [ 957.4746, 595.6252]);
		p.setValueAtTime(0.5, [ 943.89935, 559.20703]);
		p.setValueAtTime(0.75, [ 916.0093, 583.13617]);
		p.setValueAtTime(1.0, [ 929.6755, 595.9905]);
		p.setValueAtTime(1.25, [ 950.7786, 577.4186]);
		p.setValueAtTime(1.5, [ 955.5983, 584.67053]);
		p.setValueAtTime(1.75, [ 976.466, 566.1903]);
		p.setValueAtTime(2.0, [ 953.10547, 544.47296]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 961.6605, 570.0395]);
		p.setValueAtTime(0.25, [ 977.67004, 518.6551]);
		p.setValueAtTime(0.5, [ 1029.4965, 491.91806]);
		p.setValueAtTime(0.75, [ 1038.308, 493.8047]);
		p.setValueAtTime(1.0, [ 1051.8505, 463.75766]);
		p.setValueAtTime(1.25, [ 1053.0511, 483.8968]);
		p.setValueAtTime(1.5, [ 1041.3661, 508.87296]);
		p.setValueAtTime(1.75, [ 1029.7418, 549.4881]);
		p.setValueAtTime(2.0, [ 1108.1179, 533.85144]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1062.8654, 565.3713]);
		p.setValueAtTime(0.25, [ 1090.0336, 601.9163]);
		p.setValueAtTime(0.5, [ 1103.5265, 600.7579]);
		p.setValueAtTime(0.75, [ 1102.7896, 555.6543]);
		p.setValueAtTime(1.0, [ 1085.1482, 592.456]);
		p.setValueAtTime(1.25, [ 1065.037, 561.7038]);
		p.setValueAtTime(1.5, [ 1047.1278, 531.37244]);
		p.setValueAtTime(1.75, [ 1020.7568, 535.79706]);
		p.setValueAtTime(2.0, [ 987.40424, 516.8325]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1106.9741, 577.203]);
		p.setValueAtTime(0.25, [ 1125.0747, 599.2128]);
		p.setValueAtTime(0.5, [ 1108.4945, 604.1266]);
		p.setValueAtTime(0.75, [ 1074.8951, 650.93365]);
		p.setValueAtTime(1.0, [ 1110.5647, 667.3317]);
		p.setValueAtTime(1.25, [ 1106.6246, 663.2243]);
		p.setValueAtTime(1.5, [ 1119.4835, 678.1539]);
		p.setValueAtTime(1.75, [ 1115.3706, 671.2039]);
		p.setValueAtTime(2.0, [ 1140.0392, 614.5167]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1189.5333, 590.4762]);
		p.setValueAtTime(0.25, [ 1187.5669, 611.6783]);
		p.setValueAtTime(0.5, [ 1205.7308, 591.7134]);
		p.setValueAtTime(0.75, [ 1187.1925, 596.6154]);
		p.setValueAtTime(1.0, [ 1206.2472, 563.7144]);
		p.setValueAtTime(1.25, [ 1156.9589, 534.90894]);
		p.setValueAtTime(1.5, [ 1139.3975, 583.4479]);
		p.setValueAtTime(1.75, [ 1139.489, 566.5683]);
		p.setValueAtTime(2.0, [ 1186.1002, 594.4534]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1221.1128, 571.34344]);
		p.setValueAtTime(0.25, [ 1195.3558, 569.19824]);
		p.setValueAtTime(0.5, [ 1127.0739, 594.57367]);
		p.setValueAtTime(0.75, [ 1108.606, 622.0689]);
		p.setValueAtTime(1.0, [ 1180.4929, 629.7019]);
		p.setValueAtTime(1.25, [ 1220.7526, 601.29425]);
		p.setValueAtTime(1.5, [ 1244.2124, 619.59143]);
		p.setValueAtTime(1.75, [ 1228.2855, 598.71796]);
		p.setValueAtTime(2.0, [ 1208.3845, 558.5089]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1309.7063, 547.0966]);
		p.setValueAtTime(0.25, [ 1322.5184, 517.45337]);
		p.setValueAtTime(0.5, [ 1341.5834, 536.4194]);
		p.setValueAtTime(0.75, [ 1343.5155, 537.3681]);
		p.setValueAtTime(1.0, [ 1319.0269, 529.4167]);
		p.setValueAtTime(1.25, [ 1284.9415, 502.4081]);
		p.setValueAtTime(1.5, [ 1250.545, 520.79407]);
		p.setValueAtTime(1.75, [ 1284.3042, 540.789]);
		p.setValueAtTime(2.0, [ 1255.3137, 576.3948]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1355.2236, 561.8914]);
		p.setValueAtTime(0.25, [ 1355.8917, 570.6141]);
		p.setValueAtTime(0.5, [ 1377.5728, 562.8382]);
		p.setValueAtTime(0.75, [ 1400.8071, 594.11633]);
		p.setValueAtTime(1.0, [ 1390.1547, 572.63965]);
		p.setValueAtTime(1.25, [ 1370.7001, 552.3134]);
		p.setValueAtTime(1.5, [ 1339.6156, 541.395]);
		p.setValueAtTime(1.75, [ 1345.7362, 576.1256]);
		p.setValueAtTime(2.0, [ 1355.1997, 587.3094]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1423.8605, 589.5281]);
		p.setValueAtTime(0.25, [ 1379.315, 616.0661]);
		p.setValueAtTime(0.5, [ 1393.4271, 569.9321]);
		p.setValueAtTime(0.75, [ 1400.3256, 567.372]);
		p.setValueAtTime(1.0, [ 1396.2177, 569.98413]);
		p.setValueAtTime(1.25, [ 1412.23, 597.638]);
		p.setValueAtTime(1.5, [ 1414.8893, 584.3089]);
		p.setValueAtTime(1.75, [ 1383.283, 586.38776]);
		p.setValueAtTime(2.0, [ 1404.1273, 545.20416]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1477.0565, 571.2621]);
		p.setValueAtTime(0.25, [ 1518.2207, 568.149]);
		p.setValueAtTime(0.5, [ 1485.3125, 551.0963]);
		p.setValueAtTime(0.75, [ 1443.9698, 549.6108]);
		p.setValueAtTime(1.0, [ 1464.695, 602.2914]);
		p.setValueAtTime(1.25, [ 1433.8344, 618.6119]);
		p.setValueAtTime(1.5, [ 1440.146, 582.3495]);
		p.setValueAtTime(1.75, [ 1450.9668, 573.8362]);
		p.setValueAtTime(2.0, [ 1450.1146, 633.49194]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1526.6758, 552.8532]);
		p.setValueAtTime(0.25, [ 1543.0593, 542.6255]);
		p.setValueAtTime(0.5, [ 1549.6152, 588.6747]);
		p.setValueAtTime(0.75, [ 1539.4271, 623.66986]);
		p.setValueAtTime(1.0, [ 1519.8143, 617.8466]);
		p.setValueAtTime(1.25, [ 1513.4308, 639.9568]);
		p.setValueAtTime(1.5, [ 1529.7859, 598.6545]);
		p.setValueAtTime(1.75, [ 1602.8578, 556.42523]);
		p.setValueAtTime(2.0, [ 1567.006, 531.76624]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1583.23, 566.24677]);
		p.setValueAtTime(0.25, [ 1581.137, 540.47943]);
		p.setValueAtTime(0.5, [ 1570.5835, 589.5928]);
		p.setValueAtTime(0.75, [ 1539.0979, 609.04376]);
		p.setValueAtTime(1.0, [ 1542.3081, 612.0523]);
		p.setValueAtTime(1.25, [ 1562.5942, 634.7808]);
		p.setValueAtTime(1.5, [ 1524.9178, 650.4038]);
		p.setValueAtTime(1.75, [ 1538.2727, 656.58215]);
		p.setValueAtTime(2.0, [ 1586.5359, 656.3308]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1637.5023, 559.7139]);
		p.setValueAtTime(0.25, [ 1613.607, 544.7853]);
		p.setValueAtTime(0.5, [ 1633.744, 536.9887]);
		p.setValueAtTime(0.75, [ 1655.6295, 514.8433]);
		p.setValueAtTime(1.0, [ 1689.053, 582.6134]);
		p.setValueAtTime(1.25, [ 1672.535, 585.9436]);
		p.setValueAtTime(1.5, [ 1670.1465, 602.5269]);
		p.setValueAtTime(1.75, [ 1638.1664, 624.8346]);
		p.setValueAtTime(2.0, [ 1651.9991, 610.98267]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1709.8407, 585.15216]);
		p.setValueAtTime(0.25, [ 1731.5292, 532.0807]);
		p.setValueAtTime(0.5, [ 1688.8567, 499.7855]);
		p.setValueAtTime(0.75, [ 1650.357, 472.0837]);
		p.setValueAtTime(1.0, [ 1651.4059, 454.42325]);
		p.setValueAtTime(1.25, [ 1687.2933, 466.9588]);
		p.setValueAtTime(1.5, [ 1700.6383, 531.1142]);
		p.setValueAtTime(1.75, [ 1712.0546, 578.50726]);
		p.setValueAtTime(2.0, [ 1639.5023, 614.37885]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1769.515, 558.6002]);
		p.setValueAtTime(0.25, [ 1719.1665, 512.26776]);
		p.setValueAtTime(0.5, [ 1737.9072, 520.14886]);
		p.setValueAtTime(0.75, [ 1752.47, 510.3491]);
		p.setValueAtTime(1.0, [ 1720.889, 511.94458]);
		p.setValueAtTime(1.25, [ 1766.6742, 523.6528]);
		p.setValueAtTime(1.5, [ 1766.5774, 523.2454]);
		p.setValueAtTime(1.75, [ 1761.4056, 533.86176]);
		p.setValueAtTime(2.0, [ 1742.4254, 552.0728]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1824.6335, 582.80096]);
		p.setValueAtTime(0.25, [ 1834.2264, 539.088]);
		p.setValueAtTime(0.5, [ 1832.4508, 504.67212]);
		p.setValueAtTime(0.75, [ 1807.0582, 498.25055]);
		p.setValueAtTime(1.0, [ 1803.7445, 500.35336]);
		p.setValueAtTime(1.25, [ 1792.4365, 439.42764]);
		p.setValueAtTime(1.5, [ 1843.9827, 407.22986]);
		p.setValueAtTime(1.75, [ 1821.1854, 414.7169]);
		p.setValueAtTime(2.0, [ 1832.7902, 408.55252]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1918.7986, 568.63983]);
		p.setValueAtTime(0.25, [ 1896.8777, 535.29175]);
		p.setValueAtTime(0.5, [ 1899.7777, 505.8845]);
		p.setValueAtTime(0.75, [ 1887.0829, 488.46802]);
		p.setValueAtTime(1.0, [ 1898.275, 466.2065]);
		p.setValueAtTime(1.25, [ 1904.368, 494.68823]);
		p.setValueAtTime(1.5, [ 1904.7828, 565.509]);
		p.setValueAtTime(1.75, [ 1891.6097, 609.6879]);
		p.setValueAtTime(2.0, [ 1883.0033, 587.7213]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 33.44008, 632.1867]);
		p.setValueAtTime(0.25, [ 88.56152, 669.5107]);
		p.setValueAtTime(0.5, [ 73.86257, 660.4755]);
		p.setValueAtTime(0.75, [ 70.7925, 656.6379]);
		p.setValueAtTime(1.0, [ 57.64198, 653.08203]);
		p.setValueAtTime(1.25, [ 58.498898, 615.1967]);
		p.setValueAtTime(1.5, [ 76.533394, 609.90845]);
		p.setValueAtTime(1.75, [ 70.95504, 615.5456]);
		p.setValueAtTime(2.0, [ 58.021553, 646.5702]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 95.97553, 639.427]);
		p.setValueAtTime(0.25, [ 37.3943, 630.4247]);
		p.setValueAtTime(0.5, [ 20.942575, 646.308]);
		p.setValueAtTime(0.75, [ 42.749245, 648.0141]);
		p.setValueAtTime(1.0, [ 46.237835, 713.112]);
		p.setValueAtTime(1.25, [ 32.397736, 713.352]);
		p.setValueAtTime(1.5, [ 9.447011, 746.956]);
		p.setValueAtTime(1.75, [ -9.633778, 735.49115]);
		p.setValueAtTime(2.0, [ -11.645372, 770.47327]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 146.83714, 632.00397]);
		p.setValueAtTime(0.25, [ 192.06033, 651.1017]);
		p.setValueAtTime(0.5, [ 208.26057, 676.90546]);
		p.setValueAtTime(0.75, [ 214.10098, 686.79596]);
		p.setValueAtTime(1.0, [ 255.12646, 669.35284]);
		p.setValueAtTime(1.25, [ 222.14458, 723.33636]);
		p.setValueAtTime(1.5, [ 237.93887, 760.3238]);
		p.setValueAtTime(1.75, [ 254.19913, 769.9547]);
		p.setValueAtTime(2.0, [ 277.34012, 790.6388]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 208.10336, 641.73456]);
		p.setValueAtTime(0.25, [ 186.32663, 643.514]);
		p.setValueAtTime(0.5, [ 218.43831, 604.3828]);
		p.setValueAtTime(0.75, [ 232.74133, 542.94543]);
		p.setValueAtTime(1.0, [ 262.09494, 493.50348]);
		p.setValueAtTime(1.25, [ 226.75772, 418.7971]);
		p.setValueAtTime(1.5, [ 261.57132, 394.8403]);
		p.setValueAtTime(1.75, [ 260.1171, 365.93518]);
		p.setValueAtTime(2.0, [ 262.5827, 332.7053]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 279.96844, 603.4576]);
		p.setValueAtTime(0.25, [ 310.60654, 589.44977]);
		p.setValueAtTime(0.5, [ 256.87256, 572.63654]);
		p.setValueAtTime(0.75, [ 252.03636, 554.6401]);
		p.setValueAtTime(1.0, [ 245.70914, 613.8702]);
		p.setValueAtTime(1.25, [ 206.43994, 544.39545]);
		p.setValueAtTime(1.5, [ 241.45906, 534.5436]);
		p.setValueAtTime(1.75, [ 223.81697, 551.9316]);
		p.setValueAtTime(2.0, [ 193.89949, 585.0951]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 337.4393, 636.0069]);
		p.setValueAtTime(0.25, [ 337.45056, 686.7357]);
		p.setValueAtTime(0.5, [ 328.8197, 680.6681]);
		p.setValueAtTime(0.75, [ 338.53412, 685.2039]);
		p.setValueAtTime(1.0, [ 289.06668, 696.8133]);
		p.setValueAtTime(1.25, [ 283.91895, 713.01324]);
		p.setValueAtTime(1.5, [ 239.13841, 742.3422]);
		p.setValueAtTime(1.75, [ 270.1776, 758.54944]);
		p.setValueAtTime(2.0, [ 293.09076, 768.1904]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 389.21417, 637.68225]);
		p.setValueAtTime(0.25, [ 419.63086, 654.3662]);
		p.setValueAtTime(0.5, [ 399.5491, 653.92804]);
		p.setValueAtTime(0.75, [ 387.67294, 615.9797]);
		p.setValueAtTime(1.0, [ 382.35864, 665.0964]);
		p.setValueAtTime(1.25, [ 413.11035, 642.538]);
		p.setValueAtTime(1.5, [ 374.05493, 640.0527]);
		p.setValueAtTime(1.75, [ 366.84357, 644.35425]);
		p.setValueAtTime(2.0, [ 350.72037, 649.25507]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 446.28235, 620.3372]);
		p.setValueAtTime(0.25, [ 380.93173, 610.4292]);
		p.setValueAtTime(0.5, [ 390.35162, 606.5538]);
		p.setValueAtTime(0.75, [ 401.86685, 614.36176]);
		p.setValueAtTime(1.0, [ 355.80252, 569.86017]);
		p.setValueAtTime(1.25, [ 366.1714, 550.96173]);
		p.setValueAtTime(1.5, [ 380.36105, 579.10455]);
		p.setValueAtTime(1.75, [ 386.4366, 600.3766]);
		p.setValueAtTime(2.0, [ 430.06503, 628.6916]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 493.88678, 626.783]);
		p.setValueAtTime(0.25, [ 522.31647, 644.39667]);
		p.setValueAtTime(0.5, [ 451.7459, 657.9894]);
		p.setValueAtTime(0.75, [ 450.38663, 678.6255]);
		p.setValueAtTime(1.0, [ 466.40918, 639.9279]);
		p.setValueAtTime(1.25, [ 433.05557, 682.88556]);
		p.setValueAtTime(1.5, [ 492.3005, 676.2172]);
		p.setValueAtTime(1.75, [ 523.27155, 692.6529]);
		p.setValueAtTime(2.0, [ 528.62445, 683.03827]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 583.47485, 628.1864]);
		p.setValueAtTime(0.25, [ 584.36847, 640.27264]);
		p.setValueAtTime(0.5, [ 565.05707, 691.0632]);
		p.setValueAtTime(0.75, [ 565.6145, 704.20013]);
		p.setValueAtTime(1.0, [ 615.6241, 761.0278]);
		p.setValueAtTime(1.25, [ 577.0821, 755.12665]);
		p.setValueAtTime(1.5, [ 543.61237, 773.9024]);
		p.setValueAtTime(1.75, [ 560.2536, 817.69904]);
		p.setValueAtTime(2.0, [ 555.03625, 838.21075]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 629.3716, 626.9392]);
		p.setValueAtTime(0.25, [ 578.5084, 617.2959]);
		p.setValueAtTime(0.5, [ 589.48834, 630.72614]);
		p.setValueAtTime(0.75, [ 555.96234, 658.529]);
		p.setValueAtTime(1.0, [ 565.4784, 715.86664]);
		p.setValueAtTime(1.25, [ 596.68335, 666.0246]);
		p.setValueAtTime(1.5, [ 620.74866, 654.6108]);
		p.setValueAtTime(1.75, [ 627.9956, 657.4962]);
		p.setValueAtTime(2.0, [ 647.8069, 648.9805]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 688.2583, 658.4057]);
		p.setValueAtTime(0.25, [ 645.28394, 686.48346]);
		p.setValueAtTime(0.5, [ 735.36084, 726.0237]);
		p.setValueAtTime(0.75, [ 765.3715, 734.14]);
		p.setValueAtTime(1.0, [ 721.2998, 687.41986]);
		p.setValueAtTime(1.25, [ 757.73206, 668.1065]);
		p.setValueAtTime(1.5, [ 805.95856, 692.484]);
		p.setValueAtTime(1.75, [ 785.3105, 658.4373]);
		p.setValueAtTime(2.0, [ 827.66724, 630.4375]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 770.12524, 631.1919]);
		p.setValueAtTime(0.25, [ 751.9588, 648.56104]);
		p.setValueAtTime(0.5, [ 753.0798, 591.4317]);
		p.setValueAtTime(0.75, [ 775.24976, 586.9774]);
		p.setValueAtTime(1.0, [ 768.5361, 579.744]);
		p.setValueAtTime(1.25, [ 799.99756, 585.1389]);
		p.setValueAtTime(1.5, [ 795.82025, 598.86005]);
		p.setValueAtTime(1.75, [ 749.64545, 601.8173]);
		p.setValueAtTime(2.0, [ 735.2274, 654.05756]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 791.0501, 626.1802]);
		p.setValueAtTime(0.25, [ 770.7669, 654.11304]);
		p.setValueAtTime(0.5, [ 771.45807, 664.5144]);
		p.setValueAtTime(0.75, [ 787.69464, 648.9723]);
		p.setValueAtTime(1.0, [ 801.08466, 698.3877]);
		p.setValueAtTime(1.25, [ 842.99445, 715.0988]);
		p.setValueAtTime(1.5, [ 846.796, 703.77136]);
		p.setValueAtTime(1.75, [ 825.79407, 687.9323]);
		p.setValueAtTime(2.0, [ 809.4216, 671.63293]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 856.6852, 632.46497]);
		p.setValueAtTime(0.25, [ 923.7396, 650.6283]);
		p.setValueAtTime(0.5, [ 940.89404, 666.2695]);
		p.setValueAtTime(0.75, [ 915.4181, 645.18195]);
		p.setValueAtTime(1.0, [ 918.8096, 704.07416]);
		p.setValueAtTime(1.25, [ 924.6172, 682.44995]);
		p.setValueAtTime(1.5, [ 901.26904, 685.929]);
		p.setValueAtTime(1.75, [ 889.98236, 730.8314]);
		p.setValueAtTime(2.0, [ 921.37177, 678.29645]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 928.32056, 633.3147]);
		p.setValueAtTime(0.25, [ 953.2806, 592.1377]);
		p.setValueAtTime(0.5, [ 920.7967, 588.4796]);
		p.setValueAtTime(0.75, [ 904.55237, 580.3963]);
		p.setValueAtTime(1.0, [ 939.055, 571.40265]);
		p.setValueAtTime(1.25, [ 922.0986, 560.9296]);
		p.setValueAtTime(1.5, [ 909.6919, 552.0367]);
		p.setValueAtTime(1.75, [ 930.5089, 569.2532]);
		p.setValueAtTime(2.0, [ 885.9923, 571.6066]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 980.33704, 634.0516]);
		p.setValueAtTime(0.25, [ 976.0921, 602.0937]);
		p.setValueAtTime(0.5, [ 1023.53467, 617.5734]);
		p.setValueAtTime(0.75, [ 990.3315, 599.4532]);
		p.setValueAtTime(1.0, [ 960.3742, 607.2518]);
		p.setValueAtTime(1.25, [ 965.10175, 565.41486]);
		p.setValueAtTime(1.5, [ 989.8182, 551.582]);
		p.setValueAtTime(1.75, [ 951.8491, 581.68243]);
		p.setValueAtTime(2.0, [ 915.04376, 604.45685]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1060.1195, 619.8388]);
		p.setValueAtTime(0.25, [ 1111.2316, 673.92883]);
		p.setValueAtTime(0.5, [ 1104.7045, 689.2536]);
		p.setValueAtTime(0.75, [ 1085.8927, 658.9901]);
		p.setValueAtTime(1.0, [ 1119.6609, 674.85974]);
		p.setValueAtTime(1.25, [ 1089.5404, 669.62036]);
		p.setValueAtTime(1.5, [ 1085.0012, 701.43396]);
		p.setValueAtTime(1.75, [ 1083.0413, 703.4059]);
		p.setValueAtTime(2.0, [ 1107.3798, 739.62524]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1102.3273, 605.224]);
		p.setValueAtTime(0.25, [ 1133.6863, 649.32684]);
		p.setValueAtTime(0.5, [ 1141.4755, 656.5225]);
		p.setValueAtTime(0.75, [ 1155.09, 651.705]);
		p.setValueAtTime(1.0, [ 1192.0613, 658.81195]);
		p.setValueAtTime(1.25, [ 1170.493, 650.91144]);
		p.setValueAtTime(1.5, [ 1173.155, 635.7642]);
		p.setValueAtTime(1.75, [ 1184.2487, 586.3475]);
		p.setValueAtTime(2.0, [ 1183.7308, 554.11456]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1143.919, 646.21136]);
		p.setValueAtTime(0.25, [ 1148.7053, 652.82025]);
		p.setValueAtTime(0.5, [ 1165.1907, 634.4706]);
		p.setValueAtTime(0.75, [ 1156.9657, 657.1332]);
		p.setValueAtTime(1.0, [ 1133.4657, 613.58997]);
		p.setValueAtTime(1.25, [ 1126.7357, 557.9377]);
		p.setValueAtTime(1.5, [ 1124.8143, 599.71466]);
		p.setValueAtTime(1.75, [ 1088.1575, 603.4764]);
		p.setValueAtTime(2.0, [ 1075.2351, 590.0238]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1231.5037, 633.8082]);
		p.setValueAtTime(0.25, [ 1198.2012, 612.1068]);
		p.setValueAtTime(0.5, [ 1236.9895, 635.67566]);
		p.setValueAtTime(0.75, [ 1228.5615, 625.0767]);
		p.setValueAtTime(1.0, [ 1228.9299, 590.9505]);
		p.setValueAtTime(1.25, [ 1227.5209, 605.41034]);
		p.setValueAtTime(1.5, [ 1245.787, 668.95306]);
		p.setValueAtTime(1.75, [ 1253.9647, 659.9848]);
		p.setValueAtTime(2.0, [ 1249.6791, 670.2901]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1297.3035, 626.4602]);
		p.setValueAtTime(0.25, [ 1350.8522, 633.8729]);
		p.setValueAtTime(0.5, [ 1370.8572, 601.942]);
		p.setValueAtTime(0.75, [ 1414.9789, 621.63184]);
		p.setValueAtTime(1.0, [ 1401.4749, 613.2758]);
		p.setValueAtTime(1.25, [ 1413.4882, 592.1818]);
		p.setValueAtTime(1.5, [ 1426.022, 609.3266]);
		p.setValueAtTime(1.75, [ 1431.2423, 619.1094]);
		p.setValueAtTime(2.0, [ 1441.5889, 603.96826]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1355.0038, 645.49097]);
		p.setValueAtTime(0.25, [ 1347.3383, 680.4128]);
		p.setValueAtTime(0.5, [ 1342.2509, 671.63617]);
		p.setValueAtTime(0.75, [ 1404.683, 650.3957]);
		p.setValueAtTime(1.0, [ 1464.0964, 622.9057]);
		p.setValueAtTime(1.25, [ 1457.2396, 594.2836]);
		p.setValueAtTime(1.5, [ 1461.1542, 663.3795]);
		p.setValueAtTime(1.75, [ 1458.303, 687.1664]);
		p.setValueAtTime(2.0, [ 1428.2078, 665.31836]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1404.6599, 617.39844]);
		p.setValueAtTime(0.25, [ 1469.7255, 626.56775]);
		p.setValueAtTime(0.5, [ 1495.6007, 659.0583]);
		p.setValueAtTime(0.75, [ 1535.2177, 682.57886]);
		p.setValueAtTime(1.0, [ 1535.2239, 690.1262]);
		p.setValueAtTime(1.25, [ 1494.6672, 706.2863]);
		p.setValueAtTime(1.5, [ 1485.8228, 749.00775]);
		p.setValueAtTime(1.75, [ 1538.1206, 802.7603]);
		p.setValueAtTime(2.0, [ 1521.3181, 839.24567]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1461.1096, 611.3093]);
		p.setValueAtTime(0.25, [ 1460.8207, 651.26416]);
		p.setValueAtTime(0.5, [ 1474.4471, 685.29193]);
		p.setValueAtTime(0.75, [ 1454.8718, 688.7658]);
		p.setValueAtTime(1.0, [ 1498.9908, 682.738]);
		p.setValueAtTime(1.25, [ 1543.4667, 718.6967]);
		p.setValueAtTime(1.5, [ 1524.4817, 732.1312]);
		p.setValueAtTime(1.75, [ 1535.4021, 754.2566]);
		p.setValueAtTime(2.0, [ 1554.8934, 754.9557]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1529.3817, 647.6111]);
		p.setValueAtTime(0.25, [ 1509.939, 633.04456]);
		p.setValueAtTime(0.5, [ 1518.9277, 610.6366]);
		p.setValueAtTime(0.75, [ 1514.1187, 593.19916]);
		p.setValueAtTime(1.0, [ 1550.6963, 574.3484]);
		p.setValueAtTime(1.25, [ 1554.5458, 589.3097]);
		p.setValueAtTime(1.5, [ 1565.1964, 580.62915]);
		p.setValueAtTime(1.75, [ 1545.2019, 619.4072]);
		p.setValueAtTime(2.0, [ 1532.7047, 629.14526]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1601.622, 630.2014]);
		p.setValueAtTime(0.25, [ 1623.6301, 662.51]);
		p.setValueAtTime(0.5, [ 1646.0494, 675.6128]);
		p.setValueAtTime(0.75, [ 1647.458, 698.30963]);
		p.setValueAtTime(1.0, [ 1691.8981, 686.08154]);
		p.setValueAtTime(1.25, [ 1695.2725, 717.0938]);
		p.setValueAtTime(1.5, [ 1677.9283, 730.9365]);
		p.setValueAtTime(1.75, [ 1621.9666, 669.84033]);
		p.setValueAtTime(2.0, [ 1652.1218, 635.7833]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1643.2247, 612.2126]);
		p.setValueAtTime(0.25, [ 1614.3408, 592.6341]);
		p.setValueAtTime(0.5, [ 1590.7258, 609.3578]);
		p.setValueAtTime(0.75, [ 1617.2484, 591.2525]);
		p.setValueAtTime(1.0, [ 1594.7416, 632.7083]);
		p.setValueAtTime(1.25, [ 1591.6869, 648.05566]);
		p.setValueAtTime(1.5, [ 1596.0181, 622.14886]);
		p.setValueAtTime(1.75, [ 1606.5723, 617.5804]);
		p.setValueAtTime(2.0, [ 1636.1752, 584.4132]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1703.1068, 632.67566]);
		p.setValueAtTime(0.25, [ 1700.6774, 614.72534]);
		p.setValueAtTime(0.5, [ 1724.6127, 542.90936]);
		p.setValueAtTime(0.75, [ 1750.0336, 542.09174]);
		p.setValueAtTime(1.0, [ 1777.8241, 555.8993]);
		p.setValueAtTime(1.25, [ 1792.1895, 523.82623]);
		p.setValueAtTime(1.5, [ 1818.996, 516.68744]);
		p.setValueAtTime(1.75, [ 1808.7792, 470.0568]);
		p.setValueAtTime(2.0, [ 1723.1312, 442.76065]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1768.3151, 625.4293]);
		p.setValueAtTime(0.25, [ 1746.9595, 605.81354]);
		p.setValueAtTime(0.5, [ 1738.7001, 555.0455]);
		p.setValueAtTime(0.75, [ 1772.3088, 527.0418]);
		p.setValueAtTime(1.0, [ 1772.9681, 518.0574]);
		p.setValueAtTime(1.25, [ 1765.8619, 512.7672]);
		p.setValueAtTime(1.5, [ 1765.8441, 509.66046]);
		p.setValueAtTime(1.75, [ 1732.5156, 467.65973]);
		p.setValueAtTime(2.0, [ 1680.8022, 458.952]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1802.1045, 654.5878]);
		p.setValueAtTime(0.25, [ 1817.2937, 652.8826]);
		p.setValueAtTime(0.5, [ 1762.0201, 667.2471]);
		p.setValueAtTime(0.75, [ 1703.7483, 695.36176]);
		p.setValueAtTime(1.0, [ 1689.6266, 727.325]);
		p.setValueAtTime(1.25, [ 1693.2955, 694.2198]);
		p.setValueAtTime(1.5, [ 1679.1696, 622.9816]);
		p.setValueAtTime(1.75, [ 1701.3792, 557.1264]);
		p.setValueAtTime(2.0, [ 1653.0319, 567.34796]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1894.927, 622.86676]);
		p.setValueAtTime(0.25, [ 1833.8116, 589.3515]);
		p.setValueAtTime(0.5, [ 1822.975, 553.0215]);
		p.setValueAtTime(0.75, [ 1810.5809, 505.8142]);
		p.setValueAtTime(1.0, [ 1791.0693, 476.56967]);
		p.setValueAtTime(1.25, [ 1777.5541, 458.26334]);
		p.setValueAtTime(1.5, [ 1833.2367, 465.85382]);
		p.setValueAtTime(1.75, [ 1830.8115, 499.27286]);
		p.setValueAtTime(2.0, [ 1891.4032, 520.3613]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 58.884125, 686.69305]);
		p.setValueAtTime(0.25, [ 66.38605, 686.2209]);
		p.setValueAtTime(0.5, [ 37.566944, 632.3837]);
		p.setValueAtTime(0.75, [ 15.122478, 660.9362]);
		p.setValueAtTime(1.0, [ 25.768194, 646.9335]);
		p.setValueAtTime(1.25, [ 25.396215, 643.5601]);
		p.setValueAtTime(1.5, [ 47.173634, 672.3312]);
		p.setValueAtTime(1.75, [ 53.872723, 612.7608]);
		p.setValueAtTime(2.0, [ 51.404686, 573.9133]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 89.51902, 698.87427]);
		p.setValueAtTime(0.25, [ 71.717705, 719.2868]);
		p.setValueAtTime(0.5, [ 75.96671, 684.12396]);
		p.setValueAtTime(0.75, [ 69.79392, 666.00226]);
		p.setValueAtTime(1.0, [ 77.1021, 670.8974]);
		p.setValueAtTime(1.25, [ 78.27825, 642.1894]);
		p.setValueAtTime(1.5, [ 71.8989, 616.363]);
		p.setValueAtTime(1.75, [ 91.773994, 587.26794]);
		p.setValueAtTime(2.0, [ 126.038376, 580.5956]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 137.5714, 676.0693]);
		p.setValueAtTime(0.25, [ 115.77821, 657.7447]);
		p.setValueAtTime(0.5, [ 135.07512, 638.63074]);
		p.setValueAtTime(0.75, [ 84.67653, 636.8648]);
		p.setValueAtTime(1.0, [ 83.8055, 628.7702]);
		p.setValueAtTime(1.25, [ 95.866585, 596.2327]);
		p.setValueAtTime(1.5, [ 141.42073, 653.59796]);
		p.setValueAtTime(1.75, [ 155.65141, 645.7574]);
		p.setValueAtTime(2.0, [ 129.94655, 603.1983]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 212.6297, 691.7267]);
		p.setValueAtTime(0.25, [ 241.10098, 699.5226]);
		p.setValueAtTime(0.5, [ 228.16841, 717.70844]);
		p.setValueAtTime(0.75, [ 216.31798, 714.2309]);
		p.setValueAtTime(1.0, [ 201.57289, 740.41284]);
		p.setValueAtTime(1.25, [ 240.69083, 759.0072]);
		p.setValueAtTime(1.5, [ 245.81624, 714.3315]);
		p.setValueAtTime(1.75, [ 223.98042, 739.4367]);
		p.setValueAtTime(2.0, [ 254.49303, 729.94885]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 257.46548, 699.6917]);
		p.setValueAtTime(0.25, [ 228.22559, 704.04346]);
		p.setValueAtTime(0.5, [ 286.4546, 750.4684]);
		p.setValueAtTime(0.75, [ 302.9724, 760.6194]);
		p.setValueAtTime(1.0, [ 331.85324, 731.4785]);
		p.setValueAtTime(1.25, [ 279.54538, 749.7693]);
		p.setValueAtTime(1.5, [ 311.2902, 712.3132]);
		p.setValueAtTime(1.75, [ 312.2703, 750.0085]);
		p.setValueAtTime(2.0, [ 341.2578, 766.42053]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 335.10416, 680.3956]);
		p.setValueAtTime(0.25, [ 350.8146, 671.1968]);
		p.setValueAtTime(0.5, [ 361.36188, 642.05524]);
		p.setValueAtTime(0.75, [ 366.04965, 602.0867]);
		p.setValueAtTime(1.0, [ 352.75632, 559.12384]);
		p.setValueAtTime(1.25, [ 380.07733, 514.7326]);
		p.setValueAtTime(1.5, [ 393.31793, 516.67084]);
		p.setValueAtTime(1.75, [ 421.9095, 465.32675]);
		p.setValueAtTime(2.0, [ 452.76425, 459.24884]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 381.1074, 688.36206]);
		p.setValueAtTime(0.25, [ 361.76605, 681.6268]);
		p.setValueAtTime(0.5, [ 331.1796, 671.52814]);
		p.setValueAtTime(0.75, [ 310.2357, 644.5316]);
		p.setValueAtTime(1.0, [ 339.58484, 614.1989]);
		p.setValueAtTime(1.25, [ 378.53708, 613.84143]);
		p.setValueAtTime(1.5, [ 395.38464, 599.4894]);
		p.setValueAtTime(1.75, [ 363.78583, 593.2011]);
		p.setValueAtTime(2.0, [ 361.2175, 552.14325]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 463.73962, 671.4884]);
		p.setValueAtTime(0.25, [ 471.3576, 671.62494]);
		p.setValueAtTime(0.5, [ 458.03906, 625.08777]);
		p.setValueAtTime(0.75, [ 475.17966, 623.18994]);
		p.setValueAtTime(1.0, [ 463.62668, 623.31635]);
		p.setValueAtTime(1.25, [ 448.8425, 621.51215]);
		p.setValueAtTime(1.5, [ 475.62692, 615.2783]);
		p.setValueAtTime(1.75, [ 510.6533, 653.2118]);
		p.setValueAtTime(2.0, [ 526.8773, 680.57965]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 519.1511, 690.88165]);
		p.setValueAtTime(0.25, [ 499.5303, 727.7343]);
		p.setValueAtTime(0.5, [ 481.11203, 761.7319]);
		p.setValueAtTime(0.75, [ 467.63086, 784.3162]);
		p.setValueAtTime(1.0, [ 470.2277, 785.252]);
		p.setValueAtTime(1.25, [ 487.98544, 782.7829]);
		p.setValueAtTime(1.5, [ 421.30444, 758.7223]);
		p.setValueAtTime(1.75, [ 398.20767, 745.9387]);
		p.setValueAtTime(2.0, [ 377.52518, 730.355]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 563.80365, 673.4872]);
		p.setValueAtTime(0.25, [ 567.415, 651.4929]);
		p.setValueAtTime(0.5, [ 606.9505, 634.6629]);
		p.setValueAtTime(0.75, [ 618.52936, 592.716]);
		p.setValueAtTime(1.0, [ 627.0456, 573.8239]);
		p.setValueAtTime(1.25, [ 607.67206, 564.6994]);
		p.setValueAtTime(1.5, [ 602.28796, 563.67773]);
		p.setValueAtTime(1.75, [ 571.55414, 562.83105]);
		p.setValueAtTime(2.0, [ 571.29926, 556.02893]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 630.3325, 683.78265]);
		p.setValueAtTime(0.25, [ 575.82184, 711.5787]);
		p.setValueAtTime(0.5, [ 576.9216, 699.9119]);
		p.setValueAtTime(0.75, [ 504.4482, 722.4303]);
		p.setValueAtTime(1.0, [ 524.71783, 679.41315]);
		p.setValueAtTime(1.25, [ 529.9277, 669.16254]);
		p.setValueAtTime(1.5, [ 561.342, 718.3703]);
		p.setValueAtTime(1.75, [ 607.98676, 749.67535]);
		p.setValueAtTime(2.0, [ 600.84467, 714.2417]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 695.99805, 687.726]);
		p.setValueAtTime(0.25, [ 691.47626, 715.11035]);
		p.setValueAtTime(0.5, [ 703.2072, 689.92285]);
		p.setValueAtTime(0.75, [ 698.9631, 675.2929]);
		p.setValueAtTime(1.0, [ 633.7703, 636.443]);
		p.setValueAtTime(1.25, [ 659.0999, 595.85333]);
		p.setValueAtTime(1.5, [ 643.60516, 610.71826]);
		p.setValueAtTime(1.75, [ 647.2236, 607.5772]);
		p.setValueAtTime(2.0, [ 592.98676, 666.8829]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 746.823, 701.1144]);
		p.setValueAtTime(0.25, [ 769.22577, 716.24744]);
		p.setValueAtTime(0.5, [ 751.0547, 716.66254]);
		p.setValueAtTime(0.75, [ 776.75635, 714.6313]);
		p.setValueAtTime(1.0, [ 785.02405, 693.7465]);
		p.setValueAtTime(1.25, [ 797.15045, 724.4089]);
		p.setValueAtTime(1.5, [ 801.7889, 684.1066]);
		p.setValueAtTime(1.75, [ 809.10675, 688.77545]);
		p.setValueAtTime(2.0, [ 812.60815, 709.9607]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 809.3071, 701.5967]);
		p.setValueAtTime(0.25, [ 777.3561, 730.9188]);
		p.setValueAtTime(0.5, [ 781.7558, 714.3043]);
		p.setValueAtTime(0.75, [ 722.0236, 731.2211]);
		p.setValueAtTime(1.0, [ 735.27057, 713.45465]);
		p.setValueAtTime(1.25, [ 702.496, 708.6245]);
		p.setValueAtTime(1.5, [ 683.1453, 770.341]);
		p.setValueAtTime(1.75, [ 673.1069, 776.9553]);
		p.setValueAtTime(2.0, [ 691.58704, 782.37366]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 890.9967, 711.7097]);
		p.setValueAtTime(0.25, [ 883.69904, 721.98895]);
		p.setValueAtTime(0.5, [ 862.27386, 747.9591]);
		p.setValueAtTime(0.75, [ 820.84143, 783.0384]);
		p.setValueAtTime(1.0, [ 846.2604, 753.19617]);
		p.setValueAtTime(1.25, [ 810.6544, 748.27045]);
		p.setValueAtTime(1.5, [ 740.3709, 781.28265]);
		p.setValueAtTime(1.75, [ 753.9797, 786.24774]);
		p.setValueAtTime(2.0, [ 764.90186, 818.2545]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 918.7868, 669.2805]);
		p.setValueAtTime(0.25, [ 925.7622, 698.08026]);
		p.setValueAtTime(0.5, [ 961.8007, 696.7841]);
		p.setValueAtTime(0.75, [ 969.2968, 677.06146]);
		p.setValueAtTime(1.0, [ 945.81195, 677.56586]);
		p.setValueAtTime(1.25, [ 922.5351, 636.6712]);
		p.setValueAtTime(1.5, [ 923.3437, 623.1183]);
		p.setValueAtTime(1.75, [ 904.4049, 599.61224]);
		p.setValueAtTime(2.0, [ 919.5571, 597.5222]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 989.1326, 668.0375]);
		p.setValueAtTime(0.25, [ 1055.041, 618.3709]);
		p.setValueAtTime(0.5, [ 1134.7465, 585.75507]);
		p.setValueAtTime(0.75, [ 1174.6938, 568.3515]);
		p.setValueAtTime(1.0, [ 1197.3578, 574.1142]);
		p.setValueAtTime(1.25, [ 1190.0055, 629.2269]);
		p.setValueAtTime(1.5, [ 1131.9476, 647.7924]);
		p.setValueAtTime(1.75, [ 1093.6893, 644.28723]);
		p.setValueAtTime(2.0, [ 1122.9806, 649.0694]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1058.7185, 698.85864]);
		p.setValueAtTime(0.25, [ 1023.62683, 749.85565]);
		p.setValueAtTime(0.5, [ 1035.3909, 733.28876]);
		p.setValueAtTime(0.75, [ 1020.43536, 732.7806]);
		p.setValueAtTime(1.0, [ 1054.4946, 743.55975]);
		p.setValueAtTime(1.25, [ 1057.8325, 704.518]);
		p.setValueAtTime(1.5, [ 1011.1513, 658.8659]);
		p.setValueAtTime(1.75, [ 973.1103, 610.936]);
		p.setValueAtTime(2.0, [ 922.9528, 633.7762]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1090.8153, 681.1743]);
		p.setValueAtTime(0.25, [ 1102.8394, 605.80457]);
		p.setValueAtTime(0.5, [ 1077.9752, 643.80396]);
		p.setValueAtTime(0.75, [ 1063.2025, 632.49347]);
		p.setValueAtTime(1.0, [ 1058.6497, 680.0095]);
		p.setValueAtTime(1.25, [ 1059.0931, 680.95184]);
		p.setValueAtTime(1.5, [ 1018.7677, 648.08905]);
		p.setValueAtTime(1.75, [ 1036.244, 630.8918]);
		p.setValueAtTime(2.0, [ 999.8074, 671.38855]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1166.6682, 671.9544]);
		p.setValueAtTime(0.25, [ 1164.7346, 675.61633]);
		p.setValueAtTime(0.5, [ 1188.3933, 624.93524]);
		p.setValueAtTime(0.75, [ 1200.7946, 625.28864]);
		p.setValueAtTime(1.0, [ 1176.4625, 619.4254]);
		p.setValueAtTime(1.25, [ 1164.3102, 613.6738]);
		p.setValueAtTime(1.5, [ 1136.6104, 611.5793]);
		p.setValueAtTime(1.75, [ 1164.1141, 620.43646]);
		p.setValueAtTime(2.0, [ 1194.3942, 634.1034]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1229.7897, 690.61285]);
		p.setValueAtTime(0.25, [ 1216.928, 616.1884]);
		p.setValueAtTime(0.5, [ 1225.0731, 576.3783]);
		p.setValueAtTime(0.75, [ 1229.619, 563.6962]);
		p.setValueAtTime(1.0, [ 1285.4313, 507.7644]);
		p.setValueAtTime(1.25, [ 1250.4535, 520.12024]);
		p.setValueAtTime(1.5, [ 1213.6852, 577.517]);
		p.setValueAtTime(1.75, [ 1215.3212, 520.3816]);
		p.setValueAtTime(2.0, [ 1234.6549, 525.28973]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1312.8578, 683.1204]);
		p.setValueAtTime(0.25, [ 1291.2528, 680.7113]);
		p.setValueAtTime(0.5, [ 1341.9706, 688.3681]);
		p.setValueAtTime(0.75, [ 1325.4227, 647.89026]);
		p.setValueAtTime(1.0, [ 1380.2972, 637.8582]);
		p.setValueAtTime(1.25, [ 1371.4662, 634.2382]);
		p.setValueAtTime(1.5, [ 1374.338, 586.6895]);
		p.setValueAtTime(1.75, [ 1384.3021, 541.8757]);
		p.setValueAtTime(2.0, [ 1374.1824, 545.85297]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1362.7661, 665.5477]);
		p.setValueAtTime(0.25, [ 1352.5956, 657.92957]);
		p.setValueAtTime(0.5, [ 1362.9515, 672.3439]);
		p.setValueAtTime(0.75, [ 1388.2499, 636.95435]);
		p.setValueAtTime(1.0, [ 1342.5951, 688.0171]);
		p.setValueAtTime(1.25, [ 1352.8221, 652.34845]);
		p.setValueAtTime(1.5, [ 1409.8268, 640.5839]);
		p.setValueAtTime(1.75, [ 1411.4385, 676.4115]);
		p.setValueAtTime(2.0, [ 1474.1554, 721.8041]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1421.877, 690.98505]);
		p.setValueAtTime(0.25, [ 1484.0957, 697.05054]);
		p.setValueAtTime(0.5, [ 1437.931, 647.4414]);
		p.setValueAtTime(0.75, [ 1400.8788, 669.26373]);
		p.setValueAtTime(1.0, [ 1401.8248, 699.34515]);
		p.setValueAtTime(1.25, [ 1448.0448, 701.3835]);
		p.setValueAtTime(1.5, [ 1418.6304, 664.9441]);
		p.setValueAtTime(1.75, [ 1419.3934, 677.112]);
		p.setValueAtTime(2.0, [ 1353.8188, 660.1448]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1487.1702, 685.9661]);
		p.setValueAtTime(0.25, [ 1470.2205, 692.36206]);
		p.setValueAtTime(0.5, [ 1459.9417, 677.21967]);
		p.setValueAtTime(0.75, [ 1446.4602, 650.2595]);
		p.setValueAtTime(1.0, [ 1398.4246, 643.15546]);
		p.setValueAtTime(1.25, [ 1386.1682, 609.5455]);
		p.setValueAtTime(1.5, [ 1423.1138, 627.09735]);
		p.setValueAtTime(1.75, [ 1423.706, 636.59076]);
		p.setValueAtTime(2.0, [ 1404.3094, 668.4459]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1550.1237, 691.7285]);
		p.setValueAtTime(0.25, [ 1544.6097, 657.1408]);
		p.setValueAtTime(0.5, [ 1575.4697, 676.35]);
		p.setValueAtTime(0.75, [ 1599.0298, 675.3932]);
		p.setValueAtTime(1.0, [ 1612.4325, 688.0483]);
		p.setValueAtTime(1.25, [ 1583.6017, 651.9727]);
		p.setValueAtTime(1.5, [ 1538.1488, 599.1606]);
		p.setValueAtTime(1.75, [ 1550.0898, 595.861]);
		p.setValueAtTime(2.0, [ 1578.1348, 655.7147]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1587.0637, 697.2946]);
		p.setValueAtTime(0.25, [ 1562.7096, 716.5864]);
		p.setValueAtTime(0.5, [ 1597.6989, 745.3963]);
		p.setValueAtTime(0.75, [ 1596.1384, 748.19745]);
		p.setValueAtTime(1.0, [ 1561.7325, 745.9765]);
		p.setValueAtTime(1.25, [ 1624.8245, 758.5425]);
		p.setValueAtTime(1.5, [ 1624.6887, 795.61273]);
		p.setValueAtTime(1.75, [ 1660.746, 763.5246]);
		p.setValueAtTime(2.0, [ 1665.8289, 734.34766]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1652.4854, 697.7628]);
		p.setValueAtTime(0.25, [ 1690.9033, 690.45355]);
		p.setValueAtTime(0.5, [ 1736.3176, 678.0454]);
		p.setValueAtTime(0.75, [ 1702.5771, 653.70746]);
		p.setValueAtTime(1.0, [ 1694.7412, 642.5425]);
		p.setValueAtTime(1.25, [ 1687.4789, 617.43036]);
		p.setValueAtTime(1.5, [ 1683.8707, 602.67346]);
		p.setValueAtTime(1.75, [ 1678.0262, 595.4245]);
		p.setValueAtTime(2.0, [ 1738.0072, 658.0858]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1718.4647, 691.5364]);
		p.setValueAtTime(0.25, [ 1718.0621, 702.01605]);
		p.setValueAtTime(0.5, [ 1687.4268, 685.1025]);
		p.setValueAtTime(0.75, [ 1678.1674, 700.46387]);
		p.setValueAtTime(1.0, [ 1675.634, 703.7231]);
		p.setValueAtTime(1.25, [ 1699.5748, 706.9817]);
		p.setValueAtTime(1.5, [ 1720.9895, 719.9936]);
		p.setValueAtTime(1.75, [ 1740.292, 744.00684]);
		p.setValueAtTime(2.0, [ 1732.8143, 728.7279]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1755.6382, 690.5459]);
		p.setValueAtTime(0.25, [ 1779.2078, 643.37384]);
		p.setValueAtTime(0.5, [ 1774.7089, 687.3742]);
		p.setValueAtTime(0.75, [ 1749.1403, 659.4009]);
		p.setValueAtTime(1.0, [ 1805.0048, 686.1861]);
		p.setValueAtTime(1.25, [ 1821.2064, 713.7653]);
		p.setValueAtTime(1.5, [ 1850.7496, 741.2885]);
		p.setValueAtTime(1.75, [ 1875.4193, 761.8444]);
		p.setValueAtTime(2.0, [ 1885.1178, 801.6011]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1831.0339, 690.76184]);
		p.setValueAtTime(0.25, [ 1874.5728, 688.4188]);
		p.setValueAtTime(0.5, [ 1883.0487, 680.50214]);
		p.setValueAtTime(0.75, [ 1916.9055, 609.7143]);
		p.setValueAtTime(1.0, [ 1932.7483, 589.6208]);
		p.setValueAtTime(1.25, [ 1898.9686, 550.961]);
		p.setValueAtTime(1.5, [ 1857.995, 565.6184]);
		p.setValueAtTime(1.75, [ 1885.7333, 617.29486]);
		p.setValueAtTime(2.0, [ 1886.1139, 689.98834]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1872.9556, 676.2634]);
		p.setValueAtTime(0.25, [ 1883.9711, 682.62476]);
		p.setValueAtTime(0.5, [ 1872.3389, 652.36]);
		p.setValueAtTime(0.75, [ 1871.4489, 663.5227]);
		p.setValueAtTime(1.0, [ 1874.0985, 633.6975]);
		p.setValueAtTime(1.25, [ 1894.3977, 656.04565]);
		p.setValueAtTime(1.5, [ 1912.4625, 616.18445]);
		p.setValueAtTime(1.75, [ 1893.1533, 671.8859]);
		p.setValueAtTime(2.0, [ 1913.4529, 652.2964]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 32.58206, 755.4951]);
		p.setValueAtTime(0.25, [ 32.635838, 810.005]);
		p.setValueAtTime(0.5, [ -34.61456, 803.47504]);
		p.setValueAtTime(0.75, [ -67.01443, 837.57025]);
		p.setValueAtTime(1.0, [ -41.50668, 876.567]);
		p.setValueAtTime(1.25, [ -96.07465, 907.2251]);
		p.setValueAtTime(1.5, [ -97.04196, 944.519]);
		p.setValueAtTime(1.75, [ -86.11849, 986.11835]);
		p.setValueAtTime(2.0, [ -102.138, 1000.02673]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 77.39003, 756.66736]);
		p.setValueAtTime(0.25, [ 9.969947, 796.93567]);
		p.setValueAtTime(0.5, [ 74.62561, 834.4057]);
		p.setValueAtTime(0.75, [ 25.816965, 861.3927]);
		p.setValueAtTime(1.0, [ 29.611938, 806.47626]);
		p.setValueAtTime(1.25, [ -12.500794, 807.0559]);
		p.setValueAtTime(1.5, [ -13.735001, 820.36176]);
		p.setValueAtTime(1.75, [ 13.931941, 771.6619]);
		p.setValueAtTime(2.0, [ 79.23961, 793.7584]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 166.10399, 770.9695]);
		p.setValueAtTime(0.25, [ 199.80777, 743.11884]);
		p.setValueAtTime(0.5, [ 160.23943, 705.67346]);
		p.setValueAtTime(0.75, [ 120.40069, 738.6318]);
		p.setValueAtTime(1.0, [ 155.2745, 751.1484]);
		p.setValueAtTime(1.25, [ 170.71182, 709.1068]);
		p.setValueAtTime(1.5, [ 186.63182, 689.7876]);
		p.setValueAtTime(1.75, [ 180.16623, 687.9267]);
		p.setValueAtTime(2.0, [ 182.52557, 699.4192]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 213.80397, 734.6641]);
		p.setValueAtTime(0.25, [ 215.53181, 742.86163]);
		p.setValueAtTime(0.5, [ 186.58244, 715.42053]);
		p.setValueAtTime(0.75, [ 188.77681, 713.5146]);
		p.setValueAtTime(1.0, [ 223.30681, 681.73425]);
		p.setValueAtTime(1.25, [ 177.13008, 653.88763]);
		p.setValueAtTime(1.5, [ 189.4408, 622.7813]);
		p.setValueAtTime(1.75, [ 249.10625, 609.0279]);
		p.setValueAtTime(2.0, [ 221.75743, 616.0596]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 286.02957, 768.4027]);
		p.setValueAtTime(0.25, [ 304.72766, 744.3457]);
		p.setValueAtTime(0.5, [ 270.46762, 728.36725]);
		p.setValueAtTime(0.75, [ 277.87793, 755.9377]);
		p.setValueAtTime(1.0, [ 314.34033, 767.8991]);
		p.setValueAtTime(1.25, [ 309.11868, 755.57446]);
		p.setValueAtTime(1.5, [ 280.11932, 766.69037]);
		p.setValueAtTime(1.75, [ 228.98563, 760.6096]);
		p.setValueAtTime(2.0, [ 242.42798, 773.9206]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 341.09692, 755.3024]);
		p.setValueAtTime(0.25, [ 338.0381, 728.0383]);
		p.setValueAtTime(0.5, [ 333.52063, 758.9859]);
		p.setValueAtTime(0.75, [ 325.59436, 717.39355]);
		p.setValueAtTime(1.0, [ 314.48373, 732.1252]);
		p.setValueAtTime(1.25, [ 321.42264, 725.42316]);
		p.setValueAtTime(1.5, [ 316.0218, 680.36884]);
		p.setValueAtTime(1.75, [ 332.52667, 659.96576]);
		p.setValueAtTime(2.0, [ 261.94592, 649.51984]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 391.12738, 756.37506]);
		p.setValueAtTime(0.25, [ 390.69595, 753.3602]);
		p.setValueAtTime(0.5, [ 367.71744, 683.3829]);
		p.setValueAtTime(0.75, [ 376.28992, 645.44977]);
		p.setValueAtTime(1.0, [ 345.56708, 643.42676]);
		p.setValueAtTime(1.25, [ 316.63904, 638.72473]);
		p.setValueAtTime(1.5, [ 350.88672, 630.9742]);
		p.setValueAtTime(1.75, [ 328.73688, 621.71234]);
		p.setValueAtTime(2.0, [ 382.08182, 621.2948]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 457.0909, 767.6108]);
		p.setValueAtTime(0.25, [ 491.19592, 788.7953]);
		p.setValueAtTime(0.5, [ 498.04254, 804.1488]);
		p.setValueAtTime(0.75, [ 464.993, 777.9943]);
		p.setValueAtTime(1.0, [ 447.69522, 804.3677]);
		p.setValueAtTime(1.25, [ 449.57788, 784.1545]);
		p.setValueAtTime(1.5, [ 430.1749, 771.8498]);
		p.setValueAtTime(1.75, [ 401.74988, 779.30804]);
		p.setValueAtTime(2.0, [ 373.98123, 830.4958]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 505.9892, 739.0715]);
		p.setValueAtTime(0.25, [ 531.1509, 696.5949]);
		p.setValueAtTime(0.5, [ 501.43408, 728.11005]);
		p.setValueAtTime(0.75, [ 571.20074, 773.10486]);
		p.setValueAtTime(1.0, [ 596.35156, 805.36914]);
		p.setValueAtTime(1.25, [ 582.36847, 852.37286]);
		p.setValueAtTime(1.5, [ 582.3947, 804.3592]);
		p.setValueAtTime(1.75, [ 557.5527, 809.64655]);
		p.setValueAtTime(2.0, [ 555.7742, 819.78186]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 585.5038, 741.295]);
		p.setValueAtTime(0.25, [ 578.1387, 778.928]);
		p.setValueAtTime(0.5, [ 558.43384, 782.79364]);
		p.setValueAtTime(0.75, [ 545.80804, 767.0946]);
		p.setValueAtTime(1.0, [ 555.3522, 795.0487]);
		p.setValueAtTime(1.25, [ 514.80066, 789.54614]);
		p.setValueAtTime(1.5, [ 500.70483, 797.33136]);
		p.setValueAtTime(1.75, [ 498.19864, 768.8195]);
		p.setValueAtTime(2.0, [ 526.9845, 725.5637]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 641.2643, 753.57794]);
		p.setValueAtTime(0.25, [ 676.9831, 775.8161]);
		p.setValueAtTime(0.5, [ 652.08185, 769.5895]);
		p.setValueAtTime(0.75, [ 660.7863, 764.11255]);
		p.setValueAtTime(1.0, [ 685.9295, 781.79333]);
		p.setValueAtTime(1.25, [ 683.3176, 774.3537]);
		p.setValueAtTime(1.5, [ 680.28986, 757.0675]);
		p.setValueAtTime(1.75, [ 681.4013, 724.3832]);
		p.setValueAtTime(2.0, [ 746.7218, 735.57477]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 684.4579, 734.60626]);
		p.setValueAtTime(0.25, [ 665.23254, 752.5675]);
		p.setValueAtTime(0.5, [ 679.5688, 760.2698]);
		p.setValueAtTime(0.75, [ 661.85254, 746.6391]);
		p.setValueAtTime(1.0, [ 595.89844, 713.4014]);
		p.setValueAtTime(1.25, [ 600.8811, 722.66986]);
		p.setValueAtTime(1.5, [ 636.4369, 742.3541]);
		p.setValueAtTime(1.75, [ 635.4566, 781.836]);
		p.setValueAtTime(2.0, [ 659.76483, 783.395]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 754.806, 727.6045]);
		p.setValueAtTime(0.25, [ 769.5681, 729.95514]);
		p.setValueAtTime(0.5, [ 723.7137, 721.6186]);
		p.setValueAtTime(0.75, [ 693.7567, 693.7851]);
		p.setValueAtTime(1.0, [ 698.26654, 674.3589]);
		p.setValueAtTime(1.25, [ 694.8807, 682.32916]);
		p.setValueAtTime(1.5, [ 708.3942, 645.8792]);
		p.setValueAtTime(1.75, [ 749.7896, 681.1811]);
		p.setValueAtTime(2.0, [ 763.72205, 676.4725]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 819.83777, 765.7473]);
		p.setValueAtTime(0.25, [ 838.5393, 736.4638]);
		p.setValueAtTime(0.5, [ 820.8339, 831.55725]);
		p.setValueAtTime(0.75, [ 806.8994, 832.34064]);
		p.setValueAtTime(1.0, [ 823.3289, 877.90753]);
		p.setValueAtTime(1.25, [ 788.14886, 897.94885]);
		p.setValueAtTime(1.5, [ 767.8068, 917.29926]);
		p.setValueAtTime(1.75, [ 739.0709, 907.33575]);
		p.setValueAtTime(2.0, [ 710.992, 900.31287]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 851.6342, 741.9339]);
		p.setValueAtTime(0.25, [ 843.59875, 709.0466]);
		p.setValueAtTime(0.5, [ 858.6058, 696.1005]);
		p.setValueAtTime(0.75, [ 838.51056, 694.864]);
		p.setValueAtTime(1.0, [ 843.81555, 705.6304]);
		p.setValueAtTime(1.25, [ 851.3126, 710.95276]);
		p.setValueAtTime(1.5, [ 842.9282, 722.562]);
		p.setValueAtTime(1.75, [ 814.26624, 721.8774]);
		p.setValueAtTime(2.0, [ 842.60614, 742.4396]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 924.4294, 759.98804]);
		p.setValueAtTime(0.25, [ 938.2073, 735.635]);
		p.setValueAtTime(0.5, [ 924.8354, 747.23456]);
		p.setValueAtTime(0.75, [ 937.7095, 753.3262]);
		p.setValueAtTime(1.0, [ 959.6074, 724.71405]);
		p.setValueAtTime(1.25, [ 981.28546, 739.8311]);
		p.setValueAtTime(1.5, [ 955.0883, 772.5146]);
		p.setValueAtTime(1.75, [ 960.10675, 820.7666]);
		p.setValueAtTime(2.0, [ 950.442, 815.9283]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 980.1098, 728.5776]);
		p.setValueAtTime(0.25, [ 970.2386, 715.88745]);
		p.setValueAtTime(0.5, [ 992.6157, 708.53143]);
		p.setValueAtTime(0.75, [ 982.4804, 705.8452]);
		p.setValueAtTime(1.0, [ 1005.9194, 689.41815]);
		p.setValueAtTime(1.25, [ 1027.0997, 659.58154]);
		p.setValueAtTime(1.5, [ 972.91064, 595.09753]);
		p.setValueAtTime(1.75, [ 930.6666, 591.3662]);
		p.setValueAtTime(2.0, [ 914.90497, 581.0998]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1035.1375, 778.21783]);
		p.setValueAtTime(0.25, [ 1095.6252, 751.2168]);
		p.setValueAtTime(0.5, [ 1100.2876, 752.37103]);
		p.setValueAtTime(0.75, [ 1106.5157, 696.10077]);
		p.setValueAtTime(1.0, [ 1136.8041, 679.8952]);
		p.setValueAtTime(1.25, [ 1135.2649, 646.3476]);
		p.setValueAtTime(1.5, [ 1129.1631, 657.62115]);
		p.setValueAtTime(1.75, [ 1085.119, 640.5751]);
		p.setValueAtTime(2.0, [ 1093.9365, 689.4529]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1104.9603, 746.0477]);
		p.setValueAtTime(0.25, [ 1073.8153, 684.0335]);
		p.setValueAtTime(0.5, [ 1119.7483, 687.56445]);
		p.setValueAtTime(0.75, [ 1103.3334, 607.42523]);
		p.setValueAtTime(1.0, [ 1109.884, 601.44916]);
		p.setValueAtTime(1.25, [ 1116.1434, 642.3817]);
		p.setValueAtTime(1.5, [ 1091.743, 632.02325]);
		p.setValueAtTime(1.75, [ 1105.3386, 625.34]);
		p.setValueAtTime(2.0, [ 1105.0087, 597.2518]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1145.6992, 769.9638]);
		p.setValueAtTime(0.25, [ 1074.0074, 750.4798]);
		p.setValueAtTime(0.5, [ 1105.0043, 792.18976]);
		p.setValueAtTime(0.75, [ 1080.8965, 790.13763]);
		p.setValueAtTime(1.0, [ 1098.87, 746.31805]);
		p.setValueAtTime(1.25, [ 1089.7148, 765.15094]);
		p.setValueAtTime(1.5, [ 1102.2731, 775.3594]);
		p.setValueAtTime(1.75, [ 1104.3235, 804.9247]);
		p.setValueAtTime(2.0, [ 1115.363, 825.20776]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1214.7869, 767.33514]);
		p.setValueAtTime(0.25, [ 1194.2223, 720.0141]);
		p.setValueAtTime(0.5, [ 1165.1213, 687.50555]);
		p.setValueAtTime(0.75, [ 1136.7975, 674.3388]);
		p.setValueAtTime(1.0, [ 1132.8834, 642.92786]);
		p.setValueAtTime(1.25, [ 1110.2792, 591.4066]);
		p.setValueAtTime(1.5, [ 1140.849, 586.6857]);
		p.setValueAtTime(1.75, [ 1135.8274, 619.8558]);
		p.setValueAtTime(2.0, [ 1149.7277, 640.2967]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1301.175, 744.96234]);
		p.setValueAtTime(0.25, [ 1285.1305, 716.36285]);
		p.setValueAtTime(0.5, [ 1217.7821, 732.9583]);
		p.setValueAtTime(0.75, [ 1215.8049, 692.09454]);
		p.setValueAtTime(1.0, [ 1187.8103, 672.44586]);
		p.setValueAtTime(1.25, [ 1122.3495, 669.97003]);
		p.setValueAtTime(1.5, [ 1117.3513, 661.33325]);
		p.setValueAtTime(1.75, [ 1133.1326, 655.3969]);
		p.setValueAtTime(2.0, [ 1173.6257, 677.5228]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1352.4247, 764.1134]);
		p.setValueAtTime(0.25, [ 1352.3806, 773.14624]);
		p.setValueAtTime(0.5, [ 1317.58, 782.89166]);
		p.setValueAtTime(0.75, [ 1284.4159, 784.34344]);
		p.setValueAtTime(1.0, [ 1282.6533, 786.64056]);
		p.setValueAtTime(1.25, [ 1291.2426, 856.298]);
		p.setValueAtTime(1.5, [ 1267.8171, 867.95844]);
		p.setValueAtTime(1.75, [ 1304.62, 878.3374]);
		p.setValueAtTime(2.0, [ 1320.5164, 902.0235]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1413.1185, 762.17377]);
		p.setValueAtTime(0.25, [ 1433.2855, 727.5072]);
		p.setValueAtTime(0.5, [ 1451.2505, 725.04474]);
		p.setValueAtTime(0.75, [ 1504.6581, 742.6497]);
		p.setValueAtTime(1.0, [ 1522.1299, 774.4767]);
		p.setValueAtTime(1.25, [ 1539.4149, 761.0932]);
		p.setValueAtTime(1.5, [ 1536.9738, 723.60583]);
		p.setValueAtTime(1.75, [ 1564.8147, 704.2768]);
		p.setValueAtTime(2.0, [ 1580.6477, 680.65967]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1461.0231, 752.3664]);
		p.setValueAtTime(0.25, [ 1397.5747, 678.09344]);
		p.setValueAtTime(0.5, [ 1380.6771, 657.4642]);
		p.setValueAtTime(0.75, [ 1357.8977, 619.6631]);
		p.setValueAtTime(1.0, [ 1338.053, 591.58325]);
		p.setValueAtTime(1.25, [ 1338.1381, 611.23535]);
		p.setValueAtTime(1.5, [ 1319.4006, 588.05743]);
		p.setValueAtTime(1.75, [ 1297.04, 556.72046]);
		p.setValueAtTime(2.0, [ 1248.7437, 559.4992]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1530.691, 743.6849]);
		p.setValueAtTime(0.25, [ 1502.0524, 719.6556]);
		p.setValueAtTime(0.5, [ 1490.3732, 690.42773]);
		p.setValueAtTime(0.75, [ 1509.5638, 686.7876]);
		p.setValueAtTime(1.0, [ 1524.3372, 743.30457]);
		p.setValueAtTime(1.25, [ 1470.6056, 736.2489]);
		p.setValueAtTime(1.5, [ 1493.4691, 729.4272]);
		p.setValueAtTime(1.75, [ 1558.7844, 743.575]);
		p.setValueAtTime(2.0, [ 1578.5095, 728.56335]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1596.9518, 730.06976]);
		p.setValueAtTime(0.25, [ 1623.1553, 733.3193]);
		p.setValueAtTime(0.5, [ 1645.5471, 724.9025]);
		p.setValueAtTime(0.75, [ 1621.9417, 713.43024]);
		p.setValueAtTime(1.0, [ 1585.4497, 700.3134]);
		p.setValueAtTime(1.25, [ 1594.7941, 670.88367]);
		p.setValueAtTime(1.5, [ 1567.8854, 626.51416]);
		p.setValueAtTime(1.75, [ 1571.1908, 617.7713]);
		p.setValueAtTime(2.0, [ 1578.2673, 603.8703]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1653.1066, 733.2491]);
		p.setValueAtTime(0.25, [ 1640.3524, 745.414]);
		p.setValueAtTime(0.5, [ 1606.8241, 688.683]);
		p.setValueAtTime(0.75, [ 1570.4884, 667.4111]);
		p.setValueAtTime(1.0, [ 1550.4938, 657.08185]);
		p.setValueAtTime(1.25, [ 1578.5084, 629.18964]);
		p.setValueAtTime(1.5, [ 1603.3652, 640.7479]);
		p.setValueAtTime(1.75, [ 1597.476, 659.93256]);
		p.setValueAtTime(2.0, [ 1639.586, 652.1841]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1682.6333, 766.73303]);
		p.setValueAtTime(0.25, [ 1621.0594, 752.8441]);
		p.setValueAtTime(0.5, [ 1618.4081, 731.0914]);
		p.setValueAtTime(0.75, [ 1616.1539, 705.50745]);
		p.setValueAtTime(1.0, [ 1609.9231, 699.9395]);
		p.setValueAtTime(1.25, [ 1663.5609, 695.2054]);
		p.setValueAtTime(1.5, [ 1641.66, 664.1619]);
		p.setValueAtTime(1.75, [ 1658.4791, 613.63696]);
		p.setValueAtTime(2.0, [ 1647.1741, 605.687]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1792.6593, 765.2698]);
		p.setValueAtTime(0.25, [ 1791.2805, 771.7594]);
		p.setValueAtTime(0.5, [ 1814.8285, 728.0749]);
		p.setValueAtTime(0.75, [ 1750.954, 708.98706]);
		p.setValueAtTime(1.0, [ 1759.649, 733.1447]);
		p.setValueAtTime(1.25, [ 1780.9922, 728.1563]);
		p.setValueAtTime(1.5, [ 1783.5582, 744.8254]);
		p.setValueAtTime(1.75, [ 1817.7764, 764.4954]);
		p.setValueAtTime(2.0, [ 1832.9868, 758.78204]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1808.1412, 757.5414]);
		p.setValueAtTime(0.25, [ 1815.7861, 709.2208]);
		p.setValueAtTime(0.5, [ 1781.4945, 711.49457]);
		p.setValueAtTime(0.75, [ 1797.7201, 725.80743]);
		p.setValueAtTime(1.0, [ 1759.07, 730.9898]);
		p.setValueAtTime(1.25, [ 1811.2512, 693.9006]);
		p.setValueAtTime(1.5, [ 1861.5471, 708.1124]);
		p.setValueAtTime(1.75, [ 1863.4164, 712.7299]);
		p.setValueAtTime(2.0, [ 1861.9318, 670.90717]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1895.2, 729.834]);
		p.setValueAtTime(0.25, [ 1930.5519, 723.3057]);
		p.setValueAtTime(0.5, [ 1928.8219, 730.8608]);
		p.setValueAtTime(0.75, [ 1963.952, 693.39276]);
		p.setValueAtTime(1.0, [ 1997.0205, 693.7223]);
		p.setValueAtTime(1.25, [ 2020.789, 678.0198]);
		p.setValueAtTime(1.5, [ 2021.8655, 686.7341]);
		p.setValueAtTime(1.75, [ 2010.2031, 681.3499]);
		p.setValueAtTime(2.0, [ 2013.9075, 658.0685]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 19.900835, 801.5149]);
		p.setValueAtTime(0.25, [ 34.91373, 852.405]);
		p.setValueAtTime(0.5, [ 64.17966, 878.374]);
		p.setValueAtTime(0.75, [ 73.21037, 859.19006]);
		p.setValueAtTime(1.0, [ 39.690647, 832.7221]);
		p.setValueAtTime(1.25, [ 31.00467, 804.7379]);
		p.setValueAtTime(1.5, [ 45.477165, 835.2513]);
		p.setValueAtTime(1.75, [ 47.917908, 864.243]);
		p.setValueAtTime(2.0, [ 92.28809, 879.05835]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 96.301575, 822.96216]);
		p.setValueAtTime(0.25, [ 80.973114, 864.2236]);
		p.setValueAtTime(0.5, [ 133.94183, 854.26904]);
		p.setValueAtTime(0.75, [ 168.19511, 842.3413]);
		p.setValueAtTime(1.0, [ 169.2082, 844.27356]);
		p.setValueAtTime(1.25, [ 159.97957, 837.27405]);
		p.setValueAtTime(1.5, [ 186.22334, 839.4308]);
		p.setValueAtTime(1.75, [ 236.21245, 830.3657]);
		p.setValueAtTime(2.0, [ 249.43465, 794.2053]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 148.06598, 803.532]);
		p.setValueAtTime(0.25, [ 135.94452, 852.1982]);
		p.setValueAtTime(0.5, [ 145.3662, 909.1328]);
		p.setValueAtTime(0.75, [ 148.15302, 926.833]);
		p.setValueAtTime(1.0, [ 164.35556, 910.8212]);
		p.setValueAtTime(1.25, [ 138.33684, 936.0615]);
		p.setValueAtTime(1.5, [ 210.06644, 888.1347]);
		p.setValueAtTime(1.75, [ 163.9646, 872.25665]);
		p.setValueAtTime(2.0, [ 174.1642, 846.0674]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 196.46223, 798.5415]);
		p.setValueAtTime(0.25, [ 225.14612, 822.8475]);
		p.setValueAtTime(0.5, [ 211.33357, 839.8473]);
		p.setValueAtTime(0.75, [ 173.37663, 824.4674]);
		p.setValueAtTime(1.0, [ 127.374954, 857.3918]);
		p.setValueAtTime(1.25, [ 140.25407, 866.6891]);
		p.setValueAtTime(1.5, [ 146.04535, 871.951]);
		p.setValueAtTime(1.75, [ 165.51315, 894.7038]);
		p.setValueAtTime(2.0, [ 165.13039, 890.62225]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 271.1408, 794.24445]);
		p.setValueAtTime(0.25, [ 238.19565, 761.2089]);
		p.setValueAtTime(0.5, [ 231.42117, 803.4861]);
		p.setValueAtTime(0.75, [ 164.21606, 806.9016]);
		p.setValueAtTime(1.0, [ 187.9214, 816.33514]);
		p.setValueAtTime(1.25, [ 210.31465, 841.20245]);
		p.setValueAtTime(1.5, [ 186.01428, 847.5635]);
		p.setValueAtTime(1.75, [ 159.26659, 839.90155]);
		p.setValueAtTime(2.0, [ 170.3525, 769.1051]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 347.57095, 829.4657]);
		p.setValueAtTime(0.25, [ 310.71298, 820.37775]);
		p.setValueAtTime(0.5, [ 296.18674, 822.97815]);
		p.setValueAtTime(0.75, [ 326.2609, 813.1298]);
		p.setValueAtTime(1.0, [ 334.2818, 832.4279]);
		p.setValueAtTime(1.25, [ 338.2489, 855.53253]);
		p.setValueAtTime(1.5, [ 379.28308, 883.889]);
		p.setValueAtTime(1.75, [ 375.90598, 894.7213]);
		p.setValueAtTime(2.0, [ 391.19, 846.288]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 387.15704, 809.8411]);
		p.setValueAtTime(0.25, [ 403.6666, 810.7746]);
		p.setValueAtTime(0.5, [ 418.01178, 876.9508]);
		p.setValueAtTime(0.75, [ 415.63458, 886.44745]);
		p.setValueAtTime(1.0, [ 481.73404, 908.03186]);
		p.setValueAtTime(1.25, [ 490.91852, 910.19836]);
		p.setValueAtTime(1.5, [ 486.73297, 933.2055]);
		p.setValueAtTime(1.75, [ 469.7369, 936.26385]);
		p.setValueAtTime(2.0, [ 485.24277, 969.30414]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 425.47003, 820.3107]);
		p.setValueAtTime(0.25, [ 390.74585, 838.7263]);
		p.setValueAtTime(0.5, [ 403.14426, 876.3437]);
		p.setValueAtTime(0.75, [ 387.36786, 898.52167]);
		p.setValueAtTime(1.0, [ 363.03424, 888.77264]);
		p.setValueAtTime(1.25, [ 373.23773, 886.457]);
		p.setValueAtTime(1.5, [ 353.61728, 862.02246]);
		p.setValueAtTime(1.75, [ 323.08954, 862.3444]);
		p.setValueAtTime(2.0, [ 335.22256, 827.501]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 505.20917, 815.2967]);
		p.setValueAtTime(0.25, [ 512.2452, 774.0515]);
		p.setValueAtTime(0.5, [ 511.14142, 786.8112]);
		p.setValueAtTime(0.75, [ 494.00363, 760.22473]);
		p.setValueAtTime(1.0, [ 509.72922, 761.35785]);
		p.setValueAtTime(1.25, [ 528.4652, 808.92694]);
		p.setValueAtTime(1.5, [ 541.294, 807.6106]);
		p.setValueAtTime(1.75, [ 542.2632, 818.215]);
		p.setValueAtTime(2.0, [ 589.88947, 830.561]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 579.8213, 812.4268]);
		p.setValueAtTime(0.25, [ 566.4686, 842.4324]);
		p.setValueAtTime(0.5, [ 640.38153, 893.97345]);
		p.setValueAtTime(0.75, [ 646.6206, 889.8973]);
		p.setValueAtTime(1.0, [ 667.3979, 878.60077]);
		p.setValueAtTime(1.25, [ 625.7978, 889.264]);
		p.setValueAtTime(1.5, [ 594.02484, 902.45404]);
		p.setValueAtTime(1.75, [ 542.35474, 920.9541]);
		p.setValueAtTime(2.0, [ 560.68945, 928.4468]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 629.39154, 820.1709]);
		p.setValueAtTime(0.25, [ 614.31805, 738.4861]);
		p.setValueAtTime(0.5, [ 624.01434, 739.7703]);
		p.setValueAtTime(0.75, [ 589.5833, 747.71576]);
		p.setValueAtTime(1.0, [ 590.3237, 722.2309]);
		p.setValueAtTime(1.25, [ 552.27435, 807.7222]);
		p.setValueAtTime(1.5, [ 542.87836, 802.80884]);
		p.setValueAtTime(1.75, [ 563.8494, 843.529]);
		p.setValueAtTime(2.0, [ 547.6129, 868.6482]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 682.5966, 784.63544]);
		p.setValueAtTime(0.25, [ 640.3155, 755.7084]);
		p.setValueAtTime(0.5, [ 616.6596, 766.238]);
		p.setValueAtTime(0.75, [ 610.0927, 782.0401]);
		p.setValueAtTime(1.0, [ 584.024, 750.77386]);
		p.setValueAtTime(1.25, [ 546.63696, 745.9192]);
		p.setValueAtTime(1.5, [ 564.8008, 734.5644]);
		p.setValueAtTime(1.75, [ 582.58417, 718.1116]);
		p.setValueAtTime(2.0, [ 625.7793, 716.69434]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 759.1754, 825.2054]);
		p.setValueAtTime(0.25, [ 757.79065, 864.1381]);
		p.setValueAtTime(0.5, [ 756.55237, 881.4028]);
		p.setValueAtTime(0.75, [ 775.5683, 899.67426]);
		p.setValueAtTime(1.0, [ 703.96356, 913.5693]);
		p.setValueAtTime(1.25, [ 676.12726, 899.1829]);
		p.setValueAtTime(1.5, [ 682.6262, 883.2039]);
		p.setValueAtTime(1.75, [ 666.07294, 860.8677]);
		p.setValueAtTime(2.0, [ 677.93994, 824.6879]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 800.3833, 808.77356]);
		p.setValueAtTime(0.25, [ 814.39874, 808.06256]);
		p.setValueAtTime(0.5, [ 854.541, 848.76654]);
		p.setValueAtTime(0.75, [ 879.387, 864.31494]);
		p.setValueAtTime(1.0, [ 883.6738, 885.65393]);
		p.setValueAtTime(1.25, [ 915.80145, 877.507]);
		p.setValueAtTime(1.5, [ 962.2671, 924.3293]);
		p.setValueAtTime(1.75, [ 963.4056, 947.4761]);
		p.setValueAtTime(2.0, [ 996.99243, 936.4914]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 866.0041, 810.8927]);
		p.setValueAtTime(0.25, [ 866.72363, 844.834]);
		p.setValueAtTime(0.5, [ 844.96564, 821.3268]);
		p.setValueAtTime(0.75, [ 843.3837, 827.47845]);
		p.setValueAtTime(1.0, [ 856.562, 844.0976]);
		p.setValueAtTime(1.25, [ 863.68567, 808.2148]);
		p.setValueAtTime(1.5, [ 848.54816, 790.6009]);
		p.setValueAtTime(1.75, [ 853.79974, 766.835]);
		p.setValueAtTime(2.0, [ 838.0569, 800.5922]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 933.30963, 829.1303]);
		p.setValueAtTime(0.25, [ 872.7827, 840.57074]);
		p.setValueAtTime(0.5, [ 869.2238, 912.23254]);
		p.setValueAtTime(0.75, [ 868.629, 935.8336]);
		p.setValueAtTime(1.0, [ 876.5179, 918.57]);
		p.setValueAtTime(1.25, [ 860.33264, 905.65704]);
		p.setValueAtTime(1.5, [ 830.18115, 859.51917]);
		p.setValueAtTime(1.75, [ 832.6318, 878.78235]);
		p.setValueAtTime(2.0, [ 844.94604, 863.1385]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 995.37744, 805.8728]);
		p.setValueAtTime(0.25, [ 1015.23114, 825.8884]);
		p.setValueAtTime(0.5, [ 1007.2253, 851.1766]);
		p.setValueAtTime(0.75, [ 1066.3394, 804.45355]);
		p.setValueAtTime(1.0, [ 1063.8262, 788.4438]);
		p.setValueAtTime(1.25, [ 1029.3064, 801.90204]);
		p.setValueAtTime(1.5, [ 1003.7999, 782.0985]);
		p.setValueAtTime(1.75, [ 999.3268, 777.374]);
		p.setValueAtTime(2.0, [ 996.0665, 751.3683]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1034.7646, 798.3787]);
		p.setValueAtTime(0.25, [ 1035.5275, 809.75995]);
		p.setValueAtTime(0.5, [ 1028.0819, 796.31976]);
		p.setValueAtTime(0.75, [ 1071.6656, 775.603]);
		p.setValueAtTime(1.0, [ 1087.2621, 819.44824]);
		p.setValueAtTime(1.25, [ 1099.3505, 838.22894]);
		p.setValueAtTime(1.5, [ 1074.5488, 864.8768]);
		p.setValueAtTime(1.75, [ 1045.8998, 880.1175]);
		p.setValueAtTime(2.0, [ 1036.9075, 925.9127]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1116.94, 813.44257]);
		p.setValueAtTime(0.25, [ 1122.9865, 835.1362]);
		p.setValueAtTime(0.5, [ 1123.6094, 824.50165]);
		p.setValueAtTime(0.75, [ 1083.292, 806.2597]);
		p.setValueAtTime(1.0, [ 1060.7295, 784.111]);
		p.setValueAtTime(1.25, [ 1011.0031, 745.14746]);
		p.setValueAtTime(1.5, [ 976.6125, 727.13214]);
		p.setValueAtTime(1.75, [ 989.2109, 697.2492]);
		p.setValueAtTime(2.0, [ 979.2062, 640.2599]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1171.2032, 819.90765]);
		p.setValueAtTime(0.25, [ 1178.2874, 837.1925]);
		p.setValueAtTime(0.5, [ 1156.5084, 815.9012]);
		p.setValueAtTime(0.75, [ 1173.9481, 821.6549]);
		p.setValueAtTime(1.0, [ 1149.0233, 833.5918]);
		p.setValueAtTime(1.25, [ 1202.9371, 851.476]);
		p.setValueAtTime(1.5, [ 1230.5404, 887.5444]);
		p.setValueAtTime(1.75, [ 1262.2705, 868.39886]);
		p.setValueAtTime(2.0, [ 1261.301, 854.9276]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1232.0773, 808.6423]);
		p.setValueAtTime(0.25, [ 1257.626, 773.2804]);
		p.setValueAtTime(0.5, [ 1231.7006, 779.63367]);
		p.setValueAtTime(0.75, [ 1240.931, 801.1962]);
		p.setValueAtTime(1.0, [ 1245.1234, 813.73004]);
		p.setValueAtTime(1.25, [ 1233.3864, 853.5009]);
		p.setValueAtTime(1.5, [ 1228.8254, 847.2886]);
		p.setValueAtTime(1.75, [ 1223.3812, 879.4756]);
		p.setValueAtTime(2.0, [ 1232.8041, 867.4772]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1280.1936, 827.51526]);
		p.setValueAtTime(0.25, [ 1333.3221, 840.2301]);
		p.setValueAtTime(0.5, [ 1360.0587, 848.081]);
		p.setValueAtTime(0.75, [ 1350.7555, 897.9676]);
		p.setValueAtTime(1.0, [ 1336.0321, 941.42725]);
		p.setValueAtTime(1.25, [ 1347.8214, 954.1505]);
		p.setValueAtTime(1.5, [ 1332.2571, 943.32336]);
		p.setValueAtTime(1.75, [ 1353.6023, 967.2544]);
		p.setValueAtTime(2.0, [ 1333.9337, 969.0093]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1339.2688, 796.31335]);
		p.setValueAtTime(0.25, [ 1384.5312, 855.06055]);
		p.setValueAtTime(0.5, [ 1368.7736, 884.3605]);
		p.setValueAtTime(0.75, [ 1414.2983, 876.6541]);
		p.setValueAtTime(1.0, [ 1402.6174, 841.4028]);
		p.setValueAtTime(1.25, [ 1414.3105, 877.022]);
		p.setValueAtTime(1.5, [ 1397.5892, 855.91956]);
		p.setValueAtTime(1.75, [ 1416.2169, 899.5895]);
		p.setValueAtTime(2.0, [ 1442.1143, 911.8468]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1387.483, 808.2289]);
		p.setValueAtTime(0.25, [ 1356.0956, 803.08014]);
		p.setValueAtTime(0.5, [ 1317.6346, 861.7137]);
		p.setValueAtTime(0.75, [ 1278.3046, 846.54834]);
		p.setValueAtTime(1.0, [ 1290.7716, 894.7996]);
		p.setValueAtTime(1.25, [ 1264.8861, 934.9316]);
		p.setValueAtTime(1.5, [ 1238.2977, 920.0168]);
		p.setValueAtTime(1.75, [ 1232.8872, 926.11615]);
		p.setValueAtTime(2.0, [ 1253.915, 897.09106]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1481.9371, 792.20215]);
		p.setValueAtTime(0.25, [ 1495.9248, 834.51624]);
		p.setValueAtTime(0.5, [ 1427.4745, 852.9098]);
		p.setValueAtTime(0.75, [ 1418.9377, 835.08563]);
		p.setValueAtTime(1.0, [ 1391.6654, 867.08594]);
		p.setValueAtTime(1.25, [ 1370.8876, 877.5278]);
		p.setValueAtTime(1.5, [ 1402.43, 873.20734]);
		p.setValueAtTime(1.75, [ 1397.9038, 882.776]);
		p.setValueAtTime(2.0, [ 1459.2878, 916.9994]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1520.2242, 812.57214]);
		p.setValueAtTime(0.25, [ 1516.2058, 827.11914]);
		p.setValueAtTime(0.5, [ 1495.598, 823.38763]);
		p.setValueAtTime(0.75, [ 1508.3839, 812.5598]);
		p.setValueAtTime(1.0, [ 1468.882, 870.35297]);
		p.setValueAtTime(1.25, [ 1490.3739, 856.00195]);
		p.setValueAtTime(1.5, [ 1518.1262, 874.7747]);
		p.setValueAtTime(1.75, [ 1529.8566, 905.00226]);
		p.setValueAtTime(2.0, [ 1539.2484, 914.8065]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1591.7765, 794.6127]);
		p.setValueAtTime(0.25, [ 1628.9011, 785.6163]);
		p.setValueAtTime(0.5, [ 1580.0134, 810.78894]);
		p.setValueAtTime(0.75, [ 1537.7305, 831.3537]);
		p.setValueAtTime(1.0, [ 1538.0792, 832.0801]);
		p.setValueAtTime(1.25, [ 1484.316, 836.3424]);
		p.setValueAtTime(1.5, [ 1453.5945, 830.4878]);
		p.setValueAtTime(1.75, [ 1476.1658, 802.9563]);
		p.setValueAtTime(2.0, [ 1511.6138, 829.7806]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1663.6216, 788.90283]);
		p.setValueAtTime(0.25, [ 1662.218, 785.61487]);
		p.setValueAtTime(0.5, [ 1649.2135, 772.57947]);
		p.setValueAtTime(0.75, [ 1660.4915, 790.67206]);
		p.setValueAtTime(1.0, [ 1712.3958, 758.373]);
		p.setValueAtTime(1.25, [ 1692.2744, 775.50134]);
		p.setValueAtTime(1.5, [ 1681.3016, 763.4015]);
		p.setValueAtTime(1.75, [ 1717.3619, 716.49554]);
		p.setValueAtTime(2.0, [ 1717.8129, 730.9024]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1712.5334, 813.2909]);
		p.setValueAtTime(0.25, [ 1685.9652, 803.7885]);
		p.setValueAtTime(0.5, [ 1709.7819, 796.4491]);
		p.setValueAtTime(0.75, [ 1702.784, 819.1994]);
		p.setValueAtTime(1.0, [ 1709.2174, 831.98645]);
		p.setValueAtTime(1.25, [ 1731.7582, 848.8014]);
		p.setValueAtTime(1.5, [ 1723.7529, 857.2217]);
		p.setValueAtTime(1.75, [ 1702.2418, 842.9186]);
		p.setValueAtTime(2.0, [ 1704.7668, 838.36005]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1782.1232, 804.5019]);
		p.setValueAtTime(0.25, [ 1797.034, 900.3512]);
		p.setValueAtTime(0.5, [ 1791.2041, 855.289]);
		p.setValueAtTime(0.75, [ 1810.9149, 842.2213]);
		p.setValueAtTime(1.0, [ 1805.138, 805.20917]);
		p.setValueAtTime(1.25, [ 1778.0966, 830.5151]);
		p.setValueAtTime(1.5, [ 1767.4514, 772.4641]);
		p.setValueAtTime(1.75, [ 1781.4628, 776.2443]);
		p.setValueAtTime(2.0, [ 1848.9423, 794.7519]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1814.9572, 815.15625]);
		p.setValueAtTime(0.25, [ 1851.8414, 824.3925]);
		p.setValueAtTime(0.5, [ 1859.893, 830.5275]);
		p.setValueAtTime(0.75, [ 1882.8186, 868.3956]);
		p.setValueAtTime(1.0, [ 1879.21, 902.2054]);
		p.setValueAtTime(1.25, [ 1899.9242, 883.90735]);
		p.setValueAtTime(1.5, [ 1892.1522, 867.47705]);
		p.setValueAtTime(1.75, [ 1884.8436, 864.99884]);
		p.setValueAtTime(2.0, [ 1896.1716, 881.0885]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1873.9053, 825.89795]);
		p.setValueAtTime(0.25, [ 1853.7551, 826.2999]);
		p.setValueAtTime(0.5, [ 1833.4631, 861.46014]);
		p.setValueAtTime(0.75, [ 1867.0286, 865.5255]);
		p.setValueAtTime(1.0, [ 1851.1034, 894.5763]);
		p.setValueAtTime(1.25, [ 1837.0856, 889.69073]);
		p.setValueAtTime(1.5, [ 1863.4808, 926.6823]);
		p.setValueAtTime(1.75, [ 1857.1981, 906.3968]);
		p.setValueAtTime(2.0, [ 1884.0476, 886.7005]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 33.12879, 843.1698]);
		p.setValueAtTime(0.25, [ 26.772263, 810.9318]);
		p.setValueAtTime(0.5, [ 58.597057, 791.59845]);
		p.setValueAtTime(0.75, [ 103.39254, 851.04846]);
		p.setValueAtTime(1.0, [ 93.9434, 842.5346]);
		p.setValueAtTime(1.25, [ 99.536156, 838.5633]);
		p.setValueAtTime(1.5, [ 113.35891, 843.31836]);
		p.setValueAtTime(1.75, [ 173.55626, 849.0669]);
		p.setValueAtTime(2.0, [ 208.72554, 864.4382]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 88.75522, 874.46497]);
		p.setValueAtTime(0.25, [ 101.56933, 875.3551]);
		p.setValueAtTime(0.5, [ 40.610565, 852.3293]);
		p.setValueAtTime(0.75, [ 34.79264, 856.70996]);
		p.setValueAtTime(1.0, [ 10.473063, 829.7291]);
		p.setValueAtTime(1.25, [ 11.145041, 859.173]);
		p.setValueAtTime(1.5, [ 14.563837, 865.2374]);
		p.setValueAtTime(1.75, [ 19.67315, 910.12396]);
		p.setValueAtTime(2.0, [ -8.2602625, 907.1438]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 165.61922, 855.0641]);
		p.setValueAtTime(0.25, [ 219.19925, 858.81616]);
		p.setValueAtTime(0.5, [ 205.81474, 847.3989]);
		p.setValueAtTime(0.75, [ 194.92403, 837.3657]);
		p.setValueAtTime(1.0, [ 193.62845, 841.2752]);
		p.setValueAtTime(1.25, [ 217.4856, 886.9306]);
		p.setValueAtTime(1.5, [ 216.35281, 869.13165]);
		p.setValueAtTime(1.75, [ 178.34412, 925.60754]);
		p.setValueAtTime(2.0, [ 203.95653, 919.4275]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 214.58847, 870.63776]);
		p.setValueAtTime(0.25, [ 247.00641, 891.2892]);
		p.setValueAtTime(0.5, [ 245.58353, 869.5885]);
		p.setValueAtTime(0.75, [ 211.61418, 863.43085]);
		p.setValueAtTime(1.0, [ 164.5891, 889.79297]);
		p.setValueAtTime(1.25, [ 171.81839, 925.5338]);
		p.setValueAtTime(1.5, [ 178.26894, 932.4131]);
		p.setValueAtTime(1.75, [ 174.38391, 1008.72894]);
		p.setValueAtTime(2.0, [ 173.6153, 968.16974]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 241.9195, 862.8349]);
		p.setValueAtTime(0.25, [ 239.69333, 919.73584]);
		p.setValueAtTime(0.5, [ 219.28267, 937.41815]);
		p.setValueAtTime(0.75, [ 205.54292, 933.80237]);
		p.setValueAtTime(1.0, [ 191.30144, 936.2238]);
		p.setValueAtTime(1.25, [ 205.13622, 964.58215]);
		p.setValueAtTime(1.5, [ 217.94254, 970.17267]);
		p.setValueAtTime(1.75, [ 226.36473, 917.5511]);
		p.setValueAtTime(2.0, [ 216.34052, 880.734]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 346.6869, 861.14294]);
		p.setValueAtTime(0.25, [ 317.98294, 845.4654]);
		p.setValueAtTime(0.5, [ 334.84552, 868.34467]);
		p.setValueAtTime(0.75, [ 324.99292, 853.84973]);
		p.setValueAtTime(1.0, [ 363.60666, 829.54]);
		p.setValueAtTime(1.25, [ 384.16562, 851.11145]);
		p.setValueAtTime(1.5, [ 383.085, 833.57196]);
		p.setValueAtTime(1.75, [ 415.11514, 815.58466]);
		p.setValueAtTime(2.0, [ 461.40958, 823.2695]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 365.32895, 861.8287]);
		p.setValueAtTime(0.25, [ 353.17084, 847.21936]);
		p.setValueAtTime(0.5, [ 348.83105, 861.52893]);
		p.setValueAtTime(0.75, [ 343.08096, 856.2578]);
		p.setValueAtTime(1.0, [ 307.40295, 840.39594]);
		p.setValueAtTime(1.25, [ 326.99518, 827.36]);
		p.setValueAtTime(1.5, [ 271.35065, 771.7563]);
		p.setValueAtTime(1.75, [ 310.2948, 764.7394]);
		p.setValueAtTime(2.0, [ 356.85626, 821.2527]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 456.3775, 858.44806]);
		p.setValueAtTime(0.25, [ 506.37308, 866.47833]);
		p.setValueAtTime(0.5, [ 516.0567, 906.34906]);
		p.setValueAtTime(0.75, [ 531.81616, 941.51154]);
		p.setValueAtTime(1.0, [ 515.9617, 993.4531]);
		p.setValueAtTime(1.25, [ 508.90396, 972.48584]);
		p.setValueAtTime(1.5, [ 544.998, 944.36975]);
		p.setValueAtTime(1.75, [ 592.22034, 956.61957]);
		p.setValueAtTime(2.0, [ 634.4154, 946.0728]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 507.97818, 869.93445]);
		p.setValueAtTime(0.25, [ 467.8922, 865.709]);
		p.setValueAtTime(0.5, [ 450.2928, 824.5101]);
		p.setValueAtTime(0.75, [ 489.44052, 836.22473]);
		p.setValueAtTime(1.0, [ 495.1818, 828.3141]);
		p.setValueAtTime(1.25, [ 506.10205, 838.3437]);
		p.setValueAtTime(1.5, [ 546.6286, 844.74994]);
		p.setValueAtTime(1.75, [ 552.993, 902.6074]);
		p.setValueAtTime(2.0, [ 503.97342, 947.1565]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 572.22833, 880.1873]);
		p.setValueAtTime(0.25, [ 639.4158, 846.7751]);
		p.setValueAtTime(0.5, [ 600.1843, 877.3134]);
		p.setValueAtTime(0.75, [ 570.05096, 892.3804]);
		p.setValueAtTime(1.0, [ 539.4974, 872.0626]);
		p.setValueAtTime(1.25, [ 523.3019, 893.3315]);
		p.setValueAtTime(1.5, [ 503.15964, 892.9515]);
		p.setValueAtTime(1.75, [ 523.4096, 884.3548]);
		p.setValueAtTime(2.0, [ 538.08856, 878.21405]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 631.9072, 882.8246]);
		p.setValueAtTime(0.25, [ 647.4303, 853.489]);
		p.setValueAtTime(0.5, [ 626.85516, 911.85187]);
		p.setValueAtTime(0.75, [ 662.43353, 953.0302]);
		p.setValueAtTime(1.0, [ 673.37506, 951.6841]);
		p.setValueAtTime(1.25, [ 624.6166, 926.63995]);
		p.setValueAtTime(1.5, [ 647.8999, 929.701]);
		p.setValueAtTime(1.75, [ 666.592, 893.84436]);
		p.setValueAtTime(2.0, [ 644.1378, 884.5883]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 706.95874, 888.6248]);
		p.setValueAtTime(0.25, [ 731.08563, 905.4415]);
		p.setValueAtTime(0.5, [ 761.04596, 929.8664]);
		p.setValueAtTime(0.75, [ 761.475, 923.4676]);
		p.setValueAtTime(1.0, [ 770.46045, 868.96747]);
		p.setValueAtTime(1.25, [ 771.0299, 885.69965]);
		p.setValueAtTime(1.5, [ 788.3974, 894.993]);
		p.setValueAtTime(1.75, [ 806.69653, 891.7877]);
		p.setValueAtTime(2.0, [ 800.4947, 909.38715]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 752.1099, 850.3622]);
		p.setValueAtTime(0.25, [ 725.7414, 814.0635]);
		p.setValueAtTime(0.5, [ 705.3671, 811.65204]);
		p.setValueAtTime(0.75, [ 681.9525, 788.4813]);
		p.setValueAtTime(1.0, [ 674.2857, 769.19305]);
		p.setValueAtTime(1.25, [ 692.4521, 714.6401]);
		p.setValueAtTime(1.5, [ 735.884, 733.6606]);
		p.setValueAtTime(1.75, [ 717.4106, 732.79]);
		p.setValueAtTime(2.0, [ 741.4362, 808.8942]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 827.1297, 856.2737]);
		p.setValueAtTime(0.25, [ 811.62933, 858.72516]);
		p.setValueAtTime(0.5, [ 815.16266, 865.3156]);
		p.setValueAtTime(0.75, [ 802.0525, 855.1667]);
		p.setValueAtTime(1.0, [ 762.9284, 848.94836]);
		p.setValueAtTime(1.25, [ 717.14166, 808.50134]);
		p.setValueAtTime(1.5, [ 743.6439, 833.62054]);
		p.setValueAtTime(1.75, [ 790.8339, 847.2304]);
		p.setValueAtTime(2.0, [ 772.73895, 829.3192]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 873.1996, 872.2277]);
		p.setValueAtTime(0.25, [ 905.66675, 881.0875]);
		p.setValueAtTime(0.5, [ 929.19073, 868.20325]);
		p.setValueAtTime(0.75, [ 956.28174, 837.0338]);
		p.setValueAtTime(1.0, [ 930.3644, 908.76526]);
		p.setValueAtTime(1.25, [ 900.30206, 916.9023]);
		p.setValueAtTime(1.5, [ 894.3641, 887.1562]);
		p.setValueAtTime(1.75, [ 879.3654, 821.32043]);
		p.setValueAtTime(2.0, [ 897.4893, 830.8768]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 940.2933, 873.5914]);
		p.setValueAtTime(0.25, [ 966.7859, 828.49274]);
		p.setValueAtTime(0.5, [ 928.5646, 883.3431]);
		p.setValueAtTime(0.75, [ 903.1474, 922.13214]);
		p.setValueAtTime(1.0, [ 937.66943, 891.6916]);
		p.setValueAtTime(1.25, [ 968.2424, 892.7851]);
		p.setValueAtTime(1.5, [ 1007.6517, 879.24774]);
		p.setValueAtTime(1.75, [ 976.16327, 900.0215]);
		p.setValueAtTime(2.0, [ 952.77466, 931.8214]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1010.8408, 857.49457]);
		p.setValueAtTime(0.25, [ 967.6397, 868.7133]);
		p.setValueAtTime(0.5, [ 976.13116, 866.0457]);
		p.setValueAtTime(0.75, [ 1043.6649, 917.1012]);
		p.setValueAtTime(1.0, [ 1067.6118, 937.591]);
		p.setValueAtTime(1.25, [ 1072.7982, 949.0469]);
		p.setValueAtTime(1.5, [ 1104.84, 995.4394]);
		p.setValueAtTime(1.75, [ 1108.0077, 1010.31366]);
		p.setValueAtTime(2.0, [ 1137.7377, 1051.8558]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1055.6525, 848.229]);
		p.setValueAtTime(0.25, [ 1037.7793, 873.70886]);
		p.setValueAtTime(0.5, [ 1028.8204, 888.6396]);
		p.setValueAtTime(0.75, [ 998.9079, 885.99805]);
		p.setValueAtTime(1.0, [ 980.4971, 902.9954]);
		p.setValueAtTime(1.25, [ 950.2767, 902.8831]);
		p.setValueAtTime(1.5, [ 898.43646, 871.54944]);
		p.setValueAtTime(1.75, [ 930.0913, 886.91113]);
		p.setValueAtTime(2.0, [ 968.9587, 865.2525]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1132.3378, 853.3126]);
		p.setValueAtTime(0.25, [ 1118.0651, 862.22076]);
		p.setValueAtTime(0.5, [ 1120.8069, 882.2933]);
		p.setValueAtTime(0.75, [ 1081.3773, 861.97235]);
		p.setValueAtTime(1.0, [ 1069.1932, 865.0472]);
		p.setValueAtTime(1.25, [ 1037.4554, 876.41144]);
		p.setValueAtTime(1.5, [ 1047.1921, 821.7049]);
		p.setValueAtTime(1.75, [ 1063.6837, 822.6341]);
		p.setValueAtTime(2.0, [ 1079.1538, 800.3647]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1179.3948, 872.61383]);
		p.setValueAtTime(0.25, [ 1218.9988, 871.15344]);
		p.setValueAtTime(0.5, [ 1228.5878, 848.19696]);
		p.setValueAtTime(0.75, [ 1229.1427, 797.014]);
		p.setValueAtTime(1.0, [ 1234.026, 790.60297]);
		p.setValueAtTime(1.25, [ 1225.6615, 805.3296]);
		p.setValueAtTime(1.5, [ 1235.1246, 773.8376]);
		p.setValueAtTime(1.75, [ 1227.3988, 698.80237]);
		p.setValueAtTime(2.0, [ 1260.4933, 671.67725]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1227.7572, 862.0406]);
		p.setValueAtTime(0.25, [ 1205.7875, 903.05896]);
		p.setValueAtTime(0.5, [ 1180.023, 872.46643]);
		p.setValueAtTime(0.75, [ 1164.5995, 837.74756]);
		p.setValueAtTime(1.0, [ 1158.0885, 866.4684]);
		p.setValueAtTime(1.25, [ 1174.637, 939.754]);
		p.setValueAtTime(1.5, [ 1208.441, 944.5835]);
		p.setValueAtTime(1.75, [ 1263.4508, 940.0472]);
		p.setValueAtTime(2.0, [ 1287.0327, 938.1267]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1284.7341, 877.70233]);
		p.setValueAtTime(0.25, [ 1262.3403, 888.9739]);
		p.setValueAtTime(0.5, [ 1317.8481, 861.0879]);
		p.setValueAtTime(0.75, [ 1304.8085, 884.40985]);
		p.setValueAtTime(1.0, [ 1291.3193, 885.51447]);
		p.setValueAtTime(1.25, [ 1260.0024, 856.9625]);
		p.setValueAtTime(1.5, [ 1230.5757, 841.675]);
		p.setValueAtTime(1.75, [ 1187.3582, 884.164]);
		p.setValueAtTime(2.0, [ 1166.356, 908.65295]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1353.7117, 874.0966]);
		p.setValueAtTime(0.25, [ 1360.2577, 857.93585]);
		p.setValueAtTime(0.5, [ 1391.275, 836.35754]);
		p.setValueAtTime(0.75, [ 1422.0536, 835.5994]);
		p.setValueAtTime(1.0, [ 1409.0394, 769.86346]);
		p.setValueAtTime(1.25, [ 1411.6127, 777.715]);
		p.setValueAtTime(1.5, [ 1368.1084, 793.3815]);
		p.setValueAtTime(1.75, [ 1411.3104, 763.70306]);
		p.setValueAtTime(2.0, [ 1434.8738, 771.5052]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1399.3105, 865.543]);
		p.setValueAtTime(0.25, [ 1405.5193, 860.3095]);
		p.setValueAtTime(0.5, [ 1408.777, 897.54834]);
		p.setValueAtTime(0.75, [ 1420.8705, 863.78876]);
		p.setValueAtTime(1.0, [ 1407.6165, 855.9915]);
		p.setValueAtTime(1.25, [ 1356.7196, 881.36395]);
		p.setValueAtTime(1.5, [ 1345.8606, 907.1416]);
		p.setValueAtTime(1.75, [ 1347.8315, 929.12836]);
		p.setValueAtTime(2.0, [ 1342.5762, 933.0315]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1456.4152, 845.47345]);
		p.setValueAtTime(0.25, [ 1456.45, 813.3449]);
		p.setValueAtTime(0.5, [ 1450.9738, 859.61505]);
		p.setValueAtTime(0.75, [ 1473.7054, 819.755]);
		p.setValueAtTime(1.0, [ 1457.6854, 800.3719]);
		p.setValueAtTime(1.25, [ 1401.2598, 812.07056]);
		p.setValueAtTime(1.5, [ 1381.262, 853.5939]);
		p.setValueAtTime(1.75, [ 1371.7831, 891.27]);
		p.setValueAtTime(2.0, [ 1391.4935, 856.9277]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1528.9647, 861.8455]);
		p.setValueAtTime(0.25, [ 1516.2161, 914.10187]);
		p.setValueAtTime(0.5, [ 1529.8088, 889.52783]);
		p.setValueAtTime(0.75, [ 1517.696, 843.7596]);
		p.setValueAtTime(1.0, [ 1551.0725, 843.46014]);
		p.setValueAtTime(1.25, [ 1527.3676, 833.49084]);
		p.setValueAtTime(1.5, [ 1514.0198, 827.5882]);
		p.setValueAtTime(1.75, [ 1497.9667, 850.59814]);
		p.setValueAtTime(2.0, [ 1449.7186, 845.33636]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1588.8711, 884.30133]);
		p.setValueAtTime(0.25, [ 1599.2838, 834.93304]);
		p.setValueAtTime(0.5, [ 1579.7952, 872.2866]);
		p.setValueAtTime(0.75, [ 1601.883, 828.1176]);
		p.setValueAtTime(1.0, [ 1628.7968, 856.83264]);
		p.setValueAtTime(1.25, [ 1624.3784, 938.609]);
		p.setValueAtTime(1.5, [ 1599.3085, 932.54456]);
		p.setValueAtTime(1.75, [ 1637.4429, 943.7042]);
		p.setValueAtTime(2.0, [ 1673.3676, 924.8375]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1647.0237, 852.0527]);
		p.setValueAtTime(0.25, [ 1634.7537, 836.3364]);
		p.setValueAtTime(0.5, [ 1628.493, 779.09827]);
		p.setValueAtTime(0.75, [ 1624.0111, 790.1142]);
		p.setValueAtTime(1.0, [ 1591.6182, 828.2524]);
		p.setValueAtTime(1.25, [ 1609.8798, 854.1541]);
		p.setValueAtTime(1.5, [ 1590.4248, 859.0265]);
		p.setValueAtTime(1.75, [ 1644.0006, 903.875]);
		p.setValueAtTime(2.0, [ 1638.152, 896.1971]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1699.0391, 860.01227]);
		p.setValueAtTime(0.25, [ 1694.2423, 845.3672]);
		p.setValueAtTime(0.5, [ 1663.26, 860.9702]);
		p.setValueAtTime(0.75, [ 1635.5165, 817.3928]);
		p.setValueAtTime(1.0, [ 1587.9818, 817.6999]);
		p.setValueAtTime(1.25, [ 1566.1213, 814.6955]);
		p.setValueAtTime(1.5, [ 1596.9781, 838.13666]);
		p.setValueAtTime(1.75, [ 1574.8456, 831.58575]);
		p.setValueAtTime(2.0, [ 1597.8225, 796.5346]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1772.095, 860.47516]);
		p.setValueAtTime(0.25, [ 1815.0648, 877.3513]);
		p.setValueAtTime(0.5, [ 1842.6064, 830.23553]);
		p.setValueAtTime(0.75, [ 1848.2174, 767.1676]);
		p.setValueAtTime(1.0, [ 1840.499, 784.9233]);
		p.setValueAtTime(1.25, [ 1887.9032, 779.889]);
		p.setValueAtTime(1.5, [ 1894.9125, 781.0972]);
		p.setValueAtTime(1.75, [ 1884.976, 796.032]);
		p.setValueAtTime(2.0, [ 1878.1893, 773.01306]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1821.575, 871.59735]);
		p.setValueAtTime(0.25, [ 1781.0815, 854.8652]);
		p.setValueAtTime(0.5, [ 1776.2295, 858.5226]);
		p.setValueAtTime(0.75, [ 1790.3451, 856.2436]);
		p.setValueAtTime(1.0, [ 1766.9453, 837.38086]);
		p.setValueAtTime(1.25, [ 1805.3815, 778.9441]);
		p.setValueAtTime(1.5, [ 1769.3411, 765.6422]);
		p.setValueAtTime(1.75, [ 1828.7855, 778.9828]);
		p.setValueAtTime(2.0, [ 1854.0562, 821.8151]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1894.9949, 871.84125]);
		p.setValueAtTime(0.25, [ 1887.0359, 919.4746]);
		p.setValueAtTime(0.5, [ 1879.7621, 928.9448]);
		p.setValueAtTime(0.75, [ 1905.7744, 906.9548]);
		p.setValueAtTime(1.0, [ 1927.7249, 910.7446]);
		p.setValueAtTime(1.25, [ 1909.2089, 892.41473]);
		p.setValueAtTime(1.5, [ 1895.5992, 853.1209]);
		p.setValueAtTime(1.75, [ 1899.3827, 867.3156]);
		p.setValueAtTime(2.0, [ 1955.439, 835.4435]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 35.225647, 928.12286]);
		p.setValueAtTime(0.25, [ -16.036324, 895.3154]);
		p.setValueAtTime(0.5, [ 17.946049, 925.434]);
		p.setValueAtTime(0.75, [ 26.526108, 924.9303]);
		p.setValueAtTime(1.0, [ 53.35882, 947.08215]);
		p.setValueAtTime(1.25, [ 76.78817, 944.1357]);
		p.setValueAtTime(1.5, [ 83.20442, 937.5706]);
		p.setValueAtTime(1.75, [ 85.37054, 922.4922]);
		p.setValueAtTime(2.0, [ 104.114845, 882.6334]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 86.79113, 918.1824]);
		p.setValueAtTime(0.25, [ 132.87068, 914.1367]);
		p.setValueAtTime(0.5, [ 166.37457, 923.0755]);
		p.setValueAtTime(0.75, [ 176.44278, 914.472]);
		p.setValueAtTime(1.0, [ 205.0142, 911.5822]);
		p.setValueAtTime(1.25, [ 154.5044, 878.4538]);
		p.setValueAtTime(1.5, [ 157.25023, 871.839]);
		p.setValueAtTime(1.75, [ 170.3256, 833.4969]);
		p.setValueAtTime(2.0, [ 138.66158, 842.49646]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 141.2063, 935.10297]);
		p.setValueAtTime(0.25, [ 174.04811, 921.917]);
		p.setValueAtTime(0.5, [ 208.56648, 946.5299]);
		p.setValueAtTime(0.75, [ 210.07207, 947.4212]);
		p.setValueAtTime(1.0, [ 190.20024, 935.69934]);
		p.setValueAtTime(1.25, [ 187.83134, 948.3964]);
		p.setValueAtTime(1.5, [ 180.83794, 963.2723]);
		p.setValueAtTime(1.75, [ 190.16663, 941.42914]);
		p.setValueAtTime(2.0, [ 194.75441, 939.05365]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 215.06456, 931.26697]);
		p.setValueAtTime(0.25, [ 205.961, 918.7384]);
		p.setValueAtTime(0.5, [ 163.37767, 908.8916]);
		p.setValueAtTime(0.75, [ 195.20552, 909.2244]);
		p.setValueAtTime(1.0, [ 216.20732, 928.79083]);
		p.setValueAtTime(1.25, [ 249.7334, 958.5851]);
		p.setValueAtTime(1.5, [ 206.81436, 975.2677]);
		p.setValueAtTime(1.75, [ 187.50378, 935.3284]);
		p.setValueAtTime(2.0, [ 218.2153, 941.93427]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 294.87613, 924.5066]);
		p.setValueAtTime(0.25, [ 279.51553, 895.5302]);
		p.setValueAtTime(0.5, [ 284.85233, 899.07227]);
		p.setValueAtTime(0.75, [ 322.56378, 870.3962]);
		p.setValueAtTime(1.0, [ 324.59235, 908.194]);
		p.setValueAtTime(1.25, [ 329.92307, 910.78625]);
		p.setValueAtTime(1.5, [ 315.6796, 882.4708]);
		p.setValueAtTime(1.75, [ 357.71906, 897.92883]);
		p.setValueAtTime(2.0, [ 383.8178, 908.5753]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 334.3628, 921.8606]);
		p.setValueAtTime(0.25, [ 292.79257, 900.93475]);
		p.setValueAtTime(0.5, [ 295.45184, 886.0693]);
		p.setValueAtTime(0.75, [ 297.11646, 881.93896]);
		p.setValueAtTime(1.0, [ 265.5064, 855.43744]);
		p.setValueAtTime(1.25, [ 261.31772, 919.048]);
		p.setValueAtTime(1.5, [ 285.0922, 895.2039]);
		p.setValueAtTime(1.75, [ 273.7913, 908.80756]);
		p.setValueAtTime(2.0, [ 277.62708, 924.3651]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 383.77505, 914.1048]);
		p.setValueAtTime(0.25, [ 333.19818, 904.4353]);
		p.setValueAtTime(0.5, [ 400.73712, 843.1284]);
		p.setValueAtTime(0.75, [ 397.1589, 804.4383]);
		p.setValueAtTime(1.0, [ 409.47723, 819.67645]);
		p.setValueAtTime(1.25, [ 421.06662, 806.4162]);
		p.setValueAtTime(1.5, [ 464.07056, 792.32227]);
		p.setValueAtTime(1.75, [ 504.2075, 747.318]);
		p.setValueAtTime(2.0, [ 501.05414, 768.4611]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 459.4306, 941.8858]);
		p.setValueAtTime(0.25, [ 476.76062, 931.63513]);
		p.setValueAtTime(0.5, [ 458.29807, 925.285]);
		p.setValueAtTime(0.75, [ 465.50763, 881.19867]);
		p.setValueAtTime(1.0, [ 439.82626, 834.8341]);
		p.setValueAtTime(1.25, [ 402.8388, 825.8735]);
		p.setValueAtTime(1.5, [ 379.60837, 875.0517]);
		p.setValueAtTime(1.75, [ 390.33145, 894.8351]);
		p.setValueAtTime(2.0, [ 399.09195, 909.85706]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 509.57233, 913.5452]);
		p.setValueAtTime(0.25, [ 549.4331, 885.954]);
		p.setValueAtTime(0.5, [ 523.4514, 865.24316]);
		p.setValueAtTime(0.75, [ 514.18713, 832.8761]);
		p.setValueAtTime(1.0, [ 558.29584, 839.30237]);
		p.setValueAtTime(1.25, [ 581.0574, 843.85626]);
		p.setValueAtTime(1.5, [ 593.4028, 844.8989]);
		p.setValueAtTime(1.75, [ 622.4005, 869.43616]);
		p.setValueAtTime(2.0, [ 673.4649, 823.0032]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 596.1732, 924.1192]);
		p.setValueAtTime(0.25, [ 547.3237, 917.88995]);
		p.setValueAtTime(0.5, [ 519.1241, 882.892]);
		p.setValueAtTime(0.75, [ 473.0787, 864.9761]);
		p.setValueAtTime(1.0, [ 458.51895, 891.3803]);
		p.setValueAtTime(1.25, [ 473.45895, 894.41986]);
		p.setValueAtTime(1.5, [ 432.50177, 865.403]);
		p.setValueAtTime(1.75, [ 410.80435, 874.4663]);
		p.setValueAtTime(2.0, [ 445.68448, 844.0523]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 639.7226, 929.96985]);
		p.setValueAtTime(0.25, [ 659.45154, 886.3974]);
		p.setValueAtTime(0.5, [ 650.70575, 883.4917]);
		p.setValueAtTime(0.75, [ 629.52563, 872.2293]);
		p.setValueAtTime(1.0, [ 589.81525, 867.8237]);
		p.setValueAtTime(1.25, [ 538.3366, 888.92706]);
		p.setValueAtTime(1.5, [ 557.3662, 873.7182]);
		p.setValueAtTime(1.75, [ 531.11005, 937.81604]);
		p.setValueAtTime(2.0, [ 489.1107, 983.7268]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 705.42426, 926.35803]);
		p.setValueAtTime(0.25, [ 698.7515, 942.9813]);
		p.setValueAtTime(0.5, [ 707.5213, 930.43616]);
		p.setValueAtTime(0.75, [ 685.98645, 933.1603]);
		p.setValueAtTime(1.0, [ 656.55023, 945.30975]);
		p.setValueAtTime(1.25, [ 608.3571, 926.6515]);
		p.setValueAtTime(1.5, [ 592.4259, 917.7214]);
		p.setValueAtTime(1.75, [ 565.9897, 919.0905]);
		p.setValueAtTime(2.0, [ 618.81177, 923.7167]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 756.6161, 945.1719]);
		p.setValueAtTime(0.25, [ 768.56195, 932.06116]);
		p.setValueAtTime(0.5, [ 745.63135, 910.4119]);
		p.setValueAtTime(0.75, [ 730.49664, 945.71936]);
		p.setValueAtTime(1.0, [ 718.13446, 962.40186]);
		p.setValueAtTime(1.25, [ 677.104, 984.0379]);
		p.setValueAtTime(1.5, [ 660.2024, 1021.71545]);
		p.setValueAtTime(1.75, [ 653.4171, 1069.2478]);
		p.setValueAtTime(2.0, [ 670.93884, 1080.3177]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 808.4577, 943.0523]);
		p.setValueAtTime(0.25, [ 789.79034, 933.40814]);
		p.setValueAtTime(0.5, [ 793.7988, 925.3522]);
		p.setValueAtTime(0.75, [ 805.32196, 983.73895]);
		p.setValueAtTime(1.0, [ 772.1154, 1000.73584]);
		p.setValueAtTime(1.25, [ 800.686, 999.36926]);
		p.setValueAtTime(1.5, [ 813.9284, 1000.94916]);
		p.setValueAtTime(1.75, [ 801.0497, 995.18134]);
		p.setValueAtTime(2.0, [ 758.93, 968.33057]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 867.751, 929.217]);
		p.setValueAtTime(0.25, [ 828.581, 894.4969]);
		p.setValueAtTime(0.5, [ 797.25653, 896.10297]);
		p.setValueAtTime(0.75, [ 852.8966, 896.9219]);
		p.setValueAtTime(1.0, [ 868.93243, 898.4841]);
		p.setValueAtTime(1.25, [ 872.8372, 886.9462]);
		p.setValueAtTime(1.5, [ 908.40393, 852.9548]);
		p.setValueAtTime(1.75, [ 944.3961, 872.1168]);
		p.setValueAtTime(2.0, [ 973.553, 853.6332]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 920.80005, 937.1962]);
		p.setValueAtTime(0.25, [ 938.8922, 941.0922]);
		p.setValueAtTime(0.5, [ 852.10345, 977.16797]);
		p.setValueAtTime(0.75, [ 852.38995, 971.85547]);
		p.setValueAtTime(1.0, [ 860.0923, 1001.87177]);
		p.setValueAtTime(1.25, [ 835.8535, 986.9845]);
		p.setValueAtTime(1.5, [ 867.0259, 965.7902]);
		p.setValueAtTime(1.75, [ 858.5508, 960.7054]);
		p.setValueAtTime(2.0, [ 820.78656, 904.74976]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 969.95154, 932.135]);
		p.setValueAtTime(0.25, [ 955.4106, 930.0456]);
		p.setValueAtTime(0.5, [ 956.2378, 885.44934]);
		p.setValueAtTime(0.75, [ 943.2529, 855.5732]);
		p.setValueAtTime(1.0, [ 924.5356, 851.85297]);
		p.setValueAtTime(1.25, [ 946.0595, 880.8843]);
		p.setValueAtTime(1.5, [ 995.74554, 869.8377]);
		p.setValueAtTime(1.75, [ 942.9394, 844.20374]);
		p.setValueAtTime(2.0, [ 960.9647, 829.4509]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1052.2664, 928.8316]);
		p.setValueAtTime(0.25, [ 1059.2218, 914.0153]);
		p.setValueAtTime(0.5, [ 1038.2859, 957.89716]);
		p.setValueAtTime(0.75, [ 998.6131, 932.2109]);
		p.setValueAtTime(1.0, [ 961.09485, 955.65576]);
		p.setValueAtTime(1.25, [ 963.49347, 938.0527]);
		p.setValueAtTime(1.5, [ 987.14813, 972.56586]);
		p.setValueAtTime(1.75, [ 996.4385, 975.89404]);
		p.setValueAtTime(2.0, [ 981.4478, 976.15686]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1103.8927, 915.7161]);
		p.setValueAtTime(0.25, [ 1074.3531, 926.6285]);
		p.setValueAtTime(0.5, [ 1066.8983, 958.4697]);
		p.setValueAtTime(0.75, [ 1032.8833, 984.33246]);
		p.setValueAtTime(1.0, [ 1050.0951, 989.0955]);
		p.setValueAtTime(1.25, [ 1084.4983, 995.89667]);
		p.setValueAtTime(1.5, [ 1091.7578, 974.76514]);
		p.setValueAtTime(1.75, [ 1096.1781, 961.22064]);
		p.setValueAtTime(2.0, [ 1132.2391, 922.6594]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1166.2606, 943.81976]);
		p.setValueAtTime(0.25, [ 1213.476, 969.6293]);
		p.setValueAtTime(0.5, [ 1232.495, 902.0379]);
		p.setValueAtTime(0.75, [ 1234.4208, 903.34406]);
		p.setValueAtTime(1.0, [ 1250.7812, 917.1971]);
		p.setValueAtTime(1.25, [ 1221.2793, 876.737]);
		p.setValueAtTime(1.5, [ 1210.2987, 849.6681]);
		p.setValueAtTime(1.75, [ 1204.9844, 881.3012]);
		p.setValueAtTime(2.0, [ 1210.0992, 934.4437]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1232.1884, 931.62616]);
		p.setValueAtTime(0.25, [ 1254.7103, 940.04724]);
		p.setValueAtTime(0.5, [ 1310.8202, 896.7104]);
		p.setValueAtTime(0.75, [ 1339.6843, 873.58966]);
		p.setValueAtTime(1.0, [ 1359.6049, 888.8875]);
		p.setValueAtTime(1.25, [ 1355.0922, 861.2039]);
		p.setValueAtTime(1.5, [ 1363.502, 791.3849]);
		p.setValueAtTime(1.75, [ 1424.1034, 734.73505]);
		p.setValueAtTime(2.0, [ 1464.554, 736.4175]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1310.2494, 927.59076]);
		p.setValueAtTime(0.25, [ 1260.624, 912.763]);
		p.setValueAtTime(0.5, [ 1293.3558, 889.1884]);
		p.setValueAtTime(0.75, [ 1302.2577, 880.15607]);
		p.setValueAtTime(1.0, [ 1343.1937, 896.7754]);
		p.setValueAtTime(1.25, [ 1369.4882, 920.9253]);
		p.setValueAtTime(1.5, [ 1359.8878, 914.92804]);
		p.setValueAtTime(1.75, [ 1404.6278, 893.4381]);
		p.setValueAtTime(2.0, [ 1413.1243, 886.851]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1355.0415, 919.9861]);
		p.setValueAtTime(0.25, [ 1330.3911, 917.55255]);
		p.setValueAtTime(0.5, [ 1332.3092, 891.3911]);
		p.setValueAtTime(0.75, [ 1320.2112, 868.2459]);
		p.setValueAtTime(1.0, [ 1330.2094, 880.49005]);
		p.setValueAtTime(1.25, [ 1320.035, 913.0253]);
		p.setValueAtTime(1.5, [ 1365.0769, 941.9128]);
		p.setValueAtTime(1.75, [ 1326.066, 946.3336]);
		p.setValueAtTime(2.0, [ 1309.5717, 999.34393]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1401.9329, 943.3874]);
		p.setValueAtTime(0.25, [ 1364.9916, 923.38544]);
		p.setValueAtTime(0.5, [ 1358.8641, 921.283]);
		p.setValueAtTime(0.75, [ 1390.244, 967.8768]);
		p.setValueAtTime(1.0, [ 1370.429, 956.84503]);
		p.setValueAtTime(1.25, [ 1433.2188, 908.6857]);
		p.setValueAtTime(1.5, [ 1442.482, 881.13153]);
		p.setValueAtTime(1.75, [ 1465.8522, 893.1662]);
		p.setValueAtTime(2.0, [ 1466.1783, 883.11676]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1461.9442, 924.2386]);
		p.setValueAtTime(0.25, [ 1424.7162, 918.2008]);
		p.setValueAtTime(0.5, [ 1398.5062, 915.18866]);
		p.setValueAtTime(0.75, [ 1391.9795, 892.42523]);
		p.setValueAtTime(1.0, [ 1373.6465, 892.54297]);
		p.setValueAtTime(1.25, [ 1409.6942, 904.4533]);
		p.setValueAtTime(1.5, [ 1384.6327, 918.6925]);
		p.setValueAtTime(1.75, [ 1438.5068, 938.79395]);
		p.setValueAtTime(2.0, [ 1489.1243, 946.1112]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1532.0052, 933.0723]);
		p.setValueAtTime(0.25, [ 1582.6871, 929.46313]);
		p.setValueAtTime(0.5, [ 1532.7491, 915.8003]);
		p.setValueAtTime(0.75, [ 1542.0049, 941.6147]);
		p.setValueAtTime(1.0, [ 1575.1483, 877.5942]);
		p.setValueAtTime(1.25, [ 1559.5619, 862.07733]);
		p.setValueAtTime(1.5, [ 1543.8777, 826.7291]);
		p.setValueAtTime(1.75, [ 1487.9464, 850.3678]);
		p.setValueAtTime(2.0, [ 1436.995, 828.57135]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1576.1624, 923.5567]);
		p.setValueAtTime(0.25, [ 1565.2921, 907.5218]);
		p.setValueAtTime(0.5, [ 1546.2415, 954.07367]);
		p.setValueAtTime(0.75, [ 1570.9497, 978.55646]);
		p.setValueAtTime(1.0, [ 1537.6602, 954.4246]);
		p.setValueAtTime(1.25, [ 1535.934, 975.3466]);
		p.setValueAtTime(1.5, [ 1524.5251, 961.8289]);
		p.setValueAtTime(1.75, [ 1518.1472, 949.1452]);
		p.setValueAtTime(2.0, [ 1520.0974, 952.8831]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1664.5164, 950.8746]);
		p.setValueAtTime(0.25, [ 1621.1853, 976.2887]);
		p.setValueAtTime(0.5, [ 1604.5853, 1000.5304]);
		p.setValueAtTime(0.75, [ 1560.5977, 992.4793]);
		p.setValueAtTime(1.0, [ 1572.3992, 1041.5463]);
		p.setValueAtTime(1.25, [ 1629.9946, 1026.0511]);
		p.setValueAtTime(1.5, [ 1637.5444, 1069.6387]);
		p.setValueAtTime(1.75, [ 1687.9071, 1075.9478]);
		p.setValueAtTime(2.0, [ 1738.3792, 1111.5348]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1730.7268, 953.2264]);
		p.setValueAtTime(0.25, [ 1738.7734, 968.28485]);
		p.setValueAtTime(0.5, [ 1719.4198, 1015.0456]);
		p.setValueAtTime(0.75, [ 1692.267, 997.874]);
		p.setValueAtTime(1.0, [ 1687.2885, 956.90375]);
		p.setValueAtTime(1.25, [ 1647.5977, 945.6098]);
		p.setValueAtTime(1.5, [ 1601.9535, 928.4409]);
		p.setValueAtTime(1.75, [ 1560.1888, 935.943]);
		p.setValueAtTime(2.0, [ 1616.0026, 918.81537]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1749.7085, 936.5035]);
		p.setValueAtTime(0.25, [ 1744.9575, 936.0324]);
		p.setValueAtTime(0.5, [ 1714.8079, 908.0845]);
		p.setValueAtTime(0.75, [ 1705.7953, 853.6372]);
		p.setValueAtTime(1.0, [ 1709.7842, 897.1751]);
		p.setValueAtTime(1.25, [ 1703.7137, 892.2083]);
		p.setValueAtTime(1.5, [ 1694.0507, 873.88983]);
		p.setValueAtTime(1.75, [ 1737.8434, 887.11]);
		p.setValueAtTime(2.0, [ 1760.3567, 860.0651]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1810.3994, 956.367]);
		p.setValueAtTime(0.25, [ 1795.5315, 959.6496]);
		p.setValueAtTime(0.5, [ 1777.8127, 910.39746]);
		p.setValueAtTime(0.75, [ 1747.765, 853.8586]);
		p.setValueAtTime(1.0, [ 1740.8944, 839.37305]);
		p.setValueAtTime(1.25, [ 1761.5859, 825.95197]);
		p.setValueAtTime(1.5, [ 1781.2767, 852.84393]);
		p.setValueAtTime(1.75, [ 1779.994, 876.3999]);
		p.setValueAtTime(2.0, [ 1784.0995, 838.42236]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1891.8225, 943.86536]);
		p.setValueAtTime(0.25, [ 1923.3531, 919.9083]);
		p.setValueAtTime(0.5, [ 1915.5563, 900.3268]);
		p.setValueAtTime(0.75, [ 1909.8219, 919.4795]);
		p.setValueAtTime(1.0, [ 1935.4088, 943.60077]);
		p.setValueAtTime(1.25, [ 1992.515, 938.2415]);
		p.setValueAtTime(1.5, [ 1992.223, 920.9627]);
		p.setValueAtTime(1.75, [ 1950.0428, 946.55927]);
		p.setValueAtTime(2.0, [ 1963.6743, 893.5308]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 33.572514, 987.0328]);
		p.setValueAtTime(0.25, [ 80.68991, 983.75574]);
		p.setValueAtTime(0.5, [ 82.070816, 1010.8105]);
		p.setValueAtTime(0.75, [ 95.40965, 1005.0615]);
		p.setValueAtTime(1.0, [ 84.08464, 1003.29504]);
		p.setValueAtTime(1.25, [ 110.23441, 1027.8662]);
		p.setValueAtTime(1.5, [ 69.450836, 981.1559]);
		p.setValueAtTime(1.75, [ 76.68263, 968.0298]);
		p.setValueAtTime(2.0, [ 102.04445, 976.8952]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 65.73803, 995.1711]);
		p.setValueAtTime(0.25, [ 56.509335, 950.2275]);
		p.setValueAtTime(0.5, [ 56.899208, 973.2457]);
		p.setValueAtTime(0.75, [ 90.90378, 980.21936]);
		p.setValueAtTime(1.0, [ 73.45368, 979.44855]);
		p.setValueAtTime(1.25, [ 38.772053, 1012.3185]);
		p.setValueAtTime(1.5, [ 54.34501, 1017.2207]);
		p.setValueAtTime(1.75, [ 44.58087, 1015.12646]);
		p.setValueAtTime(2.0, [ 33.846783, 1018.6507]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 141.3006, 985.166]);
		p.setValueAtTime(0.25, [ 140.68259, 971.80383]);
		p.setValueAtTime(0.5, [ 179.09941, 936.6247]);
		p.setValueAtTime(0.75, [ 174.72906, 922.3886]);
		p.setValueAtTime(1.0, [ 191.6864, 870.6543]);
		p.setValueAtTime(1.25, [ 137.11649, 869.5114]);
		p.setValueAtTime(1.5, [ 81.748436, 847.971]);
		p.setValueAtTime(1.75, [ 39.758877, 850.971]);
		p.setValueAtTime(2.0, [ 46.91675, 861.51855]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 221.42043, 987.5278]);
		p.setValueAtTime(0.25, [ 210.89369, 980.7393]);
		p.setValueAtTime(0.5, [ 242.51976, 987.5262]);
		p.setValueAtTime(0.75, [ 233.94205, 996.37665]);
		p.setValueAtTime(1.0, [ 222.87267, 971.2557]);
		p.setValueAtTime(1.25, [ 206.16063, 969.8514]);
		p.setValueAtTime(1.5, [ 207.17056, 975.61115]);
		p.setValueAtTime(1.75, [ 248.62149, 965.4173]);
		p.setValueAtTime(2.0, [ 275.68286, 987.5962]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 267.66125, 978.0562]);
		p.setValueAtTime(0.25, [ 293.43796, 980.9455]);
		p.setValueAtTime(0.5, [ 285.13794, 959.5466]);
		p.setValueAtTime(0.75, [ 326.48898, 972.4355]);
		p.setValueAtTime(1.0, [ 308.223, 982.7946]);
		p.setValueAtTime(1.25, [ 269.25217, 958.8384]);
		p.setValueAtTime(1.5, [ 292.0743, 950.91595]);
		p.setValueAtTime(1.75, [ 285.58737, 951.45996]);
		p.setValueAtTime(2.0, [ 292.07684, 927.1464]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 314.02402, 990.1642]);
		p.setValueAtTime(0.25, [ 348.1378, 1011.0532]);
		p.setValueAtTime(0.5, [ 347.3047, 998.18207]);
		p.setValueAtTime(0.75, [ 351.14548, 992.9963]);
		p.setValueAtTime(1.0, [ 379.55267, 1000.4596]);
		p.setValueAtTime(1.25, [ 351.46777, 977.8294]);
		p.setValueAtTime(1.5, [ 368.95026, 981.8291]);
		p.setValueAtTime(1.75, [ 417.0106, 979.859]);
		p.setValueAtTime(2.0, [ 432.72327, 957.4082]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 386.37686, 990.8856]);
		p.setValueAtTime(0.25, [ 425.48453, 1038.8041]);
		p.setValueAtTime(0.5, [ 459.46054, 1068.349]);
		p.setValueAtTime(0.75, [ 450.0222, 1084.2034]);
		p.setValueAtTime(1.0, [ 421.72867, 1130.8019]);
		p.setValueAtTime(1.25, [ 404.1595, 1114.4153]);
		p.setValueAtTime(1.5, [ 353.87137, 1160.4468]);
		p.setValueAtTime(1.75, [ 308.4866, 1172.5028]);
		p.setValueAtTime(2.0, [ 323.69418, 1212.2363]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 440.11313, 985.24054]);
		p.setValueAtTime(0.25, [ 499.15793, 1044.5547]);
		p.setValueAtTime(0.5, [ 494.0667, 1021.09094]);
		p.setValueAtTime(0.75, [ 456.67563, 1053.0222]);
		p.setValueAtTime(1.0, [ 460.62476, 1025.247]);
		p.setValueAtTime(1.25, [ 425.45224, 1032.8303]);
		p.setValueAtTime(1.5, [ 416.26764, 1056.2775]);
		p.setValueAtTime(1.75, [ 419.00586, 1075.9247]);
		p.setValueAtTime(2.0, [ 454.25302, 1095.4172]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 513.1264, 990.62256]);
		p.setValueAtTime(0.25, [ 520.7214, 1024.205]);
		p.setValueAtTime(0.5, [ 543.06067, 1058.7845]);
		p.setValueAtTime(0.75, [ 527.0503, 1025.9791]);
		p.setValueAtTime(1.0, [ 518.6308, 1022.0053]);
		p.setValueAtTime(1.25, [ 545.0587, 1016.1828]);
		p.setValueAtTime(1.5, [ 585.99335, 1002.4682]);
		p.setValueAtTime(1.75, [ 571.5091, 990.24945]);
		p.setValueAtTime(2.0, [ 538.8874, 964.25995]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 576.83014, 973.7527]);
		p.setValueAtTime(0.25, [ 550.11896, 969.12494]);
		p.setValueAtTime(0.5, [ 566.7492, 957.13007]);
		p.setValueAtTime(0.75, [ 567.70996, 915.22284]);
		p.setValueAtTime(1.0, [ 544.02374, 895.0926]);
		p.setValueAtTime(1.25, [ 570.8122, 895.98987]);
		p.setValueAtTime(1.5, [ 599.6896, 886.0509]);
		p.setValueAtTime(1.75, [ 580.74725, 870.2161]);
		p.setValueAtTime(2.0, [ 574.55756, 904.5499]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 631.2172, 1002.95496]);
		p.setValueAtTime(0.25, [ 603.291, 1010.70636]);
		p.setValueAtTime(0.5, [ 575.00824, 1005.48303]);
		p.setValueAtTime(0.75, [ 585.4733, 1033.9982]);
		p.setValueAtTime(1.0, [ 593.9516, 1059.3119]);
		p.setValueAtTime(1.25, [ 589.413, 1052.2599]);
		p.setValueAtTime(1.5, [ 562.88153, 1028.162]);
		p.setValueAtTime(1.75, [ 554.2533, 1015.4163]);
		p.setValueAtTime(2.0, [ 541.29065, 989.352]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 680.9581, 1000.3407]);
		p.setValueAtTime(0.25, [ 697.6203, 976.09644]);
		p.setValueAtTime(0.5, [ 707.4816, 974.34247]);
		p.setValueAtTime(0.75, [ 721.1921, 983.5037]);
		p.setValueAtTime(1.0, [ 673.7618, 992.1094]);
		p.setValueAtTime(1.25, [ 652.89044, 968.9163]);
		p.setValueAtTime(1.5, [ 681.04034, 949.686]);
		p.setValueAtTime(1.75, [ 648.6127, 944.5578]);
		p.setValueAtTime(2.0, [ 654.81946, 945.311]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 740.2778, 1001.1332]);
		p.setValueAtTime(0.25, [ 690.9373, 933.77435]);
		p.setValueAtTime(0.5, [ 738.36975, 966.5124]);
		p.setValueAtTime(0.75, [ 708.74475, 969.56116]);
		p.setValueAtTime(1.0, [ 734.8773, 1022.5568]);
		p.setValueAtTime(1.25, [ 730.7077, 1048.178]);
		p.setValueAtTime(1.5, [ 712.8886, 1051.3997]);
		p.setValueAtTime(1.75, [ 734.39667, 1063.5267]);
		p.setValueAtTime(2.0, [ 737.4807, 1060.8771]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 818.69293, 996.87085]);
		p.setValueAtTime(0.25, [ 857.5547, 1025.2633]);
		p.setValueAtTime(0.5, [ 847.2374, 1022.6634]);
		p.setValueAtTime(0.75, [ 850.4853, 1000.22626]);
		p.setValueAtTime(1.0, [ 892.5275, 998.9388]);
		p.setValueAtTime(1.25, [ 947.5748, 985.83734]);
		p.setValueAtTime(1.5, [ 997.24963, 1007.1994]);
		p.setValueAtTime(1.75, [ 1006.3986, 1045.0907]);
		p.setValueAtTime(2.0, [ 987.5587, 1057.9261]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 873.37573, 978.5243]);
		p.setValueAtTime(0.25, [ 835.428, 982.956]);
		p.setValueAtTime(0.5, [ 810.15027, 1021.58136]);
		p.setValueAtTime(0.75, [ 752.79535, 994.7054]);
		p.setValueAtTime(1.0, [ 765.3215, 991.30615]);
		p.setValueAtTime(1.25, [ 790.9183, 992.3464]);
		p.setValueAtTime(1.5, [ 773.7662, 997.3753]);
		p.setValueAtTime(1.75, [ 742.7508, 994.664]);
		p.setValueAtTime(2.0, [ 739.06036, 1015.12866]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 924.5541, 994.4606]);
		p.setValueAtTime(0.25, [ 945.4077, 942.3973]);
		p.setValueAtTime(0.5, [ 966.61194, 869.72266]);
		p.setValueAtTime(0.75, [ 980.42255, 877.5553]);
		p.setValueAtTime(1.0, [ 970.9715, 919.8875]);
		p.setValueAtTime(1.25, [ 963.5148, 901.72217]);
		p.setValueAtTime(1.5, [ 913.1867, 893.6105]);
		p.setValueAtTime(1.75, [ 942.8408, 884.5037]);
		p.setValueAtTime(2.0, [ 936.74976, 868.5527]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 997.45776, 993.3569]);
		p.setValueAtTime(0.25, [ 1003.06354, 1047.1633]);
		p.setValueAtTime(0.5, [ 983.6728, 1043.0295]);
		p.setValueAtTime(0.75, [ 965.43085, 1006.79834]);
		p.setValueAtTime(1.0, [ 1002.3755, 1019.41205]);
		p.setValueAtTime(1.25, [ 995.5132, 998.22284]);
		p.setValueAtTime(1.5, [ 1000.768, 972.5633]);
		p.setValueAtTime(1.75, [ 991.00946, 964.4624]);
		p.setValueAtTime(2.0, [ 990.31586, 989.7041]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1029.2357, 987.1747]);
		p.setValueAtTime(0.25, [ 1025.3407, 980.6075]);
		p.setValueAtTime(0.5, [ 1049.8702, 968.5952]);
		p.setValueAtTime(0.75, [ 1049.1035, 989.8123]);
		p.setValueAtTime(1.0, [ 1055.7186, 975.4465]);
		p.setValueAtTime(1.25, [ 1084.1456, 992.309]);
		p.setValueAtTime(1.5, [ 1144.7238, 944.7293]);
		p.setValueAtTime(1.75, [ 1171.7633, 947.1774]);
		p.setValueAtTime(2.0, [ 1193.7479, 967.6515]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1115.25, 984.56683]);
		p.setValueAtTime(0.25, [ 1090.9943, 974.1874]);
		p.setValueAtTime(0.5, [ 1085.1263, 946.7931]);
		p.setValueAtTime(0.75, [ 1131.1818, 907.6396]);
		p.setValueAtTime(1.0, [ 1147.7184, 923.2554]);
		p.setValueAtTime(1.25, [ 1078.8771, 959.6972]);
		p.setValueAtTime(1.5, [ 1077.5737, 941.5597]);
		p.setValueAtTime(1.75, [ 1112.7821, 950.14594]);
		p.setValueAtTime(2.0, [ 1160.2307, 911.1336]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1191.3109, 987.92255]);
		p.setValueAtTime(0.25, [ 1181.2148, 978.0047]);
		p.setValueAtTime(0.5, [ 1166.9285, 1006.0961]);
		p.setValueAtTime(0.75, [ 1151.5511, 1001.2114]);
		p.setValueAtTime(1.0, [ 1153.3547, 991.7334]);
		p.setValueAtTime(1.25, [ 1198.9261, 962.92706]);
		p.setValueAtTime(1.5, [ 1211.2676, 980.6543]);
		p.setValueAtTime(1.75, [ 1207.7394, 935.3713]);
		p.setValueAtTime(2.0, [ 1169.902, 946.5384]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1213.7478, 981.83405]);
		p.setValueAtTime(0.25, [ 1194.0049, 984.818]);
		p.setValueAtTime(0.5, [ 1201.7205, 925.4504]);
		p.setValueAtTime(0.75, [ 1228.2772, 880.09534]);
		p.setValueAtTime(1.0, [ 1254.8273, 916.38605]);
		p.setValueAtTime(1.25, [ 1280.5555, 908.5729]);
		p.setValueAtTime(1.5, [ 1288.1725, 875.84174]);
		p.setValueAtTime(1.75, [ 1270.4187, 855.4054]);
		p.setValueAtTime(2.0, [ 1280.2507, 813.15326]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1286.5748, 978.1421]);
		p.setValueAtTime(0.25, [ 1334.7886, 961.5255]);
		p.setValueAtTime(0.5, [ 1317.3186, 934.8261]);
		p.setValueAtTime(0.75, [ 1362.7386, 961.75714]);
		p.setValueAtTime(1.0, [ 1368.9042, 979.32684]);
		p.setValueAtTime(1.25, [ 1388.6958, 1009.1572]);
		p.setValueAtTime(1.5, [ 1356.9015, 996.85284]);
		p.setValueAtTime(1.75, [ 1354.4403, 1024.0015]);
		p.setValueAtTime(2.0, [ 1311.2053, 999.8097]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1355.1707, 1000.8282]);
		p.setValueAtTime(0.25, [ 1361.6346, 957.45654]);
		p.setValueAtTime(0.5, [ 1346.9564, 946.7458]);
		p.setValueAtTime(0.75, [ 1352.9264, 938.0197]);
		p.setValueAtTime(1.0, [ 1373.9103, 920.0014]);
		p.setValueAtTime(1.25, [ 1433.7495, 877.8344]);
		p.setValueAtTime(1.5, [ 1501.9309, 883.0124]);
		p.setValueAtTime(1.75, [ 1519.4524, 916.1336]);
		p.setValueAtTime(2.0, [ 1555.5853, 875.5712]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1401.4235, 967.6615]);
		p.setValueAtTime(0.25, [ 1424.6393, 980.3964]);
		p.setValueAtTime(0.5, [ 1464.4502, 931.6564]);
		p.setValueAtTime(0.75, [ 1507.106, 955.09845]);
		p.setValueAtTime(1.0, [ 1470.0276, 968.07465]);
		p.setValueAtTime(1.25, [ 1504.2075, 1002.4593]);
		p.setValueAtTime(1.5, [ 1528.6716, 959.8802]);
		p.setValueAtTime(1.75, [ 1531.3479, 998.2394]);
		p.setValueAtTime(2.0, [ 1548.6135, 1016.7753]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1480.7445, 986.3637]);
		p.setValueAtTime(0.25, [ 1456.9266, 900.86163]);
		p.setValueAtTime(0.5, [ 1443.4705, 861.1632]);
		p.setValueAtTime(0.75, [ 1413.9464, 858.30615]);
		p.setValueAtTime(1.0, [ 1444.6292, 814.3342]);
		p.setValueAtTime(1.25, [ 1446.4901, 794.84424]);
		p.setValueAtTime(1.5, [ 1453.1147, 821.3289]);
		p.setValueAtTime(1.75, [ 1406.223, 848.1803]);
		p.setValueAtTime(2.0, [ 1367.9017, 805.9767]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1533.0388, 969.6835]);
		p.setValueAtTime(0.25, [ 1493.9296, 1042.6025]);
		p.setValueAtTime(0.5, [ 1495.1161, 1071.689]);
		p.setValueAtTime(0.75, [ 1479.6195, 1083.7888]);
		p.setValueAtTime(1.0, [ 1475.1844, 1079.6356]);
		p.setValueAtTime(1.25, [ 1513.929, 1067.6378]);
		p.setValueAtTime(1.5, [ 1564.6517, 1082.3756]);
		p.setValueAtTime(1.75, [ 1540.0074, 1073.5842]);
		p.setValueAtTime(2.0, [ 1529.6019, 1044.2081]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1605.9199, 1011.5918]);
		p.setValueAtTime(0.25, [ 1655.8184, 1000.68286]);
		p.setValueAtTime(0.5, [ 1636.231, 1038.1521]);
		p.setValueAtTime(0.75, [ 1619.359, 1063.4467]);
		p.setValueAtTime(1.0, [ 1667.9135, 1006.51056]);
		p.setValueAtTime(1.25, [ 1710.9066, 1014.97217]);
		p.setValueAtTime(1.5, [ 1676.123, 1011.54443]);
		p.setValueAtTime(1.75, [ 1670.0856, 960.1342]);
		p.setValueAtTime(2.0, [ 1681.1898, 902.5909]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1669.2643, 978.1414]);
		p.setValueAtTime(0.25, [ 1745.9634, 973.8628]);
		p.setValueAtTime(0.5, [ 1724.204, 945.471]);
		p.setValueAtTime(0.75, [ 1724.1322, 959.737]);
		p.setValueAtTime(1.0, [ 1698.4266, 914.0263]);
		p.setValueAtTime(1.25, [ 1676.0319, 936.7038]);
		p.setValueAtTime(1.5, [ 1684.5361, 886.2208]);
		p.setValueAtTime(1.75, [ 1665.0038, 894.8299]);
		p.setValueAtTime(2.0, [ 1652.3335, 945.6438]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1707.6257, 980.53906]);
		p.setValueAtTime(0.25, [ 1710.1089, 999.6849]);
		p.setValueAtTime(0.5, [ 1753.5778, 963.5376]);
		p.setValueAtTime(0.75, [ 1754.4359, 971.2667]);
		p.setValueAtTime(1.0, [ 1790.6813, 1018.3335]);
		p.setValueAtTime(1.25, [ 1748.4657, 1003.82227]);
		p.setValueAtTime(1.5, [ 1727.7211, 1009.1385]);
		p.setValueAtTime(1.75, [ 1764.3832, 964.63525]);
		p.setValueAtTime(2.0, [ 1720.1495, 976.37195]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1764.9181, 990.7329]);
		p.setValueAtTime(0.25, [ 1753.5363, 910.98834]);
		p.setValueAtTime(0.5, [ 1698.4559, 912.8337]);
		p.setValueAtTime(0.75, [ 1675.2987, 943.1463]);
		p.setValueAtTime(1.0, [ 1686.784, 937.1466]);
		p.setValueAtTime(1.25, [ 1704.0598, 953.9565]);
		p.setValueAtTime(1.5, [ 1728.0215, 946.8337]);
		p.setValueAtTime(1.75, [ 1716.0302, 953.09766]);
		p.setValueAtTime(2.0, [ 1713.243, 929.152]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1809.8981, 974.2286]);
		p.setValueAtTime(0.25, [ 1787.1519, 1002.0848]);
		p.setValueAtTime(0.5, [ 1764.1522, 991.9389]);
		p.setValueAtTime(0.75, [ 1743.8988, 999.6964]);
		p.setValueAtTime(1.0, [ 1750.7688, 967.6787]);
		p.setValueAtTime(1.25, [ 1693.9756, 944.7213]);
		p.setValueAtTime(1.5, [ 1735.528, 939.7358]);
		p.setValueAtTime(1.75, [ 1741.903, 909.923]);
		p.setValueAtTime(2.0, [ 1711.8508, 864.04425]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1888.9203, 990.738]);
		p.setValueAtTime(0.25, [ 1901.4214, 1000.1406]);
		p.setValueAtTime(0.5, [ 1917.8936, 1039.718]);
		p.setValueAtTime(0.75, [ 1915.8479, 1007.9428]);
		p.setValueAtTime(1.0, [ 1933.1842, 1049.8428]);
		p.setValueAtTime(1.25, [ 1981.2659, 1020.19086]);
		p.setValueAtTime(1.5, [ 1995.5521, 1012.748]);
		p.setValueAtTime(1.75, [ 2038.7051, 1002.83203]);
		p.setValueAtTime(2.0, [ 2062.1309, 965.9233]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 23.721893, 1047.3038]);
		p.setValueAtTime(0.25, [ 25.852652, 1069.1713]);
		p.setValueAtTime(0.5, [ -0.27345505, 1039.6752]);
		p.setValueAtTime(0.75, [ 26.552698, 1018.36176]);
		p.setValueAtTime(1.0, [ 18.374613, 1044.8549]);
		p.setValueAtTime(1.25, [ 32.607815, 1044.7933]);
		p.setValueAtTime(1.5, [ 76.03748, 1061.1663]);
		p.setValueAtTime(1.75, [ 61.781464, 1041.8007]);
		p.setValueAtTime(2.0, [ 36.500793, 1071.0087]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 97.96321, 1064.2883]);
		p.setValueAtTime(0.25, [ 50.887432, 1105.3873]);
		p.setValueAtTime(0.5, [ 59.647472, 1100.2008]);
		p.setValueAtTime(0.75, [ 50.96531, 1089.9916]);
		p.setValueAtTime(1.0, [ 46.8497, 1060.1512]);
		p.setValueAtTime(1.25, [ -18.178034, 1111.7266]);
		p.setValueAtTime(1.5, [ -1.7653211, 1144.7513]);
		p.setValueAtTime(1.75, [ -19.125456, 1206.0299]);
		p.setValueAtTime(2.0, [ -4.1678224, 1246.2064]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 170.15623, 1062.5005]);
		p.setValueAtTime(0.25, [ 161.2595, 1036.3901]);
		p.setValueAtTime(0.5, [ 183.26341, 1016.19904]);
		p.setValueAtTime(0.75, [ 190.9568, 968.1639]);
		p.setValueAtTime(1.0, [ 167.10493, 956.3466]);
		p.setValueAtTime(1.25, [ 128.32048, 945.0045]);
		p.setValueAtTime(1.5, [ 132.21236, 986.998]);
		p.setValueAtTime(1.75, [ 128.29561, 954.834]);
		p.setValueAtTime(2.0, [ 152.05962, 1004.1641]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 217.58382, 1047.0533]);
		p.setValueAtTime(0.25, [ 220.9741, 1044.0795]);
		p.setValueAtTime(0.5, [ 224.44731, 1029.6595]);
		p.setValueAtTime(0.75, [ 239.34721, 992.7814]);
		p.setValueAtTime(1.0, [ 230.47176, 961.02826]);
		p.setValueAtTime(1.25, [ 214.12247, 1012.6961]);
		p.setValueAtTime(1.5, [ 232.77571, 1039.7258]);
		p.setValueAtTime(1.75, [ 269.81976, 1061.6725]);
		p.setValueAtTime(2.0, [ 242.27045, 1067.0369]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 282.8156, 1074.495]);
		p.setValueAtTime(0.25, [ 298.96732, 1091.336]);
		p.setValueAtTime(0.5, [ 314.23022, 1078.0051]);
		p.setValueAtTime(0.75, [ 312.09088, 1072.0258]);
		p.setValueAtTime(1.0, [ 316.32983, 1028.3202]);
		p.setValueAtTime(1.25, [ 308.67307, 1051.2421]);
		p.setValueAtTime(1.5, [ 277.7042, 1045.8148]);
		p.setValueAtTime(1.75, [ 227.96782, 1043.0173]);
		p.setValueAtTime(2.0, [ 230.02667, 989.46985]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 330.3532, 1045.3684]);
		p.setValueAtTime(0.25, [ 323.31592, 1062.9712]);
		p.setValueAtTime(0.5, [ 330.92307, 1095.133]);
		p.setValueAtTime(0.75, [ 318.88895, 1080.8881]);
		p.setValueAtTime(1.0, [ 363.56708, 1110.3417]);
		p.setValueAtTime(1.25, [ 371.48495, 1082.4338]);
		p.setValueAtTime(1.5, [ 334.28574, 1107.5869]);
		p.setValueAtTime(1.75, [ 350.31406, 1097.4425]);
		p.setValueAtTime(2.0, [ 361.18784, 1097.9155]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 386.51535, 1022.58563]);
		p.setValueAtTime(0.25, [ 395.7625, 1047.5983]);
		p.setValueAtTime(0.5, [ 423.77585, 1016.25323]);
		p.setValueAtTime(0.75, [ 465.6809, 1031.9042]);
		p.setValueAtTime(1.0, [ 478.23764, 1039.2313]);
		p.setValueAtTime(1.25, [ 461.59796, 1040.0438]);
		p.setValueAtTime(1.5, [ 402.06473, 1058.8597]);
		p.setValueAtTime(1.75, [ 451.82022, 1018.72845]);
		p.setValueAtTime(2.0, [ 446.11066, 987.62476]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 443.52576, 1061.6323]);
		p.setValueAtTime(0.25, [ 395.63168, 1072.6189]);
		p.setValueAtTime(0.5, [ 363.61673, 1061.4003]);
		p.setValueAtTime(0.75, [ 378.54886, 1091.9056]);
		p.setValueAtTime(1.0, [ 379.10007, 1085.9966]);
		p.setValueAtTime(1.25, [ 385.50195, 1058.3324]);
		p.setValueAtTime(1.5, [ 395.23227, 1053.6698]);
		p.setValueAtTime(1.75, [ 378.45993, 1047.9076]);
		p.setValueAtTime(2.0, [ 356.11752, 1065.9835]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 503.38416, 1063.343]);
		p.setValueAtTime(0.25, [ 504.37283, 1111.1619]);
		p.setValueAtTime(0.5, [ 508.8181, 1153.0197]);
		p.setValueAtTime(0.75, [ 475.29987, 1168.2181]);
		p.setValueAtTime(1.0, [ 410.59872, 1136.986]);
		p.setValueAtTime(1.25, [ 423.19077, 1155.0117]);
		p.setValueAtTime(1.5, [ 444.37988, 1175.364]);
		p.setValueAtTime(1.75, [ 467.73828, 1186.3651]);
		p.setValueAtTime(2.0, [ 469.6007, 1233.5566]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 574.8495, 1022.3559]);
		p.setValueAtTime(0.25, [ 603.55994, 1027.4929]);
		p.setValueAtTime(0.5, [ 617.24963, 1028.1664]);
		p.setValueAtTime(0.75, [ 592.5838, 1043.0977]);
		p.setValueAtTime(1.0, [ 603.9229, 1037.5927]);
		p.setValueAtTime(1.25, [ 554.9053, 1035.4197]);
		p.setValueAtTime(1.5, [ 530.61273, 1017.9213]);
		p.setValueAtTime(1.75, [ 532.48016, 1021.94824]);
		p.setValueAtTime(2.0, [ 504.11526, 981.4475]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 635.98883, 1049.7955]);
		p.setValueAtTime(0.25, [ 617.8861, 1054.0835]);
		p.setValueAtTime(0.5, [ 687.92053, 1080.1298]);
		p.setValueAtTime(0.75, [ 659.3974, 1083.668]);
		p.setValueAtTime(1.0, [ 674.97266, 1033.8174]);
		p.setValueAtTime(1.25, [ 684.34686, 1035.9241]);
		p.setValueAtTime(1.5, [ 684.0487, 1012.70667]);
		p.setValueAtTime(1.75, [ 636.5195, 1061.915]);
		p.setValueAtTime(2.0, [ 619.1319, 1071.4595]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 695.3614, 1049.5507]);
		p.setValueAtTime(0.25, [ 641.3467, 1025.3616]);
		p.setValueAtTime(0.5, [ 623.8, 1021.4736]);
		p.setValueAtTime(0.75, [ 584.41425, 1015.16376]);
		p.setValueAtTime(1.0, [ 533.36743, 1023.8787]);
		p.setValueAtTime(1.25, [ 532.9204, 1054.3652]);
		p.setValueAtTime(1.5, [ 515.1914, 1044.7357]);
		p.setValueAtTime(1.75, [ 511.56827, 1091.3397]);
		p.setValueAtTime(2.0, [ 495.54324, 1036.936]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 739.00684, 1052.8969]);
		p.setValueAtTime(0.25, [ 783.3461, 1034.409]);
		p.setValueAtTime(0.5, [ 824.5333, 1014.9421]);
		p.setValueAtTime(0.75, [ 787.90424, 1001.8715]);
		p.setValueAtTime(1.0, [ 796.8456, 1006.10443]);
		p.setValueAtTime(1.25, [ 838.20715, 1002.05676]);
		p.setValueAtTime(1.5, [ 830.0709, 1032.2649]);
		p.setValueAtTime(1.75, [ 805.8481, 1021.97754]);
		p.setValueAtTime(2.0, [ 840.1483, 1036.9313]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 801.85583, 1052.1969]);
		p.setValueAtTime(0.25, [ 848.95856, 1041.8881]);
		p.setValueAtTime(0.5, [ 870.8286, 1056.0504]);
		p.setValueAtTime(0.75, [ 866.379, 1025.28]);
		p.setValueAtTime(1.0, [ 882.6709, 1058.7811]);
		p.setValueAtTime(1.25, [ 903.9889, 1015.8761]);
		p.setValueAtTime(1.5, [ 902.09973, 1011.3354]);
		p.setValueAtTime(1.75, [ 911.8719, 1030.8179]);
		p.setValueAtTime(2.0, [ 925.6665, 991.1295]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 886.728, 1043.9501]);
		p.setValueAtTime(0.25, [ 884.2284, 1081.8118]);
		p.setValueAtTime(0.5, [ 930.2475, 1066.2506]);
		p.setValueAtTime(0.75, [ 964.45294, 1085.8462]);
		p.setValueAtTime(1.0, [ 1010.8309, 1094.89]);
		p.setValueAtTime(1.25, [ 964.3102, 1127.0369]);
		p.setValueAtTime(1.5, [ 956.1838, 1199.3766]);
		p.setValueAtTime(1.75, [ 943.37616, 1195.0356]);
		p.setValueAtTime(2.0, [ 910.7385, 1141.302]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 929.3336, 1044.3412]);
		p.setValueAtTime(0.25, [ 916.5167, 1015.0224]);
		p.setValueAtTime(0.5, [ 940.7597, 1033.8104]);
		p.setValueAtTime(0.75, [ 929.8579, 1017.75714]);
		p.setValueAtTime(1.0, [ 931.2054, 974.7697]);
		p.setValueAtTime(1.25, [ 943.41437, 927.11487]);
		p.setValueAtTime(1.5, [ 921.1152, 872.1079]);
		p.setValueAtTime(1.75, [ 869.35724, 836.22375]);
		p.setValueAtTime(2.0, [ 873.08453, 787.46234]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 983.15393, 1073.3434]);
		p.setValueAtTime(0.25, [ 967.9447, 1025.1885]);
		p.setValueAtTime(0.5, [ 957.1629, 1007.63324]);
		p.setValueAtTime(0.75, [ 908.1422, 1002.554]);
		p.setValueAtTime(1.0, [ 872.44104, 1059.3593]);
		p.setValueAtTime(1.25, [ 853.86066, 1064.7987]);
		p.setValueAtTime(1.5, [ 797.34503, 1066.3685]);
		p.setValueAtTime(1.75, [ 812.80634, 1007.1927]);
		p.setValueAtTime(2.0, [ 767.6336, 1060.5741]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1045.1034, 1039.9219]);
		p.setValueAtTime(0.25, [ 1066.5172, 988.6408]);
		p.setValueAtTime(0.5, [ 1000.9512, 950.0478]);
		p.setValueAtTime(0.75, [ 984.7882, 953.85126]);
		p.setValueAtTime(1.0, [ 984.71136, 1011.57745]);
		p.setValueAtTime(1.25, [ 994.9918, 951.944]);
		p.setValueAtTime(1.5, [ 1029.3098, 945.04926]);
		p.setValueAtTime(1.75, [ 987.2623, 920.5138]);
		p.setValueAtTime(2.0, [ 946.99817, 932.8506]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1084.7103, 1071.3832]);
		p.setValueAtTime(0.25, [ 1107.2212, 1121.4592]);
		p.setValueAtTime(0.5, [ 1126.2919, 1122.6272]);
		p.setValueAtTime(0.75, [ 1159.6761, 1110.8748]);
		p.setValueAtTime(1.0, [ 1187.5265, 1136.7776]);
		p.setValueAtTime(1.25, [ 1220.8956, 1129.8336]);
		p.setValueAtTime(1.5, [ 1220.892, 1129.1649]);
		p.setValueAtTime(1.75, [ 1216.3104, 1103.3049]);
		p.setValueAtTime(2.0, [ 1243.0283, 1182.4198]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1171.3291, 1051.7291]);
		p.setValueAtTime(0.25, [ 1140.1217, 1066.0319]);
		p.setValueAtTime(0.5, [ 1134.9086, 1071.6273]);
		p.setValueAtTime(0.75, [ 1162.3383, 1077.526]);
		p.setValueAtTime(1.0, [ 1173.5002, 1077.0421]);
		p.setValueAtTime(1.25, [ 1134.691, 1070.0758]);
		p.setValueAtTime(1.5, [ 1137.0205, 992.5749]);
		p.setValueAtTime(1.75, [ 1101.2294, 992.5255]);
		p.setValueAtTime(2.0, [ 1136.0596, 1029.3468]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1232.5774, 1031.1888]);
		p.setValueAtTime(0.25, [ 1253.1371, 1044.0697]);
		p.setValueAtTime(0.5, [ 1290.1205, 1042.5226]);
		p.setValueAtTime(0.75, [ 1271.5326, 1052.1667]);
		p.setValueAtTime(1.0, [ 1300.455, 1011.3828]);
		p.setValueAtTime(1.25, [ 1323.5515, 959.1909]);
		p.setValueAtTime(1.5, [ 1328.5814, 924.74036]);
		p.setValueAtTime(1.75, [ 1297.4128, 877.6252]);
		p.setValueAtTime(2.0, [ 1295.496, 889.5122]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1291.678, 1032.9614]);
		p.setValueAtTime(0.25, [ 1305.876, 1051.197]);
		p.setValueAtTime(0.5, [ 1277.8807, 1063.0521]);
		p.setValueAtTime(0.75, [ 1271.811, 1023.2599]);
		p.setValueAtTime(1.0, [ 1284.4233, 1027.0232]);
		p.setValueAtTime(1.25, [ 1294.9374, 1068.8602]);
		p.setValueAtTime(1.5, [ 1275.8286, 1067.0143]);
		p.setValueAtTime(1.75, [ 1301.225, 1016.3105]);
		p.setValueAtTime(2.0, [ 1326.0505, 1023.294]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1362.3862, 1031.5435]);
		p.setValueAtTime(0.25, [ 1352.813, 1045.2097]);
		p.setValueAtTime(0.5, [ 1320.0289, 1041.357]);
		p.setValueAtTime(0.75, [ 1309.7152, 1061.9867]);
		p.setValueAtTime(1.0, [ 1320.1959, 1036.6781]);
		p.setValueAtTime(1.25, [ 1313.431, 1095.1476]);
		p.setValueAtTime(1.5, [ 1304.3325, 1116.556]);
		p.setValueAtTime(1.75, [ 1269.993, 1122.2025]);
		p.setValueAtTime(2.0, [ 1284.6425, 1086.0078]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1400.3475, 1054.6432]);
		p.setValueAtTime(0.25, [ 1397.5309, 1009.5801]);
		p.setValueAtTime(0.5, [ 1382.8322, 971.29016]);
		p.setValueAtTime(0.75, [ 1396.4084, 963.7537]);
		p.setValueAtTime(1.0, [ 1383.3496, 928.35675]);
		p.setValueAtTime(1.25, [ 1403.9586, 954.02344]);
		p.setValueAtTime(1.5, [ 1365.996, 938.44745]);
		p.setValueAtTime(1.75, [ 1338.364, 913.57385]);
		p.setValueAtTime(2.0, [ 1311.8643, 851.9774]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1463.5206, 1059.2733]);
		p.setValueAtTime(0.25, [ 1516.172, 977.5123]);
		p.setValueAtTime(0.5, [ 1529.7065, 971.3713]);
		p.setValueAtTime(0.75, [ 1498.1348, 935.8213]);
		p.setValueAtTime(1.0, [ 1458.8638, 976.82587]);
		p.setValueAtTime(1.25, [ 1437.3064, 983.06494]);
		p.setValueAtTime(1.5, [ 1391.5941, 1009.44336]);
		p.setValueAtTime(1.75, [ 1420.2025, 1020.33575]);
		p.setValueAtTime(2.0, [ 1469.2596, 1036.2965]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1538.1108, 1060.7218]);
		p.setValueAtTime(0.25, [ 1592.213, 1039.7085]);
		p.setValueAtTime(0.5, [ 1640.4362, 1026.0812]);
		p.setValueAtTime(0.75, [ 1649.0615, 1015.68634]);
		p.setValueAtTime(1.0, [ 1652.6149, 1011.1767]);
		p.setValueAtTime(1.25, [ 1659.1699, 1020.45325]);
		p.setValueAtTime(1.5, [ 1662.2396, 1023.32513]);
		p.setValueAtTime(1.75, [ 1676.6439, 1083.8934]);
		p.setValueAtTime(2.0, [ 1691.2683, 1066.9689]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1618.5071, 1036.1625]);
		p.setValueAtTime(0.25, [ 1613.9073, 1019.01324]);
		p.setValueAtTime(0.5, [ 1643.0443, 1042.721]);
		p.setValueAtTime(0.75, [ 1670.2494, 1023.18695]);
		p.setValueAtTime(1.0, [ 1681.4902, 997.792]);
		p.setValueAtTime(1.25, [ 1664.518, 1029.1764]);
		p.setValueAtTime(1.5, [ 1667.8431, 1025.9672]);
		p.setValueAtTime(1.75, [ 1687.0045, 1050.1838]);
		p.setValueAtTime(2.0, [ 1712.6027, 1021.21454]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1630.142, 1054.9733]);
		p.setValueAtTime(0.25, [ 1651.01, 1033.3785]);
		p.setValueAtTime(0.5, [ 1649.7255, 1083.6932]);
		p.setValueAtTime(0.75, [ 1649.7311, 1055.9625]);
		p.setValueAtTime(1.0, [ 1654.5852, 1023.43506]);
		p.setValueAtTime(1.25, [ 1653.6475, 1019.9549]);
		p.setValueAtTime(1.5, [ 1685.5547, 973.1706]);
		p.setValueAtTime(1.75, [ 1740.411, 996.16846]);
		p.setValueAtTime(2.0, [ 1723.6649, 986.2635]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1704.9673, 1064.5833]);
		p.setValueAtTime(0.25, [ 1682.7175, 1099.3987]);
		p.setValueAtTime(0.5, [ 1610.6635, 1104.6548]);
		p.setValueAtTime(0.75, [ 1615.4392, 1108.8909]);
		p.setValueAtTime(1.0, [ 1622.9542, 1123.676]);
		p.setValueAtTime(1.25, [ 1624.2987, 1162.9207]);
		p.setValueAtTime(1.5, [ 1622.204, 1143.7516]);
		p.setValueAtTime(1.75, [ 1630.9095, 1160.4088]);
		p.setValueAtTime(2.0, [ 1636.0331, 1156.6901]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1784.2482, 1059.8906]);
		p.setValueAtTime(0.25, [ 1821.1118, 1014.38306]);
		p.setValueAtTime(0.5, [ 1798.4481, 1013.1816]);
		p.setValueAtTime(0.75, [ 1847.5009, 970.5713]);
		p.setValueAtTime(1.0, [ 1829.6545, 954.57855]);
		p.setValueAtTime(1.25, [ 1839.21, 934.57697]);
		p.setValueAtTime(1.5, [ 1851.5061, 919.04486]);
		p.setValueAtTime(1.75, [ 1868.2477, 910.72314]);
		p.setValueAtTime(2.0, [ 1886.567, 894.0119]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1838.3496, 1038.9568]);
		p.setValueAtTime(0.25, [ 1794.0857, 1056.0887]);
		p.setValueAtTime(0.5, [ 1807.8319, 1021.1793]);
		p.setValueAtTime(0.75, [ 1831.6022, 1020.8673]);
		p.setValueAtTime(1.0, [ 1840.3063, 997.94135]);
		p.setValueAtTime(1.25, [ 1866.9779, 1002.20917]);
		p.setValueAtTime(1.5, [ 1876.9, 973.10394]);
		p.setValueAtTime(1.75, [ 1885.0931, 999.27423]);
		p.setValueAtTime(2.0, [ 1883.6501, 993.3656]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.motionBlur = true;

	var p = solid.property("position");
	var r = solid.property("rotation");

		p.setValueAtTime(0.0, [ 1885.7495, 1047.5426]);
		p.setValueAtTime(0.25, [ 1921.9581, 1074.4233]);
		p.setValueAtTime(0.5, [ 1936.41, 1089.7064]);
		p.setValueAtTime(0.75, [ 1930.401, 1102.091]);
		p.setValueAtTime(1.0, [ 1989.2506, 1152.8151]);
		p.setValueAtTime(1.25, [ 1976.1959, 1199.5349]);
		p.setValueAtTime(1.5, [ 1921.4437, 1212.1702]);
		p.setValueAtTime(1.75, [ 1963.9418, 1186.401]);
		p.setValueAtTime(2.0, [ 1955.7115, 1167.0641]);

	app.endUndoGroup();
}  //end script
