const TEMA = document.getElementById("tema");
const LAMPADA_TEMA = document.querySelector("#tema");

TEMA.addEventListener("click", () =>
{
    document.body.classList.toggle("temaEscuro");
    atualizarEstiloRespostaApi();
    mudaLampadaTema();
    atualizarLocalStorage();
});

function atualizarLocalStorage() {
    const temaAtual = document.body.classList.contains("temaEscuro") ? "escuro" : "claro";
    localStorage.setItem("tema", temaAtual);
}

document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("temaEscuro");
        atualizarEstiloRespostaApi();
        mudaLampadaTema();
    }
});


function atualizarEstiloRespostaApi() {
    const RESPOSTA_API = document.querySelectorAll(".respostaApi");
    const temaEscuroAtivo = document.body.classList.contains("temaEscuro");

    RESPOSTA_API.forEach(element => {
        if (temaEscuroAtivo) {
            element.classList.add("respostaApiEscuro");
        } else {
            element.classList.remove("respostaApiEscuro");
        }
    });
}

function mudaLampadaTema(){
    if(document.body.classList.contains("temaEscuro"))
    {
        LAMPADA_TEMA.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/icons/lightbulb.svg";
        LAMPADA_TEMA.style.filter = "brightness(0) invert(1)";
    }
    else
    {
        LAMPADA_TEMA.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/icons/lightbulb-fill.svg";
        LAMPADA_TEMA.style.filter = "";
    }
}