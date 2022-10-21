function desenharCanvas() {
  tela.lineWidth=8
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.fillStyle= "#F3F5FC"
  tela.strokeStyle = "#0A3871"
  tela.fillRect(0,0,1200,800)
  tela.beginPath();
  tela.moveTo(650,500)
  tela.lineTo(900,500)
  tela.stroke()
  tela.closePath()
}

function desenharLinhas() {
  tela.lineWidth=6
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.strokeStyle = "#0A3871"
  tela.beginPath()
  let largura=600/palavraSecreta.length
  for (let i=0;i<palavraSecreta.length;i++){
    tela.moveTo(500+(largura*i),640)
    tela.lineTo(550+(largura*i),640)
  }
  tela.stroke()
  tela.closePath()
}


function escreverLetraCorreta(index){
    tela.font = "bold 52px Inter"
    tela.lineCap = "round"
    tela.lineJoin="round"
    tela.fillStyle = "#0A3871"
    tela.lineWidth = 6
    let largura= 600/palavraSecreta.length
    tela.fillText(palavraSecreta[index],505 + (largura * index),620 )
    
}

function escreverLetraIncorreta(letra, erros){
  tela.font = "bold 40px Inter"
  tela.lineCap = "round"
  tela.lineJoin="round"
  tela.fillStyle = "#0A3871"
  tela.lineWidth = 6
  tela.fillText(letra,520 + (40 *(10 - erros)),720,40 )
}

function desenharForca(pontos) {
  tela.lineWidth=8
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.strokeStyle = "#0A3871"
  if(pontos===8){
  //poste lateral
  tela.moveTo(700,500)
  tela.lineTo(700,100)
  }
  else if(pontos===7){//teto 
  tela.moveTo(850,100)
  tela.lineTo(700,100)
  }
  else if(pontos===6){//corda
  tela.moveTo(850,100)
  tela.lineTo(850,171)
  }
  else if(pontos===5){//para cara
  tela.moveTo(900,230)
  tela.arc(850,230,50,0,Math.PI*2)
  }
  else if(pontos===4){//para corpo
    tela.moveTo(850,389)
    tela.lineTo(850,289)
    }
    else if(pontos===3){//para perna esquerda
    tela.moveTo(850,389)
    tela.lineTo(800,450)
    }
    else if(pontos===2){//para perna direita
    tela.moveTo(850,389)
    tela.lineTo(890,450)
    }
    else if(pontos===1){//para mão izquerda
    tela.moveTo(850,330)
    tela.lineTo(800,389)
    }
    else if(pontos===0){//para mão direita
    tela.moveTo(850,330)
    tela.lineTo(890,389)
    }
    tela.stroke()
    tela.closePath()
  }

  function exibirDerrota() {
    tela.font = ' bold 42px Inter';
    tela.lineWidth=6
    tela.lineCap="round"
    tela.lineJoin="round"
    tela.fillStyle="red"
    tela.fillText("Fim de jogo!",930,320)
  }
  
  function exibirVitoria() {
    tela.font = 'bold 42px Inter';
    tela.lineWidth=6
    tela.lineCap="round"
    tela.lineJoin="round"
    tela.fillStyle="green"
    tela.fillText("Ganhou,",950,320)
    tela.fillText("Parabéns!",930,360)
    setTimeout( recarregar , 1000)
  }