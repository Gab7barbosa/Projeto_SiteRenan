// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <title>Formulário Simples</title>
// </head>
// <body>

//     <h2>Formulário de Contato</h2>

//     <form id="meuFormulario">
//         <label>Nome:</label><br>
//         <input type="text" id="nome" required><br><br>

//         <label>Email:</label><br>
//         <input type="email" id="email" required><br><br>

//         <label>Mensagem:</label><br>
//         <textarea id="mensagem" required></textarea><br><br>

//         <button type="submit">Enviar</button>
//     </form>

//     <p id="resultado"></p>

//     <script>
//         // Captura o formulário
//         const form = document.getElementById("meuFormulario");

//         form.addEventListener("submit", function(event){
//             event.preventDefault(); // Impede o envio padrão

//             // Pega os valores dos campos
//             const nome = document.getElementById("nome").value;
//             const email = document.getElementById("email").value;
//             const mensagem = document.getElementById("mensagem").value;

//             // Exibe o resultado
//             document.getElementById("resultado").innerText =
//                 "Obrigado, " + nome + "! Sua mensagem foi enviada.";
//         });
//     </script>

// </body>
// </html>



// Botão

// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <title>Botão que Exibe Imagem</title>
// </head>
// <body>

//     <button onclick="mostrarImagem()">Clique para mostrar a imagem</button>

//     <br><br>

//     <!-- Área onde a imagem aparecerá -->
//     <img id="minhaImagem" src="" style="width:200px; display:none;">

//     <script>
//         function mostrarImagem() {
//             const img = document.getElementById("minhaImagem");
//             img.src = "https://via.placeholder.com/300"; // link da imagem
//             img.style.display = "block"; // mostra a imagem
//         }
//     </script>

// </body>
// </html>
