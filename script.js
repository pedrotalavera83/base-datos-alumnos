class Alumnos {
    constructor() {
        this.alumnosMatricula = [];
    }

    altaAlumnos(altaAl) {
        this.alumnosMatricula.push(altaAl);
    }
}

class Grupos {
    constructor() {
        this.gruposMatricula = [];
    }

    altaGrupos(altaGp) {
        this.gruposMatricula.push(altaGp);
    }
}

class Materias {
    constructor() {
        this.materiasMatricula = [];
    }

    altaMaterias(altaMt) {
        this.materiasMatricula.push(altaMt);
    }
}

class Calificaciones {
    constructor() {
        this.calificacionesMatricula = [];
    }

    altaCalificaciones(altaCl) {
        this.calificacionesMatricula.push(altaCl);
    }
}

class Alumno {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, sexo) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.sexo = sexo;
        this.grupo = [];
        this.materiasInscritas = [];
        this.calificaciones = [];
    }

    asigniarGrupo(grupoAsignado) {
        this.grupo.push(grupoAsignado);
    }

    asigniarMateria(materiaAsignada) {
        this.materiasInscritas.push(materiaAsignada);
    }

    asignarCalificacion(calificacionAsignada) {
        this.calificaciones.push(calificacionAsignada);
    }
}

class Grupo {
    constructor(nombre, lugar, dia, horario) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.dia = dia;
        this.horario = horario;
    }
}

class Materia {
    constructor(nombre, profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
    }
}

class Calificacion {
    constructor(
        nombreGrupo,
        nombreClase,
        nombreProfesor,
        calificacion,
        comentariosProfesor,
        fecha
    ) {
        this.nombreGrupo = nombreGrupo;
        this.nombreClase = nombreClase;
        this.nombreProfesor = nombreProfesor;
        this.calificacion = calificacion;
        this.comentariosProfesor = comentariosProfesor;
        this.fecha = fecha;
    }
}

let gruposAlta = new Grupos();

let materiaAlta = new Materias();

let calificacionAlta = new Calificaciones();

let alumnosAlta = new Alumnos();

let calificacion1 = new Calificacion(
    "CDMX Poniente",
    "Jumps 1",
    "Rolex",
    90,
    "Excelente",
    "2021-09-10"
);

calificacionAlta.altaCalificaciones(calificacion1);

const formulario = document.querySelector("#credenciales");
formulario.addEventListener("submit", submitHandler);

const accounts = [
    { user: "Administrador", password: "123456" },
    { user: "Chapulin43", password: "password" },
    { user: "dosRuedas", password: "jkhkl" },
    { user: "Angy29", password: "125G74se" },
];

