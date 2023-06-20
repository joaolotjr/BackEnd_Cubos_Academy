let personagem
let grama

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64

let restart

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png')
  grama = loadImage('grass.png')
}

function draw() {
  if(andarX < 0){
     andarX = 0
  }
  
  if(andarY < 0){
     andarY = 0
  }
  
  if(andarX > tamanho*8){
     andarX = tamanho*8
  }
  
  if(andarY > tamanho*8){
     andarY = tamanho*8
  }
  
  background(255);
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      image(grama, tamanho * i, tamanho * j, tamanho, tamanho)
    }
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === tamanho*8 && andarY === tamanho*8){
    rect(160, 160, 256, 256)
    textSize(35)
    text('Ganhou', 220, 300)
    
    restart = createButton('Reiniciar')
    restart.mousePressed(reset)
    
    noLoop()
  }
  
  //text(`x:${andarX} y: ${andarY}`, 500, 500)
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed() {
  if(keyIsDown(RIGHT_ARROW)){
     andarX += velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
     andarY += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)){
     andarX -= velocidade
  }
  
  if(keyIsDown(UP_ARROW)){
     andarY -= velocidade
  }
}







