var botaoBuscarVeiculos = document.querySelector("#busca-veiculos");

botaoBuscarVeiculos.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "json/veiculo.json");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
    });

    xhr.send();

});