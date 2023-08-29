noseX=0;
noseY=0;
function preload(){
noseimage=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    VIDEO=createCapture(VIDEO);
    VIDEO.hide();

    poseNet = ml5.poseNet(VIDEO , modelloaded);
    poseNet.on('pose',gotposes);

}

function take_snapshot(){
   save('Clown-Nose-Picture.jpg');
}

function draw(){

    image(VIDEO,0,0,300,300);
    image(noseimage,noseX,noseY,30,30);
    
}

function modelloaded(){
   console.log("Model has been loaded");
}

function gotposes(results){
    if(results.length>0)
    {console.log(results);
        noseX=results[0].pose.nose.x-180;
        noseY=results[0].pose.nose.y-120;
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
    };

}