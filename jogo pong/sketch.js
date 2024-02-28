let xBolinha = 400;
let yBolinha = 300;
let diametro = 25;

let vxBolinha = 7;
let vyBolinha = 7;

function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(0);

    circle(xBolinha,yBolinha,diametro);

    xBolinha += vxBolinha;

    //AS DUAS BARRAS SIGNIFICA OU
    
    if(xBolinha > width|| xBolinha < 0 ){

    vxBolinha *= -1;
    }


    yBolinha += vyBolinha;


if (yBolinha > height|| yBolinha < 0 ){
       
       vyBolinha*= -1;

}

  }
