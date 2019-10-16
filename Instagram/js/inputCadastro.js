let boxNumero = document.querySelector("#box-input-numero");
let inputNumero = document.querySelector("#input-login-c");
let letrasNumero = document.querySelector("#form-numero");

let boxNome = document.querySelector("#box-input-nome");
let inputNome = document.querySelector("#input-nome-c");
let letrasNome = document.querySelector("#form-nome");

let boxNomeUsuario = document.querySelector("#box-input-usuario");
let inputNomeUsuario = document.querySelector("#input-user-c");
let letrasNomeUsuario = document.querySelector("#form-nome-usuario");

let boxSenha = document.querySelector("#box-input-senha-c");
let inputSenha = document.querySelector("#input-senha-c");
let letrasSenha = document.querySelector("#form-senha");
let mostrarSenha = document.querySelector("#mostrar");

function animacoes(box, input, letras, classe){
    box.addEventListener("click", function(){
        input.focus();
    })
    
    input.addEventListener("input", function(){
        input.classList.add("diminui-letra-input");
        letras.classList.add(classe);
    
        if (input.value == ""){
            input.classList.remove("diminui-letra-input");
            letras.classList.remove(classe);
        }

    })
    
    input.addEventListener("focus", function(){
        box.style.border = "1px solid gray";
    })
    input.addEventListener("focusout", function(){
        box.style.border = "1px solid rgb(239, 239, 239)";
    })

}

animacoes(boxNumero, inputNumero, letrasNumero, "letras-pequenas-15");
animacoes(boxNome, inputNome, letrasNome, "letras-pequenas-8");
animacoes(boxNomeUsuario, inputNomeUsuario, letrasNomeUsuario, "letras-pequenas-8");
animacoes(boxSenha, inputSenha, letrasSenha, "letras-pequenas-5");
inputSenha.addEventListener("input", function(){
    mostrarSenha.classList.add("aparecer");
    if (inputSenha.value == ""){
        mostrarSenha.classList.remove("aparecer");
    }
});