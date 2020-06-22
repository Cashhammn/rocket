let y = -295;
let x = 0;
let xr = -25;
let yr = 240;
let xrr = 53;
let yrr = 97;
let xq = 125;
let yq = 125;
let xw = 125;
let yw = 125;
let xe = 125;
let ye = 125;
let xR = 200;
let yR = 50;
let x1 = -390;
let y1 = -190;
let easing = 0.02;
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let X = 1007;
let Y = 565;
let i = x1 / y1;
let xr2 = 125 - 13 - 125;
let yr2 = 79 - 125;
let angel = 0.0;
let speed1 = 0.5;
let xrrr = xrr + 58;

let xm1 = 400;
let xm2 = 600;
let xm3 = 1050;
let xm4 = 900;
let xm5 = 450;
let xm6 = 700;
let xm7 = 800;
let xm8 = 420;
let xm9 = 1200;
let xm10 = 270;
let xm11 = 400;
let xm12 = 1100;
let xm13 = 1270;
let xm14 = 1400;
let xm15 = 1250;
let xm16 = 1390;
let xm17 = 1280;
let xm18 = 1000;
let xm19 = 950;
let xm20 = 1320;

let ym1 = 50;
let ym2 = 100;
let ym3 = 59;
let ym4 = 150;
let ym5 = 140;
let ym6 = 20;
let ym7 = 180;
let ym8 = 180;
let ym9 = 75;
let ym10 = 90;
let ym11 = 122;
let ym12 = 70;
let ym13 = 120;
let ym14 = 180;
let ym15 = 0;
let ym16 = 220;
let ym17 = 67;
let ym18 = 20;
let ym19 = 65;
let ym20 = 31;

function preload() {
  imgB = loadImage("大作业.jpg"); //背景
  imgS = loadImage("small start.png");
  imgBig = loadImage("big start.png");
  imgSS = loadImage("123.jpg");
  imgR = loadImage("ROCKET.png");
  imgQ = loadImage("Q.gif");
  imgG = loadImage("over.png");
  imgW = loadImage("W.gif");
  imgE = loadImage("E.gif");
  imgR1 = loadImage("R1.png");
  imgM1 = loadImage("meteorite.png");
  imgV = loadImage("victory.png");
  imgRR = loadImage("R.gif");
}
function setup() {
  createCanvas(250, 250);
}

