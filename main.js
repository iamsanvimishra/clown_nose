noseX=0
noseY=0
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/Kc9WXmW4/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);
}

function modelLoaded()
{
    console.log('poseNet Is  Initialized')
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30) 
}

function take_snopshot(){
    save('myFilerImage.png');
}

function gotPose(result){
if(result.length>0)
{
    console.log(result);
    console.log("noseX="+result[0].pose.nose.x);
    console.log("noseY="+result[0].pose.nose.y);
    noseX=result[0].pose.nose.x;
    noseY=result[0].pose.nose.y;
}
}
