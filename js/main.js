const formulario = document.querySelector("[data-formulario]");
const email = document.querySelector("[data-email]");
const botaoEnviar = document.querySelector("[data-botao-enviar]");
const campoDeErro = document.querySelector("[data-mensagem-erro]");
const imagem = document.querySelector("[data-imagem]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    localStorage.setItem("email", email.value);

    window.location.href = '../pages/sucesso-cadastro.html';
})

email.addEventListener("blur", () => {

    if (email.validity.valid == true) {
        campoDeErro.textContent = "";
        email.classList.remove("estado-de-erro")
    }

    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if (email.validity[erro]) {
            mensagem = mensagens[email.name][erro];
            campoDeErro.textContent = mensagem;
            email.classList.add("estado-de-erro");
        }
    })
})

email.addEventListener("invalid", evento => evento.preventDefault());

const tiposDeErro = [
    'valueMissing', //campo vazio
    'typeMismatch', //quando o tipo que eu coloquei no elemento não tá combinando com o dado que o usuário está inserindo. 
    'PatternMismatch', //quando não segue o padrão da expressão regular
    'tooShort', //minLength, quando não obedece o tamanho minimo proposto
    'customError' //erros customizados que criamos
]

const mensagens = {
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio",
        typeMismatch: "Por favor, preencha um email válido",
        tooShort: "Por favor, preencha um e-mail válido"
    }
}