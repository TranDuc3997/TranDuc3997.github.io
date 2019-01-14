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
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}
/**
 * 
 * @param {*} ctx 
 * @param {*} upperLeftCornerX 
 * @param {*} upperLeftCornerY 
 * @param {*} width 
 * @param {*} height 
 * @param {*} color 
 */
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}
/**
 * 
 * @param {*} ctx 
 * @param {*} font 
 * @param {*} text 
 * @param {*} startX 
 * @param {*} startY 
 */
function drawText(ctx,font,text,startX,startY,maxWidth,color){
    ctx.beginPath();
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text,startX,startY,maxWidth);
}

var Barchart = function(options) {
    this.options = options;
    var ctx = options.ctx;
    var data = options.data;
    var param = options.param;
    var title = options.title;
    var nodeText = options.nodeText;
    var nameData = options.nameData;
    var color = options.color;
    var level = param.level + 1;
    this.draw = function() {
        for(i = 0; i < level; i++){  
            var startY = param.startYLine + computeMaxLine(level,param.maxLineHeight,i);
            var startXCol = param.startXLine + param.distance * i;
            var heightCol = data[i] * param.IndexCol;
            var startYCol = 600 - heightCol;
            drawBar(ctx,startXCol,startYCol,param.widthCol,heightCol,color.col);
            drawLine(ctx,param.startXLine,startY,param.endXLine,startY,color.title);
            drawText(ctx,title.fontData,nameData[i],startXCol + param.distance/4 - 10,650,30,color.title);
            drawText(ctx,title.fontData,param.level - i,param.startXLine -20,startY,10,color.title);
        }
        
        drawText(ctx,title.font,title.content,param.startXLine,title.height,title.width,color.title);
    }
}
function computeMaxLine(level,maxHeightLine,numLine){
    return maxHeightLine/level * numLine;
}

function computeIndexCol(data,index){
    return data * index;
}
