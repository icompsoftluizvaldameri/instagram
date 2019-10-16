let click = 0;

mostrarSenha.addEventListener("click", function(){
    click ++;
    if (click == 1){
        inputSenha.type = "text";
    }else if (click == 2){
        inputSenha.type = "password";
        click = 0;
    }
});