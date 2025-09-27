(function () {
	"use strict";

	// Configurações do jogo
	const MIN = 1;
	const MAX = 100;
	const MAX_ATTEMPTS = 10;

	// Estado do jogo
	let secret = randomInt(MIN, MAX);
	let attemptsLeft = MAX_ATTEMPTS;
	let finished = false;

	// Elementos do DOM
	const guessInput = document.getElementById("guess");
	const submitBtn = document.getElementById("submitGuess");
	const restartBtn = document.getElementById("restart");
	const msg = document.getElementById("message");
	const tries = document.getElementById("triesLeft");
	const maxAttemptsSpan = document.getElementById("maxAttempts");

	// Inicializa UI
	maxAttemptsSpan.textContent = String(MAX_ATTEMPTS);
	updateTries();
	setMessage("Digite um número e clique em Chutar.", "");

	// Listeners
	submitBtn.addEventListener("click", onSubmit);
	restartBtn.addEventListener("click", resetGame);
	guessInput.addEventListener("keydown", (e) => {
		if (e.key === "Enter") onSubmit();
	});

	function onSubmit() {
		if (finished) return;

		const value = parseInt(guessInput.value, 10);
		if (Number.isNaN(value)) {
			setMessage("Por favor, digite um número válido.", "error");
			return;
		}

		if (value < MIN || value > MAX) {
			setMessage(`O número precisa estar entre ${MIN} e ${MAX}.`, "error");
			return;
		}

		// Consome uma tentativa
		attemptsLeft--;

		if (value === secret) {
			setMessage(`Você acertou! O número secreto era ${secret}.`, "success");
			endGame(true);
			return;
		}

		if (attemptsLeft <= 0) {
			setMessage(`Você perdeu! O número secreto era ${secret}.`, "error");
			endGame(false);
			return;
		}

		if (value < secret) {
			setMessage("O número secreto é maior.", "hint");
		} else {
			setMessage("O número secreto é menor.", "hint");
		}

		updateTries();
		clearInput();
	}

	function endGame(won) {
		finished = true;
		updateTries();
		submitBtn.disabled = true;
		guessInput.disabled = true;
		restartBtn.hidden = false;
		restartBtn.focus();
	}

	function resetGame() {
		secret = randomInt(MIN, MAX);
		attemptsLeft = MAX_ATTEMPTS;
		finished = false;
		guessInput.value = "";
		submitBtn.disabled = false;
		guessInput.disabled = false;
		restartBtn.hidden = true;
		setMessage("Novo jogo! Digite um número e clique em Chutar.", "");
		updateTries();
		guessInput.focus();
	}

	function updateTries() {
		tries.innerHTML = `Tentativas restantes: <strong>${attemptsLeft}</strong>`;
	}

	function setMessage(text, type) {
		msg.textContent = text;
		msg.classList.remove("success", "hint", "error");
		if (type) msg.classList.add(type);
	}

	function clearInput() {
		guessInput.value = "";
		guessInput.focus();
	}

	function randomInt(min, max) {
		// Inclusivo em min e max
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
})();
