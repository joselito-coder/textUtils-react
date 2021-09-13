// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  // state variable used for setting various dark modes
  const [mode, setMode] = useState('light');

  // State variables for alert component
  const [alert, setAlert] = useState(null)

  // State variable for keeping track of the button color that shall be used
  const [buttonColor, setButtonColor] = useState('primary');

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#001d3a';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", 'success')
      document.title = "TextUtils - dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", 'success');
      document.title = "TextUtils - light mode";
    }

  }

  return (
    <>
      {/* <Router> */}
      <Navbar setButtonColor={setButtonColor} title="TextUtils" aboutText="about" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />

      {/* <Switch> */}
      {/* <Route path="/about"> */}
      {/* <AboutUs />
          </Route> */}

      {/* <Route path="/"> */}
      <TextForm buttonColor={buttonColor} showAlert={showAlert} heading="Enter the text to be analyzed" mode={mode} />
      {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
