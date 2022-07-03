var drums=document.querySelectorAll(".drum").length;

for(i=0;i<drums;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    

    buttonInnerHTML= this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonPressed(buttonInnerHTML);



  
})
}
document.addEventListener('keydown',function(event){
    makeSound(event.key)
    buttonPressed(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default:
            console.log(buttonInnerHTML)
            
            
      }
}


function buttonPressed(currentkey){
    activeButton=document.querySelector("."+currentkey);

    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}




// function BellBoy(name,age,hasWorkPermit,languages){
//     this.name;
//     this.age;
//     this.hasWorkPermit;
//     this.languages;
// }

// var bellboy1=new BellBoy("yash",19,true,['french','english']);