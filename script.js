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
