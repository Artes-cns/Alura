var botaoCadastraVeiculo = document.querySelector("#botao-cadastra-veiculo");

botaoCadastraVeiculo.addEventListener("click", function(event) {
    event.preventDefault();

    var formAdicionaVeiculos = document.querySelector("#form-adiciona-veiculos");

    var veiculo = retiraVeiculosDoFormulario(formAdicionaVeiculos);

    var boxVeiculoEstoque = adicionaVeiculoNoEstoque(veiculo);

    var containerVeiculos = document.querySelector("#container-veiculos");

    containerVeiculos.appendChild(boxVeiculoEstoque);

    formAdicionaVeiculos.reset();
});




// funçoes


//função retira dados do formulário
function retiraVeiculosDoFormulario(formAdicionaVeiculos) {

    var veiculo = {
        modelo: formAdicionaVeiculos.modelo.value,
        ano: formAdicionaVeiculos.ano.value,
        preco: formAdicionaVeiculos.preco.value,
        foto: formAdicionaVeiculos.foto.files[0].name,
        observacao: formAdicionaVeiculos.observacao.value
    }

    console.log(formAdicionaVeiculos.foto.files[0]);
    return veiculo;
}

//funçao adiciona veiculo no estoque
function adicionaVeiculoNoEstoque(veiculo) {
    var boxVeiculoEstoque = document.createElement("div");
    boxVeiculoEstoque.classList.add("col-sm-3", "veiculo-estoque");

    boxVeiculoEstoque.appendChild(montaThumb(veiculo));

    return boxVeiculoEstoque;
}


//função monta div thumbnail
function montaThumb(veiculo) {
    var divThumb = document.createElement("div");
    divThumb.classList.add("thumbnail");

    divThumb.appendChild(montaimg(veiculo.foto, "foto"));
    divThumb.appendChild(montaP(veiculo.modelo, "modelo"));
    divThumb.appendChild(montaP(veiculo.ano, "ano"));
    divThumb.appendChild(montaP(veiculo.preco, "preco"));
    divThumb.appendChild(montaP(veiculo.observacao, "observacao"));

    return divThumb;
}


//função monta o p do modelo, ano, preço, observação
function montaP(dado, classe) {
    var p = document.createElement("p");
    p.classList.add(classe);
    p.textContent = dado;

    return p;
}

//função monta img
function montaimg(dado, classe) {
    var img = document.createElement("img");
    img.setAttribute("src", '/img/'+dado);




    return img;
}
