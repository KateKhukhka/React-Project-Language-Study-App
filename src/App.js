import "./App.css";
import Header from "./components/common/header";
import NavBar from "./components/navBar";
import CardContent from "./components/cardContent";
import Footer from "./components/common/footer";
import WordsTable from "./components/wordsTable";
import Missing from "./components/common/missing";
import "./components/css/buttons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/loading";
import Error from "./components/common/error";

import { useState, createContext, useEffect } from "react";

//создание контекста
const WordsContext = createContext();

function App() {
  let [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //получение данных с сервера
  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setWords(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <WordsContext.Provider value={{ words, setWords }}>
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={error ? <Error /> : loading ? <Loading /> : <WordsTable />} />
            <Route path="/game" element={error ? <Error /> : loading ? <Loading /> : <CardContent />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WordsContext.Provider>
  );
}

export { WordsContext, App };
