noseY = 0;
noseX = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;


function setup() {
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,550);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose", gotPoses);
    }
    function draw(){
        background("#9bf6ff");
        stroke("red");
        fill("red");
        square(noseX,noseY,difference);
    }
    function modelLoaded(){
        console.log('Posenet is intialised');
    }
    function gotPoses(results){
        if (results.length > 0 ){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = "+ noseX + "noseY = "+ noseY);
             leftwristX = results[0].pose.leftWrist.x;
             rightwristX = results[0].pose.rightWrist.x;
             difference = floor(leftwristX- rightwristX);
             console.log("leftwristx = "+ leftwristX+ " rightwristx = "+ rightwristX+" and difference = "+ difference);
             document.getElementById("value").innerHTML ="Length of the sides of the square = "+ difference+ "px";
        }
    }