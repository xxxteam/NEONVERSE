document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});

document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert('Кошелек подключен!');
    } else {
        alert('Установите MetaMask!');
    }
});

document.getElementById('buyNEO').addEventListener('click', async () => {
    let amount = document.getElementById('bnbAmount').value;
    if (!amount || amount <= 0) {
        alert("Введите сумму!");
        return;
    }
    alert(`Вы покупаете ${amount} BNB в NEO`);
    // Тут будет смарт-контракт покупки IDO
});
