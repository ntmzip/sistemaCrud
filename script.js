const lista = document.getElementsByTagName('a');


lista[0].addEventListener('click', mostraDividas);
lista[1].addEventListener('click', mostraVencimentos);
lista[2].addEventListener('click', mostraRelatorio);

var area = document.getElementsByClassName("exibir");

function mostraDividas(){

area[0].innerText = "TEXTO AQUI"

}

function mostraVencimentos(){
  var area = document.getElementsByClassName("exibir");
  area[0].innerHTML = "<h1>Titulo</h> <p> Descrição aqui</p> "
}

function mostraRelatorio(){
  var area = document.getElementsByClassName("exibir");
area[0].innerHTML = "TESTO DO RELATORIO"

}