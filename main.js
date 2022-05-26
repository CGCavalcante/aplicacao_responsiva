selectedBroth = '';
selectedMeet = 'chasu';
habilitarBotao = false;

function selecionarBroth( event ) {

    this.selectedBroth = event.id;
    this.verificarItensSelecionados();
    

}

function selecionarMeet( event ) {
    
    this.selectedMeet = event;
    this.verificarItensSelecionados();
    
}

function verificarItensSelecionados() {

    if ( this.selectedBroth == '' ) {
        this.habilitarBotao = false;
    } else if ( this.selectedMeet == '' ) {
        this.habilitarBotao = false;
    } else {
        this.habilitarBotao = true;
    }
    
}

function consultar( url ) {

    let request = new XMLHttpRequest();

    request.open("GET", url, false);
    request.send();
    return JSON.parse(request.responseText);

}


function consultarPedido() {

    let url = 'https://front-br-challenges.web.app/api/v1/ramen-go/?meat=' + this.selectedMeet + '&broth=' + this.selectedBroth
    let retorno = this.consultar(url);
    console.log(retorno);
}


