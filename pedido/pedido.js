selectedMeat = '';
selectedBroth = '';

function novoPedido() {
    window.close()
    window.open('./../home/home.html')
}

document.addEventListener("DOMContentLoaded",
    function () {
        let listaRetorno = window.location.toString().split('?');
        let listaParam = listaRetorno[1].split('&');
        let paramentros = [];

        listaParam.forEach( param => {
            paramentros.push(param.split('=')[1]);
        });

        selectedBroth = paramentros[0];
        selectedMeat = paramentros[1];

        let url = 'https://front-br-challenges.web.app/api/v1/ramen-go/?meat=' + selectedMeat + '&broth=' + selectedBroth;
        consultar( url )
    }
)

function consultar( url ) {

    let request = new XMLHttpRequest();

    request.open("GET", url, false);
    request.send();

    carregarElementos( JSON.parse(request.responseText) );

}

function carregarElementos( objeto ) {

    document.getElementById("image-pedido").src = objeto.data.image;
    document.getElementById("desc-pedido").innerText = objeto.data.name;
}