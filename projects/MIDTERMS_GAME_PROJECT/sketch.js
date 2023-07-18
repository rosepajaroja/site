/* ================================= 
ITP1 Midterm Assignment 
"The Game Project"
Ma. Rosario Pajaroja-Villanueva
==================================== */

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;
var trees_x = [-600, -900, -300, -200, 600, 800, 1500, 100];//array of tree positions
//array of clouds
var clouds = 
[
    {x_pos: 50, y_pos: 100, size: 50},
    {x_pos: 300, y_pos: 150, size: 20},
    {x_pos: 500, y_pos: 80, size: 60},
    {x_pos: 1200, y_pos: 150, size: 60},
    {x_pos: -600, y_pos: 150, size: 25},
    {x_pos: -200, y_pos: 150, size: 50},
    {x_pos: 900, y_pos: 150, size: 40},
    {x_pos: 1500, y_pos: 150, size: 25},
];
//array of mountains
var mountains =
[
    {x_pos: -300, y_pos: 300},
    {x_pos: 500, y_pos: 300},
    {x_pos: 800, y_pos: 300},
    {x_pos: 1600, y_pos: 300},
];
var cameraPosX;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    collectable = {x_pos: 320, y_pos: 420, size: 40, isFound: false};
    canyon = {x_pos: 203, y_pos: 432, width: 40};
    cameraPosX = 0;
}

