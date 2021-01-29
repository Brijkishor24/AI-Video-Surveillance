video="";
status="";
function preload(){
    video=createVideo("video.mp4");
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video.hide();
}

function draw(){
    image(video,0,0,500,400);
}

function start(){
  objectDetector=ml5.objectDetector("cocossd",modelloaded);
  document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelloaded(){
    console.log("Model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}