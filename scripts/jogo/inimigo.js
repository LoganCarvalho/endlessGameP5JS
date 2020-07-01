let direcao = 3;

class Inimigo extends Animacao{
    constructor(matriz, imagemCompleta, posPersonagemEixoX, variacaoEixoY, posPersonagemEixoY, larguraPersonagem,
        alturaPersonagem,larguraAreaSprite, alturaAreaSprite, velocidade, atraso){
            super(matriz, imagemCompleta, posPersonagemEixoX, variacaoEixoY, posPersonagemEixoY, larguraPersonagem,
                alturaPersonagem,larguraAreaSprite, alturaAreaSprite)

                this.velocidade = velocidade;
                this.atraso = atraso;
                this.posPersonagemEixoX = width + this.atraso;

    }

    mover(){

        this.posPersonagemEixoX = this.posPersonagemEixoX - this.velocidade;

        if (this.posPersonagemEixoX < -this.larguraPersonagem - this.atraso) {
            this.posPersonagemEixoX = width;
        }
        
    }

    irVoltar(){

        if ( this.posPersonagemEixoX <  -this.larguraPersonagem) {
            direcao = -3;
        }
        this.posPersonagemEixoX = this.posPersonagemEixoX - direcao;
    }

}