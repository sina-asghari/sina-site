function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

function switchLight(value){
    var lightbulb = document.getElementById('bulb');
    

    if(lightbulb.src.indexOf('lighton')==-1){
        value=true
    }else{
        value=false
    }

    if(value==true){
        lightbulb.src='lighton.png';
        document.querySelector('html').style='';
        lightbulb.style='width:200px;';
        document.getElementById('pl').innerHTML='Light Is On'
        document.getElementById('pl').style='background-color:#f4511e;'
        
    }else{
        lightbulb.src='lightoff.png';
        document.querySelector('html').style="background:#666666 ;";
        lightbulb.style='width:226px;'
        document.getElementById('pl').innerHTML='Light Is Off'
        // document.getElementById('pl').style='background-color:gray;'
        
    }
   
}


