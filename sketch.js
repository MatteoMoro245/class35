var ball;
var position, database;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);

    ball = createSprite(200,200,30,30);
    ball.shapeColor = "blue";

    var position = database.ref("ball/position");
    position.on("value", readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
         'x': position.x + x , 
         'y': position.y + y 
        })
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}