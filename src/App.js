import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//component
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
// context providers
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex justify-between flex-col h-screen">
          <NavBar />
          <main className="container mx-auto p-4">
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path = "/users/:login" element = {<User/>}/>
              <Route path="/*" element={<NotFound />} />
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
