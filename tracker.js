// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// create a edit button and append it to list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var edit= document.createElement("span");
var te=document.createTextNode("edit");
edit.className="edit";
edit.id="edit";
edit.appendChild(te);
li.appendChild(edit);
myNodelist[i].appendChild(edit);
}
// create a complete button and append it to list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var complete= document.createElement("span");
var te1=document.createTextNode("complete");
complete.className="complete";
complete.id="complete1";
complete.appendChild(te1);
li.appendChild(complete);
myNodelist[i].appendChild(complete);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
   var div = this.parentElement;
    div.style.display = "none";
  }
}

var complete= document.getElementsByClassName("complete");
var i;
for(i=0;i < complete.length;i++){
 complete[i].onclick= function (){

  document.getElementByid("myUL").style.textDecoration ="line-through";
  document.getElementByid("span2").style.textDecoration =" line-through";
  document.getElementByid("span3").style.textDecoration =" line-through";
   document.getElementByid("complete1").innertext="completed";
  };
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var time = document.getElementById("time").value;
  var date = document.getElementById("date").value; 
  var span1=document.createElement("span");
  var span2=document.createElement("span");
  var span3=document.createElement("span");
  span1.className="span1";
  span2.className="span2";
  span3.className="span3";
  span1.id="span1";
  span2.id="span2";
  span3.id="span3";
  var t = document.createTextNode(inputValue );
  var te = document.createTextNode(time );
  var temp = document.createTextNode(date);
  span1.appendChild(t);
  span2.appendChild(te);
  span3.appendChild(temp);
  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(span3);
  if (inputValue === '' || time == "" || date== "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("time").value = "";
  document.getElementById("date").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

 var edit= document.createElement("span");
 var te=document.createTextNode("edit");
 edit.className="edit";
 edit.appendChild(te);
 li.appendChild(edit);

 var complete= document.createElement("span");
 var te1=document.createTextNode("complete");
 complete.className="complete";
 complete.appendChild(te1);
 li.appendChild(complete);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";

    }
  }
 
     
}