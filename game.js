// Creating variables
var myX = 3, myY = 3, timer=0, direction=-1;
var grid=[], gridSize=20;
for(var i=0; i<20; i++){
	grid[i]=[];
	for(var j=0; j<20; j++){
		grid[i][j]=0;
	}
}
var tailLenght=1, tailX=[], tailY=[];
var frootX=Math.floor(Math.random()*20), frootY=Math.floor(Math.random()*20);

function gameOver(){
    tailLenght=1;
    direction=-1;
    myX=3;
    myY=3;
}

function update() {
	timer++;
	if(timer>=6){
		timer=0;
	}
	//console.log(timer);
	if(timer==5){
	    if(direction==0){
	    	myY--;
	    }
	    if(direction==1){
	    	myY++;
	    }
	    if(direction==2){
	    	myX--;
	    }
	    if(direction==3){
	    	myX++;
	    }
        if(myX<=-1){
            myX=19;
        }
        if(myX>=20){
            myX=0;
        }
        if(myY<=-1){
            myY=19;
        }
        if(myY>=20){
            myY=0;
        }
        for(var i=0; i<tailLenght-1; i++){
            tailX[i]=tailX[i+1];
            tailY[i]=tailY[i+1];
        }
        tailX[tailLenght-1]=myX;
        tailY[tailLenght-1]=myY;
    }   
    

    if(myX==frootX && myY==frootY){
        tailLenght++;
        frootX=Math.floor(Math.random()*20);
        frootY=Math.floor(Math.random()*20);
    }

    for(var i=0; i<tailLenght-4; i++){
        if(myX==tailX[i] && myY==tailY[i]){
            location.reload();
        }
    }

}

function draw() {
    // This is how you draw a rectangle
    for(var i=0; i<20; i++){
    	for(var j=0; j<20; j++){
    		if(grid[i][j]==0){
    			context.fillStyle="black";
    		}
    		if(i==myX && j==myY){
    			context.fillStyle="#32ff00";
    		}
            for(var t=0; t<tailLenght; t++){
                if(i==tailX[t] && j==tailY[t]){
                    context.fillStyle="#32ff00";
                }
            }
            if(i==frootX && j==frootY){
                context.fillStyle="red";
            }
    		context.fillRect(i*gridSize, j*gridSize, gridSize-1, gridSize-1);
    	}
    }
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    if(key==38 && direction!=1){
    	direction=0;
    }
    if(key==40 && direction!=0){
    	direction=1;
    }
    if(key==37 && direction!=3){
    	direction=2;
    }
    if(key==39 && direction!=2){
    	direction=3;
    }
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
