document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ['#F0E68C', '#ADD8E6', '#FFE4B5', '#FFD700', '#E0FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = '#000000';
});
