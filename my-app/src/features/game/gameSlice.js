import { createSlice } from "@reduxjs/toolkit";
import { getRandomWord, imgList } from "./gameAPI";
//initial state
const initialState = {
  img: imgList,
  currentImg: imgList[0],
  value: [],
  guessed: [],
  countLost: 0,
  countWin: 0,
  result: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  //reducers
  reducers: {
    //reducer to restart a game
    restartGame: (state) => {
      state.currentImg = imgList[0];
      state.value = [];
      state.guessed = [];
      state.countLost = 0;
      state.countWin = 0;
      state.result = "";
      setRandomWord(state);
    },
    //reducer to genarate word
    setRandomWord: (state) => {
      state.value = getRandomWord().split("");
      for (let i = 0; i < state.value.length; i++) {
        state.guessed.push("_");
      }
    },
    //reducer to check if user guessed letter
    checkGuessedLetter: (state, action) => {
      const letter = action.payload;
      const find = state.value.find((el) => el === letter);
      if (find) {
        for (let i = 0; i < state.value.length; i++) {
          if (state.value[i] === letter) state.guessed[i] = letter;
        }
        state.countWin += find.length;
      } else {
        if (state.countLost < state.img.length - 1) state.countLost += 1;
        state.currentImg = state.img[state.countLost];
      }
      if (state.countLost >= state.img.length - 1) {
        state.result = "Your lost this game";
      } else if (state.countWin >= state.guessed.length) {
        state.result = "Your win this game";
      }
    },
  },
});

export const { setRandomWord, checkGuessedLetter, restartGame } =
  gameSlice.actions;

// The functions that allows us to select guessed, currentImg, result from the state

export const selectGuessed = (state) => state.game.guessed;

export const selectImage = (state) => state.game.currentImg;

export const selectResult = (state) => state.game.result;

export default gameSlice.reducer;