function draw()
{
    ///////////DRAWING CODE//////////
    cameraPosX = gameChar_x - width/2;//change value of cameraPosX and keep game character in the center
	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    push();//save current drawing state
    translate(-cameraPosX, 0);//side scrolling effect  

//START OF CLOUDS
    for(var i = 0; i < clouds.length; i++)
    {
        cloud = clouds[i];
        //cloud shadow
        fill(192, 216, 240);
        ellipse(cloud.x_pos - (cloud.size / 0.88), cloud.y_pos - (cloud.size / 2.64), cloud.size - (cloud.size / 2.64), cloud.size - (cloud.size / 2.64));
        ellipse(cloud.x_pos - (cloud.size / 4.55), cloud.y_pos - (cloud.size / 2.78), cloud.size + (cloud.size /1.79), cloud.size + (cloud.size / 1.79));
        ellipse(cloud.x_pos + (cloud.size / 0.76), cloud.y_pos - (cloud.size / 1.52), cloud.size + (cloud.size / 0.64), cloud.size + (cloud.size / 0.64));
        ellipse(cloud.x_pos + (cloud.size / 0.34), cloud.y_pos - (cloud.size / 1.79), cloud.size + (cloud.size / 1.47), cloud.size + (cloud.size / 1.47));
        ellipse(cloud.x_pos + (cloud.size / 0.26), cloud.y_pos - (cloud.size / 3.85), cloud.size - (cloud.size / 7.15), cloud.size - (cloud.size / 7.15));

        //cloud
        fill(255);
        ellipse(cloud.x_pos - (cloud.size / 0.89), cloud.y_pos - (cloud.size / 2.28), cloud.size / 1.62, cloud.size / 1.62);
        ellipse(cloud.x_pos - (cloud.size / 4.55), cloud.y_pos - (cloud.size / 1.79), cloud.size / 0.6, cloud.size / 0.60);
        ellipse(cloud.x_pos + (cloud.size / 0.76), cloud.y_pos - (cloud.size / 1.17), cloud.size / 0.39, cloud.size / 0.39);
        ellipse(cloud.x_pos + (cloud.size / 0.33), cloud.y_pos - (cloud.size / 1.52), cloud.size / 0.625, cloud.size / 0.625);
        ellipse(cloud.x_pos + (cloud.size / 0.25), cloud.y_pos - (cloud.size / 2.95), cloud.size / 1.1, cloud.size / 1.17);
    }
//END OF CLOUDS
    
//START OF MOUNTAINS
    for(var i = 0; i < mountains.length; i++)
    {
        mountain = mountains[i];
        fill(64, 67, 75);
        beginShape();
        vertex(mountain.x_pos - 38, mountain.y_pos + 133);
        vertex(mountain.x_pos + 54, mountain.y_pos + 40);
        vertex(mountain.x_pos + 94, mountain.y_pos + 54);
        vertex(mountain.x_pos + 176, mountain.y_pos - 14);
        vertex(mountain.x_pos + 232, mountain.y_pos + 35);
        vertex(mountain.x_pos + 245, mountain.y_pos + 24);
        vertex(mountain.x_pos + 363, mountain.y_pos + 133);
        endShape();

        fill(0, 0, 0);
        triangle(mountain.x_pos + 167, mountain.y_pos + 133, mountain.x_pos + 250, mountain.y_pos + 45, mountain.x_pos + 334, mountain.y_pos + 133);

        beginShape();
        vertex(mountain.x_pos - 40, mountain.y_pos + 133);
        vertex(mountain.x_pos + 80, mountain.y_pos + 85);
        vertex(mountain.x_pos + 121, mountain.y_pos + 113);
        vertex(mountain.x_pos + 101, mountain.y_pos + 133);
        endShape();

        fill(64, 67, 75);
        triangle(mountain.x_pos + 224, mountain.y_pos + 133, mountain.x_pos + 304, mountain.y_pos + 52, mountain.x_pos + 383, mountain.y_pos + 133);
        triangle(mountain.x_pos + 255, mountain.y_pos + 89, mountain.x_pos + 221, mountain.y_pos + 133, mountain.x_pos + 290, mountain.y_pos + 133);
    }
//END OF MOUNTAINS
    
//START OF TREES
    for(var i = 0; i < trees_x.length; i++)
    {
        //leaves shadow
        fill(54, 109, 71);
        ellipse(880 + trees_x[i], 323, 85, 85);
        ellipse(855 + trees_x[i], 284, 85, 85);
        ellipse(868 + trees_x[i], 243, 68, 68);
        ellipse(917 + trees_x[i], 234, 85, 85);

        //leaves
        fill(140, 179, 71);
        ellipse(911 + trees_x[i], 320, 96, 96);
        ellipse(959 + trees_x[i], 316, 96, 96);
        ellipse(965 + trees_x[i], 272, 81, 81);
        ellipse(942 + trees_x[i], 257, 96, 96);
        ellipse(897 + trees_x[i], 288, 96, 96);

        //trunk
        fill(77, 47, 32);
        beginShape();
        vertex(912 + trees_x[i], 433);
        vertex(914 + trees_x[i], 382);
        vertex(903 + trees_x[i], 368);
        vertex(905 + trees_x[i], 366);
        vertex(915 + trees_x[i], 376);
        vertex(917 + trees_x[i], 321);
        vertex(920 + trees_x[i], 321);
        vertex(921 + trees_x[i], 354);
        vertex(938 + trees_x[i], 342);
        vertex(938 + trees_x[i], 344);
        vertex(922 + trees_x[i], 363);
        vertex(925 + trees_x[i], 432);
        endShape();
    }
//END OF MOUNTAINS
    
//START OF COLLECTABLE ITEM
    if(collectable.isFound == false)
    {
        stroke(214, 19, 85);
        strokeWeight(collectable.size / 25);
        noFill();
        arc(collectable.x_pos + (collectable.size - (collectable.size / 1.43)), collectable.y_pos + 4, collectable.size - (collectable.size / 2.2727), collectable.size, PI, TWO_PI);
        noStroke();
        fill(252, 226, 42);
        rect(collectable.x_pos, collectable.y_pos, collectable.size - (collectable.size / 2.5), collectable.size - (collectable.size / 2.5), collectable.size / 10, collectable.size / 10, collectable.size / 5, collectable.size / 5);
        fill(48, 227, 223);
        rect(collectable.x_pos, collectable.y_pos, collectable.size - (collectable.size / 2.5), collectable.size - (collectable.size / 1.5151), collectable.size / 10, collectable.size / 10, collectable.size / 5, collectable.size / 5);
        fill(214, 19, 85);
        ellipse(collectable.x_pos + (collectable.size - (collectable.size / 1.43)), collectable.y_pos + collectable.size - (collectable.size / 1.3), collectable.size - (collectable.size / 1.0869), collectable.size - (collectable.size / 1.0869));
    }
//END OF COLLECTABLE ITEM
    
//Collectable item interaction
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 50)
    {
        collectable.isFound = true;
    }

//START OF CANYON
    fill(77, 47, 32);
    rect(canyon.x_pos - 23, canyon.y_pos, canyon.width + 45, 145);
    fill(100,155,255);
    rect(canyon.x_pos, canyon.y_pos, canyon.width, 145);
    fill(99, 205, 215);
    rect(canyon.x_pos - 18, canyon.y_pos + 10, canyon.width + 35, 140);
//END OF CANYON
    
