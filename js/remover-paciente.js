var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function() {
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove();
    },500);

});