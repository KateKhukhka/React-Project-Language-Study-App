import "./App.css";
import Header from "./components/header";
import CardContent from "./components/cardContent";
import Footer from "./components/footer";
import WordsTable from "./components/wordsTable";
import "./components/css/buttons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContent />
      <WordsTable />
      <Footer />
    </div>
  );
}

export default App;