//START OF GAME CHARACTERS
    stroke(0);
    strokeWeight(2);
	if(isLeft && isFalling)
	{
    //jumping-left
        //clothes/body
        fill(204, 204, 255);
        triangle(gameChar_x, gameChar_y - 60, gameChar_x - 10, gameChar_y - 20, gameChar_x + 10, gameChar_y -20);
       //hand
        line(gameChar_x - 3, gameChar_y - 47.5, gameChar_x - 25, gameChar_y - 65);
        line(gameChar_x + 3, gameChar_y - 47.5, gameChar_x + 25, gameChar_y - 55);
        //feet
        line(gameChar_x - 3, gameChar_y - 20, gameChar_x - 12, gameChar_y - 5);
        noFill();
        beginShape();
        vertex(gameChar_x + 5, gameChar_y - 20);
        vertex(gameChar_x + 8, gameChar_y - 10);
        vertex(gameChar_x + 18, gameChar_y - 18);
        endShape();
        //face
        fill(255);
        ellipse(gameChar_x, gameChar_y - 60, 30, 25);
        fill(0);
        //eyes
        ellipse(gameChar_x - 7, gameChar_y - 60, 1, 1);
        ellipse(gameChar_x + 3, gameChar_y - 60, 1, 1);
        //mouth
        noFill();
        arc(gameChar_x - 2, gameChar_y - 55, 8, 5, 0, PI, PI);
	}
	else if(isRight && isFalling)
	{
    //jumping-right
        //clothes/body
        fill(204, 204, 255);
        triangle(gameChar_x, gameChar_y - 60, gameChar_x - 10, gameChar_y - 20, gameChar_x + 10, gameChar_y -20);
       //hand
        line(gameChar_x - 3, gameChar_y - 47.5, gameChar_x - 25, gameChar_y - 55);
        line(gameChar_x + 3, gameChar_y - 47.5, gameChar_x + 25, gameChar_y - 65);
        //feet
        line(gameChar_x + 3, gameChar_y - 20, gameChar_x + 12, gameChar_y - 5);
        noFill();
        beginShape();
        vertex(gameChar_x - 5, gameChar_y - 20);
        vertex(gameChar_x - 8, gameChar_y - 10);
        vertex(gameChar_x - 18, gameChar_y - 18);
        endShape();
        //face
        fill(255);
        ellipse(gameChar_x, gameChar_y - 60, 30, 25);
        fill(0);
        //eyes
        ellipse(gameChar_x + 7, gameChar_y - 60, 1, 1);
        ellipse(gameChar_x - 3, gameChar_y - 60, 1, 1);
        //mouth
        noFill();
        arc(gameChar_x + 2, gameChar_y - 55, 8, 5, 0, PI, PI);
	}
	else if(isLeft)
	{
    //walking left
        //clothes/body
        line(gameChar_x - 1, gameChar_y - 47.5, gameChar_x - 15, gameChar_y - 35);
        fill(204, 204, 255);
        triangle(gameChar_x, gameChar_y - 60, gameChar_x - 10, gameChar_y - 20, gameChar_x + 10, gameChar_y -20);
        //hand
        line(gameChar_x + 1, gameChar_y - 45, gameChar_x + 6, gameChar_y - 32);
        //feet
        line(gameChar_x - 3, gameChar_y - 20, gameChar_x - 12, gameChar_y);
        line(gameChar_x + 1, gameChar_y - 20, gameChar_x + 7, gameChar_y);
        //face
        fill(255);
        ellipse(gameChar_x, gameChar_y - 60, 30, 25);
        fill(0);
        //eyes
        ellipse(gameChar_x - 7, gameChar_y - 60, 1, 1);
        ellipse(gameChar_x + 3, gameChar_y - 60, 1, 1);
        //mouth
        noFill();
        arc(gameChar_x - 2, gameChar_y - 55, 8, 5, 0, PI, PI);
	}
	else if(isRight)
	{
    //walking right
        //clothes/body
        line(gameChar_x + 1, gameChar_y - 47.5, gameChar_x + 15, gameChar_y - 35);
        fill(204, 204, 255);
        triangle(gameChar_x, gameChar_y - 60, gameChar_x - 10, gameChar_y - 20, gameChar_x + 10, gameChar_y - 20);
        //hand
        line(gameChar_x - 1, gameChar_y - 45, gameChar_x - 6, gameChar_y - 32);
        //feet
        line(gameChar_x + 3, gameChar_y - 20, gameChar_x + 12, gameChar_y);
        line(gameChar_x - 1, gameChar_y - 20, gameChar_x - 7, gameChar_y);
        //face
        fill(255);
        ellipse(gameChar_x, gameChar_y - 60, 30, 25);
        fill(0);
        //eyes
        ellipse(gameChar_x - 3, gameChar_y - 60, 1, 1);
        ellipse(gameChar_x + 7, gameChar_y - 60, 1, 1);
        //mouth
        noFill();
        arc(gameChar_x + 2, gameChar_y - 55, 8, 5, 0, PI, PI);
	}
	else if(isFalling || isPlummeting)
	{
    //jumping facing forwards
        //clothes/body
        fill(204, 204, 255);
        triangle(gameChar_x, gameChar_y - 60, gameChar_x - 10, gameChar_y - 20, gameChar_x + 10, gameChar_y -20);
        //hand
        line(gameChar_x - 3, gameChar_y - 47.5, gameChar_x - 20, gameChar_y - 35);
        line(gameChar_x + 3, gameChar_y - 47.5, gameChar_x + 20, gameChar_y - 35);
        //feet
        line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 20, gameChar_y - 10);
        line(gameChar_x + 5, gameChar_y - 20, gameChar_x + 20, gameChar_y - 10);
        //face
        fill(255);
        ellipse(gameChar_x, gameChar_y - 60, 30, 25);
        fill(0);
        //eyes
        ellipse(gameChar_x - 5, gameChar_y - 60, 1, 1);
        ellipse(gameChar_x + 5, gameChar_y - 60, 1, 1);
        //mouth
        noFill();
        arc(gameChar_x, gameChar_y - 55, 8, 5, 0, PI, PI);
	}
	else
	{
    //standing front facing
        //clothes/body
        fill(204, 204, 255);
        triangle(gameChar_x, gameChar_y - 60, gameChar_x - 10, gameChar_y - 20, gameChar_x + 10, gameChar_y -20);
        //hand
        line(gameChar_x - 3, gameChar_y - 47.5, gameChar_x - 15, gameChar_y - 30);
        line(gameChar_x + 3, gameChar_y - 47.5, gameChar_x + 15, gameChar_y - 30);
        //feet
        line(gameChar_x - 3, gameChar_y - 20, gameChar_x - 5, gameChar_y);
        line(gameChar_x + 3, gameChar_y - 20, gameChar_x + 5, gameChar_y);
        //face
        fill(255);
        ellipse(gameChar_x, gameChar_y - 60, 30, 25);
        fill(0);
        //eyes
        ellipse(gameChar_x - 5, gameChar_y - 60, 1, 1);
        ellipse(gameChar_x + 5, gameChar_y - 60, 1, 1);
        //mouth
        noFill();
        arc(gameChar_x, gameChar_y - 55, 8, 5, 0, PI, PI);
	}
    
    pop();//restore drawing state

