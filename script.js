const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Go to the romantic page
yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});

// Make the No button run away
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
