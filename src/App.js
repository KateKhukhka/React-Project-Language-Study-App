import "./App.css";
import Header from "./components/common/header";
import NavBar from "./components/navBar";
import CardContent from "./components/cardContent";
import Footer from "./components/common/footer";
import WordsTable from "./components/wordsTable";
import Missing from "./components/common/missing";
import "./components/css/buttons.css";
import cardData from "./cardData";
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
