// script.js

// Função para adicionar um comentário
function adicionarComentario() {
    const comentarioInput = document.getElementById("comentario-input");
    const comentarioText = comentarioInput.value.trim();

    // Verificar se o campo de comentário não está vazio
    if (comentarioText !== "") {
        // Criar um novo elemento para o comentário
        const comentarioElement = document.createElement("div");
        comentarioElement.classList.add("comentario");

        // Adicionar o conteúdo do comentário
        comentarioElement.innerHTML = `
            <p>${comentarioText}</p>
            <div class="comentario-footer">Comentado agora</div>
        `;

        // Adicionar o novo comentário à lista de comentários
        const comentariosList = document.getElementById("comentarios-list");
        comentariosList.appendChild(comentarioElement);

        // Limpar o campo de comentário
        comentarioInput.value = "";
    } else {
        alert("Por favor, digite um comentário.");
    }
}
