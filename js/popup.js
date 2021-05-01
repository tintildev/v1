"use strict";

class Popup{

    constructor(id) {
        this.theId = id;

        this.data = [
            {img: "img/Game-1.png", name: "click game", description: "A small JavaScript game."},
            {img: "img/Game-2.png", name: "Dino Jump", description: "A small JavaScript game where a dinosaur has to jump over cactuses."},
            {img: "img/HP.jpg", name: "Portfolio", description: "A first portfolio page for me."}
        ]
        
    }

    start(){
        console.log("start " + this.theId)
        let img = document.getElementById("popup_img");
        let name = document.getElementById("popup_name");
        let text = document.getElementById("popup_description")

        if(this.theId === "1"){
            img.src = this.data[0].img;
            name.innerHTML = this.data[0].name;
            text.innerHTML = this.data[0].description; 
        }
        else if(this.theId === "2"){
            img.src = this.data[1].img;
            name.innerHTML = this.data[1].name;
            text.innerHTML = this.data[1].description; 
        }
        else if(this.theId === "3"){
            img.src = this.data[2].img;
            name.innerHTML = this.data[2].name;
            text.innerHTML = this.data[2].description; 
        }
        else {
            img.src = this.data[0].img;
            name.innerHTML = this.data[0].name;
            text.innerHTML = this.data[0].description; 
        }

    }

    
}

console.log("Search Btn")
document.querySelectorAll(".project__btn").forEach(item =>{
    item.addEventListener("click", event => {
        let popup = new Popup(item.id);
        popup.start();
    })
});


