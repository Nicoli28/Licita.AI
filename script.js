// const uploadLabel = document.querySelector('.upload-label');
const fileInput = document.getElementById('file-input');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const fileNameDisplay = document.getElementById('file-name');
const fileNameDisplaya = document.getElementById('file-name-analise');
const deleteBtn = document.getElementById('delete-btn-chat-livre');
const deleteBtna = document.getElementById('delete-btn-analise');

// Quando um arquivo for selecionado
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileNameDisplay.textContent = `Arquivo: ${file.name}`;
        deleteBtn.style.display = 'inline-block'; // Exibe o botão de lixeira
    }
});

// Quando o botão de lixeira for clicado
deleteBtn.addEventListener('click', () => {
    fileInput.value = ''; // Limpa o input de arquivo
    fileNameDisplay.textContent = ''; // Limpa o texto do nome do arquivo
    deleteBtn.style.display = 'none'; // Oculta o botão de lixeira
});

// // Envia a mensagem (para fins de exemplo, apenas imprime no console)
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
});

messageInput.addEventListener('keyup',(e)=>{
        if(e.key === 'Enter'){
            console.log('Enter')
        }
})

document.getElementById('file-input-analise').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileNameDisplaya = document.getElementById('file-name-analise');
    const deleteBtna = document.getElementById('delete-btn-analise');

    if (file) {
        fileNameDisplaya.textContent = `Arquivo: ${file.name}`;
        deleteBtna.style.display = 'inline-block'; // Exibir o botão de deletar
    }
});

document.getElementById('delete-btn-analise').addEventListener('click', function() {
    const fileNameDisplaya = document.getElementById('file-name-analise');
    const deleteBtna = document.getElementById('delete-btn-analise');
    const fileInput = document.getElementById('file-input-analise');

});

    // Quando o botão de lixeira for clicado
deleteBtna.addEventListener('click', () => {
    fileInput.value = ''; // Limpa o input de arquivo
    fileNameDisplaya.textContent = ''; // Limpa o texto do nome do arquivo
    deleteBtna.style.display = 'none'; // Oculta o botão de lixeira

});