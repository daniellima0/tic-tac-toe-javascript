'use strict';

let num = 0;

function convertDecToTer() {
	let quotient = num / 3;
	let remainder = num % 3;
	if (quotient == 0) {
		return '';
	} else {
		return convertDecToTer(quotient + remainder);
	}
}

const Gameboard = (() => {
	let gameboard = [
		['x', 'o', 'x'],
		['x', 'o', 'x'],
		['x', 'o', 'x'],
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
	// maybe put createGameboardDiv and renderGameboard methods as create and render methods on Gameboard class

	const createGameboardDiv = () => {
		let gameboardDiv = document.querySelector('#gameboard');

		for (let i = 0; i < 9; i++) {
			let spotDiv = document.createElement('div');
			spotDiv.className = 'spot';
			console.log(convertDecToTer(0));
			spotDiv.id = `${0}${0}`;
			gameboardDiv.append(spotDiv);
		}
	};

	const renderGameboard = () => {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let square = document.getElementById(`${i}${j}`);
				let symbol = document.createElement('img');
				symbol.src = `./assets/${Gameboard.gameboard[i][j]}.png`;
				symbol.className = `${Gameboard.gameboard[i][j]}-image`;
				square.append(symbol);
			}
		}
	};

	// const = checkEndOfRound = () => {}
	// const = checkGameOver = () => {}

	return { renderGameboard, createGameboardDiv };
})();

gameFlow.createGameboardDiv();
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
