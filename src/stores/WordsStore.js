import { makeAutoObservable, runInAction } from "mobx";
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

  //добавление нового слова в массив
  addWords = async (newWord) => {
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        body: JSON.stringify(newWord),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) throw new Error("Something went wrong ...");
      const data = await response.json();
      runInAction(() => {
        this.words.push(data);
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    }
  };
  
//удаление слова
  deleteWord = async (id) => {
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Something went wrong ...");
      runInAction(() => {
        this.words = this.words.filter((word) => word.id !== id);
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    }
  };
}

export default WordsStore = new WordsStore();
