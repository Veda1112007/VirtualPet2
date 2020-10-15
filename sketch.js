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
milkImage = loadImage("images/Milk.png");

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

  console.log(foodStock);

  for(i=0;i<foodStock;i++){
    var milk =createSprite(50*i+50,250,20,30);
    milk.addImage(milkImage);
    milk.scale=0.1;
    milk.lifetime= 100;
  }
    }
}



