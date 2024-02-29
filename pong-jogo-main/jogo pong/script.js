let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;

let vxBolinha = 5;
let vyBolinha = 5;

let raio = diametro / 2;

//CRIA VARIAVEL VELOCIDADE Y BOLINHA

function setup() {
createCanvas(600, 400);
}

function draw() {
background(0);
moveBolinha();
bolinha();
raquete();
verificaColisao();
raquete2();
}
//CRIAR BOLINHA 

function bolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function moveBolinha(){
  //VELOCIDADE X BOLINHA - AQUI A BOLINHA RECEBE A VELOCIDADE
xBolinha += vxBolinha;

//ADICIONAR VELOCIDADE A BOLINHA

yBolinha += vyBolinha;

console.log(xBolinha);

}
function verificaColisao(){
  
//AS DUAS BARRAS SIGNIFICA OU
if (xBolinha + raio > width || xBolinha - raio < 0) {

  vxBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
  
  vyBolinha *= -1;
  }
}


function raquete(){

//CRIAR RAQUETE
rect(10,150,10,90)
// rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)

}
function raquete2(){

}
