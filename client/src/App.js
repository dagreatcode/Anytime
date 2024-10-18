import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Profile from "./containers/Profile/Profile";
import Contact from "./containers/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import './App.css'; // Create a CSS file for app-wide styles

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content-wrap">
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Service" element={<Profile />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
