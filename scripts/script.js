'use strict';

const Gameboard = (() => {
	let gameboard = [
		['x', 'o', 'x'],
		['x', 'o', 'x'],
		['x', 'o', 'x'],
	];
	return { gameboard };
})();

const Player = () => {
	const click = () => {

	};
	return {click};
};

let topPlayer = Player();
let bottomPlayer = Player();

const displayController = (() => {
	const renderGameboard = () => {};
	return { renderGameboard };
})();

let gameboardDiv = document.querySelector("#gameboard");

for (let i = 0; i < 9; i++) {
	let spotDiv = document.createElement("div");
	spotDiv.className = "spot";
	gameboardDiv.append(spotDiv);
}

let teste = document.querySelector(".spot:nth-child(1)");
teste.style.backgroundColor = "black";