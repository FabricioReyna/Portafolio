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



const nombre = document.getElementById("nombre")
const email = document.getElementById("correo")
const tel = document.getElementById("telefono")
const form = document.querySelector(form)
const parrafo = document.getElementById("warnings")
const tipo = document.getElementById("tema")


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();
	let warnings = ""
	let regexusuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
	let regexemail =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	let regextel = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/
	parrafo.innerHTML=""
	if(!regexusuario.test(nombre.value)){
		warnings += `Nombre no introducido <br>`
		entrar = true
	} 
	if(!regexemail.test(email.value)){
		warnings += `El email no es valido <br>`
		entrar = true
	}
	if(!regextel.test(tel.value)){
		warnings += `El numero celular no es valido <br>`
		entrar = true

	} 
    if(!regexusuario.test(tipo.value)){
        warnings += `Introduce un tema <br>` 
		entrar = true

    }
	if(entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "Enviado"
	}
}
)
