
img = "";

function preload()
{
     img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(670, 510);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 670, 510);

    fill("#FFD700");
    text("Dog", 45, 75);
    noFill();
    stroke("#FFD700");
    rect(30, 60, 450, 350);
}