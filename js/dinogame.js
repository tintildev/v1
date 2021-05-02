

class Game{

    constructor(element) {
        
        this.element = element;
        this.character = document.getElementById("character");
        this.block = document.getElementById("block");
        console.log(this.element.clientHeight);
       
    }

    //Beim Klicken Animation hinzufügen und nach 500ms löschen.
    jump(){
        if(character.classList != "animate"){
            character.classList.add("animate");
        }
        
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);

    }
    start(thi){
        document.body.addEventListener("click", this.jump);
        var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top")) -100;
        
        
        //Alle 10 Sekunden Checken wo die Position ist.
        var checkDead = setInterval(function(){
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            console.log("characterTop: " + characterTop + " blockTop: " + blockTop);
            if(blockLeft < 20 && blockLeft > 0 && characterTop >= blockTop){
                console.log("characterTop: " + characterTop + " blockTop: " + blockTop);
                block.style.animation ="none";
                block.style.display ="none";
                alert("Verloren");
            }
        },10)
    }
    

}

let game = new Game(document.getElementById("game2"));
game.start();
