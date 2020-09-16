let lista = document.querySelector("#Par1");
console.log(Par1);
Par1.style.backgroundColor = "white";
let btn = document.querySelector("#btnCambiar");
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    Par1.style.backgroundColor = rndCol;
  }

  let btn2 = document.querySelector("#BotonO");
  function ocultarPar1() {
    Par1.style.display = "none";
  } 
  btn2.onclick = ocultarPar1;

  let btn3 = document.querySelector("#BotonM");
  function mostrarPar1() {
    Par1.style.display = "";
  } 
  btn3.onclick = mostrarPar1;