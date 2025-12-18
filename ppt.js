const choices = document.querySelectorAll(".choice");
const userSpan = document.getElementById("user");
const cpuSpan = document.getElementById("cpu");
const winner = document.getElementById("winner");
const resultBox = document.getElementById("result");
const choicesBox = document.getElementById("choices");
const retryBtn = document.getElementById("retry");

const options = ["pedra", "papel", "tesoura"];

choices.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.dataset.choice;
        const cpuChoice = options[Math.floor(Math.random() * 3)];

        userSpan.textContent = userChoice;
        cpuSpan.textContent = cpuChoice;

        winner.textContent = getWinner(userChoice, cpuChoice);

        // mostra resultado e desativa botões
        resultBox.style.display = "block";
        choicesBox.style.pointerEvents = "none";
        choicesBox.style.opacity = "0.4";
    });
});

function getWinner(user, cpu) {
    if (user === cpu) return "Empate";

    if (
        (user === "pedra" && cpu === "tesoura") ||
        (user === "papel" && cpu === "pedra") ||
        (user === "tesoura" && cpu === "papel")
    ) {
        return "Você venceu!";
    }

    return "A máquina venceu!";
}

retryBtn.addEventListener("click", () => {
    resultBox.style.display = "none";
    choicesBox.style.pointerEvents = "auto";
    choicesBox.style.opacity = "1";
});
