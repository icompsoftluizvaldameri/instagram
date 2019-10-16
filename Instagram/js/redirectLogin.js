let btnCadastrar = document.querySelector("#btn-cadastrar");
let input = document.querySelector("#input-login");

btnCadastrar.addEventListener("click", function(){
    window.location.href = "../html/cadastro.html"
});

input.addEventListener("input", function(){
    if(input.value != ""){
        btnEntrar.addEventListener("click", function(){
            window.location.href = "../html/feed.html";
        })
    }
});