selectedBroth = '';
selectedMeet = '';
habilitarBotao = false;
listaBroth = {'salt': false, 'shoyu': false, 'miso': false};
listaMeat = {'chasu': false, 'yasai_vegetarian': false, 'karaague': false}

function selecionarBroth( event ) {

    this.selectedBroth = event;
    
    for ( let item in this.listaBroth) {
        
        if( this.listaBroth[item] ) {

            document.getElementById(item + "-img").src = "./../imagem/icons/" + item + "/inactive.svg";
            document.getElementById(item + '-card').style.backgroundColor = '#FAFAED';
            document.getElementById(item + '-p1').style.color = '#1820EF';
            document.getElementById(item + '-p2').style.color = '#000000';
            document.getElementById(item + '-p3').style.color = '#FF4E42';
            this.listaBroth[item] = false;
            
        }

    }

    document.getElementById(event + "-img").src = "./../imagem/icons/" + event + "/active.svg";
    document.getElementById(event + '-card').style.backgroundColor = '#1820EF';
    document.getElementById(event + '-p1').style.color = 'white';
    document.getElementById(event + '-p2').style.color = 'white';
    document.getElementById(event + '-p3').style.color = 'white';
    this.listaBroth[event] = true;    

}

function selecionarMeat( event ) {

    this.selectedMeet = event;
    
    for ( let item in this.listaMeat) {
        
        if( this.listaMeat[item] ) {

            document.getElementById(item + "-img").src = "./../imagem/icons/" + item + "/inactive.svg";
            document.getElementById(item + '-card').style.backgroundColor = '#FAFAED';
            document.getElementById(item + '-p1').style.color = '#1820EF';
            document.getElementById(item + '-p2').style.color = '#000000';
            document.getElementById(item + '-p3').style.color = '#FF4E42';
            this.listaMeat[item] = false;
            
        }

    }

    document.getElementById(event + "-img").src = "./../imagem/icons/" + event + "/active.svg";
    document.getElementById(event + '-card').style.backgroundColor = '#1820EF';
    document.getElementById(event + '-p1').style.color = 'white';
    document.getElementById(event + '-p2').style.color = 'white';
    document.getElementById(event + '-p3').style.color = 'white';
    this.listaMeat[event] = true;    

}

function verificarItensSelecionados() {

    if ( this.selectedBroth != '' && this.selectedMeet != '' ) {
        this.consultarPedido();
    } else {
        alert("Select a broth and a meat, please!")
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
}


