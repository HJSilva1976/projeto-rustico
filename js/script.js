//alert('js carregado');

var btnMenu = document.querySelector('.btnMenu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('abrirMenu');
    btnMenu.classList.toggle('barraSelecionada');
})
