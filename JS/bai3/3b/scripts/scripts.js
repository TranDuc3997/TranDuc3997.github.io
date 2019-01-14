/**
 * 
 * @param {reference to the drawing context} ctx 
 * @param {the X coordinate of the line starting point} startX 
 * @param {the Y coordinate of the line starting point} startY 
 * @param {the X coordinate of the line end point} endX 
 * @param {the Y coordinate of the line end point} endY 
 * @param {the color of the line} color 
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
 * @param {reference to the drawing context} ctx 
 * @param {the X coordinate of the bar's upper left corner} upperLeftCornerX 
 * @param {the X coordinate of the bar's upper left corner} upperLeftCornerY 
 * @param {the width of the bar} width 
 * @param {the height of the bar} height 
 * @param {the color of the bar} color 
 */
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}
/**
 * 
 * @param {reference to the drawing context} ctx 
 * @param {Font of text} font 
 * @param {*} text 
 * @param {the X coordinate of the text starting point} startX 
 * @param {the Y coordinate of the text starting point} startY 
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
    var noteText = options.noteText;
    var nameData = options.nameData;
    var color = options.color;
    var level = param.level + 1;
    /**
     * Draw level postion right
     */
    this.drawLevel = function () {
        drawBar(ctx,param.endXLine + 50, param.startYLine,param.widthCol,50,color.col);
        var textLevel = noteText.content.split(" ");
        for(var i = 0; i < 3 ; i++){
            var startY = param.startYLine + 100 + 50 * i;
            drawText(ctx,noteText.font,textLevel[i],param.endXLine + 50,startY,120,color.title);
        }
    }
    /**
     * Draw level postion left
     */
    this.drawLevelLeft = function () {
        ctx.beginPath();
        ctx.font = noteText.font;
        ctx.fillStyle = color.name;
        ctx.translate(0,700);
        ctx.rotate(-Math.PI/2);
        ctx.fillText(noteText.content,100,100);
    }
    /**
     * Draw column
     */
    this.drawCol = function() {
        for(var i = 0; i < level; i++){
            var startY = param.startYLine + computeMaxLine(level,param.maxLineHeight,i);
            var startXCol = param.startXLine + param.distance * i;
            var heightCol = data[i] * param.IndexCol;
            var startYCol = 600 - heightCol;
            drawBar(ctx,startXCol,startYCol,param.widthCol,heightCol,color.col);
            drawText(ctx,title.fontData,nameData[i],startXCol + param.distance/4 - 10,650,30,color.title);
            drawText(ctx,title.fontData,param.level - i,param.startXLine -20,startY,10,color.title);
        }
    }
    this.draw = function() {
        for(i = 0; i < level; i++){  
            var startY = param.startYLine + computeMaxLine(level,param.maxLineHeight,i);
            drawLine(ctx,param.startXLine,startY,param.endXLine,startY,color.title);
        }
        this.drawCol();
        drawText(ctx,title.font,title.content,param.startXLine,title.height,title.width,color.title);//Draw 
        drawText(ctx,noteText.font,title.name,450,param.endXLine -200,300,color.name); //draw name project
        this.drawLevel();
        this.drawLevelLeft();
    }
}
// return maxline of map
function computeMaxLine(level,maxHeightLine,numLine){
    return maxHeightLine/level * numLine;
}
/**
 * return index of comlumn
 * @param {Data of map} data 
 * @param {*} index 
 */
function computeIndexCol(data,index){
    return data * index;
}
