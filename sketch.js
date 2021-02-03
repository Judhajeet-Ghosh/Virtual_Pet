//Create variables here
var doggy, dog, happyDog, database, foods, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database= firebase.database;
  doggy = createSprite(300,300,50,50)
  doggy.addImage(dog)
  doggy.scale= 0.2;

database=firebase.database();
foodStock=database.ref('Food')
foodStock.on("value",readStock,showError)
  
 }


function draw() { 

  background(46,139,87)


  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    doggy.addImage(happyDog)
  }
   

  drawSprites();
  //add styles here

}



function readStock(data){
foods = data.val()
}

function writeStock(x){

  if(x<=0){
     x=0; 
    }
  
  else{ 
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}

function showError(){
  console.log("ERROR IN ON FUNCTION")
}



