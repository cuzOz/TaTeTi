var turnoActual = 'X';
var cordenadasList = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
var movidas = 0;

function IniciarJuego(){
  let i;
  for (i=0; i < cordenadasList.length; i++){
    document.getElementById(cordenadasList[i]).disabled = false;
  }
}
function FinalizarJuego(){
  let i;
  for (i=0; i < cordenadasList.length; i++){
    document.getElementById(cordenadasList[i]).disabled = true;
  }
}
function Toco(cordenada){
  let valorDeBoton = document.getElementById(cordenada).value;
  if (valorDeBoton == 'X' || valorDeBoton == 'O'){
    return;
  }
  document.getElementById(cordenada).value = turnoActual;
  CambiarTurno();
  Evaluar();
  movidas++;
}
function CambiarTurno(){
  if (turnoActual == 'X'){
    turnoActual = 'O';
  }else{
    turnoActual = 'X';
  }
}
function Evaluar(){
  if (movidas == 9){
    alert('Juego terminado');
    FinalizarJuego();
  }
  let btnA1 = document.getElementById('A1');
  let btnB1 = document.getElementById('B1');
  let btnC1 = document.getElementById('C1');

  let btnA2 = document.getElementById('A2');
  let btnB2 = document.getElementById('B2');
  let btnC2 = document.getElementById('C2');

  let btnA3 = document.getElementById('A3');
  let btnB3 = document.getElementById('B3');
  let btnC3 = document.getElementById('C3');

  EvaluarCoincidencia(btnA1, btnA2, btnA3);
  EvaluarCoincidencia(btnB1, btnB2, btnB3);
  EvaluarCoincidencia(btnC1, btnC2, btnC3);
  EvaluarCoincidencia(btnA1, btnB1, btnC1);
  EvaluarCoincidencia(btnA2, btnB2, btnC2);
  EvaluarCoincidencia(btnA3, btnB3, btnC3);
  EvaluarCoincidencia(btnA1, btnB2, btnC3);
  EvaluarCoincidencia(btnA3, btnB2, btnC1);
}
function EvaluarCoincidencia(btn1, btn2, btn3){
  let hayCoincidencia = btn1.value == btn2.value && btn2.value == btn3.value;
  if (hayCoincidencia){
    if (btn1.value == '-'){
      return;
    }else{
      alert('Ganó: '+ btn1.value);
    }
  }
}
