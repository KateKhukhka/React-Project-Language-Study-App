import "./App.css";
import Header from "./components/header";
import CardContent from "./components/cardContent";
import Footer from "./components/footer";
import WordsTable from "./components/wordsTable";
import "./components/css/buttons.css";
import cardData from "./components/cardData";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContent cardData={cardData} />
      <WordsTable />
      <Footer />
    </div>
  );
}

export default App;
