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
import WordsStore from "./stores/WordsStore";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const loading = WordsStore.loading;
  const error = WordsStore.error;
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
