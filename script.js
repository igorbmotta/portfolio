document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'file:///C:/Users/igorb/OneDrive/Documentos/cv-igormotta.pdf'; // Insira o caminho para o seu currículo
    link.download = 'cv-igormotta.pdf'; // Define o nome do arquivo a ser baixado
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('entrarContato').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'mailto:igorbmotta17@gmail.com'; // Insira o caminho para o seu currículo
    link.download = 'cv-igormotta.pdf'; // Define o nome do arquivo a ser baixado
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const modoEscuroCheckbox = document.getElementById('modoEscuro');
const body = document.body;

modoEscuroCheckbox.addEventListener('change', function () {
     if (this.checked) {
        // Modo Escuro
        body.classList.add('modo-escuro');
    } else {
        // Modo Claro
        body.classList.remove('modo-escuro');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const links = document.querySelectorAll('.sidebar a');

    // Event listener para fechar a barra lateral ao clicar fora dela
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('.sidebar') && !target.closest('.menu-btn')) {
            sidebar.classList.remove('active');
        }
    });
    // Event listener para o botão do menu
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Event listener para os links da barra lateral
    links.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });
});


    
    

