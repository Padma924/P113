function preload()
{
}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

}

function draw(){
image(video,70,110,380,290);
fill("cyan");
circle(60,100,70);
fill("lightgreen");
rect(95,90,350,20);
fill("cyan");
circle(450,100,70);
fill("lightgreen");
rect(50,134,20,251);
fill("cyan");
rect(85,390,350,20);
fill("lightgreen");
circle(60,400,70);
fill("lightgreen");
rect(440,134,20,250);
fill("cyan");
circle(450,400,70);
}

function take_snapshot()
{
save('selfie.png');
}