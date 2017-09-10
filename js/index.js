var rotation0;
var rotation1;
document.getElementById("rotationRange0").value = 0;
document.getElementById("rotationRange1").value = 0;
document.getElementById("widthRange").value = 180;
document.getElementById("name").textContent = "Mr. Kendall";
document.getElementById("jobTitle").textContent = "Official Reporter";
document.getElementById("picInput").files[0] = null;
setInterval(function(){
  document.getElementById("profilePic").setAttribute("width",document.getElementById("widthRange").value+"px");
  rotation0 = document.getElementById("rotationRange0").value;
  rotation1 = document.getElementById("rotationRange1").value;
  document.getElementById("profilePic").style.transform="rotate("+(parseInt(rotation0)+parseInt(rotation1))+"deg)";
  console.log((parseInt(rotation0)+parseInt(rotation1)));
  
  
  
  document.getElementById("name").textContent=document.getElementById("textInput").value;
  document.getElementById("jobTitle").textContent=document.getElementById("jobInput").value;
  if(false || document.getElementById("picInput").files[0]!==undefined){
    var objectURL = window.URL.createObjectURL(document.getElementById("picInput").files[0]);
    
    document.getElementById("profilePic").setAttribute("src",objectURL);
}
},100);
$(document).ready(function(){
  init($("#profilePic").get(0))
  $("#profilePic").draggable();
  $("#centerPic").on("click",function(){
    $("#profilePic").css({'top': 0, 'left' : 0});
  });
  function getPosition(){
    $("#positionValue").html($("#profilePic").position());
  }
  
  setInterval(getPosition, 1000);
});

//Touchscreen Control Snippet
function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init(e) {
    e.addEventListener("touchstart", touchHandler, true);
    e.addEventListener("touchmove", touchHandler, true);
    e.addEventListener("touchend", touchHandler, true);
    e.addEventListener("touchcancel", touchHandler, true);
}