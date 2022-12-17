import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GithubFinderProvider } from "./Context/Github/GithubFinderContext";
import { AlertProvider } from "./Context/Alert/AlertContext";

import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Error404 from "./Components/Pages/Error404";
import UserProfile from "./Components/Pages/UserProfile";
import Alert from "./Components/Layout/Alert";


function App() {
  return (
    <GithubFinderProvider>
    <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
          <main>
          <Alert/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/*" element={<Error404/>} />
              <Route path="/not-found" element={<Error404/>} />
              <Route path="/user/:name" element={<UserProfile/>} />
          </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </AlertProvider>
    </GithubFinderProvider>
  );
}

export default App;
