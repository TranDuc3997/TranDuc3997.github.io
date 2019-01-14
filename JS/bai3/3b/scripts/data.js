window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    Canvas();
}
function Canvas() {
    var data = [2,0.1,3,4,4];
    var nameData = ["A","B","C","D","E"];
    var param = {
        level : 4,
        startXLine :  100,
        startYLine : 200,
        lineWidth : 800,
        endXLine : 900,
        maxLineHeight : 500,
        maxLineWidth : 700,
        distance : 160,
        widthCol : 80,
        IndexCol : 100 
    }
    var title = {
        content : "BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION",
        height : 100,
        width : 700,
        font : "50px Arial",
        fontData :"30px Arial",
        name : "TÊN DỰ ÁN",
    }
    var noteText = {
        content : "LEVEL OF POSITION",
        font : "20px Arial"
    } 
    var color = {
        title : "#000000",
        name : "#B3B3B3",
        col : "#3366CC"
    }
    var canvas = document.getElementById('myCanvas');
    canvas.width = 1200;
    canvas.height = 700;
    var ctx = canvas.getContext("2d");
    var myBarchart = new Barchart({
                ctx,
                param,
                nameData,
                title,
                noteText,
                canvas: canvas,
                data: data,
                color: color
            }
    );
    myBarchart.draw();
}