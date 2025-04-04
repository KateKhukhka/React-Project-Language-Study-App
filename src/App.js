import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import WordsTable from "./components/words_table";
import "./components/css/buttons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <WordsTable />
      <Footer />
    </div>
  );
}

export default App;
