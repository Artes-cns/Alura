var campoFiltrarVeiculo = document.querySelector("#filtrar-veiculos");

campoFiltrarVeiculo.addEventListener("input", function() {
  var veiculos = document.querySelectorAll(".veiculo.json-estoque")

  if (this.value.length >0) {
    for (var i = 0; i < veiculos.length; i++) {
      var veiculo = veiculos[i];
      var pModelo = veiculo.querySelector(".modelo");
      var modelo = pModelo.textContent;
      var expressaoRegular = new RegExp(this.value,"i");
      if (!expressaoRegular.test(modelo)) {
        veiculo.classList.add("some-veiculo.json");
      }else {
        veiculo.classList.remove("some-veiculo.json");
      }
    }
  }else {
    for (var i = 0; i < veiculos.length; i++) {
      var veiculo = veiculos[i];
      veiculo.classList.remove("some-veiculo.json");
    }
  }



});



//artes@carrosanserra.com.br
//1488226701
