// window.onload = eventWindowLoaded;
// function eventWindowLoaded() {
//     Canvas();
// }
// function Canvas() {
//     var data = {
//         A: 2,
//         B: 0.1,
//         C: 3,
//         D: 4,
//         E: 4
//     };
//     var level = 4;
//     var title = "BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION";
//     var heightTitle = 100;
//     var widthTitle = 120;
//     var fontTitle = "30pt Arial";
//     var colorTitle = '';
//     var name = "TÊN DỰ ÁN";
//     var tileOther = "LEVEL OF POSITION";
//     var height = 500;
//     var widthLevel = 120;
//     var fontOther = "20pt Arial";
//     var widthRow = 170;
//     var widthCol = 70;
//     var heightCol = 70;
//     var c = [];
//     var i = 0;
//     var myBarchart = new Barchart(
//             {
//                 ctx,
//                 param,
//                 fix,
//                 title: " BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC",
//                 canvas: canvas,
//                 data: data,
//                 colors: color
//             }
//     );
//     for (var item in data) {
//         var a = item;
//         c[i] = a;
//         i++;
//     }
//     myBarchart.draw();
// }