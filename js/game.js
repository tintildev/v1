"use strict";

//Zum zeichen
class Renderer{
    constructor(element){
        this.element = element;
        this.setup();
    }

    setup(){
        //Ball hinzufügen
        let box = document.createElement("div");

        //Position
        box.style.position ="absolute";
        box.style.top="20px";
        box.style.left="20px";

        //Inhalt
        box.style.backgroundColor ="red";
        box.style.width = "20px";
        box.style.height ="20px";

        this.element.appendChild(box);
        this.box = box;
    }

    //Bewegung
    render(position){
        this.box.style.top = position + "px";
    }
}
//Bewegungs Logik
class Box {
    constructor(){
        this.position = 0;
        this.speed = 0;

        /**
         * Negativer Speed: Nach oben
         * Positiver Spedd: Nach unten
         */
    }
    //Bewegungs Logik nach unten
    runLoop(){
        this.speed++;
        this.position = this.position + this.speed;
    }
    //Logik für nach oben
    moveUp(){
        this.speed = -20;
    }
}

class Game {
    constructor(element) {
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.element = element;
        //Läuft das Spiel
        this.isRunning = true;
        this.setup();
    }

    //Klick auf Box
    setup(){
        this.element.addEventListener("click", () =>{
            this.box.moveUp();
        }, false);
    }

    start(){ 
        //Highscore
        let counter = 0;

        let timer = setInterval(() =>{
            counter++;
            this.box.runLoop();
            //Obere Rand
            if(this.box.position < 0){
                this.isRunning = false;
                //Intervall abbrechen
                clearInterval(timer);
                alert("Oberer Rand erreicht: Gameover, " + counter + " Punkte!");
            }
            //Unterre Rand
            if(this.box.position + 20 > this.element.clientHeight){
                this.isRunning = false;
                //Intervall abbrechen
                clearInterval(timer);
                alert("Unterer Rand erreicht: Gameover, " + counter + " Punkte!");
            }
        this.renderer.render(this.box.position);
        }, 40);
        console.log(timer);
    }
}

//Übergabe des Spielfelds


let game = new Game(document.getElementById("game"));
game.start();
