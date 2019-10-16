let boxLogin = document.querySelector("#box-input-login");
let inputLogin = document.querySelector("#input-login");
let letrasLogin = document.querySelector("#form-usuario");

let boxSenha = document.querySelector("#box-input-senha")
let inputSenha = document.querySelector("#input-senha");
let letrasSenha = document.querySelector("#form-senha");
let mostrarSenha = document.querySelector("#mostrar");

let btnEntrar = document.querySelector("#btn-entrar");


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
        if(inputSenha.value != "" && inputLogin.value != ""){
            btnEntrar.style.backgroundColor = "#3897f0";
            btnEntrar.style.border = "1px solid #3897f0";
            btnEntrar.onmouseover = function(){
                btnEntrar.style.cursor = "pointer";
            }
        }
        if(inputSenha.value == "" || inputLogin.value == ""){
            btnEntrar.style.backgroundColor = "#C1D9FE";
            btnEntrar.style.border = "1px solid #C1D9FE";
            btnEntrar.onmouseover = function(){
                btnEntrar.style.cursor = "default";
            }
        }

    })
    
    input.addEventListener("focus", function(){
        box.style.border = "1px solid gray";
    })
    input.addEventListener("focusout", function(){
        box.style.border = "1px solid rgb(239, 239, 239)";
    }) 
}

animacoes(boxLogin, inputLogin, letrasLogin, "letras-pequenas-25");

animacoes(boxSenha, inputSenha, letrasSenha, "letras-pequenas-5");
inputSenha.addEventListener("input", function(){
    mostrarSenha.classList.add("aparecer");
    if (inputSenha.value == ""){
        mostrarSenha.classList.remove("aparecer");
    }
});


