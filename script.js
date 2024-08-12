let botaosub = document.getElementById("botao-sub");

botaosub.addEventListener("click", submeter);

function submeter() {
    let ElementoPlaneta = document.getElementById("planeta").value;
    console.log(ElementoPlaneta);
    let ElementoInstrumento = document.getElementById("instrumento").value;
    console.log(ElementoInstrumento);
}