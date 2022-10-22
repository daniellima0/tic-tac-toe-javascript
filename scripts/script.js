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
	let isXNext = true;
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
	};

	// const = checkEndOfRound = () => {}
	// const = checkGameOver = () => {}

	return { renderGameboard };
})();

gameFlow.renderGameboard();



// let first_space = document.querySelector('.spot:nth-child(1)');
// let xImg = document.createElement('img');
// xImg.src = './assets/x.png';
// xImg.id = 'x-image';
// first_space.append(xImg);

// let second_space = document.querySelector('.spot:nth-child(2)');
// let oImg = document.createElement('img');
// oImg.src = './assets/o.png';
// oImg.id = 'o-image';
// second_space.append(oImg);
