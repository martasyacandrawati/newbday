function showCake() {
    document.getElementById('showCakeBtn').style.display = 'none';
    const cakeContainer = document.getElementById('cakeContainer');
    cakeContainer.style.display = 'flex';
    document.getElementById('birthdayMusic').play();
}
