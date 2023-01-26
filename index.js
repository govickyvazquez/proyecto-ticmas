alert("Bienvenido a mi CV!")

document.querySelector("a").addEventListener("click", function (){

    var audio = new Audio("sound/snare.mp3");
    audio.play();
});

document.querySelector("button").addEventListener("click", function(){
    document.querySelector("h1").style.color = "#243A73";
});

