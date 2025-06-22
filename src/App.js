import "./App.css";
import Header from "./components/common/header";
import NavBar from "./components/common/navBar";
import CardContent from "./components/cardContent";
import Footer from "./components/common/footer";
import WordsTable from "./components/wordsTable";
import Missing from "./components/common/missing";
import "./components/css/buttons.css";
//import cardData from "./cardData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/loading";
import Error from "./components/common/error";

import { wordsStore } from "./stores/WordsStore.js";
import { observer } from "mobx-react-lite";
//import { useContext } from "react";

const App = observer(() => {
  //const words = wordsStore.words;
  const loading = wordsStore.loading;
  const error = wordsStore.error;
  return (
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
  );
});

export default App;
