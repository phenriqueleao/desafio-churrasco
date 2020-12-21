document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adicionar');
    const input = form.querySelector('input');
    const ul = document.getElementById('listaParticipantes');

    // Adiciona um participante
    function criarLi(text) {
        function createElement(elementName, property, value) {
            const element = document.createElement(elementName);
            element[property] = value;
            return element;
        }

        function appendToLi(elementName, property, value) {
            const element = createElement(elementName, property, value);
            li.appendChild(element);
        }

        const li = document.createElement('li');

        appendToLi('span', 'textContent', text);

        const beber = createElement('label', 'textContent', 'Vai beber?');
        
        const beberCheckbox = createElement('input', 'type', 'checkbox');
        beberCheckbox.className = 'bebida';

        beber.appendChild(beberCheckbox);
        li.appendChild(beber);

        const convidado = createElement('label', 'textContent', 'Vai levar convidado(a)?');

        const convidadoCheckbox = createElement('input', 'type', 'checkbox');
        convidadoCheckbox.className = 'comida';

        convidado.appendChild(convidadoCheckbox);
        li.appendChild(convidado);

        const convidadoBebida = createElement('label', 'textContent', 'Convidado(a) vai beber?');

        const convidadoBebidaCheckbox = createElement('input', 'type', 'checkbox');
        convidadoBebidaCheckbox.className = 'bebida';

        convidadoBebida.appendChild(convidadoBebidaCheckbox);
        li.appendChild(convidadoBebida);

        appendToLi('button', 'textContent', 'Editar');

        appendToLi('button', 'textContent', 'Remover');

        return li;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value === '') {
            input.placeholder = "Por favor adicione algum nome.";
            input.className = 'error';
        } else {
            const text = input.value;
            input.value = '';
            input.placeholder = "Inserir colaborador";
            input.classList.remove("error");
            const li = criarLi(text);
            ul.appendChild(li);
            valorTotal = valorTotal + 10;
            total.textContent = valorTotal;
            valorComida = valorComida + 10;
            totalComida.textContent = valorComida;
        }
    });

    // Faz as alterações dos checkboxes
    ul.addEventListener('change', (e) => {
        const checkbox = event.target;
        const checked = checkbox.checked;

        if (checked) {
            valorTotal = valorTotal + 10;
            total.textContent = valorTotal;
            if (checkbox.className === 'bebida') {
                valorBebida = valorBebida + 10;
                totalBebida.textContent = valorBebida;
            }
            if (checkbox.className === 'comida') {
                valorComida = valorComida + 10;
                totalComida.textContent = valorComida;
            }
        } else {
            valorTotal = valorTotal - 10;
            if (valorTotal < 0) {
                valorTotal = 0;
            }
            total.textContent = valorTotal;

            if (checkbox.className === 'bebida') {
                valorBebida = valorBebida - 10;
                totalBebida.textContent = valorBebida;
                if (valorBebida < 0) {
                    valorBebida = 0;
                }
            }

            if (checkbox.className === 'comida') {
                valorComida = valorComida - 10;
                totalComida.textContent = valorComida;
                if (valorComida < 0) {
                    valorComida = 0;
                }
            }
        }
    });

    // Remove um participante
    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            const li = e.target.parentNode;
            const ul = li.parentNode;

            if (button.textContent === 'Remover') {
                ul.removeChild(li);
                valorTotal = valorTotal - 40;
                if (valorTotal < 0) {
                    valorTotal = 0;
                }
                total.textContent = valorTotal;

                valorComida = valorComida - 40;
                if (valorComida < 0) {
                    valorComida = 0;
                }
                totalComida.textContent = valorComida;

                valorBebida = valorBebida - 40;
                if (valorBebida < 0) {
                    valorBebida = 0;
                }
                totalBebida.textContent = valorBebida;
            }
            else if (button.textContent === 'Editar') {
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
            }
            else if (button.textContent === 'save') {
                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                button.textContent = 'Editar';
            }
        }
    });

    let valorTotal = 0;
    let valorComida = 0;
    let valorBebida = 0;
    const totalPessoas = document.getElementsByTagName('li');
    const total = document.getElementById('total');
    const totalComida = document.getElementById('comida');
    const totalBebida = document.getElementById('bebida');

    console.log(valorTotal);
});