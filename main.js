function preload(){
clone_nose=loadImage('https://i.postimg.cc/901YSXfX/6780768-preview.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('poseNet is initialised')
}
function draw(){
image(video,0,0,300,300);
image(clone_nose,nose_x,nose_y,26,26);
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
console.log("nose x="+results[0].pose.nose.x);
nose_x=results[0].pose.nose.x-15;
console.log("nose y="+results[0].pose.nose.y);
nose_y=results[0].pose.nose.y-15;

}
}
function take_snapshot(){
    save('filterimage.png');
}
nose_x=0;
nose_y=0;