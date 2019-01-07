function createCalendar() {
  var calendar = document.getElementById("calendar");
  calendar.innerHTML = " ";
  var table = document.createElement("TABLE");
  table.setAttribute("id","table");
  var listDate = ["Sun","Mon","Tue","Web","Thu","Fri","Sat"];

  var tr = document.createElement("TR");
  tr.setAttribute("id","nav");
  table.appendChild(tr);
  for(var i = 0 ; i < 6 ; i++){
    var th = document.createElement("TH");
    switch(i){
      case 0 :{
        th.setAttribute("id","back__Year-js");
        break;
      }
      case 1: {
        th.setAttribute("id","back__Month-js");
        break;
      }
      case 2: {
        th.setAttribute("colspan","2");
        th = createSelectMonth(th);
        break;
      }
      case 3: {
        th = createSelectYear(th);
        break;
      }
      case 4: {
        th.setAttribute("id","forward__Month-js");
        break;
      }
      case 5: {
        th.setAttribute("id","forward__Year-js");
        break;
      }
    }
    tr.appendChild(th);
  }
  var tr = document.createElement("TR");
  tr.setAttribute("id","head");
  table.appendChild(tr);
  for(var  j = 0 ; j < 7 ; j++ ){
    var th = document.createElement("TH");
    th.innerHTML = listDate[j];
    th.setAttribute("id","head"+j);
    tr.appendChild(th);
  }
  
  // alert(daysInWeek(0,2019,date));
  // // alert(daysInWeek(4,2019,date));
  
  var dem = 1;
  var iMonth = 0;
  var iYear = 2019
  var date = datesInMonth(iMonth,iYear);
  var day = daysInWeek(dem,iMonth,iYear);
  for(var i = 0 ; i < 6 ; i++){
    var tr = document.createElement("TR");
    tr.setAttribute("id",i);
    table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
      var td = document.createElement("TD");
      td.setAttribute("id",j);
      
      if(j == day && dem <= date){
        td.innerHTML = dem;
        td.setAttribute("class","day-js");
        // td.addEventListener("click", addDay(dem,iMonth,iYear));
        day = daysInWeek(++dem,iMonth,iYear);
      }
      else
        td.setAttribute("class","notday-js")
      tr.appendChild(td);
    }
  }  
  calendar.appendChild(table);
}
function datesInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
function daysInWeek(idate,iMonth,iYear) {
  return new Date(iYear, iMonth,idate).getDay();
}
function addDay(idate,iMonth,iYear) {
  var text = document.getElementById("value");
  text.innerHTML = idate + "/" + iMonth + "/" + iYear;
}
function createSelectMonth(th){
  var arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var select = document.createElement("SELECT");
  var iMonth = 0;
  while(iMonth < 12){
    var month = document.createElement("OPTION");
    month.innerHTML = arrMonth[iMonth++];
    select.appendChild(month);
  }
  th.appendChild(select);
  return th;
}
function createSelectYear(th){
  var select = document.createElement("SELECT");
  var iYear = 1950;
  while(iYear < 2051){
    var year = document.createElement("OPTION");
    year.innerHTML = iYear++;
    select.appendChild(year);
  }
  th.appendChild(select);
  return th;
}