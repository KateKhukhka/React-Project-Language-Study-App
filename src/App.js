import "./App.css";
import Header from "./components/common/header";
import NavBar from "./components/navBar";
import CardContent from "./components/cardContent";
import Footer from "./components/common/footer";
import WordsTable from "./components/wordsTable";
import Missing from "./components/common/missing";
import "./components/css/buttons.css";
//import cardData from "./cardData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import { DataContextProvider } from "./components/context";

import { useState, createContext, useEffect } from "react";
//const WordsContext = createContext();
const WordsContext = createContext();

function App() {
  //const [words, setWords] = useState(cardData);
  let [words, setWords] = useState([]);
  console.log(words);

  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => {
        setWords((words = response));
        //setLoading(false);
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
            <Route path="/" element={<WordsTable />} />
            <Route
              path="/game"
              element={
                <CardContent
                //cardData={cardData}
                />
              }
            />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WordsContext.Provider>
  );
}

export { WordsContext, App };
//export default App;
