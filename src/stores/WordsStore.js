import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";

class WordsStore {
  words = [];
  loading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.fetchWords();
  }

  //получение данных с сервера
  fetchWords = async () => {
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      if (!response.ok) throw new Error("Something went wrong ...");
      const data = await response.json();
      //console.log(data);
      // runInAction(() => {
      this.words = data;
      // });
    } catch (error) {
      // runInAction(() => {
      this.error = error;
      // });
    } finally {
      // runInAction(() => {
      this.loading = false;
      // });
    }
  };

  //добавление
  //создание id для новых слов
  //  const id = Date.now();

  //создание и добавление нового слова в массив
  //  const tags_json = "";
  //  const newWord = { id, english, transcription, russian, tags, tags_json };

  //addWords = async () => {
  // try {
  //   const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
  //    method: "POST",
  //     body: JSON.stringify(newWord),
  //    headers: {
  //      "Content-type": "application/json; charset=UTF-8",
  //    },
  //  })
  //  const data = await response.json();runInAction(() => {
  //    this.words = data;
  //  });}
  //    .then((response) => {
  //      return response.json();
  //    })
  //    .then((data) => {
  //      console.log(data);
  //      setWords([newWord, ...words]);
  //    });
}

//const wordsStore = makeAutoObservable({
//  words: [],
////  word: {},
// loading: false,
// error: false,
//});

export const wordsStore = new WordsStore();
export const WordsStoreContext = createContext(wordsStore);
