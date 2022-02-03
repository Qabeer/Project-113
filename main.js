function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 145, 125, 340, 240);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 70);
    circle(590, 50, 70);
    circle(590, 430, 70);
    circle(50, 430, 70);
    fill(0, 128, 0);
    stroke(0, 128 ,0);
    rect(85 ,40, 470, 20);
    rect(85 ,420, 470, 20);
    rect(40 ,85, 20, 310);
    rect(580 ,85, 20, 310);
}

function take_snapshot() {
    save("student_image.png");
}