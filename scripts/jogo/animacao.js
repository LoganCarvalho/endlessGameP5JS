class Animacao{
    constructor(matriz, imagemCompleta, posPersonagemEixoX, variacaoEixoY, posPersonagemEixoY, larguraPersonagem,
         alturaPersonagem,larguraAreaSprite, alturaAreaSprite){
            this.matriz = matriz;
            this.imagemCompleta = imagemCompleta;
            this.posPersonagemEixoX = posPersonagemEixoX;
            this.variacaoEixoY = variacaoEixoY;
            this.posPersonagemEixoY = height - alturaPersonagem - this.variacaoEixoY;
            this.larguraPersonagem = larguraPersonagem;
            this.alturaPersonagem = alturaPersonagem;
            this.larguraAreaSprite = larguraAreaSprite;
            this.alturaAreaSprite = alturaAreaSprite;

            this.frameAtual = 0;
    }

    exibir(){
        image(this.imagemCompleta, this.posPersonagemEixoX, this.posPersonagemEixoY, this.larguraPersonagem,
             this.alturaPersonagem, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],
              this.larguraAreaSprite, this.alturaAreaSprite);

            this.animar();
    }

    animar(){
        this.frameAtual++;
        if (this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual=0;
        }
    }
}