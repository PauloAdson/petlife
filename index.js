var elementosDoubt = document.querySelectorAll('.doubt');

elementosDoubt.forEach(function (doubt) {
    doubt.addEventListener('click', function () {
        doubt.classList.toggle('ativa');
        
        // Seleciona a seta associada à dúvida clicada
        var arrow = doubt.querySelector('.arrow');
        arrow.classList.toggle('up-arrow');
    })
})