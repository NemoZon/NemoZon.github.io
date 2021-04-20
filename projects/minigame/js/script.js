'use strict';
window.addEventListener('DOMContentLoaded',() =>{
    const MousesList = document.querySelectorAll(".mouse"),
        button = document.querySelector("button"),
        score = document.querySelector("h1"),
        title = document.querySelector(".title"),
        health = document.querySelectorAll("h2");

    let mouse,
        i = 0,
        interval = 1500,
        id,
        start = 0,
        life = 3;

    MousesList.forEach(item =>{
        item.style.display = "none";
    });

    //нажатие на мышь,ускорение игры и зачисление очков
    MousesList.forEach(item =>{
        item.addEventListener("click", (e)=>{
            i++;
            score.textContent = `убито мышей: ${i}`;
            item.style.display = "none";
            console.dir(e.target);
            console.dir(e.target);
            if (i == 10){
                interval = 1000;
                clearInterval(id);
                id = setInterval(getRandomInt, interval);
            }
            if (i == 20){
                interval = 500;
                clearInterval(id);
                id = setInterval(getRandomInt, interval);
            }
            if (i == 30){
                interval = 300;
                clearInterval(id);
                id = setInterval(getRandomInt, interval);
            }
        });
    });

    //рандом мышей
    function getRandomInt(max = 11) {
        mouse = Math.floor(Math.random() * max);
        
        if (MousesList[mouse].style.display == "none"){
            MousesList[mouse].style.display = "block";
        }else{
            MousesList[mouse].style.display = "none";
            life--;
            if (life<=0){
                title.textContent = "ВЫ ПРОИГРАЛИ";
                title.style.color = "red";
                clearInterval(id);
                MousesList.forEach(item =>{
                    item.style.display = "none";
                });
                button.textContent = "START";
                start = 0;
                health[0].style.color = "red";
                let num = +health[1].textContent.slice(8);
                if (num<i){
                    health[1].textContent = `Рекорд: ${i}`;
                    health[1].style.color = "green";
                }
            }
            health[0].textContent = `Жизни: ${life}`;

        }
        
    }

    //рестарт и старт игры
    button.addEventListener("click",(e)=>{
        if(!start){
            health[1].style.color = "white";
            health[0].style.color = "white";
            i = 0;
            life = 3;
            health[0].textContent = `Жизни: ${life}`;
            interval = 1500; 
            title.textContent = "Убиватор 3000";
            title.style.color = "white";
            score.textContent = `убито мышей: ${i}`;
            id = setInterval(getRandomInt, interval);
            e.target.textContent = "RESTART";  
            start = 1;
        }else if(start){
            clearInterval(id);
            MousesList.forEach(item =>{
                item.style.display = "none";
            });
            e.target.textContent = "START";
            start = 0;
        }else{
            console.log("error");
        }
    });



});
