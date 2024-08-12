const placar = {
    largura: 800,
    altura: 60,
    cor:"blue",
    pontos: 0,
    corTexto:"white",
    nomeJogo:"IFRJ Game",
    desenhar(){
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(0,0,this.largura,this.altura);
        canvasCtx.font = "20px Fantasy";
        canvasCtx.textAlign = "center";
        canvasCtx.textBaseline = "middle";
        canvasCtx.fillStyle = this.corTexto;
        canvasCtx.fillText(this.nomeJogo,400,30);

    }
}
placar.desenhar()