var jumpingManImg
var blocks,powerupCoin,spikes,finishLine,foodPowerup,healthBar,powerupCoinCounter;
var boostCounter=0;
var healthBar=0;
var powerupCoinCounter
var jumpingMan

function preload(){
    jumpingManImg = loadAnimation("assets/b_run1.png","../assets/b_run2.png","../assets/b_run3.png","../assets/b_run4.png");
}



function setup(){
    createCanvas=(600,200);

    jumpingMan= createSprite(50,180,20,50);
    jumpingMan.addAnimation("jumpingManAnimation",jumpingManImg);
    jumpingMan.scale= 0.5;
     

}



function draw(){
    background("purple");
    drawSprites()


}


