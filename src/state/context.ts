import { createContext } from "react";
import { LIVES } from "../config/constants";

export type AppContext = {
	dispQuesIndex: number;
	setDispQuesIndex: Function;
	gameOver: Boolean;
	setGameOver: Function;
	score: number;
	setScore: Function;
	lives: number;
	setLives: Function;
	isDark: Boolean;
	setIsDark: Function;
};

export const appContext = createContext<AppContext>({
	dispQuesIndex: 0,
	setDispQuesIndex: () => {},
	gameOver: false,
	setGameOver: () => {},
	score: 0,
	setScore: () => {},
	lives: LIVES,
	setLives: () => {},
	isDark: false,
	setIsDark: () => {},
});