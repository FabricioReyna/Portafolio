let menuVisible = false 

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList =""
    menuVisible = false
}

function EfectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skils = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skils >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("JavaScript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("excel");
        habilidades[4].classList.add("canva");
        habilidades[5].classList.add("comun");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creat");
        habilidades[8].classList.add("ded");
        habilidades[9].classList.add("proyec");
    } 
}


window.onscroll = function(){
    EfectoHabilidades()
}


const descargar = document.getElementById("descargar")

