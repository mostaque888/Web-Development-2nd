const facts = [
  "Our Solar System sits inside the Milky Way galaxy.",
  "The Milky Way is more than 100,000 light-years across.",
  "Mars has the largest volcano in the Solar System: Olympus Mons.",
  "Saturn is famous for its bright rings made of ice and rock.",
  "Jupiter is the largest planet in our Solar System."
];

const factButton = document.getElementById("fact-button");
const factOutput = document.getElementById("fact-output");

if (factButton && factOutput) {
  factButton.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factOutput.textContent = randomFact;
  });
}

const quizButton = document.getElementById("quiz-button");
const quizResult = document.getElementById("quiz-result");

if (quizButton && quizResult) {
  quizButton.addEventListener("click", () => {
    const selected = document.querySelector('input[name="mars-colour"]:checked');

    if (!selected) {
      quizResult.textContent = "Please choose an answer first.";
      return;
    }

    if (selected.value === "Red") {
      quizResult.textContent = "Correct. Mars is often called the red planet.";
    } else {
      quizResult.textContent = "Not quite. Mars is best known as the red planet.";
    }
  });
}
const jupiterQuizButton = document.getElementById("jupiter-quiz-button");
const jupiterQuizResult = document.getElementById("jupiter-quiz-result");

if (jupiterQuizButton && jupiterQuizResult) {
  jupiterQuizButton.addEventListener("click", function () {
    const selected = document.querySelector('input[name="jupiter-feature"]:checked');

    if (!selected) {
      jupiterQuizResult.textContent = "Please choose an answer first.";
      return;
    }

    if (selected.value === "Largest") {
      jupiterQuizResult.textContent = "Correct. Jupiter is best known for being the largest planet.";
    } else {
      jupiterQuizResult.textContent = "Not quite. Jupiter is best known as the largest planet in the Solar System.";
    }
  });
}
const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.classList.toggle("show");

    if (answer.classList.contains("show")) {
      this.textContent = "Hide answer";
    } else {
      this.textContent = "Show answer";
    }
  });
});