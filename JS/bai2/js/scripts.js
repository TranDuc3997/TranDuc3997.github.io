var table,iMonth,iYear,check = true;
var arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var listDate = ["Sun","Mon","Tue","Web","Thu","Fri","Sat"];
/**
 * Initialization value Calendar
 */
function initCalendar() {
  var calendar = document.getElementById("calendar");
  calendar.innerHTML = " ";
    if(check){
    check = false;
    table = document.createElement("TABLE");
    var mselect = document.createElement("SELECT");
    var yselect = document.createElement("SELECT");
    var tr = document.createElement("TR");
    table.setAttribute("id","table-js");
    tr.setAttribute("id","nav-js");
    iMonth = 0;
    iYear = 1950;
    table.appendChild(tr);
    for(var i = 0 ; i < 6 ; i++){
      var th = document.createElement("TH");
      switch(i){
        case 0 :{
          th.setAttribute("id","back__Year-js");
          th.setAttribute("onclick","backYear()");
          th.innerHTML = "&#8647;";
          break;
        }
        case 1: {
          th.setAttribute("id","back__Month-js");
          th.setAttribute("onclick","backMonth()");
          th.innerHTML = "&#8592;";
          break;
        }
        case 2: {
          th.setAttribute("colspan","2");
          th = createSelectMonth(th,mselect,arrMonth);
          break;
        }
        case 3: {
          th = createSelectYear(th,yselect);
          break;
        }
        case 4: {
          th.setAttribute("id","forward__Month-js");
          th.setAttribute("onclick","forwardMonth()");
          th.innerHTML = "&#8594;";
          break;
        }
        case 5: {
          th.setAttribute("id","forward__Year-js");
          th.setAttribute("onclick","forwardYear()");
          th.innerHTML = "&#8649;";
          break;
        }
      }
      tr.appendChild(th);
    }
    var tr = document.createElement("TR");
    tr.setAttribute("id","head-js");
    table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
      var th = document.createElement("TH");
      th.innerHTML = listDate[j];
      th.setAttribute("id","head-js"+j);
      tr.appendChild(th);
    }
    iMonth = mselect.options[mselect.selectedIndex].value;
    iYear = yselect.options[yselect.selectedIndex].value;
    createCalendar(table);
    calendar.appendChild(table);
  }
  else {
    check = true;
  }
}
/**
 * Create days in Month Calendar
 * @param {} table 
 */
function createCalendar(table) {
  var count = 1;
  var date = datesInMonth();
  var day = daysInWeek(count);
  for(var i = 0 ; i < 6 ; i++){
    var tr = document.createElement("TR");
    tr.setAttribute("id",i);
    table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
      var td = document.createElement("TD");
      td.setAttribute("id",j);
      if(j == day && count <= date){
        td.innerHTML = count;
        td.setAttribute("class","day-js");
        td.onclick = function () {
          addDay(this.innerHTML);
          calendar.innerHTML = " ";
        }
        day = daysInWeek(++count);
      }
      else
        td.setAttribute("class","notday-js")
      tr.appendChild(td);
    }
  }  
  calendar.appendChild(table);
}
/**
 * Get value dates in month
 */
function datesInMonth() {
  return 32 - new Date(iYear, iMonth, 32).getDate();// return number of days in the month
}
/**
 * Get value day in week
 * @param {value day selected} idate 
 */
function daysInWeek(idate) {
  return new Date(iYear, iMonth,idate).getDay();
}
/**
 * Return selected date value
 * @param {Selected date value} idate 
 */
function addDay(idate){
  var text = document.getElementById("value-js");
  check = true;
  text.value = idate.padStart(2, '0') + "/" + (parseInt(iMonth)+1+"").padStart(2,'0') + "/" + iYear;
}
/**
 * 
 * @param {Index Element} th 
 * @param {*} select 
 */
function createSelectMonth(th,select){
  var nowMonth = new Date().getMonth;
  select.setAttribute("onchange","selectedMonth(event)")
  while(iMonth < 12){
    var month = document.createElement("OPTION");
    if(nowMonth == iMonth)
      month.setAttribute("selected","selected");
    month.setAttribute("value",iMonth);
    month.innerHTML = arrMonth[iMonth++];
    select.appendChild(month);
  }
  select.setAttribute("id","months-js")
  th.appendChild(select);
  return th;
}
/**
 * 
 * @param {*} th 
 * @param {*} select 
 */
function createSelectYear(th,select){
  var nowYear = new Date().getFullYear();
  select.setAttribute("onchange","selectedYear(event)")
  while(iYear < 2051){
    var year = document.createElement("OPTION");
    if(nowYear == iYear)
      year.setAttribute("selected","selected");
    year.innerHTML = iYear++;
    select.appendChild(year);
  }
  select.setAttribute("id","years-js");
  th.appendChild(select);
  return th;
}
/**
 * Create new Calendar with value selected 
 * @param {*} table 
 */
function newCalendar (table){
  removeChildTable(table);
  createCalendar(table);
}

/**
 * Remove day in calender
 * @param {Elenment table} table 
 */
function removeChildTable(table) {
  for(var irow = 0 ; irow < 6 ; irow++)
    table.removeChild(table.childNodes[2]);
}
/**
 * 
 * @param {value Month Selected} evt 
 */
function selectedMonth(evt){
  iMonth = evt.target.value;
  newCalendar(table);
}
/**
 * 
 * @param {value Year selected} evt 
 */
function selectedYear(evt) {
  iYear = evt.target.value
  newCalendar(table);
}
/**
 * Change value Year
 */
function changeYear(){
  var  select = document.getElementById("years-js");
  select.selectedIndex = iYear - 1950;
}
/**
 * Change value Month
 */
function changeMonth() {
  var  select = document.getElementById("months-js");
  if(iMonth > 11) {
    iMonth -= 12;
    ++iYear
    changeYear();
  }
  if(iMonth < 0) {
    iMonth = 11;
    --iYear;
    changeYear();
  }
  select.selectedIndex = iMonth;
}
/**
 * reduce value Year
 */
function backYear() {
  iYear--;
  changeYear();
  newCalendar(table);
}
/**
 * reduce value Month
 */
function backMonth() {
  iMonth--;
  changeMonth();
  newCalendar(table);
}
/**
 * increase value Month
 */
function forwardMonth() {
  iMonth++;
  changeMonth();
  newCalendar(table);
}
/**
 * 
  increase value Year
 */
function forwardYear() {
  iYear++;
  changeYear();
  newCalendar(table);
}