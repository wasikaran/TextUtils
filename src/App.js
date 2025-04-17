import React, { useState } from 'react';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import About from './About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = ()=> {
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
      document.body.classList.remove("bg-success")

  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-"+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'texUtils Dark mode '
      setInterval(()=> {
        document.title = 'texUtils is amazing '

      }, 2000)
      setInterval(()=> {
        document.title = 'texUtils is brilliant'

      }, 1500)
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'texUtils Dark mode '
    }
  };

  return (
    <>
    <Router>
      <Navbar 
        title="My App"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/Home" element={<TextForm showAlert={showAlert} mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;