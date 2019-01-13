window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    Canvas();
}
function Canvas() {
    var myRate = {
        fail: 0.7,
        success: 0.3
    }
    var color = {
        topSuccess: "#009ED5",
        botSuccess: "#456AA4",
        topFail: "#FF6464",
        botFail: "#E4322B"
    };
    var fix = {
        scale : 0.6,
        slice_Height : 60,
        fixX : 15,
        fixY : -20
    }
    var param = {
        centerX: 240,
        centerY: 500,
        radius: 150
    }
    var canvas = document.getElementById('myCanvas');
    canvas.width = 600;
    canvas.height = 600;
    var ctx = canvas.getContext("2d");
    var myPiechart = new Piechart(
            {
                ctx,
                param,
                fix,
                title: " BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC",
                canvas: canvas,
                data: myRate,
                colors: color
            }
    );
    if ((myRate.fail + myRate.success) * 100 !==100)
        alert("The sum of value is deifent 100%. Please try input again.");
    else
        myPiechart.draw();
}