(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"interactive_atlas_", frames: [[0,0,1000,480],[1002,0,1000,480],[830,2684,269,130],[566,2477,564,72],[1002,2403,564,72],[1568,2417,275,133],[0,2410,564,72],[1002,2253,564,73],[1002,2328,563,73],[1782,2011,264,50],[1101,2744,268,128],[1378,2686,267,130],[1504,2011,276,134],[555,2551,273,132],[275,2618,268,131],[1681,2685,270,129],[1568,2282,276,133],[0,2484,277,132],[545,2685,268,130],[0,2618,273,129],[830,2551,273,131],[1755,2147,277,133],[279,2484,274,132],[1409,2552,270,132],[1504,1928,490,81],[1002,2170,751,81],[1681,2552,272,131],[0,2824,163,50],[282,2751,163,50],[563,2817,163,50],[1846,2386,163,50],[1782,2063,163,50],[1371,2818,163,50],[563,2869,163,50],[1846,2282,163,50],[1846,2334,163,50],[1132,2477,275,133],[1845,2438,163,50],[566,2410,163,50],[731,2410,163,50],[1845,2490,163,50],[1866,2889,163,50],[893,2889,163,50],[165,2890,163,50],[728,2889,163,50],[1536,2889,163,50],[330,2890,163,50],[1105,2612,271,130],[1371,2870,163,50],[1097,2874,163,50],[1701,2889,163,50],[0,2876,163,50],[0,2751,280,71],[282,2817,279,71],[815,2816,280,71],[1647,2816,280,71],[1002,1928,500,240],[1002,1446,1000,480],[0,1928,1000,480],[0,964,1000,480],[0,482,1000,480],[1002,964,1000,480],[0,1446,1000,480],[1002,482,1000,480]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.babyboylookbook1 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.babyboylookbook1jpgcopy3 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap108 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap109 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap110 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap113 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap115 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap118 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap71 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap73 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap75 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap76 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap77 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap78 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap79 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap80 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap81 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap82 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap83 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap84 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap85 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap89 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap90 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap91 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap92 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap93 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap94 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap95 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap96 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap97 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap98 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.RacerSlider2 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.SafariNaturaLookbook1 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.SafariNaturaLookbook1jpgcopy = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.sultanlookbook1jpgcopy = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.sultanlookbook1jpgcopy2 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.YakutSlider1 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.YakutSlider1jpgcopy2 = function() {
	this.spriteSheet = ss["interactive_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.תמונה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap98();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,240);


(lib.pp23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SafariNaturaLookbook1jpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,609.8,292.7);


(lib.pp22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.babyboylookbook1jpgcopy3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.639,0.639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639.2,306.8);


(lib.pp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YakutSlider1jpgcopy2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,644.8,309.5);


(lib.pp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sultanlookbook1jpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.616,0.616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,615.7,295.5);


(lib.p24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,132);


(lib.p23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SafariNaturaLookbook1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.176,0.176);

	this.instance_1 = new lib.Bitmap113();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,49,0.662,0.534);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.176,scaleY:0.176,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.372,scaleY:0.372,x:-83,y:-90}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,84.5);


(lib.p22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.babyboylookbook1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.168,0.168);

	this.instance_1 = new lib.Bitmap115();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,37,0.695,0.616);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.168,scaleY:0.168,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.39,scaleY:0.39,x:-95,y:-105}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.2,80.7);


(lib.p21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,133);


(lib.p20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,131);


(lib.p19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,129);


(lib.p18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,130);


(lib.p17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,132);


(lib.p16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,133);


(lib.p15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,129);


(lib.p14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,131);


(lib.p13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,132);


(lib.p12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,134);


(lib.p11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RacerSlider2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.17,0.17);

	this.instance_1 = new lib.Bitmap108();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-113,89,0.717,0.662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.17,scaleY:0.17,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.395,scaleY:0.395,x:-113,y:-54}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.8,81.5);


(lib.p10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,130);


(lib.p9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,128);


(lib.p8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,133);


(lib.p7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,130);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,130);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,133);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,131);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YakutSlider1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.171,0.174);

	this.instance_1 = new lib.Bitmap109();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,155,0.7,0.567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.171,scaleY:0.174,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.397,scaleY:0.403,x:-88,y:1}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.4,83.7);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sultanlookbook1jpgcopy2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.175,0.175);

	this.instance_1 = new lib.Bitmap110();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-132,169,0.789,0.567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.175,scaleY:0.175,x:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.437,scaleY:0.437,x:-131}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.6,83.8);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,132);


(lib.d9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap93();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap92();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap91();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap90();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap89();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap88();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap87();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap86();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap85();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,35.5);


(lib.c14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap84();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap83();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap82();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap81();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap80();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap79();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap78();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,36.7);


(lib.c7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap77();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.716,0.716);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,35.8);


(lib.c6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap76();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.716,0.716);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,35.8);


(lib.c5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap75();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.716,0.716);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,35.8);


(lib.c4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap74();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.716,0.716);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,35.8);


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap73();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.729,0.729);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,36.5);


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap71();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.729,0.729);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,36.5);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap70();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.729,0.729);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,36.5);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap118();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.3,38.9);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.banim2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.c4 = new lib.c4();
	this.c4.parent = this;
	this.c4.setTransform(58.4,17.9,1,1,0,0,0,58.4,17.9);
	new cjs.ButtonHelper(this.c4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.c4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,35.8);


