const textInput = document.getElementById('textInput');
const generateBtn = document.getElementById('generateBtn');
const qrcodeContainer = document.getElementById('qrcodeContainer');
const qrcodeImage = document.getElementById('qrcodeImage');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');

generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();

    if (text === '') {
        alert('Por favor, digite um texto ou URL.');
        return;
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;

    qrcodeImage.src = qrCodeUrl;
    downloadBtn.href = qrCodeUrl;

    // Remove qualquer classe de animação anterior
    qrcodeImage.classList.remove('fade-in');

    // Oculta temporariamente o container pra reiniciar a animação
    qrcodeContainer.classList.add('hidden');

    // Espera a imagem carregar antes de mostrar com animação
    qrcodeImage.onload = () => {
        qrcodeImage.classList.add('fade-in');
        qrcodeContainer.classList.remove('hidden');
    };
});

resetBtn.addEventListener('click', () => {
    textInput.value = '';  // Limpa o campo de texto
    qrcodeImage.src = '';  // Limpa o QR Code exibido
    downloadBtn.href = '#'; // Remove o link de download
    qrcodeContainer.classList.add('hidden'); // Esconde o QR Code
});
