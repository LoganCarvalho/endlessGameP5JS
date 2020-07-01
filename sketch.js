let imagemCenario;
let imagemPersonagem;
let imagemGotinha;
let imagemTroll;
let imagemGotVoadora;
let imagemGameOver;
let somJogo;
let somPulo;
let personagem;
let gotinha;
let troll;
let gotVoadora;
let pontuacao;

const tamAreaSpriteXY = 104;
const tamInimigoXY = 52;
const inimigos = [];


const matrizInimigoGotinha = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
] 

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizGotVoadora = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

//Essa função garante que os recursos estarão disponíveis para o jogo antes dele iniciar
//Usada basicamente para lidar com arquivos
function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemGotinha = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemGotVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}

function tocarSom() {
  if (!somJogo.isPlaying()) {
    somJogo.loop(); 
    somJogo.setVolume(0.5);
  }
}

function keyPressed(){
  if (key === 'ArrowUp') {
    personagem.pular();
    somPulo.play();
    tocarSom();
  }
}

//executada uma vez antes de o jogo começar
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, height - 135, 110, 135, 220, 270);
     const gotinha = new Inimigo(matrizInimigoGotinha, imagemGotinha, width - 100, 30, tamInimigoXY, tamInimigoXY,
                          tamInimigoXY, tamAreaSpriteXY, tamAreaSpriteXY, 3, 100); 
    const troll = new Inimigo(matrizInimigoTroll, imagemTroll, width + 200, 0, tamInimigoXY + 148, tamInimigoXY + 148,
      tamInimigoXY + 148, tamAreaSpriteXY + 296, tamAreaSpriteXY + 296, 6, 2500); 
    const gotVoadora =  new Inimigo(matrizGotVoadora, imagemGotVoadora, width - 52, 200, 100 , 100,
      75, 200, 150, 4, 800); 

      inimigos.push(gotinha);
      inimigos.push(troll);
      inimigos.push(gotVoadora);

      pontuacao = new Pontuacao();


    //botaoPlay = createButton('play');
    frameRate(40);
    //canvas.mousePressed(tocarSom);
  }
  
  function draw() {
    cenario.exibir();
    cenario.mover();
    personagem.exibir();
    personagem.aplicarGravidade();
    pontuacao.exibir();
    pontuacao.incrementarPontuacao();

    inimigos.forEach(inimigo => {
      inimigo.exibir();
      inimigo.mover();

      if (personagem.verificarColisao(inimigo)) {

        console.log('Gotinha colidiu');
        image(imagemGameOver, width/2 - 200, height/3);
        //noLoop();
        
      }
      
    });

   
    
  }