function draw() {
  let targetX = mouseX - 19500;
  let targetY = mouseY - 9500;
  image(imgB, targetX * easing, targetY * easing, X, Y);
  image(imgS, 20, 100, 200, 50);
  if (mouseX > 20 && mouseX < 220 && mouseY > 100 && mouseY < 150) {
    image(imgBig, 20, 100, 200, 50);
  }
  if (mouseIsPressed && x1 < -10) {
    flag1 = true;
  }

  if (flag1 == true) {
    x1 = x1 + 3.2;
    y1 = y1 - 0.7;

    image(imgB, x1, y1, X, Y);
    if (x1 > -120) {
      x1 = x1 - 2;
      y1 = y1 + 0.5;
      xr = xr + 1.2;
      yr = yr - 0.9;
      image(imgB, x1, y1, X, Y);
      image(imgR, xr, yr, 26, 116);
    }
  }
  if (y1 < -269) {
    flag1 = false;

    yr = yr - 0.3;
    image(imgB, x1, y1, X, Y);
    image(imgR, xr, yr, 26, 116);
  }
  if (yr < 125) {
    y1 = y1 + 0.08;
    yr = yr - 0.1;
    image(imgB, x1, y1, X, Y);
    image(imgR, xr, yr, 26, 116);
  }
  if (yr < 80) {
    y1 = y1 + 0.08;
    yr = 79;
    image(imgB, x1, y1, X, Y);
    image(imgR, xr, yr, 26, 116);
  }
  if (y1 > -265 && x1 > -20 && y1 < -40) {
    image(imgQ, xq, yq, 20, 60);

    if (keyCode == 81) {
      flag2 = true;
      if (flag2 == true) {
        xq = 500;
        yq = 500;
        y1 = y1 + 0.2;
        image(imgQ, xq, yq, 20, 60);
        image(imgB, x1, y1, X, Y);
        image(imgR, xr, yr, 26, 116);
      }
    }
    if (y1 > -246 && y1 < -40 && x1 > -20) {
      image(imgB, x1, y1, X, Y);
      image(imgR, xr, yr, 26, 116);
      image(imgW, xw, yw, 20, 60);
      if (keyCode == 87) {
        flag3 = true;
        if (flag3 == true) {
          xw = 500;
          yw = 500;
          y1 = y1 + 0.35;
          image(imgW, xw, yw, 20, 60);
          image(imgB, x1, y1, X, Y);
          image(imgR, xr, yr, 26, 116);
        }
      }
    }
    if (y1 > -220 && y1 < -40 && x1 > -20) {
      image(imgB, x1, y1, X, Y);
      image(imgR, xr, yr, 26, 116);
      image(imgE, xe, ye, 20, 60);
      if (keyCode == 69) {
        flag4 = true;
        if (flag3 == true) {
          xe = 500;
          ye = 500;
          y1 = y1 + 0.5;
          image(imgE, xe, ye, 20, 60);
          image(imgB, x1, y1, X, Y);
          image(imgR, xr, yr, 26, 116);
        }
      }
    }
  }
  if (y1 > -100 && y1 < -49) {
    x1 = x1 - 0.1;
    y1 = y1 + 0.1;
    image(imgB, x1, y1, X, Y);
    xr = 5000;
    yr = 5000;
    if (angel < 90) {
      angel += 1;
      translate(125, 125);
      rotate(radians(angel));
      image(imgR, xr2 - 15, yr2 + 1, 26, 116);
    }
  }
  if (angel >= 90) {
    push();
    translate(125, 125);
    rotate(aradians(angel));
    image(imgR, xr2 - 15, yr2 + 1, 26, 116);
    pop();
  }

  if (y1 >= -49) {
    x1 = x1 - 0.6;

    image(imgB, x1, y1, X, Y);
    image(imgR1, xrr, yrr, 116, 26);
    if (x1 < -50 && xrr > 0) {
      xrr = xrr - 0.4;

      image(imgR1, xrr, yrr, 116, 26);
    }
  }
  if (x1 <= -750) {
    xrr = xrr + 0.8;
    x1 = -750;
    image(imgB, x1, y1, X, Y);
    image(imgR1, xrr, yrr, 116, 26);
  }
  if (x1 <= -100 && y1 > -50) {
    if (keyIsPressed) {
      if (keyCode == 38) {
        yrr = yrr - 1.3;
        image(imgR1, xrr, yrr, 116, 26);
      }
      if (keyCode == 40) yrr = yrr + 1.3;
      image(imgR1, xrr, yrr, 116, 26);
    }
  }
  if (x1 <= -100 && y1 > -50) {
    xm1 = xm1 - 0.8;
    xm2 = xm2 - 0.7;
    xm3 = xm3 - 0.6;
    xm4 = xm4 - 1.0;
    xm5 = xm5 - 0.9;
    xm6 = xm6 - 0.7;
    xm7 = xm7 - 0.7;
    xm8 = xm8 - 0.6;
    xm9 = xm9 - 1.2;
    xm10 = xm10 - 0.65;
    xm11 = xm11 - 1.1;
    xm12 = xm12 - 1.2;
    xm13 = xm13 - 1;
    xm14 = xm14 - 1.3;
    xm15 = xm15 - 1.25;
    xm16 = xm16 - 1.3;
    xm17 = xm17 - 1;
    xm18 = xm18 - 0.95;
    xm19 = xm19 - 1;
    xm20 = xm20 - 1.1;
    ym1 += speed1;
    ym3 = ym3 - 0.4;
    ym4 = ym4 + 0.07;
    ym8 = ym8 - 0.1;
    ym10 = ym10 + 0.2;
    ym15 = ym15 + 0.15;
    ym16 = ym16 - 0.2;
    ym18 = ym18 + 0.12;

    if (ym1 < 35 || ym1 > 150) {
      speed1 = -speed1;
    }
    image(imgM1, xm1, ym1, 35, 35);
    image(imgM1, xm2, ym2, 28, 28);
    image(imgM1, xm3, ym3, 40, 40);
    image(imgM1, xm4, ym4, 25, 25);
    image(imgM1, xm5, ym5, 25, 25);
    image(imgM1, xm6, ym6, 15, 15);
    image(imgM1, xm7, ym7, 45, 45);
    image(imgM1, xm8, ym8, 30, 30);
    image(imgM1, xm9, ym9, 32, 32);
    image(imgM1, xm10, ym10, 17, 17);
    image(imgM1, xm11, ym11, 22, 22);
    image(imgM1, xm12, ym12, 42, 42);
    image(imgM1, xm13, ym13, 51, 51);
    image(imgM1, xm14, ym14, 28, 28);
    image(imgM1, xm15, ym15, 28, 28);
    image(imgM1, xm16, ym16, 33, 33);
    image(imgM1, xm17, ym17, 42, 42);
    image(imgM1, xm18, ym18, 19, 19);
    image(imgM1, xm19, ym19, 25, 25);
    image(imgM1, xm20, ym20, 29, 29);
  }
  if (x1 <= -100 && y1 > -50) {
    if (xrr + 116 >= 150 && yrr <= 100) {
      image(imgRR, xR, yR, 40, 120);
      if (keyCode == 82) {
        flag5 = true;
      }
      if (flag5 == true) {
        xR = 5000;
        yR = 5000;
        noLoop();
        image(imgRR, xR, yR, 20, 60);
        image(imgV, 0, 0, 250, 250);
      }
    }
  }

  if (x1 > -10 && y1 > -247 && keyCode != 81 && y1 < -244) {
    noLoop();
    image(imgG, 0, 0, 250, 250);
  }
  if (x1 > -10 && y1 > -220 && keyCode != 87 && y1 < -218) {
    noLoop();
    image(imgG, 0, 0, 250, 250);
  }
  if (x1 > -10 && y1 > -195 && keyCode != 69 && y1 < -193) {
    noLoop();
    image(imgG, 0, 0, 250, 250);
  }
  if (yrr < -10 || yrr > 245) {
    noLoop();
    image(imgG, 0, 0, 250, 250);
  }
  if (x1 <= -100 && y1 > -50) {
    if (
      xrrr - xm1 < 20 &&
      xrrr - xm1 > -20 &&
      yrr - ym1 < 20 &&
      yrr - ym1 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm2 < 20 &&
      xrrr - xm2 > -20 &&
      yrr - ym2 < 20 &&
      yrr - ym2 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm3 < 20 &&
      xrrr - xm3 > -20 &&
      yrr - ym3 < 20 &&
      yrr - ym3 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm4 < 20 &&
      xrrr - xm4 > -20 &&
      yrr - ym4 < 20 &&
      yrr - ym4 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm5 < 20 &&
      xrrr - xm5 > -20 &&
      yrr - ym5 < 20 &&
      yrr - ym5 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm6 < 20 &&
      xrrr - xm6 > -20 &&
      yrr - ym6 < 20 &&
      yrr - ym6 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm7 < 20 &&
      xrrr - xm7 > -20 &&
      yrr - ym7 < 20 &&
      yrr - ym7 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm8 < 20 &&
      xrrr - xm8 > -20 &&
      yrr - ym8 < 20 &&
      yrr - ym8 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm9 < 20 &&
      xrrr - xm9 > -20 &&
      yrr - ym9 < 20 &&
      yrr - ym9 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm10 < 20 &&
      xrrr - xm10 > -20 &&
      yrr - ym10 < 20 &&
      yrr - ym10 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm11 < 20 &&
      xrrr - xm11 > -20 &&
      yrr - ym11 < 20 &&
      yrr - ym11 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm12 < 20 &&
      xrrr - xm12 > -20 &&
      yrr - ym12 < 20 &&
      yrr - ym12 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm13 < 20 &&
      xrrr - xm13 > -20 &&
      yrr - ym13 < 20 &&
      yrr - ym13 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm14 < 20 &&
      xrrr - xm14 > -20 &&
      yrr - ym14 < 20 &&
      yrr - ym14 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm15 < 20 &&
      xrrr - xm15 > -20 &&
      yrr - ym15 < 20 &&
      yrr - ym15 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm16 < 20 &&
      xrrr - xm16 > -20 &&
      yrr - ym16 < 20 &&
      yrr - ym16 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm17 < 20 &&
      xrrr - xm17 > -20 &&
      yrr - ym17 < 20 &&
      yrr - ym17 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm18 < 20 &&
      xrrr - xm18 > -20 &&
      yrr - ym18 < 20 &&
      yrr - ym18 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm19 < 20 &&
      xrrr - xm19 > -20 &&
      yrr - ym19 < 20 &&
      yrr - ym19 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
    if (
      xrrr - xm20 < 20 &&
      xrrr - xm20 > -20 &&
      yrr - ym20 < 20 &&
      yrr - ym20 > -20
    ) {
      noLoop();
      image(imgG, 0, 0, 250, 250);
    }
  }
  if (xrr > 220) {
    noLoop();
    image(imgG, 0, 0, 250, 250);
  }
}
