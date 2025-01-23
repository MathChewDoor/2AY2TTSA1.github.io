document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ['#2F4F4F', '#3A3B3C', '#1C1C1C', '#2B2B52', '#343434'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = '#FFFFFF'; // Ensure the text remains readable
});
