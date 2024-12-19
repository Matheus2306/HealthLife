const entrar = document.getElementById("entrar-button");
const entrarLista = document.getElementById("entrar");

entrar.addEventListener("click", () => {
    entrarLista.classList.toggle("hidden");
});

const cadastrar = document.getElementById("cadastrar-button");
const cadastrarLista = document.getElementById("cadastro"); 

cadastrar.addEventListener("click", () => { 
    cadastrarLista.classList.toggle("hidden");
});