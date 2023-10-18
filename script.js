let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
<section class="skills" id="skills">
    <div class="contenido-seccion">
        <h2>Habilidades</h2>
        <div class="fila">
            <div class="col">
                <h3>Habilidades Técnicas</h3>
                <div class="skill">
                    <span>Javascript</span>
                    <div class="barra-skill">
                        <div class="progreso javascript"></div>
                    </div>
                </div>
                <div class="skill">
                    <span>HTML & CSS</span>
                    <div class="barra-skill">
                        <div class="progreso htmlcss"></div>
                    </div>
                </div>
                <div class="skill">
                    <span>Photoshop</span>
                    <div class="barra-skill">
                        <div class="progreso photoshop"></div>
                    </div>
                </div>
                <div class "skill">
                    <span>WordPress</span>
                    <div class="barra-skill">
                        <div class="progreso wordpress"></div>
                    </div>
                </div>
                <div class="skill">
                    <span>Drupal</span>
                    <div class="barra-skill">
                        <div class="progreso drupal"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h3>Habilidades Profesionales</h3>
                <div class="skill">
                    <span>Comunicación</span>
                    <div class="barra-skill">
                        <div class="progreso comunicacion"></div>
                    </div>
                </div>
                <div class="skill">
                    <span>Trabajo en Equipo</span>
                    <div class="barra-skill">
                        <div class="progreso trabajo"></div>
                    </div>
