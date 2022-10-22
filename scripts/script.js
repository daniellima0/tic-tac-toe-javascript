'use strict';

// let num = 0;

// function convertDecToTer() {
// 	let quotient = num / 3;
// 	let remainder = num % 3;
// 	if (quotient == 0) {
// 		return '';
// 	} else {
// 		return convertDecToTer(quotient + remainder);
// 	}
// }

const Gameboard = (() => {
	let gameboard = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];

	// maybe put render method in this class

	return { gameboard };
})();

const Player = () => {
	return {};
};

let topPlayer = Player();
let bottomPlayer = Player();

const gameFlow = (() => {
	let isXNext = false;
	let turn = 'x';

	const alternateTurns = () => {
		if (isXNext) {
			turn = 'x';
			isXNext = false
		} else {
			turn = 'o';
			isXNext = true;
		}
	}

	const isGameOver = () => { }

	const endGame = () => { }

	const renderGameboard = () => {
		let gameboardDiv = document.querySelector('#gameboard');

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let spotDiv = document.createElement('div');
				spotDiv.className = 'spot';
				spotDiv.id = `${i}${j}`;
				spotDiv.addEventListener("click", placeMarker);
				gameboardDiv.append(spotDiv);
			}
		}
	};

	const placeMarker = e => {
		let spotDiv = document.getElementById(e.target.id);
		if (spotDiv.style.backgroundImage) return;
		spotDiv.style.backgroundImage = `url(../assets/${turn}.png)`;
		alternateTurns();
		if (isGameOver()) { endGame(); }
	};

	return { renderGameboard };
})();

gameFlow.renderGameboard();