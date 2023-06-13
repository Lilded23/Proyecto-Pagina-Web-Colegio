const menu = async()=>{
    const op = document.getElementById('sidebar-container');
    menuLateal = `<div class="logo">
    <h4 class="text-light font-weight-bold"><b>Colegio Shellbyville</b></h4>
</div>
<br>
<div class="menu">
  <a href="index.html"class="d-block text-light p-3 btn-l" style=" text-decoration: none"><i class="icon ion-md-apps mr-2 lead"></i> Dashboard</a>
  <a href="load.html"class="d-block text-light p-3 btn-l" style=" text-decoration: none"><i class="icon ion-md-journal mr-2 lead"></i> Cargat Notas</a>
  <a href="#"class="d-block text-light p-3 btn-l" style=" text-decoration: none"><i class="icon ion-md-people mr-2 lead"></i> Crear usuario</a>
  <a href="#"class="d-block text-light p-3 btn-l" style=" text-decoration: none"><i class="icon ion-md-person mr-2 lead"></i> Contacto</a>
</div>
</div>`

op.innerHTML=menuLateal;


}