import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
    

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
      {/* Home */}
      {/* Header */}

      {/* Banner */}
      {/* Search */}

      {/* Cards */}

      {/* Footer */}
      {/* Search page */}
    </div>
  );
}

export default App;
