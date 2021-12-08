function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(220,185);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image (video, 160, 110, 250, 200);
    fill('#F90093');
    stroke('#F90093');
    circle(60,30,50);
    circle(60,400,50);
    circle(500,30,50);
    circle(500,400,50);
    fill('#FF9933');
    stroke('#FF9933');
    rect(80,20,400,20);
    rect(80,390,400,20);
    rect(49,50,20,330);
    rect(489,50,20,330);
}

function take_snapshot()
{
    save("selfie.png");
}

