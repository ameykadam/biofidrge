canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_height=90;
rover_width=100;
nasa_mars_image_array=["nasa_1.jpg", "nasa_2.jpg", "nasa_3.jpg", "nasa_4.jpg", "nasa_5.jpg", "nasa_6.jpg"];
random_numnber=Math.floor(Math.random()*6);
background_img=nasa_mars_image_array[random_numnber];
rover_img="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;
    rover_imgTag=new Image();
   rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0, 0,canvas.width, canvas.height);
}
function uploadRover(){
   
    ctx.drawImage(rover_imgTag,rover_x, rover_y,rover_width, rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed==38){
up();
console.log("up");
    }
    if(keypressed==40){
        down();
        console.log("down");
    }
    if(keypressed==37){
        Left();
        console.log("left");
    }
    if(keypressed==39){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("x="+rover_x+"|y="+rover_y);
        uploadRover();
        uploadBackground();

    }
}
function down(){
    if(y<=500){
        rover_y=rover_y+10;
        console.log("x="+rover_x+"|y="+rover_y);
        uploadRover();
            uploadBackground();
    }
}
function right(){
    if(rover_x<=700){
rover_x=rover_x+10;
console.log("x="+rover_x+"|y="+rover_y);
uploadRover();
uploadBackground();
    }
     function left(){
         if(rover_x<=0);
         rover_x=rover_x-10;
         console.log("x="+rover_x+"|y="+rover_y);
         uploadRover();
         uploadBackground();
     }























    }
}