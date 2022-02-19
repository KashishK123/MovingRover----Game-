canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_images_array=["img_1.jpg","img_2.jpg","img_3.jpg","img_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=mars_images_array[random_number];

rover_image="rover.png";
function add(){
    bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
}
function up(){
    if(rover_y >=0){
        rover_y=rover_y-10;
        console.log("When Up Arrow Is Pressed, x= "+ rover_x + ", y= "+ rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y=rover_y+10;
        console.log("When Down Arrow Is Pressed, x= "+ rover_x + ", y= "+ rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x=rover_x-10;
        console.log("When Left Arrow Is Pressed, x= "+ rover_x + ", y= "+ rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x <=700){
        rover_x=rover_x+10;
        console.log("When Right Arrow Is Pressed, x= "+ rover_x + ", y= "+ rover_y);
        uploadbackground();
        uploadrover();
    }
}