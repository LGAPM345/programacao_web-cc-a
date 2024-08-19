let botaosub = document.getElementById("botao-sub");

botaosub.addEventListener("click", inserir);

function inserir() {
    let ElementoPlaneta = document.getElementById("planeta").value;
    console.log(ElementoPlaneta);
    let ElementoInstrumento = document.getElementById("instrumento").value;
    console.log(ElementoInstrumento);

    console.log(validaelemento(ElementoPlaneta));
    console.log(validaelemento(ElementoInstrumento));
}

    function  validaelemento(ElementoPlaneta){
        return /^[a-zA-Z\s+]+$/.test(ElementoPlaneta);
        
}
    function validaelemento(ElementoInstrumento){
        return /^[a-zA-Z\s+]+$/.test(ElementoInstrumento);
    }