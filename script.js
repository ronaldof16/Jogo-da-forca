let palavras = ['ALURA', 'FORCA', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMA', 'DESAFIO'];
let tela = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letras = []
let erros = 8
let letrasIncorretas = [];
let numeroDeErros = 8
let letraEscolhida = [];
var palavraCorreta = "";



function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
  }

  function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key) ){
       letras.push(key)
       console.log(key)
       console.log(letras)
       return estado
    }
    else{
      estado = true
      letras.push(key)
      console.log(key)
      console.log(letras, "if true")
      return estado
    }
  }

  // verifica qual foi a letra clicada
function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key)
    return false
    
  }
  else {
    letras.push(key)
    return true
  }
}

  function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase()
  }

  function adicionarLetraIncorreta(letter){
    if (palavraSecreta.indexOf(letter) <= 0) {
      erros -= 1
    }
  }

  function verificarFimDeJogo(letra) {
    //checa se a letra já foi incluída no array de letras certas ou erradas
   if(letraEscolhida.length < palavraSecreta.length) { 
      //incluindo as letras já digitadas no array
      letrasIncorretas.push(letra);
      
  
      //valida se o usuário cometeu o número máximo de erros, para poder exibir a mesagem de fim de jogo
      if (letrasIncorretas.length > numeroDeErros) {
        exibirDerrota()
      }
      else if(letraEscolhida.length < palavraSecreta.length) {
        adicionarLetraIncorreta(letra)
        escreverLetraIncorreta(letra, erros)
      }
    }
   }

   //Verifica se o usuário ganhou
  function verificarVencedor(letra) {
    letraEscolhida.push(letra.toUpperCase());
    if (letraEscolhida.length == palavraSecreta.length) {

      exibirVitoria()
      
    }

  }

  // impede que teclas como shift e outras sejam escritas
  function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key) ){
       letras.push(key)
       console.log(key)
       console.log(letras)
       return estado
    }
    else{
      estado = true
      letras.push(key)
      console.log(key)
      console.log(letras, "if true")
      return estado
    }
  }

  //inicia o jogo
  function iniciaJogo(){
   
    document.getElementById("div-desaparece").style.display = 'none';
    escolherPalavraSecreta()
    

    desenharCanvas()
    desenharLinhas()

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase()

        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
          for(let i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] === letra){
              escreverLetraCorreta(i)
            }
          }
        }
        else{
          adicionarLetraIncorreta(letra)
          escreverLetraIncorreta(letra, erros)

        }
      }

    }
  
  

