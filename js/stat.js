'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 70;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -110;
var BAR_GAP = 50;
var SHADOW_GAP = 10;
var DRAW_STEP = 30;

var createCloud = function (ctx, startX, startY, cloudColor) {
  ctx.fillStyle = cloudColor;

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + DRAW_STEP, startY);
  ctx.lineTo(startX + DRAW_STEP, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 2, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 2, startY);
  ctx.lineTo(startX + DRAW_STEP * 3, startY);
  ctx.lineTo(startX + DRAW_STEP * 3, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 4, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 4, startY);
  ctx.lineTo(startX + DRAW_STEP * 5, startY);
  ctx.lineTo(startX + DRAW_STEP * 5, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 6, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 6, startY);
  ctx.lineTo(startX + DRAW_STEP * 7, startY);
  ctx.lineTo(startX + DRAW_STEP * 7, startY - DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP * 8, startY - DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP * 8, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 9, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 9, startY - DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP * 10, startY - DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP * 10, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 13, startY - DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 13, startY);
  ctx.lineTo(startX + DRAW_STEP * 14, startY);
  ctx.lineTo(startX + DRAW_STEP * 14, startY + DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 13, startY + DRAW_STEP);
  ctx.lineTo(startX + DRAW_STEP * 13, startY + DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP * 14, startY + DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP * 14, startY + DRAW_STEP * 3);
  ctx.lineTo(startX + DRAW_STEP * 13, startY + DRAW_STEP * 3);
  ctx.lineTo(startX + DRAW_STEP * 13, startY + DRAW_STEP * 4);
  ctx.lineTo(startX + DRAW_STEP * 14, startY + DRAW_STEP * 4);
  ctx.lineTo(startX + DRAW_STEP * 14, startY + DRAW_STEP * 5);
  ctx.lineTo(startX + DRAW_STEP * 13, startY + DRAW_STEP * 5);
  ctx.lineTo(startX + DRAW_STEP * 13, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP * 8, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP * 6, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP * 5, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP * 5, startY + DRAW_STEP * 7);
  ctx.lineTo(startX + DRAW_STEP * 4, startY + DRAW_STEP * 7);
  ctx.lineTo(startX + DRAW_STEP * 4, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP * 3, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP * 3, startY + DRAW_STEP * 7);
  ctx.lineTo(startX + DRAW_STEP * 2, startY + DRAW_STEP * 7);
  ctx.lineTo(startX + DRAW_STEP * 2, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP, startY + DRAW_STEP * 6);
  ctx.lineTo(startX + DRAW_STEP, startY + DRAW_STEP * 5);
  ctx.lineTo(startX, startY + DRAW_STEP * 5);
  ctx.lineTo(startX, startY + DRAW_STEP * 4);
  ctx.lineTo(startX + DRAW_STEP, startY + DRAW_STEP * 4);
  ctx.lineTo(startX + DRAW_STEP, startY + DRAW_STEP * 3);
  ctx.lineTo(startX, startY + DRAW_STEP * 3);
  ctx.lineTo(startX, startY + DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP, startY + DRAW_STEP * 2);
  ctx.lineTo(startX + DRAW_STEP, startY + DRAW_STEP);
  ctx.lineTo(startX, startY + DRAW_STEP);
  ctx.lineTo(startX, startY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

var createText = function (ctx, text, textX, textY, fontStyle, color) {
  ctx.fillStyle = color;
  ctx.font = fontStyle;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, textX, textY);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  createCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  createCloud(ctx, CLOUD_X, CLOUD_Y, '#D4E5F2');

  createText(ctx, 'Ура вы победили!', 340, 45, '16px PT Mono bold', '#da641a');
  createText(ctx, 'Список результатов:', 340, 65, '16px PT Mono bold', '#da641a');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + (DRAW_STEP * 2) + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y * 3.2);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (DRAW_STEP * 2) + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + SHADOW_GAP);

    ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + (DRAW_STEP * 2) + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y * 3.1, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }

};
