
/**
 * drawPieSlice(ctx,param.centerX, param.centerY, radius, startAngle, endAngle, color )
 * @param {reference to the drawing context} ctx 
 * @param {the X coordinate of the circle center} param.centerX 
 * @param {the Y coordinate of the circle center} param.centerY 
 * @param {the X coordinate of the line end point} radius 
 * @param {the start angle in radians where the portion of the circle starts} startAngle 
 * @param {the end angle in radians where the portion of the circle ends} endAngle 
 * @param {the color used to fill the slice} color 
 */
function drawPieSlice(ctx,centerX,centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color; 
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX,centerY, radius, startAngle, endAngle);
    ctx.fill();
    ctx.closePath();
}
/**
 * 
 * @param {*} ctx 
 * @param {*} startX 
 * @param {*} startY 
 * @param {*} endX 
 * @param {*} endY 
 * @param {*} color 
 */
function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}
function computeLine(success,fail,centerX,radius){
    var indexLine = [,];
    if(success == fail){
        indexLine[0] = centerX;
        indexLine[1] = centerX + radius / 2;
    }
    else if (success < fail) {
        indexLine[0] = centerX + radius *  (success/0.5);
        indexLine[1] = centerX - radius * (success/0.5);
    }
    else {
        indexLine[0] = centerX - (radius /2) * success;
        indexLine[1] = centerX + radius * success;
    }
    return indexLine;
}
  var Piechart = function (options) {
      this.options = options;
      var param = options.param;
      var fix = options.fix;
      var color = options.colors;
      var ctx = options.ctx;
      //data rate
      var myrate = options.data;
      //tilte
      var title = options.title;
      var check = myrate.success >= myrate.fail ? true : false;
      var lineSuccess = [300, 100, 200, 100];
      var lineFail = [800, 100, 900, 100];
  
      if (!check) {
          fix.fixX = -fix.fixX;
          var t = lineSuccess;
          lineSuccess = lineFail;
          lineFail = t;
      }
      ctx.scale(1, fix.scale);
  
      this.drawChart = function(i) {
          if (i < fix.slice_Height) {
              drawPieSlice(ctx,param.centerX,param.centerY - i,param.radius,0,Math.PI * 2 * myrate.success, color.botSuccess);
              drawPieSlice(ctx,param.centerX + fix.fixX,param.centerY + fix.fixY - i,param.radius,Math.PI * 2 * myrate.success,0,color.botFail);
          }
          else {
            drawPieSlice(ctx,param.centerX,param.centerY - i,param.radius,0,Math.PI * 2 * myrate.success, color.topSuccess);
            drawPieSlice(ctx,param.centerX + fix.fixX,param.centerY + fix.fixY - i,param.radius,Math.PI * 2 * myrate.success,0,color.topFail);
          }
      }
      this.drawTitle = function() {
        ctx.restore();
        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText(title, 20, 800);
        ctx.stroke();
    }
    var valueLine = computeLine(myrate.success,myrate.fail,param.centerX,param.radius);
    this.drawLineSuccess = function() {
        var startSuccess =  valueLine[0];
        drawLine(ctx,startSuccess,param.centerX,startSuccess,param.centerY,color.botSuccess);
        // drawLine(ctx,0,150,100,250,color.botSuccess);
    }

    this.drawLineFail = function() {
        var startFail = valueLine[1];
        console.log();
        drawLine(ctx,startFail,param.centerX,startFail,param.centerY-120,color.botFail);
    }

    this.drawText = function() {
        ctx.beginPath();
        ctx.font = "14px Arial";
        ctx.fillStyle = "black";
        if (!check) {
            ctx.fillText(myrate.success * 100 + "% ĐÃ ĐẠT", lineSuccess[0], lineSuccess[3] - 10);
            ctx.fillText(myrate.fail * 100 + "% CHƯA ĐẠT", lineFail[2], lineFail[3] - 10);
        } else {
            ctx.fillText(myrate.success * 100 + "% ĐÃ ĐẠT", lineSuccess[2], lineSuccess[3] - 10);
            ctx.fillText(myrate.fail * 100 + "% CHƯA ĐẠT", lineFail[0], lineFail[3] - 10);
        }   
    }
      this.draw = function() {
          for (i = 0; i <= fix.slice_Height; i++) {
              this.drawChart(i);
          }
          this.drawTitle();
          this.drawLineSuccess();
          this.drawLineFail();
          this.drawLineFail();
          this.drawText();
      }

  };