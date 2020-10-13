//Create variables here dog, happyDog, database, foodS, foodStock
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
dog= loadImage("images/dogImg.png");
happyDog= loadImage("images/dogImg1.png");
milkImage = loadImage("images/milk.png");

}

function setup() {
  createCanvas(500, 500);
 dogSprite= createSprite(250,250,10,10);
  dogSprite.addImage(dog);
  dogSprite.scale=0.3
  database = firebase.database();
     foodS  = database.ref('Food');
    foodS.on("value",function(data){
       foodStock = data.val();
       console.log(foodStock);
    })
}



function draw() {  
background(26,139,87)
  drawSprites();
  text(foodStock,20,20);
  if(keyWentDown(UP_ARROW)){
    //  writeStock(foodS);
    if(foodStock>0){

      foodStock=foodStock-1
        database.ref('/').update({
          Food:foodStock
        });
    }
      
  dogSprite.addImage(happyDog);


  for(i=0;i<foodStock;i++){
    image(milkImage,50*i+50,250,20,30);
    // m  ilk.addImage(milkImage);
    // milk.scale=0.1;
  }
    }
}
function keyPressed(){
  if(keyWentDown(UP_ARROW)){
  //  writeStock(foodS);
  if(foodS>0){

    foodS=foodS-1
      database.ref('/').update({
        Food:foodS
      });
  }
    
dogSprite.addImage(happyDog);
  }
}


