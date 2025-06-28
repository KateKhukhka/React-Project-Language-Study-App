import { makeAutoObservable, runInAction } from "mobx";
//import { createContext } from "react";

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
      runInAction(() => {
        this.words = data;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
        console.log();
      });
    }
  };

  //добавление
  //создание id для новых слов
  //id = Date.now();

  //создание и добавление нового слова в массив
  //tags_json = "";
  // newWord = { id, english, transcription, russian, tags, tags_json };

  //  addWords = async (newWord) => {
  //   try {
  //     const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
  //       method: "POST",
  //      body: JSON.stringify(newWord),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     if (!response.ok) throw new Error("Something went wrong ...");
  //      const data = await response.json();
  //      runInAction(() => {
  //        this.words.push(data);
  ////        this.error = null;
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.error = error;
  //     });
  //    }
  // };

  // updateWord = async (updatedWord) => {
  //   try {
  //    const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updatedWord),
  //     });
  //     if (!res.ok) throw new Error("Something went wrong ...");
  //     runInAction(() => {
  //      this.words = this.words.map((word) => (word.id === updatedWord.id ? updatedWord : word));
  //      this.error = null;
  //    });
  //  } catch (error) {
  //    //console.error("Ошибка при обновлении слова:", err);
  //    runInAction(() => {
  //      this.error = error;
  //    });
  //    throw error;
  //  }
  // };

  // deleteWord = async (id) => {
  //   try {
  //    const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
  //      method: "POST",
  //    });
  //   if (!res.ok) throw new Error("Something went wrong ...");
  //   runInAction(() => {
  //     this.words = this.words.filter((word) => word.id !== id);
  //     this.error = null;
  //    });
  //  } catch (error) {
  //    runInAction(() => {
  //      this.error = error;
  //    });
  //  }
  // };
}

export default WordsStore = new WordsStore();

//export const WordsStoreContext = createContext(WordsStore);
