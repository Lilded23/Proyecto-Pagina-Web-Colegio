const loginForm = document.getElementById('login');

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

  const userName = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  const cargo = document.getElementById('cargo').value;

  let verificacion = false;

  if (userName === "lilded" && parseInt(pass) === 123 && cargo === "profe" && cargo === "direc" && cargo === "admin") {
    verificacion = true;
    console.log(pass, userName, cargo);
  } else {
    console.log(pass, userName, cargo);
  }

  //console.log(pass, userName, cargo);

  if (verificacion) {
    window.location.href = `../index.html`;
  }else{
    alert("Los datos ingresados no son validos");
    verificacion = false;
    window.location.href='../login.html'
  }
});
