document.addEventListener('DOMContentLoaded', function() {
    const comissaoForm = document.getElementById('comissao-form');
    if (comissaoForm) {
        comissaoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const produto = document.getElementById('produto').value;

            alert(`Pedido de Comissão Enviado!\nNome: ${nome}\nEmail: ${email}\nProduto: ${produto}`);

            comissaoForm.reset();
        });
    }

    const contatoForm = document.getElementById('contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            alert(`Mensagem Enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

            contatoForm.reset();
        });
    }
});