//START OF GAME CHARACTER MOVEMENTS
//Falling down and jumping over the canyon
    if((gameChar_x > canyon.x_pos) && (gameChar_x < (canyon.x_pos + canyon.width)) && (gameChar_y >= floorPos_y))
    {
        isPlummeting = true;
        gameChar_y += 5;
    }
//Falling
    if(gameChar_y < floorPos_y)
    {
        gameChar_y += 3;
        isFalling = true;
    }
    else
    {
        isFalling = false;
    }
//Moving to the left
    if(isLeft)
    {
        gameChar_x -= 2;
    }
//Moving to the right
    if(isRight)
    {
        gameChar_x += 2;
    }
//supporting code to freeze game character when falling down the canyon
    if(isPlummeting == true)
    {
        isRight = false;
        isLeft = false;
    }
//END OF GAME CHARACTER MOVEMENTS
}

function keyPressed()
{
//START OF CONTROLS
    //Left control + freeze when falling down the canyon
    if(key == "a")
    {
        if(isPlummeting == false && isFalling == false)
        {
            isLeft = true;
        }
    }
    
    //Right control + freeze when falling down the canyon
    if(key == "d")
    {
        if(isPlummeting == false && isFalling == false)
        {
            isRight = true;
        }
    }
    
    //Jump control + freeze when falling down the canyon
    if(key == "w")
    {
        if(isPlummeting == false && isFalling == false)
        {
            gameChar_y -= 100;
        }
    }
//END OF CONTROLS
}

function keyReleased()
{
//START OF RELEASE CONTROLS
    //release left control
    if(key == "a")
    {
        isLeft = false;
    }
    //release right control
    if(key == "d")
    {
        isRight = false;
    }
    //release jump control
    if(key == "w")
    {
        isFalling = false;
    }
//END OF RELEASE CONTROLS
}