function submitHandler(e) {
    e.preventDefault();

    const loginSection = document.querySelector("#login_sec");
    const homeSection = document.querySelector("#home_sec");
    const materiasSection = document.querySelector("#materias_sec");
    const gruposSection = document.querySelector("#grupo_sec");
    const alumnosSection = document.querySelector("#alumnos_sec");
    const grupoMateriaSection = document.querySelector("#asignarGrupoMateria_sec");
    
    const users = e.target.user.value;
    const password = e.target.password.value;
    let loginFlag = null; //falsy
    function addMateriaHandler(e) {
        e.preventDefault();
        const addMaestroInput = document.querySelector("#maestro");
        const addMateriaInput = document.querySelector("#materia");
        let materia = new Materia(addMateriaInput.value, addMaestroInput.value);
        materiaAlta.altaMaterias(materia);
        console.log(materiaAlta.materiasMatricula);
        localStorage.setItem("Materias", JSON.stringify(materiaAlta.materiasMatricula));
    }

    function addGrupoHandler(e) {
        e.preventDefault();
        const addNombreGrupoInput = document.querySelector("#grup_nombre");
        const addlugarInput = document.querySelector("#lugar");
        const adddiaInput = document.querySelector("#dia");
        const addHorarioInput = document.querySelector("#horario");
        let grupo = new Grupo(addNombreGrupoInput.value, addlugarInput.value, adddiaInput.value, addHorarioInput.value);
        gruposAlta.altaGrupos(grupo);
        console.log(gruposAlta.gruposMatricula);
        localStorage.setItem("Grupos", JSON.stringify(gruposAlta.gruposMatricula));
    }

    function addAlumnoHandler(e) {
        e.preventDefault();
        const addNombreInput = document.querySelector("#alumn_nombre");
        const addApInput = document.querySelector("#alumn_ap");
        const addAmInput = document.querySelector("#alumn_am");
        const addEdadInput = document.querySelector("#alumn_edad");
        const addSexInput = document.querySelector("#alumn_sex");
        let alumno = new Alumno(addNombreInput.value, addApInput.value, addAmInput.value, addEdadInput.value, addSexInput.value);
        alumnosAlta.altaAlumnos(alumno);
        console.log(alumnosAlta.alumnosMatricula);
        localStorage.setItem("Alumnos", JSON.stringify(alumnosAlta.alumnosMatricula));
        console.log(JSON.parse(localStorage.getItem("Alumnos")));
    }

    function llenarListaMateria (e){
        e.preventDefault();
        const select = JSON.parse(localStorage.getItem("Materias"));
        if (document.querySelector('#listaMateria').innerHTML.length = 0){
            for (let i = 0; i < select.length; i++) {
                let option = document.createElement("option");
                option.value = select[i].nombre;
                option.innerText = select[i].nombre;
                listaMateria.appendChild(option);
            }
        }else if (document.querySelector('#listaMateria').length < select.length){
            document.querySelector('#listaMateria').innerHTML = '';
            for (let i = 0; i < select.length; i++) {
                let option = document.createElement("option");
                option.value = select[i].nombre;
                option.innerText = select[i].nombre;
                listaMateria.appendChild(option);
            }
        }else {
        }
    } 

    function llenarListaGrupo (e){
        e.preventDefault();
        const select = JSON.parse(localStorage.getItem("Grupos"));
        console.log(select);
        if (document.querySelector('#listaGrupo').innerHTML.length = 0){
            for (let i = 0; i < select.length; i++) {
                let option = document.createElement("option");
                option.value = select[i].nombre;
                option.innerText = select[i].nombre;
                listaGrupo.appendChild(option);
            }
        }else if (document.querySelector('#listaGrupo').length < select.length){
            document.querySelector('#listaGrupo').innerHTML = '';
            for (let i = 0; i < select.length; i++) {
                let option = document.createElement("option");
                option.value = select[i].nombre;
                option.innerText = select[i].nombre;
                listaGrupo.appendChild(option);
            }
        }else {
        }
    } 
        
    function llenarListaAlumno (e){
        e.preventDefault();
        const select = JSON.parse(localStorage.getItem("Alumnos"));
        console.log(select);
        if (document.querySelector('#listaAlumno').innerHTML.length = 0){
            for (let i = 0; i < select.length; i++) {
                let option = document.createElement("option");
                option.value = select[i].nombre + ' ' + select[i].apellidoPaterno + ' ' + select[i].apellidoMaterno;
                option.innerText = select[i].nombre + ' ' + select[i].apellidoPaterno + ' ' + select[i].apellidoMaterno;
                listaAlumno.appendChild(option);
            }
        }else if (document.querySelector('#listaAlumno').length < select.length){
            document.querySelector('#listaAlumno').innerHTML = '';
            for (let i = 0; i < select.length; i++) {
                let option = document.createElement("option");
                option.value = select[i].nombre + ' ' + select[i].apellidoPaterno + ' ' + select[i].apellidoMaterno;
                option.innerText = select[i].nombre + ' ' + select[i].apellidoPaterno + ' ' + select[i].apellidoMaterno;
                listaAlumno.appendChild(option);
            }
        }else {
        }
    }

    function asignarGrupoMateriaAAlumno(e){
        e.preventDefault();
        const arrayAlumno = JSON.parse(localStorage.getItem("Alumnos"));
        const arrayGrupo = JSON.parse(localStorage.getItem("Grupos"));
        const arrayMateria = JSON.parse(localStorage.getItem("Materias"));
        arregloNombreApellido = arrayAlumno.map (function(element){return`${element.nombre} ${element.apellidoPaterno} ${element.apellidoMaterno}`;})
        arregloGrupos= arrayGrupo.map (function(element){return`${element.nombre}`;})
        arregloMaterias= arrayMateria.map (function(element){return`${element.nombre}`;})
        console.log(arregloNombreApellido);
        console.log(arregloGrupos);
        console.log(arregloMaterias);
        const selectAlumno = document.querySelector('#listaAlumno').value;
        const selectGrupo = document.querySelector('#listaGrupo').value;
        const selectMateria = document.querySelector('#listaMateria').value;
        console.log(selectAlumno);
        console.log(selectGrupo);
        console.log(selectMateria);
        const indiceAlumno = arregloNombreApellido.indexOf(selectAlumno);
        const indiceGrupo = arregloGrupos.indexOf(selectGrupo);
        const indiceMateria = arregloMaterias.indexOf(selectMateria);
        console.log(indiceAlumno);
        console.log(indiceGrupo);
        console.log(indiceMateria);
        Alumno[indiceAlumno].asigniarGrupo(Grupo[indiceGrupo]);
        Alumno[indiceAlumno].asigniarMaterias(Materias[indiceMateria]);







    }

    function loginSuccessfully(obj) {
        console.log("Login Successfully");
        localStorage.setItem('Profesor', JSON.stringify(obj));
        let profe = JSON.parse(localStorage.getItem("Profesor"));
        console.log(profe);
        
        loginSection.style.display = "none"; //ocultate
        homeSection.classList = "d.block"; //muestrate
        materiasSection.classList = "d.block"; //muestrate
        gruposSection.classList = "d.block"; //muestrate
        alumnosSection.classList = "d.block"; //muestrate
        grupoMateriaSection.classList = "d.block"; //muestrate

        let parrafo1 = document.createElement("h1");
        parrafo1.innerText = `Hola, bienvenido ${profe.user}`;
        parrafo1.style.color = "black";
        homeSection.appendChild(parrafo1);
        // Renderizado con string templates
        let template = `
        <div>
            <div>
                <h1>Alta materias</h1>
            </div>
            <section id="clase_sec" class="py-5 text-center">
                <form class="row justify-content-center text-black" id="clase_alta" action="">
                    <div class="mb-3 col-4">
                        <label for="maestro" class="form-label">Profesor</label>
                        <input name="teacher" type="text" class="form-control" id="maestro">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="materia" class="form-label">Materia</label>
                        <input name="subject" type="text" class="form-control" id="materia">
                    </div>
                </form>
                <button form="clase_alta" id="materia_button"  type="submit" class="btn btn-primary mt-5">Materia alta</button>
            </section>
        </div> 
        `
        materiasSection.innerHTML += template;
        const addClaseButton = document.querySelector("#materia_button");
        addClaseButton.addEventListener("click", addMateriaHandler);

        let template2 = `
        <div>
            <div>
                <h1>Alta grupos</h1>
            </div>
            <section id="grup_sec" class="py-5 text-center">
                <form class="row justify-content-center text-black" id="grup_alta" action="">
                    <div class="mb-3 col-4">
                        <label for="grup_nombre" class="form-label">Nombre</label>
                        <input name="nom_grup" type="text" class="form-control" id="grup_nombre">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="lugar" class="form-label">Lugar</label>
                        <input name="place" type="text" class="form-control" id="lugar">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="dia" class="form-label">Día</label>
                        <input name="day" type="text" class="form-control" id="dia">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="horario" class="form-label">Horario</label>
                        <input name="horary" type="text" class="form-control" id="horario">
                    </div>
                </form>
                <button form="grup_alta" id="grupo_button"  type="submit" class="btn btn-primary mt-5">Grupo alta</button>
            </section>
        </div> 
        `
        gruposSection.innerHTML += template2;
        const addGruposButton = document.querySelector("#grupo_button");
        addGruposButton.addEventListener("click", addGrupoHandler);

        let template3 = `
        <div>
            <div>
                <h1>Alta alumnos</h1>
            </div>
            <section id="alumn_sec" class="py-5 text-center">
                <form class="row justify-content-center text-black" id="alumn_alta" action="">
                    <div class="mb-3 col-4">
                        <label for="alumn_nombre" class="form-label">Nombre(s)</label>
                        <input name="nom_alumn" type="text" class="form-control" id="alumn_nombre">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="alumn_ap" class="form-label">Apellido Paterno</label>
                        <input name="ap_alumn" type="text" class="form-control" id="alumn_ap">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="alumn_am" class="form-label">Apellido Materno</label>
                        <input name="am_alumn" type="text" class="form-control" id="alumn_am">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="alumn_edad" class="form-label">Edad</label>
                        <input name="edad_alumn" type="number" class="form-control" id="alumn_edad">
                    </div>
                    <div class="mb-3 col-4">
                        <label for="alumn_sex" class="form-label">Sexo</label>
                        <input name="sex_alumn" type="text" class="form-control" id="alumn_sex">
                    </div>
                </form>
                <button form="alumn_alta" id="alumno_button"  type="submit" class="btn btn-primary mt-5">Alumno alta</button>
            </section>
        </div> 
        `
        alumnosSection.innerHTML += template3;
        const addAlumnosButton = document.querySelector("#alumno_button");
        addAlumnosButton.addEventListener("click", addAlumnoHandler);

    let template4 = `
    <div>
        <div>
            <h1>Asignar grupo y materia</h1>
        </div>
        <section id="gropMatr_sec" class="py-5 text-center">
            <form class="row justify-content-center text-black" id="asignarGrupoMateria" action="">
                
                <div class="mb-3 col-4">
                    <label for="materiaAsignar" class="form-label">Materia</label>
                    <select id="listaMateria">
                    </select>
                </div>
                <div class="mb-3 col-4">
                    <label for="grupoAsignar" class="form-label">Grupo</label>
                    <select id="listaGrupo">
                    </select>
                </div>


                <div class="mb-3 col-4">
                    <label for="alumnoAAsignar" class="form-label">Alumno a asignar</label>
                    <select id="listaAlumno">
                    </select>
                </div>

            </form>
            <button form="asignarGrupoMateria" id="grupoMateria_button"  type="submit" class="btn btn-primary mt-5">Asignar grupo y materia a alumno</button>
        </section>
    </div> 
    `
    grupoMateriaSection.innerHTML += template4;
    const lista_Materia = document.querySelector("#listaMateria");
    lista_Materia.addEventListener("click", llenarListaMateria);
    const lista_Grupo = document.querySelector("#listaGrupo");
    lista_Grupo.addEventListener("click", llenarListaGrupo);
    const lista_Alumno = document.querySelector("#listaAlumno");
    lista_Alumno.addEventListener("click", llenarListaAlumno);
    const asignarGrupoMateriabtn = document.querySelector("#grupoMateria_button");
    asignarGrupoMateriabtn.addEventListener("click", asignarGrupoMateriaAAlumno);
    





    }








    for (let i = 0; i < accounts.length; i++) {
        accounts[i].user === users && accounts[i].password === password ?
            (loginFlag = accounts[i])
            : null;
    }

    loginFlag !== null ?
        loginSuccessfully(loginFlag)
        : alert("Usuario o contraseña incorrectos");


        
}