"use strict";

let img = document.getElementById("popup_img-1");
let img2 = document.getElementById("popup_img-2");
let title = document.getElementById("popup_name");
let text = document.getElementById("popup_description")
let content = document.getElementById("popup__content-div");
let link = document.getElementById("popup__link");

class Popup{

    constructor(id) {
        this.theId = id;

        this.data = [
            {img: "img/Game-1.png", name: "click game", description: "A small JavaScript game."},
            {img: "img/Game-2.png", name: "Dino Jump", description: "A small JavaScript game where a dinosaur has to jump over cactuses."},
            {img: "img/HP.jpg", name: "Portfolio", description: "A first portfolio page for me.", link: "#"},
            {img: "img/FF-Michelhausen.jpg", name: "FF-Michelhausen", description: "Modern website for the Michelhausen fire brigade. This project was implemented with Sass, JavaScript, PHP and Wordpress." , link: "https://www.ff-michelhausen.at/"},
            {img: "img/heartbeat.jpg", name: "HeartBeatClubbing", description: "A website for the purchase of defibrillators for the Tulln district." , link: "https://www.heartbeat-clubbing.at/"}
        ]
        
    }

    start(){
        console.log("start " + this.theId)

        if(this.theId === "1"){
            document.getElementById("popup2").id ="popup";
            img.src = this.data[0].img;
            img2.src = this.data[0].img;
            title.innerHTML = this.data[0].name;
            text.innerHTML = this.data[0].description; 
            
            content.id = "game";
            content.innerHTML ="";
            let game_script = document.createElement("script");
            game_script.setAttribute('src', './js/clickgame.js');
            content.appendChild(game_script);
    
        }
        else if(this.theId === "2"){
            document.getElementById("popup2").id ="popup";
            img.src = this.data[1].img;
            img2.src = this.data[1].img;
            title.innerHTML = this.data[1].name;
            text.innerHTML = this.data[1].description; 

            content.id = "game2";
            content.innerHTML ="";
            let c = document.createElement("div");
            c.id = "character";
            let b = document.createElement("div");
            b.id ="block";

            let game_script2 = document.createElement("script");
            game_script2.setAttribute('src', './js/dinogame.js');
            
            content.appendChild(b);
            content.appendChild(c);
            content.appendChild(game_script2);
            
        }
        else if(this.theId === "3"){
            document.getElementById("popup1").id ="popup";
            img.src = this.data[2].img;
            img2.src = this.data[2].img;
            title.innerHTML = this.data[2].name;
            text.innerHTML = this.data[2].description; 
            link.href= this.data[2].link;
            link.innerHTML= this.data[2].name;
            
        }
        else if(this.theId === "4"){
            document.getElementById("popup1").id ="popup";
            img.src = this.data[3].img;
            img2.src = this.data[3].img;
            title.innerHTML = this.data[3].name;
            text.innerHTML = this.data[3].description; 
            link.href = this.data[3].link;
            link.innerHTML= this.data[3].name;
            link.target ="_blank";
            link.rel= "noopener";
            
        }
        else if(this.theId === "5"){
            document.getElementById("popup1").id ="popup";
            img.src = this.data[4].img;
            img2.src = this.data[4].img;
            title.innerHTML = this.data[4].name;
            text.innerHTML = this.data[4].description; 
            link.href= this.data[4].link;
            link.innerHTML= this.data[4].name;
            link.target ="_blank";
            link.rel= "noopener";
            
        }
        else {
            document.getElementById("popup1").id ="popup";
            img.src = this.data[0].img;
            img2.src = this.data[0].img;
            title.innerHTML = this.data[0].name;
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

document.getElementById("popup__close--0").addEventListener("click", event => {
    document.getElementById("popup").id = "popup1";
});

document.getElementById("popup__close--1").addEventListener("click", event => {
    document.getElementById("popup").id = "popup1";
});

document.getElementById("popup__close--2").addEventListener("click", event => {
    document.getElementById("popup").id = "popup2";
    content.id = "popup__content-div";
    content.removeChild(content.firstChild);
    location.reload();
    
});

    






