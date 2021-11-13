// import logo from "./logo.svg";
// import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Text from "./Text";
import Alert from "./Alert";
import About from "./About";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const removeBodyClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-light')

  }
  const toggleMode = (cls) => {
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("enable dark mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("enable light mode", "success");
    }
  };

  return (
    <Router>
    <div className="App">
      
      <Navbar title="ravi mehta" link="hellow link" mode={mode} toggleMode={toggleMode}
      ></Navbar>
      <Alert name="ravi" alert={alert} />
        <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Text showAlert={showAlert} heading={`This is textarea form`} mode={mode}></Text>} />
      </Routes>      
    </div>
    </Router>
  );
}

export default App;
