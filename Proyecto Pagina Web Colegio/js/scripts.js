const cargarAlumno = document.getElementById("dashboard-content");
const cargarContent = document.getElementById("cargar-content");
const crearUsuarioContent = document.getElementById("crear-usuario-content");
const contactoContent = document.getElementById("contacto-content");

function cargarIndex() {
    cargarAlumno.style.display = "block";
    cargarContent.style.display = "none";
    crearUsuarioContent.style.display = "none";
    contactoContent.style.display = "none";
  }

  function cargarCargarNotas() {
    cargarAlumno.style.display = "none";
    cargarContent.style.display = "block";
    crearUsuarioContent.style.display = "none";
    contactoContent.style.display = "none";
  }

  function cargarCrearUsuario() {
    cargarAlumno.style.display = "none";
    cargarContent.style.display = "none";
    crearUsuarioContent.style.display = "block";
    contactoContent.style.display = "none";
  }

  function cargarContacto() {
    cargarAlumno.style.display = "none";
    cargarContent.style.display = "none";
    crearUsuarioContent.style.display = "none";
    contactoContent.style.display = "block";
  }
