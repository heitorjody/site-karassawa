document.addEventListener('DOMContentLoaded', function () {
    const comissaoForm = document.getElementById('comissao-form');

    comissaoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const produto = document.getElementById('produto').value;

        alert(`Pedido de Comissão Enviado!\nNome: ${nome}\nEmail: ${email}\nProduto: ${produto}`);

        comissaoForm.reset();
    });
});
