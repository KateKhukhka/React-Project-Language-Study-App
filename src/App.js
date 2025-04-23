import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import CardContent from "./components/cardContent";
import Footer from "./components/footer";
import WordsTable from "./components/wordsTable";
import Missing from "./components/missing";
import "./components/css/buttons.css";
import cardData from "./components/cardData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<WordsTable />} />
          <Route path="/game" element={<CardContent cardData={cardData} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
