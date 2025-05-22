let contar = 0;
const maximo = 5;
const uwurray = ['div 1', 'div 2', 'div 3', 'div 4', 'div 5'];
document.getElementById('botoncito').addEventListener('click', function () {
    if (contar < maximo) {
        const divgod = document.createElement('div');
        divgod.textContent = uwurray[contar];
        document.getElementById('divsito').appendChild(divgod);
        divgod.className = 'divpro';
        contar++;
    }
})