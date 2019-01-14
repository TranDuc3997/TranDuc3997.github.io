function addName() {
  var div = document.createElement("div");
  var node = document.createElement("P");
  var serial = document.createElement("P");
  var button = document.createElement("button");

  var list = document.getElementById("list");
  var name = document.getElementById("name");

  var index = list.childNodes.length;
  button.setAttribute("onClick","removeName()")
  
  serial.setAttribute("class","number");
  serial.setAttribute("id",index);
  
  //check name
  if(checkName(name.value,list)){
    button.setAttribute("class","button");
    button.setAttribute("value",index);
    node.innerHTML = name.value;
    serial.innerHTML = index;
    div.appendChild(serial);
    div.appendChild(node);
    div.appendChild(button);
    div.setAttribute("class","node");
    div.setAttribute("id",index);
    list.appendChild(div);
  }
  name.value = "";
}
function checkName(name,list){
  if(name.trim().length > 0){
    if(name.trim().length > 20){
      alert("Input is too long, input < 20");
      return false;
    }
    else
      if(checkExist(name,list))
      return true;
  }
  else{
    alert("Input is empty. Please add input.");
    return false;
  }
function checkExist(name,list){
  for(var i = 0 ; i < list.children.length ; i++)
    if(list.children[i].children[1].innerHTML == name){
      alert("Input is existed");
      return false;
    }
    return true;
}
}
function removeName(e){
  e = e || window.event;
  e = e.target || e.srcElement;
  var items = document.getElementById(e.value);
  items.parentNode.removeChild(items);
  resetSerial();
}
function resetSerial(){
  var list = document.getElementById("list");
  for(var i = 0 ; i < list.children.length ; i++)
    list.children[i].children[0].innerHTML = i + 1;
}