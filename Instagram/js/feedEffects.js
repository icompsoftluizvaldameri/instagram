var select = document.querySelector.bind(document);

let pubBtn = select("#pub1");
let input1 = select("#adc-comment1");

input1.addEventListener("input", function(){
    pubBtn.style.opacity = "1";
    pubBtn.classList.add("pointer");

    if(input1.value == ""){
        pubBtn.style.opacity = ".3";
        pubBtn.classList.remove("pointer");
    }
});

let mais = select("#ver-mais1");
let paragrafo1 = select("#vmp1");
let pub1Box = select("#pub1-box");
let todosComents = select("#tc1");
let addComent1 = select("#ac1");
let coment1 = select("#comment1");
let coment2 = select("#comment2");
let tempo1 = select("#t1");

mais.addEventListener("click", function(){
    paragrafo1.classList.remove("display-off");
    mais.classList.add("display-off");
    pub1Box.style.height = "888px";
    todosComents.style.top = "8px";
    addComent1.style.top = "-27px";
    coment1.style.top = "-8px";
    coment2.style.top = "-11px";
    tempo1.style.top = "-37px";
})

let pubBtn2 = select("#pub2");
let input2 = select("#adc-comment2");

input2.addEventListener("input", function(){
    pubBtn2.style.opacity = "1";
    pubBtn2.classList.add("pointer");

    if(input2.value == ""){
        pubBtn2.style.opacity = ".3";
        pubBtn2.classList.remove("pointer");
    }
});


//---------------------------------------------------------------------------------------------------------------------------

let likePost1 = select("#li1");
let heartPost1 = select("#like-btn1");
let saveBtn = select("#save-btn1");

heartPost1.addEventListener("click", function(){
    likePost1.classList.remove("display-off");
    likePost1.classList.add("pop");
    saveBtn.style.left = "395px";
});

let likeComment1 = select("#lc1");
let heartComment1 = select("#hc1");
heartComment1.addEventListener("click", function(){
    likeComment1.classList.remove("display-off");
    likeComment1.classList.add("pop");
});
let likeComment2 = select("#lc2");
let heartComment2 = select("#hc2");
heartComment2.addEventListener("click", function(){
    likeComment2.classList.remove("display-off");
    likeComment2.classList.add("pop");
});


let likePost2 = select("#li2");
let heartPost2 = select("#like-btn2");
let saveBtn2 = select("#save-btn2");

heartPost2.addEventListener("click", function(){
    likePost2.classList.remove("display-off");
    likePost2.classList.add("pop");
    saveBtn2.style.left = "395px";
});

let likeComment3 = select("#lc3");
let heartComment3 = select("#hc3");
heartComment3.addEventListener("click", function(){
    likeComment3.classList.remove("display-off");
    likeComment3.classList.add("pop");
});
let likeComment4 = select("#lc4");
let heartComment4 = select("#hc4");
heartComment4.addEventListener("click", function(){
    likeComment4.classList.remove("display-off");
    likeComment4.classList.add("pop");
});

//----------------------------------------------------------------

let menuBtn = document.querySelectorAll(".menu");
let menu = select("#menu-box");
let tela = select("#tela");

menuBtn.forEach(botao => {
    botao.addEventListener("click", function(){
        menu.classList.remove("display-off");
        tela.classList.remove("display-off");
    })
})
tela.addEventListener("click", function(){
    menu.classList.add("display-off");
    tela.classList.add("display-off");
    
})

//-------------------------------------------------------------------

//let risco = select("#risco");
//let insta = select("#logo-img");
//let cabecalho = select("#cabecalho");
//
//if (document.html.scrollTop > 50) {
//    risco.classList.add("display-off");
//    insta.classList.add("display-off");
//    cabecalho.style.height = "53px";
//  }
//
//--------------------------------------------------------------------

let pesquisaBox = select("#pesquisa-box");
let busca = select("#pesquisa");
let placeholder = select("#busca");
let lupa = select("#lupa-box");

busca.addEventListener("focus", function(){
    pesquisaBox.style.backgroundColor = "white";
    placeholder.style.left = "26px";
    placeholder.style.top = "-23px";
    lupa.style.left = "-30px";
})
busca.addEventListener("focusout", function(){
    pesquisaBox.style.backgroundColor = "#fafafa";
    placeholder.style.left = "94px";
    placeholder.style.top = "-25px";
    lupa.style.left = "38px";
})