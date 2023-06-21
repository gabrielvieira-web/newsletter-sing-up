const email = document.querySelector("[data-email]");
const botaoIgnorar = document.querySelector("[data-botao-ignorar]");

function exibiEmail() {
    const emailCadastrado = localStorage.getItem("email");
    email.innerHTML = emailCadastrado
}

exibiEmail();

botaoIgnorar.addEventListener("click", () => {
    window.location.href = '../index.html'
})