// stage content:
(lib.interactive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tmuna12.alpha = 0;
		this.pp2.alpha = 0;
		this.pp3.alpha = 0;
		this.pp23.alpha=0;
		this.pp22.alpha=0;
		this.btn.alpha=0.2;
		this.banim2.alpha=0; 
		
		//אירונע לחיצה תמוה 11
		this.p11.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			
			this.tmuna12.alpha = 1;
			this.btn.alpha=1;	
			
		}
		
		this.btn.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
		this.tmuna12.alpha = 0;
			this.btn.alpha=0.2;
		}
		
		
		
		
		this.p11.addEventListener("mouseover", p11_overTo.bind(this));
		function p11_overTo() {
			console.log("hit")
			
			this.p1.alpha = 0.2
			this.p2.alpha = 0.2
			this.p3.alpha = 0.2
			this.p4.alpha = 0.2
			this.p5.alpha = 0.2
			this.p6.alpha = 0.2
			this.p7.alpha = 0.2
			this.p8.alpha = 0.2
			this.p9.alpha = 0.2
			this.p10.alpha = 0.2
		
			this.p12.alpha = 0.2
			this.p13.alpha = 0.2
			this.p14.alpha = 0.2
			this.p15.alpha = 0.2
			this.p16.alpha = 0.2
			this.p17.alpha = 0.2
			this.p18.alpha = 0.2
			this.p19.alpha = 0.2
			this.p20.alpha = 0.2
			this.p21.alpha = 0.2
			this.p22.alpha = 0.2
			this.p23.alpha = 0.2
			this.p24.alpha = 0.2
		
			
			//קטגוריות
		
			this.c1.alpha = 0.2
			this.c2.alpha = 0.2
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 0.2
			this.c6.alpha = 0.2
			this.c7.alpha = 0.2
			this.c8.alpha=0.2
			this.c9.alpha = 0.2
			this.c10.alpha = 0.2
			this.c11.alpha = 1
			this.c12.alpha = 0.2
			this.c13.alpha = 0.2
			this.c14.alpha = 0.2
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 0.2
			this.d4.alpha=0.2
			this.d5.alpha = 1
			this.d6.alpha = 0.2
			this.d7.alpha = 0.2
			this.d8.alpha=0.2
			this.d9.alpha=0.2
			
		}
		
		
		this.p11.addEventListener("mouseout", p111_outTo.bind(this));
		function p111_outTo() {
		
			console.log("hit")
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
		
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
		}
		
		
		this.p2.addEventListener("mouseover", p2_overTo.bind(this));
		function p2_overTo() {
			console.log("hit")
			if (this.p2.alpha==1)
			{
			this.p1.alpha = 0.2
			this.p2.alpha = 1
			this.p3.alpha = 0.2
			this.p4.alpha = 0.2
			this.p5.alpha = 0.2
			this.p6.alpha = 0.2
			this.p7.alpha = 0.2
			this.p8.alpha = 0.2
			this.p9.alpha = 0.2
			this.p10.alpha = 0.2
			this.p11.alpha = 0.2
			this.p12.alpha = 0.2
			this.p13.alpha = 0.2
			this.p14.alpha = 0.2
			this.p15.alpha = 0.2
			this.p16.alpha = 0.2
			this.p17.alpha = 0.2
			this.p18.alpha = 0.2
			this.p19.alpha = 0.2
			this.p20.alpha = 0.2
			this.p21.alpha = 0.2
			this.p22.alpha = 0.2
			this.p23.alpha = 0.2
			this.p24.alpha = 0.2
		
			
			//קטגוריות
		
			this.c1.alpha = 0.2
			this.c2.alpha = 0.2
			this.c3.alpha=1
			this.c4.alpha=0.2
			this.c5.alpha = 0.2
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 0.2
			this.c10.alpha = 0.2
			this.c11.alpha = 0.2
			this.c12.alpha = 0.2
			this.c13.alpha = 0.2
			this.c14.alpha = 0.2
		
			this.d1.alpha = 0.2
			this.d2.alpha = 1
			this.d3.alpha = 0.2
			this.d4.alpha=0.2
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 0.2
			this.d8.alpha=1
			this.d9.alpha=1
			
		}
		
		}
		this.p2.addEventListener("mouseout", p222_outTo.bind(this));
		function p222_outTo() {
		
			console.log("hit")
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
			this.p11.alpha = 1
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
		}
		
		//אירוע לחיצה תמונה 2
		this.p2.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			
			this.pp2.alpha = 1;
			this.btn.alpha=1;	
			
		}
		
		this.btn.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
		this.pp2.alpha = 0;
		this.btn.alpha=0.2;
		}
		
		
		
		this.p3.addEventListener("mouseover", p3_overTo.bind(this));
		function p3_overTo() {
			console.log("hit")
			if (this.p3.alpha==1)
			{
			this.p1.alpha = 0.2
			this.p2.alpha = 0.2
			this.p3.alpha = 1
			this.p4.alpha = 0.2
			this.p5.alpha = 0.2
			this.p6.alpha = 0.2
			this.p7.alpha = 0.2
			this.p8.alpha = 0.2
			this.p9.alpha = 0.2
			this.p10.alpha = 0.2
			this.p11.alpha = 0.2
			this.p12.alpha = 0.2
			this.p13.alpha = 0.2
			this.p14.alpha = 0.2
			this.p15.alpha = 0.2
			this.p16.alpha = 0.2
			this.p17.alpha = 0.2
			this.p18.alpha = 0.2
			this.p19.alpha = 0.2
			this.p20.alpha = 0.2
			this.p21.alpha = 0.2
			this.p22.alpha = 0.2
			this.p23.alpha = 0.2
			this.p24.alpha = 0.2
		
			
			//קטגוריות
		
			this.c1.alpha = 0.2
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=0.2
			this.c5.alpha = 1
			this.c6.alpha = 0.2
			this.c7.alpha = 0.2
			this.c8.alpha=0.2
			this.c9.alpha = 1
			this.c10.alpha = 0.2
			this.c11.alpha = 0.2
			this.c12.alpha = 0.2
			this.c13.alpha = 0.2
			this.c14.alpha = 0.2
		
			this.d1.alpha =1
			this.d2.alpha = 1
			this.d3.alpha = 01
			this.d4.alpha=0.2
			this.d5.alpha = 1
			this.d6.alpha = 0.2
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=0.2
			
		}
		
		}
		this.p3.addEventListener("mouseout", p3_outTo.bind(this));
		function p3_outTo() {
		
			console.log("hit")
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
			this.p11.alpha = 1
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
		}
		
		
		//אירוע לחיצה תמונה 3
		this.p3.addEventListener("click", fl_MouseClickHandler_p3.bind(this));
		
		function fl_MouseClickHandler_p3()
		{
			
			this.pp3.alpha = 1;
			this.btn.alpha=1;	
			
		}
		
		this.btn.addEventListener("click", fl_MouseClickHandler_pp3.bind(this));
		
		function fl_MouseClickHandler_pp3()
		{
		this.pp3.alpha = 0;
		this.btn.alpha=0.2;
		}
		
		
		this.p22.addEventListener("mouseover", p22_overTo.bind(this));
		function p22_overTo() {
			console.log("hit")
			
			this.p1.alpha = 0.2
			this.p2.alpha = 0.2
			this.p3.alpha = 0.2
			this.p4.alpha = 0.2
			this.p5.alpha = 0.2
			this.p6.alpha = 0.2
			this.p7.alpha = 0.2
			this.p8.alpha = 0.2
			this.p9.alpha = 0.2
			this.p10.alpha = 0.2
			this.p11.alpha = 0.2 
			this.p12.alpha = 0.2
			this.p13.alpha = 0.2
			this.p14.alpha = 0.2
			this.p15.alpha = 0.2
			this.p16.alpha = 0.2
			this.p17.alpha = 0.2
			this.p18.alpha = 0.2
			this.p19.alpha = 0.2
			this.p20.alpha = 0.2
			this.p21.alpha = 0.2
			this.p22.alpha = 1
			this.p23.alpha = 0.2
			this.p24.alpha = 0.2
		
			
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 0.2
			this.c3.alpha=0.2
			this.c4.alpha=1
			this.c5.alpha = 0.2
			this.c6.alpha = 0.2
			this.c7.alpha = 0.2
			this.c8.alpha=0.2
			this.c9.alpha = 0.2
			this.c10.alpha = 0.2
			this.c11.alpha = 0.2
			this.c12.alpha = 1
			this.c13.alpha = 0.2
			this.c14.alpha = 0.2
		
			this.d1.alpha = 1
			this.d2.alpha = 0.2
			this.d3.alpha = 0.2
			this.d4.alpha=0.2
			this.d5.alpha = 0.2
			this.d6.alpha = 0.2
			this.d7.alpha = 0.2
			this.d8.alpha=1
			this.d9.alpha=1
			
		}
		
		
		this.p22.addEventListener("mouseout", ppp22_outTo.bind(this));
		function ppp22_outTo() {
		
			console.log("hit")
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
			this.p11.alpha = 1
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
		}
		
		//אירוע ליחצה תמונה 22
		this.p22.addEventListener("click", fl_MouseClickHandler_22.bind(this));
		
		function fl_MouseClickHandler_22()
		{
			
			this.pp22.alpha = 1;
			this.btn.alpha=1;	
			
		}
		
		this.btn.addEventListener("click", fl_MouseClickHandler_p222.bind(this));
		
		function fl_MouseClickHandler_p222()
		{
		this.pp22.alpha = 0;
			this.btn.alpha=0.2;
		}
		
		
		//תמונה 23
		
		this.p23.addEventListener("mouseover", p23_overTo.bind(this));
		function p23_overTo() {
			console.log("hit")
			
			this.p1.alpha = 0.2
			this.p2.alpha = 0.2
			this.p3.alpha = 0.2
			this.p4.alpha = 0.2
			this.p5.alpha = 0.2
			this.p6.alpha = 0.2
			this.p7.alpha = 0.2
			this.p8.alpha = 0.2
			this.p9.alpha = 0.2
			this.p10.alpha = 0.2
			this.p11.alpha = 0.2 
			this.p12.alpha = 0.2
			this.p13.alpha = 0.2
			this.p14.alpha = 0.2
			this.p15.alpha = 0.2
			this.p16.alpha = 0.2
			this.p17.alpha = 0.2
			this.p18.alpha = 0.2
			this.p19.alpha = 0.2
			this.p20.alpha = 0.2
			this.p21.alpha = 0.2
			this.p22.alpha = 0.2
			this.p23.alpha = 1
			this.p24.alpha = 0.2
		
			
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 0.2
			this.c3.alpha=0.2
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 0.2
			this.c8.alpha=0.2
			this.c9.alpha = 0.2
			this.c10.alpha = 0.2
			this.c11.alpha = 0.2
			this.c12.alpha = 0.2
			this.c13.alpha = 0.2
			this.c14.alpha = 1
		
			this.d1.alpha = 0.2
			this.d2.alpha = 1
			this.d3.alpha = 0.2
			this.d4.alpha=1
			this.d5.alpha = 0.2
			this.d6.alpha = 0.2
			this.d7.alpha = 0.2
			this.d8.alpha=0.2
			this.d9.alpha=1
			
		}
		
		//אירוע לחיצה תמונה 23
		this.p23.addEventListener("click", fl_MouseClickHandler_23.bind(this));
		
		function fl_MouseClickHandler_23()
		{
			
			this.pp23.alpha = 1;
			this.btn.alpha=1;	
			
		}
		
		this.btn.addEventListener("click", fl_MouseClickHandler_p233.bind(this));
		
		function fl_MouseClickHandler_p233()
		{
		this.pp23.alpha = 0;
			this.btn.alpha=0.2;
		}
		
		
		
		this.p22.addEventListener("mouseout", ppp23_outTo.bind(this));
		function ppp23_outTo() {
		
			console.log("hit")
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
			this.p11.alpha = 1
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
		}
		
		
		//כפתורים
		
		this.d1.addEventListener("mouseover", dd1_overTo.bind(this));
		function dd1_overTo() {
			console.log("hit")
			
			this.btn.alpha=0.1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 1;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 1;
			this.p10.alpha = 1;
			this.p11.alpha = 1;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 1;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 0.2;
			this.p24.alpha = 1;
			
		
			this.c1.alpha = 0.7;
			this.c2.alpha = 0.7;
			this.c3.alpha = 0.7;
			this.c4.alpha = 0.7;
			this.c5.alpha = 0.7;
			this.c6.alpha = 0.7;
			this.c7.alpha = 0.7;
			this.c8.alpha = 0.7;
			this.c9.alpha = 0.7;
			this.c10.alpha = 0.7;
			this.c11.alpha = 0.7;
			this.c12.alpha = 0.7;
			this.c13.alpha = 0.1;
			this.c14.alpha = 0.7;
			
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.7;
			this.d3.alpha = 0.7;
			this.d4.alpha = 0.7;
			this.d5.alpha = 0.7;
			this.d6.alpha = 0.7;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.7;
			this.d9.alpha = 0.7;
		}
			
		
		this.d1.addEventListener("mouseout", ddd3_outTo.bind(this));
		function ddd3_outTo() {
			if(this.btn.alpha==0.1)
			{
			this.btn.alpha=0.1;
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
			this.p11.alpha = 1
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
		}
		}
		this.d1.addEventListener("click", fl_MouseClickHandler_d1.bind(this));
		
		function fl_MouseClickHandler_d1()
		{	
			
			
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 1;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 1;
			this.p10.alpha = 1;
			this.p11.alpha = 1;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 1;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 0.2;
			this.p24.alpha = 1;
			
		
			this.c1.alpha = 0.7;
			this.c2.alpha = 0.7;
			this.c3.alpha = 0.7;
			this.c4.alpha = 0.7;
			this.c5.alpha = 0.7;
			this.c6.alpha = 0.7;
			this.c7.alpha = 0.7;
			this.c8.alpha = 0.7;
			this.c9.alpha = 0.7;
			this.c10.alpha = 0.7;
			this.c11.alpha = 0.7;
			this.c12.alpha = 0.7;
			this.c13.alpha = 0.1;
			this.c14.alpha = 0.7;
			
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.7;
			this.d3.alpha = 0.7;
			this.d4.alpha = 0.7;
			this.d5.alpha = 0.7;
			this.d6.alpha = 0.7;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.7;
			this.d9.alpha = 0.7;
		
		
		
		
		this.c4.addEventListener("mouseover", cc4_overTo.bind(this));
		function cc4_overTo() {
			console.log("hit")
			
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 1;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 1;
			this.p10.alpha = 1;
			this.p11.alpha = 1;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 0.2;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 0.2;
			this.p24.alpha = 1;
			
		
			this.c1.alpha = 0.7;
			this.c2.alpha = 0.7;
			this.c3.alpha = 0.7;
			this.c4.alpha = 1;
			this.c5.alpha = 0.1;
			this.c6.alpha = 0.1;
			this.c7.alpha = 0.1;
			this.c8.alpha = 0.1;
			this.c9.alpha = 0.1;
			this.c10.alpha = 0.7;
			this.c11.alpha = 0.7;
			this.c12.alpha = 0.7;
			this.c13.alpha = 0.1;
			this.c13.alpha = 0.7;
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.7;
			this.d3.alpha = 0.1;
			this.d4.alpha = 0.7;
			this.d5.alpha = 0.7;
			this.d6.alpha = 0.7;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.7;
			this.d9.alpha = 0.7;
			
			}
			
			this.c4.addEventListener("mouseout", ccc4_outTo.bind(this));
		function ccc4_outTo() {
			if(this.btn.alpha==0.1)
			{
					this.btn.alpha=0.1;
			this.p1.alpha = 1
			this.p2.alpha = 1
			this.p3.alpha = 1
			this.p4.alpha = 1
			this.p5.alpha = 1
			this.p6.alpha = 1
			this.p7.alpha = 1
			this.p8.alpha = 1
			this.p9.alpha = 1
			this.p10.alpha = 1
			this.p11.alpha = 1
			this.p12.alpha = 1
			this.p13.alpha = 1
			this.p14.alpha = 1
			this.p15.alpha = 1
			this.p16.alpha = 1
			this.p17.alpha = 1
			this.p18.alpha = 1
			this.p19.alpha = 1
			this.p20.alpha = 1
			this.p21.alpha = 1
			this.p22.alpha = 1
			this.p23.alpha = 1
			this.p24.alpha = 1
		
		
			//קטגוריות
		
			this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
			}
			}
		
		
		this.c4.addEventListener("click", fl_MouseClickHandler_c4.bind(this));
		
		function fl_MouseClickHandler_c4()
		{
			this.banim2.alpha=1;
			if(this.d1.alpha==1)
			{
				
			
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 1;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 1;
			this.p10.alpha = 1;
			this.p11.alpha = 1;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 0.2;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 0.2;
			this.p24.alpha = 1;
			
		
			this.c1.alpha = 0.7;
			this.c2.alpha = 0.7;
			this.c3.alpha = 0.7;
			this.c4.alpha = 1;
			this.c5.alpha = 0.1;
			this.c6.alpha = 0.1;
			this.c7.alpha = 0.1;
			this.c8.alpha = 0.1;
			this.c9.alpha = 0.1;
			this.c10.alpha = 0.7;
			this.c11.alpha = 0.7;
			this.c12.alpha = 0.7;
			this.c13.alpha = 0.1;
			this.c13.alpha = 0.7;
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.7;
			this.d3.alpha = 0.1;
			this.d4.alpha = 0.7;
			this.d5.alpha = 0.7;
			this.d6.alpha = 0.7;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.7;
			this.d9.alpha = 0.7;
			
			
		
			
		}
		
		this.banim2.addEventListener("click", fl_MouseClickHandler_banim2.bind(this));
		
		function fl_MouseClickHandler_banim2()
		
		{
		this.banim2.alpha=0;
			
			
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 1;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 1;
			this.p10.alpha = 1;
			this.p11.alpha = 1;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 1;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 0.2;
			this.p24.alpha = 1;
			
		
			this.c1.alpha = 0.7;
			this.c2.alpha = 0.7;
			this.c3.alpha = 0.7;
			this.c4.alpha = 0.7;
			this.c5.alpha = 0.7;
			this.c6.alpha = 0.7;
			this.c7.alpha = 0.7;
			this.c8.alpha = 0.7;
			this.c9.alpha = 0.7;
			this.c10.alpha = 0.7;
			this.c11.alpha = 0.7;
			this.c12.alpha = 0.7;
			this.c13.alpha = 0.1;
			this.c14.alpha = 0.7;
			
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.7;
			this.d3.alpha = 0.7;
			this.d4.alpha = 0.7;
			this.d5.alpha = 0.7;
			this.d6.alpha = 0.7;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.7;
			this.d9.alpha = 0.7;
			
		}
		
		this.c1.addEventListener("click", fl_MouseClickHandler_c1.bind(this));
		
		function fl_MouseClickHandler_c1()
		{
			if(this.d1.alpha==1&& this.c4.alpha==1)
			{
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 0.2;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 0.2;
			this.p10.alpha = 1;
			this.p11.alpha = 0.2;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 0.2;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 0.2;
			this.p24.alpha = 0.2;
			
			this.c1.alpha = 1;
			this.c2.alpha = 0.1;
			this.c3.alpha = 0.1;
			this.c4.alpha = 1;
			this.c5.alpha = 0.1;
			this.c6.alpha = 0.1;
			this.c7.alpha = 0.1;
			this.c8.alpha = 0.1;
			this.c9.alpha = 0.1;
			this.c10.alpha = 0.1;
			this.c11.alpha = 0.1;
			this.c12.alpha = 0.6;
			this.c13.alpha = 0.1;
			this.c14.alpha = 0.1;
			
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.1;
			this.d3.alpha = 0.1;
			this.d4.alpha = 0.1;
			this.d5.alpha = 0.1;
			this.d6.alpha = 0.1;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.6;
			this.d9.alpha = 0.6;
			
		}
		
		}
		
		
		
			}
		}
		
		
		
		
		this.c1.addEventListener("click", fl_MouseClickHandler_cc1.bind(this));
		
		function fl_MouseClickHandler_cc1()
		{
			
			if(this.d1.alpha==0 && this.c4.alpha==0)
			{
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 0.2;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 0.2;
			this.p10.alpha = 1;
			this.p11.alpha = 0.2;
			this.p12.alpha = 1;
			this.p13.alpha = 1;
			this.p14.alpha = 0.2;
			this.p15.alpha = 0.2;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 1;
			this.p20.alpha = 1;
			this.p21.alpha = 0.2;
			this.p22.alpha = 0.2;
			this.p22.alpha = 1;
			this.p23.alpha = 1;
			this.p24.alpha = 0.2;
			
			this.c1.alpha = 1;
			this.c2.alpha = 0.6;
			this.c3.alpha = 0.6;
			this.c4.alpha = 0.6;
			this.c5.alpha = 0.6;
			this.c6.alpha = 0.1;
			this.c7.alpha = 0.1;
			this.c8.alpha = 0.1;
			this.c9.alpha = 0.1;
			this.c10.alpha = 0.1;
			this.c11.alpha = 0.1;
			this.c12.alpha = 0.6;
			this.c13.alpha = 0.6;
			this.c14.alpha = 0.1;
			
			
		
			this.d1.alpha = 0.6;
			this.d2.alpha = 0.1;
			this.d3.alpha = 0.6;
			this.d4.alpha = 0.1;
			this.d5.alpha = 0.1;
			this.d6.alpha = 0.1;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.6;
			this.d9.alpha = 0.6;
			
		}
		
		}
		
		this.d5.addEventListener("click", fl_MouseClickHandler_d5.bind(this));
		
		function fl_MouseClickHandler_d5()
		{
			this.btn.alpha=1;
			this.p1.alpha = 0.2;
			this.p2.alpha = 0.2;
			this.p3.alpha = 0.2;
			this.p4.alpha = 0.2;
			this.p5.alpha = 1;
			this.p6.alpha = 0.2;
			this.p7.alpha = 0.2;
			this.p8.alpha = 0.2;
			this.p9.alpha = 0.2;
			this.p10.alpha = 0.2;
			this.p11.alpha = 1;
			this.p12.alpha = 0.2;
			this.p13.alpha = 0.2;
			this.p14.alpha = 0.2;
			this.p15.alpha = 0.2;
			this.p16.alpha = 0.2;
			this.p17.alpha = 0.2;
			this.p18.alpha = 0.2;
			this.p19.alpha = 0.2;
			this.p20.alpha = 0.2;
			this.p21.alpha = 0.2;
			this.p22.alpha = 0.2;
			this.p22.alpha = 0.2;
			this.p23.alpha = 0.2;
			this.p24.alpha = 1;
			
			this.c1.alpha = 0.6;
			this.c2.alpha = 0.6;
			this.c3.alpha = 0.6;
			this.c4.alpha = 0.6;
			this.c5.alpha = 0.1;
			this.c6.alpha = 0.1;
			this.c7.alpha = 0.6;
			this.c8.alpha = 0.1;
			this.c9.alpha = 0.1;
			this.c10.alpha = 0.1;
			this.c11.alpha = 0.6;
			this.c12.alpha = 0.6;
			this.c13.alpha = 0.1;
			this.c13.alpha = 0.1;
			
		
			this.d1.alpha = 1;
			this.d2.alpha = 0.6;
			this.d3.alpha = 0.1;
			this.d4.alpha = 0.1;
			this.d5.alpha = 1;
			this.d6.alpha = 0.6;
			this.d7.alpha = 0.1;
			this.d8.alpha = 0.6;
			this.d9.alpha = 0.6;
			
		}
		
		
		
		//כפתור יציאה
		
		this.btn.addEventListener("click", fl_MouseClickHandler_btn.bind(this));
		
		function fl_MouseClickHandler_btn()
		{
			
			this.btn.alpha=0.2;
			this.p1.alpha = 1;
			this.p2.alpha = 1;
			this.p3.alpha = 1;
			this.p4.alpha = 1;
			this.p5.alpha = 1;
			this.p6.alpha = 1;
			this.p7.alpha = 1;
			this.p8.alpha = 1;
			this.p9.alpha = 1;
			this.p10.alpha = 1;
			this.p11.alpha = 1;
			this.p12.alpha = 1;
			this.p13.alpha = 1;
			this.p14.alpha = 1;
			this.p15.alpha = 1;
			this.p16.alpha = 1;
			this.p17.alpha = 1;
			this.p18.alpha = 1;
			this.p19.alpha = 1;
			this.p20.alpha = 1;
			this.p21.alpha = 1;
			this.p22.alpha = 1;
			this.p23.alpha = 1;
			this.p24.alpha = 1;
			
				this.c1.alpha = 1
			this.c2.alpha = 1
			this.c3.alpha=1
			this.c4.alpha=1
			this.c5.alpha = 1
			this.c6.alpha = 1
			this.c7.alpha = 1
			this.c8.alpha=1
			this.c9.alpha = 1
			this.c10.alpha = 1
			this.c11.alpha = 1
			this.c12.alpha =1
			this.c13.alpha = 1
			this.c14.alpha = 1
		
			this.d1.alpha = 1
			this.d2.alpha = 1
			this.d3.alpha = 1
			this.d4.alpha=1
			this.d5.alpha = 1
			this.d6.alpha = 1
			this.d7.alpha = 1
			this.d8.alpha=1
			this.d9.alpha=1
			
			
		}
		
		//פונקציות לכפתורים לא פעילים
		
		//תמונות
		
		//1
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p1.addEventListener("mouseover", MouseOverButtonp1.bind(this));
		
		function MouseOverButtonp1()
		{
			this.p1.cursor = "no-drop";
			
		}
		
		//4
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p4.addEventListener("mouseover", MouseOverButtonp4.bind(this));
		
		function MouseOverButtonp4()
		{
			this.p4.cursor = "no-drop";
			
		}
		
		//5
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p5.addEventListener("mouseover", MouseOverButtonp5.bind(this));
		
		function MouseOverButtonp5()
		{
			this.p5.cursor = "no-drop";
			
		}
		
		//6
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p6.addEventListener("mouseover", MouseOverButtonp6.bind(this));
		
		function MouseOverButtonp6()
		{
			this.p6.cursor = "no-drop";
			
		}
		//7
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p7.addEventListener("mouseover", MouseOverButtonp7.bind(this));
		
		function MouseOverButtonp7()
		{
			this.p7.cursor = "no-drop";
			
		}
		//8
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p8.addEventListener("mouseover", MouseOverButtonp8.bind(this));
		
		function MouseOverButtonp8()
		{
			this.p8.cursor = "no-drop";
			
		}
		//9
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p9.addEventListener("mouseover", MouseOverButtonp9.bind(this));
		
		function MouseOverButtonp9()
		{
			this.p9.cursor = "no-drop";
			
		}
		//10
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p10.addEventListener("mouseover", MouseOverButtonp10.bind(this));
		
		function MouseOverButtonp10()
		{
			this.p10.cursor = "no-drop";
			
		}
		//12
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p12.addEventListener("mouseover", MouseOverButtonp12.bind(this));
		
		function MouseOverButtonp12()
		{
			this.p12.cursor = "no-drop";
			
		}
		//13
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p13.addEventListener("mouseover", MouseOverButtonp13.bind(this));
		
		function MouseOverButtonp13()
		{
			this.p13.cursor = "no-drop";
			
		}
		//14
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p14.addEventListener("mouseover", MouseOverButtonp14.bind(this));
		
		function MouseOverButtonp14()
		{
			this.p14.cursor = "no-drop";
			
		}
		//15
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p15.addEventListener("mouseover", MouseOverButtonp15.bind(this));
		
		function MouseOverButtonp15()
		{
			this.p15.cursor = "no-drop";
			
		}
		//16
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p16.addEventListener("mouseover", MouseOverButtonp16.bind(this));
		
		function MouseOverButtonp16()
		{
			this.p16.cursor = "no-drop";
			
		}
		//17
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p17.addEventListener("mouseover", MouseOverButtonp17.bind(this));
		
		function MouseOverButtonp17()
		{
			this.p17.cursor = "no-drop";
			
		}
		//18
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p18.addEventListener("mouseover", MouseOverButtonp18.bind(this));
		
		function MouseOverButtonp18()
		{
			this.p18.cursor = "no-drop";
			
		}
		//19
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p19.addEventListener("mouseover", MouseOverButtonp19.bind(this));
		
		function MouseOverButtonp19()
		{
			this.p19.cursor = "no-drop";
			
		}
		//20
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p20.addEventListener("mouseover", MouseOverButtonp20.bind(this));
		
		function MouseOverButtonp20()
		{
			this.p20.cursor = "no-drop";
			
		}
		//21
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p21.addEventListener("mouseover", MouseOverButtonp21.bind(this));
		
		function MouseOverButtonp21()
		{
			this.p21.cursor = "no-drop";
			
		}
		//24
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.p24.addEventListener("mouseover", MouseOverButtonp24.bind(this));
		
		function MouseOverButtonp24()
		{
			this.p24.cursor = "no-drop";
			
		}
		
		
		//קטגוריות
		
		//גילאים
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c2.addEventListener("mouseover", MouseOverButtonc2.bind(this));
		
		function MouseOverButtonc2()
		{
			this.c2.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c3.addEventListener("mouseover", MouseOverButtonc3.bind(this));
		
		function MouseOverButtonc3()
		{
			this.c3.cursor = "no-drop";
			
		}
		
		//מגדר
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c5.addEventListener("mouseover", MouseOverButtonc5.bind(this));
		
		function MouseOverButtonc5()
		{
			this.c5.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c6.addEventListener("mouseover", MouseOverButtonc6.bind(this));
		
		function MouseOverButtonc6()
		{
			this.c6.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c7.addEventListener("mouseover", MouseOverButtonc7.bind(this));
		
		function MouseOverButtonc7()
		{
			this.c7.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c8.addEventListener("mouseover", MouseOverButtonc8.bind(this));
		
		function MouseOverButtonc8()
		{
			this.c8.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c9.addEventListener("mouseover", MouseOverButtonc9.bind(this));
		
		function MouseOverButtonc9()
		{
			this.c9.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c10.addEventListener("mouseover", MouseOverButtonc10.bind(this));
		
		function MouseOverButtonc10()
		{
			this.c10.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c11.addEventListener("mouseover", MouseOverButtonc11.bind(this));
		
		function MouseOverButtonc11()
		{
			this.c11.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c12.addEventListener("mouseover", MouseOverButtonc12.bind(this));
		
		function MouseOverButtonc12()
		{
			this.c12.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c13.addEventListener("mouseover", MouseOverButtonc13.bind(this));
		
		function MouseOverButtonc13()
		{
			this.c13.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.c14.addEventListener("mouseover", MouseOverButtonc14.bind(this));
		
		function MouseOverButtonc14()
		{
			this.c14.cursor = "no-drop";
			
		}
		//צבעים
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d2.addEventListener("mouseover", MouseOverButtond2.bind(this));
		
		function MouseOverButtond2()
		{
			this.d2.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d3.addEventListener("mouseover", MouseOverButtond3.bind(this));
		
		function MouseOverButtond3()
		{
			this.d3.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d4.addEventListener("mouseover", MouseOverButtond4.bind(this));
		
		function MouseOverButtond4()
		{
			this.d4.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d6.addEventListener("mouseover", MouseOverButtond6.bind(this));
		
		function MouseOverButtond6()
		{
			this.d6.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d7.addEventListener("mouseover", MouseOverButtond7.bind(this));
		
		function MouseOverButtond7()
		{
			this.d7.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d8.addEventListener("mouseover", MouseOverButtond8.bind(this));
		
		function MouseOverButtond8()
		{
			this.d8.cursor = "no-drop";
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.d9.addEventListener("mouseover", MouseOverButtond9.bind(this));
		
		function MouseOverButtond9()
		{
			this.d9.cursor = "no-drop";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(480,400);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// תמונה11
	this.tmuna12 = new lib.תמונה();
	this.tmuna12.parent = this;
	this.tmuna12.setTransform(312.8,370.5,1.188,1.188,0,0,0,250,120.1);
	new cjs.ButtonHelper(this.tmuna12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tmuna12).wait(1));

	// תמונה 3
	this.pp3 = new lib.pp3();
	this.pp3.parent = this;
	this.pp3.setTransform(338.4,313.8,1,1,0,0,0,322.4,154.8);
	new cjs.ButtonHelper(this.pp3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pp3).wait(1));

	// תמונה 2
	this.pp2 = new lib.pp2();
	this.pp2.parent = this;
	this.pp2.setTransform(362.5,307.3,1,1,0,0,0,307.8,147.8);
	new cjs.ButtonHelper(this.pp2, 0, 1, 1);

	this.text = new cjs.Text("", "48px 'AgencyFB-Bold'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 58;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(950.5,802.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.pp2}]}).wait(1));

	// תמונה 22
	this.pp22 = new lib.pp22();
	this.pp22.parent = this;
	this.pp22.setTransform(349.6,476.4,1,1,0,0,0,319.6,153.4);
	new cjs.ButtonHelper(this.pp22, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pp22).wait(1));

	// תמונה 23
	this.pp23 = new lib.pp23();
	this.pp23.parent = this;
	this.pp23.setTransform(364.2,494.7,1,1,0,0,0,304.9,146.3);
	new cjs.ButtonHelper(this.pp23, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pp23).wait(1));

	// רקע
	this.banim2 = new lib.banim2();
	this.banim2.parent = this;
	this.banim2.setTransform(900,198.9,1,1,0,0,0,58.4,17.9);
	new cjs.ButtonHelper(this.banim2, 0, 1, 1);

	this.btn = new lib.btn();
	this.btn.parent = this;
	this.btn.setTransform(828.7,628.4,1,1,0,0,0,102.7,19.4);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.p23 = new lib.p23();
	this.p23.parent = this;
	this.p23.setTransform(254,585.2,1,1,0,0,0,88,42.2);
	new cjs.ButtonHelper(this.p23, 0, 1, 1);

	this.p3 = new lib.p3();
	this.p3.parent = this;
	this.p3.setTransform(247.7,200.9,1,1,0,0,0,85.7,41.9);
	new cjs.ButtonHelper(this.p3, 0, 1, 1);

	this.p2 = new lib.p2();
	this.p2.parent = this;
	this.p2.setTransform(420.3,200.9,1,1,0,0,0,87.3,41.9);
	new cjs.ButtonHelper(this.p2, 0, 1, 1);

	this.d9 = new lib.d9();
	this.d9.parent = this;
	this.d9.setTransform(747.7,422,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d9, 0, 1, 1);

	this.d8 = new lib.d8();
	this.d8.parent = this;
	this.d8.setTransform(747.7,395.3,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d8, 0, 1, 1);

	this.d7 = new lib.d7();
	this.d7.parent = this;
	this.d7.setTransform(747.7,366.1,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d7, 0, 1, 1);

	this.d6 = new lib.d6();
	this.d6.parent = this;
	this.d6.setTransform(747.7,338.2,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d6, 0, 1, 1);

	this.d5 = new lib.d5();
	this.d5.parent = this;
	this.d5.setTransform(747.7,310.3,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d5, 0, 1, 1);

	this.d4 = new lib.d4();
	this.d4.parent = this;
	this.d4.setTransform(747.7,282.3,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d4, 0, 1, 1);

	this.d3 = new lib.d3();
	this.d3.parent = this;
	this.d3.setTransform(747.7,254.3,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d3, 0, 1, 1);

	this.d2 = new lib.d2();
	this.d2.parent = this;
	this.d2.setTransform(747.7,226.7,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d2, 0, 1, 1);

	this.d1 = new lib.d1();
	this.d1.parent = this;
	this.d1.setTransform(747.7,198.7,1,1,0,0,0,57.8,17.7);
	new cjs.ButtonHelper(this.d1, 0, 1, 1);

	this.c14 = new lib.c14();
	this.c14.parent = this;
	this.c14.setTransform(900.7,553.4,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c14, 0, 1, 1);

	this.c13 = new lib.c13();
	this.c13.parent = this;
	this.c13.setTransform(901,524.2,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c13, 0, 1, 1);

	this.c12 = new lib.c12();
	this.c12.parent = this;
	this.c12.setTransform(900.7,494.8,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c12, 0, 1, 1);

	this.c11 = new lib.c11();
	this.c11.parent = this;
	this.c11.setTransform(900.7,466.8,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c11, 0, 1, 1);

	this.c10 = new lib.c10();
	this.c10.parent = this;
	this.c10.setTransform(900.7,437.6,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c10, 0, 1, 1);

	this.c9 = new lib.c9();
	this.c9.parent = this;
	this.c9.setTransform(901,409.1,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c9, 0, 1, 1);

	this.c8 = new lib.c8();
	this.c8.parent = this;
	this.c8.setTransform(901,380.4,1,1,0,0,0,59.8,18.4);
	new cjs.ButtonHelper(this.c8, 0, 1, 1);

	this.c7 = new lib.c7();
	this.c7.parent = this;
	this.c7.setTransform(900,280.9,1,1,0,0,0,58.4,17.9);
	new cjs.ButtonHelper(this.c7, 0, 1, 1);

	this.c6 = new lib.c6();
	this.c6.parent = this;
	this.c6.setTransform(900,255.9,1,1,0,0,0,58.4,17.9);
	new cjs.ButtonHelper(this.c6, 0, 1, 1);

	this.c5 = new lib.c5();
	this.c5.parent = this;
	this.c5.setTransform(900,227.2,1,1,0,0,0,58.4,17.9);
	new cjs.ButtonHelper(this.c5, 0, 1, 1);

	this.c4 = new lib.c4();
	this.c4.parent = this;
	this.c4.setTransform(900,198.9,1,1,0,0,0,58.4,17.9);
	new cjs.ButtonHelper(this.c4, 0, 1, 1);

	this.c3 = new lib.c3();
	this.c3.parent = this;
	this.c3.setTransform(746.4,558.6,1,1,0,0,0,59.5,18.2);
	new cjs.ButtonHelper(this.c3, 0, 1, 1);

	this.c2 = new lib.c2();
	this.c2.parent = this;
	this.c2.setTransform(746,531,1,1,0,0,0,59.5,18.2);
	new cjs.ButtonHelper(this.c2, 0, 1, 1);

	this.c1 = new lib.c1();
	this.c1.parent = this;
	this.c1.setTransform(746,504.2,1,1,0,0,0,59.5,18.2);
	new cjs.ButtonHelper(this.c1, 0, 1, 1);

	this.p11 = new lib.p11();
	this.p11.parent = this;
	this.p11.setTransform(266.7,356.8,1,1,0,0,0,84.9,40.8);
	new cjs.ButtonHelper(this.p11, 0, 1, 1);

	this.instance = new lib.Bitmap97();
	this.instance.parent = this;
	this.instance.setTransform(624,144,0.687,0.687);

	this.instance_1 = new lib.Bitmap96();
	this.instance_1.parent = this;
	this.instance_1.setTransform(768,313,0.69,0.69);

	this.instance_2 = new lib.Bitmap95();
	this.instance_2.parent = this;
	this.instance_2.setTransform(777,146,0.659,0.659);

	this.instance_3 = new lib.Bitmap94();
	this.instance_3.parent = this;
	this.instance_3.setTransform(623,451,0.651,0.651);

	this.instance_4 = new lib.Bitmap62();
	this.instance_4.parent = this;
	this.instance_4.setTransform(116,63,0.542,0.542);

	this.instance_5 = new lib.Bitmap61();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74,5);

	this.p24 = new lib.p24();
	this.p24.parent = this;
	this.p24.setTransform(97,589.8,0.599,0.599,0,0,0,137,66.1);

	this.p21 = new lib.p21();
	this.p21.parent = this;
	this.p21.setTransform(587.4,589.5,0.599,0.599,0,0,0,138.5,66.6);

	this.p20 = new lib.p20();
	this.p20.parent = this;
	this.p20.setTransform(97.3,510.4,0.599,0.599,0,0,0,136.5,65.6);

	this.p19 = new lib.p19();
	this.p19.parent = this;
	this.p19.setTransform(262.2,510.3,0.599,0.599,0,0,0,136.5,64.6);

	this.p18 = new lib.p18();
	this.p18.parent = this;
	this.p18.setTransform(424.3,511.9,0.599,0.599,0,0,0,134,65.1);

	this.p17 = new lib.p17();
	this.p17.parent = this;
	this.p17.setTransform(587.4,511.3,0.599,0.599,0,0,0,138.5,66.1);

	this.p16 = new lib.p16();
	this.p16.parent = this;
	this.p16.setTransform(98.4,430.1,0.599,0.599,0,0,0,138,66.6);

	this.p15 = new lib.p15();
	this.p15.parent = this;
	this.p15.setTransform(262.7,431.3,0.599,0.599,0,0,0,135,64.6);

	this.p14 = new lib.p14();
	this.p14.parent = this;
	this.p14.setTransform(425,431.9,0.599,0.599,0,0,0,134,65.6);

	this.p13 = new lib.p13();
	this.p13.parent = this;
	this.p13.setTransform(587.8,432.2,0.599,0.599,0,0,0,136.5,66.1);

	this.p12 = new lib.p12();
	this.p12.parent = this;
	this.p12.setTransform(98.4,353.7,0.599,0.599,0,0,0,138,67.1);

	this.p10 = new lib.p10();
	this.p10.parent = this;
	this.p10.setTransform(428.6,354.9,0.599,0.599,0,0,0,133.5,65.1);

	this.p9 = new lib.p9();
	this.p9.parent = this;
	this.p9.setTransform(588.9,354.3,0.599,0.599,0,0,0,134,64.1);

	this.p8 = new lib.p8();
	this.p8.parent = this;
	this.p8.setTransform(98.3,274.3,0.599,0.599,0,0,0,137.5,66.6);

	this.p7 = new lib.p7();
	this.p7.parent = this;
	this.p7.setTransform(261.3,275.2,0.599,0.599,0,0,0,134.5,65.1);

	this.p6 = new lib.p6();
	this.p6.parent = this;
	this.p6.setTransform(423.1,275.2,0.599,0.599,0,0,0,135.5,65.1);

	this.p5 = new lib.p5();
	this.p5.parent = this;
	this.p5.setTransform(586.7,277.1,0.599,0.599,0,0,0,137.5,66.6);

	this.p4 = new lib.p4();
	this.p4.parent = this;
	this.p4.setTransform(97.3,198.8,0.599,0.599,0,0,0,136.1,65.5);
	new cjs.ButtonHelper(this.p4, 0, 1, 1);

	this.p1 = new lib.p1();
	this.p1.parent = this;
	this.p1.setTransform(588.2,198.7,0.599,0.599,0,0,0,135.1,66.1);
	new cjs.ButtonHelper(this.p1, 0, 1, 1);

	this.p22 = new lib.p22();
	this.p22.parent = this;
	this.p22.setTransform(432.6,585.1,1.076,1.055,0,0,0,84.2,40.5);
	new cjs.ButtonHelper(this.p22, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p22},{t:this.p1},{t:this.p4},{t:this.p5},{t:this.p6},{t:this.p7},{t:this.p8},{t:this.p9},{t:this.p10},{t:this.p12},{t:this.p13},{t:this.p14},{t:this.p15},{t:this.p16},{t:this.p17},{t:this.p18},{t:this.p19},{t:this.p20},{t:this.p21},{t:this.p24},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.p11},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.c13},{t:this.c14},{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5},{t:this.d6},{t:this.d7},{t:this.d8},{t:this.d9},{t:this.p2},{t:this.p3},{t:this.p23},{t:this.btn},{t:this.banim2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479,399,962.3,861.5);
// library properties:
lib.properties = {
	width: 960,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/interactive_atlas_.png", id:"interactive_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;