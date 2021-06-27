cavnas = document.getElementById("myCanvas");
ctx = get.canvasContext("2d");

nasa_mars_images_array = ["nasa_array_image_1.jpg", "nasa_array_image_2.jpg", "nasa_array_image_4.jp"];

random_number = Math.floor(Math.random() * 3);
console.log(random_number);
rover_width = 100;
rover_height = 90;



background_image = nasa_mars_images_array[random_number];
console.log("background_image =" + background_image); 


rover_image = "unnamed.png";


rover_y = 10;
rover_x = 10;

function add() 
{ background_imgTag = new Image(); 
 background_imgTag.onload = uploadBackground; 
 background_imgTag.src = background_image; 
 imgTag = new Image(); 
 rover_imgTag.onload = uploadrover;
 rover_imgTag.src = rover_image; 
}


function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(background_imgTag, rover_x, rover_y, rover_width, rover_height);                 
}


window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
    keypressed = e.keydown;
    console.log("keypressed")
    if(keypressed == "38")
    {
        up();
        console.log("up");
    }
    if(keypressed == "40")
    {
        down();
        console.log("down");
    }
    if(keypressed == "37")
    {
        left();
        console.log("left");
    }
    if(keypressed == "39")
    {
        right();
        console.log("right");
    }
    
}