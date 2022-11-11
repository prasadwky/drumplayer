var imageselector=document.querySelectorAll(".drum").length;

for (var i=0;i<imageselector;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var imageclick=this.innerHTML;
makesound(imageclick);
makeanimation(imageclick);
});
}
document.addEventListener("keypress",function(event){
makeanimation(event.key);
makesound(event.key);
});

function makesound(key){

  switch (key) {
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    case "a":
      var player1=new Audio("sounds/tom-2.mp3");
      player1.play();
      break;

      case "s":
        var player1=new Audio("sounds/tom-3.mp3");
        player1.play();
        break;

          case "d":
            var player1=new Audio("sounds/tom-4.mp3");
            player1.play();
            break;

            case "j":
              var player1=new Audio("sounds/snare.mp3");
              player1.play();
              break;

                case "k":
                  var player1=new Audio("sounds/kick-bass.mp3");
                  player1.play();
                  break;

                  case "l":
                    var player1=new Audio("sounds/crash.mp3");
                    player1.play();
                    break;
      break;
    default:console.log(imageclick);

}
}
function makeanimation(currentkey){

  document.querySelector("."+currentkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");},100
  );
}
