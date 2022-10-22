'use strict';

const Gameboard = (() => {
	let gameboard = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];

	const render = () => {
		let gameboardDiv = document.querySelector('#gameboard');

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let spotDiv = document.createElement('div');
				spotDiv.className = 'spot';
				spotDiv.id = `${i}${j}`;
				spotDiv.addEventListener("click", (e) => {
					if (gameFlow.currentTurn == 'x') {
						topPlayer.placeMarker(e);
					} else if (gameFlow.currentTurn == 'o') {
						bottomPlayer.placeMarker(e);
					}
				});
				gameboardDiv.append(spotDiv);
			}
		}
	};

	return { gameboard, render };
})();

const Player = () => {
	const placeMarker = e => {
		let spotDiv = document.getElementById(e.target.id);
		if (spotDiv.style.backgroundImage) return;
		spotDiv.style.backgroundImage = `url(../assets/${gameFlow.currentTurn}.png)`;
		Gameboard.gameboard[e.target.id.slice(0, 1)][e.target.id.slice(1, 2)] = gameFlow.currentTurn;
		gameFlow.alternateTurns();
		gameFlow.checkEndOfGame();
	};

	return { placeMarker };
};

let topPlayer = Player();
let bottomPlayer = Player();

const gameFlow = (() => {
	this.currentTurn = 'x';

	const alternateTurns = function () {
		if (this.currentTurn == 'x') {
			this.currentTurn = 'o';
		} else if (this.currentTurn == 'o') {
			this.currentTurn = 'x';
		}
	}

	const isGameOver = () => {
		let x = Gameboard.gameboard;

		let winners = new Set();

		// columns check
		for (let i = 0; i < 3; i++) {
			if (x[0][i] !== "" && (new Set([x[0][i], x[1][i], x[2][i]])).size === 1) {
				winners.add(x[0][i]);
			}
		}

		// rows check
		for (let i = 0; i < 3; i++) {
			if (x[i][0] !== "" && (new Set(x[i])).size === 1) {
				winners.add(x[i][0]);
			}
		}

		// diagonals check
		if (x[1][1] !== "" && ((new Set([x[0][0], x[1][1], x[2][2]])).size === 1 || (new Set([x[0][2], x[1][1], x[2][0]])).size === 1)) {
			winners.add(x[1][1]);
		}

		if (winners.size === 2) {
			return "error";
		}

		if (winners.size === 0) {
			// completion check
			if (x.every(y => y.every(z => z))) {
				return "draw";
			}

			return "incomplete";
		}

		return winners.values().next().value;
	}


	const endGame = (result) => {
		let spots = document.querySelectorAll('.spot');
		for (let i = 0; i < 9; i++) {
			spots[i].style.pointerEvents = "none";
		}

		let mainDiv = document.querySelector('main');
		let resultMessage = document.createElement('h2');
		if (result == "draw") {
			resultMessage.textContent = `It's a draw!`;
		} else {
			resultMessage.textContent = `   ${result} won!   `;
		}
		resultMessage.id = 'result-message';
		mainDiv.append(resultMessage);
	}

	const checkEndOfGame = () => {
		let result = isGameOver();
		if (result == 'x' || result == 'o' || result == 'draw') {
			endGame(result);
		}
	}

	return { currentTurn, alternateTurns, checkEndOfGame };
})();

Gameboard.render();