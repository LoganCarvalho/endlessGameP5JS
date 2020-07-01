let alturaPersonagem = 135;
let posPersonagemEixoX = 0;
let posPersonagemEixoY;
let larguraPersonagem = 110;
//let posicaoSpriteX = this.matriz[this.frameAtual][0];
//let posicaoSpriteY = this.matriz[this.frameAtual][1];
let frameAtual = 0;
let larguraAreaSprite = 220;
let alturaAreaSprite = 270;  

class Personagem extends Animacao{
    constructor(matriz, imagemCompleta, posPersonagemEixoX, variacaoEixoY, posPersonagemEixoY, larguraPersonagem,
        alturaPersonagem,larguraAreaSprite, alturaAreaSprite){
        super(matriz, imagemCompleta, posPersonagemEixoX, variacaoEixoY, posPersonagemEixoY, larguraPersonagem,
            alturaPersonagem,larguraAreaSprite, alturaAreaSprite)

            this.variacaoEixoY = variacaoEixoY;
            this.valorBaseChaoCenario = height - this.alturaPersonagem - this.variacaoEixoY;
            this.posPersonagemEixoY = this.valorBaseChaoCenario;
            this.velocidadePulo = 0;
            this.gravidade = 1;
            this.alturaPulo = -20;
            this.qtdMaxPulos = 0; 

    }

    pular(){
        if (this.qtdMaxPulos < 2) {
            this.velocidadePulo = this.alturaPulo;   
            this.qtdMaxPulos++;  
        }
    }

    //Aplica gravidade de forma continua no personagem. Considerando que a movimentação no eixo y,
    //para o caso do pulo, acontece subtraindo-se um valor da posPersonagemEixoY. O que faz ele subir na tela
    aplicarGravidade(){
        this.posPersonagemEixoY += this.velocidadePulo;   
        this.velocidadePulo += this.gravidade;
        
        //Toda vez que o valor da posição do personagem (posPersonagemEixoY) ultrapassa o valor da base(chão do cenário)
        //a posição do personagem recebe o valor da base para que o personagem não caia de forma infinita
        if (this.posPersonagemEixoY > this.valorBaseChaoCenario) {
            this.posPersonagemEixoY = this.valorBaseChaoCenario;
            this.qtdMaxPulos = 0;  //zera a quantidade máxima de pulos quando a personagem toca o chão
        }
    }

    verificarColisao(inimigo){

        const precisao = .7;
        const colisao =  collideRectRect(this.posPersonagemEixoX, 
            this.posPersonagemEixoY,
            this.larguraPersonagem * precisao, 
            this.alturaPersonagem * precisao,
            inimigo.posPersonagemEixoX,
            inimigo.posPersonagemEixoY,
            inimigo.larguraPersonagem * precisao,
            inimigo.alturaPersonagem* precisao
            );

            return colisao;

    }
    

}