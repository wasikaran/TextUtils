import React, { useState } from 'react';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import About from './About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('default');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert('Dark Mode has been enabled', 'success');
      setTheme('default');
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
      setTheme('default');
      document.title = 'texUtils Dark mode '
    }
  };

  const changeTheme = (color) => {
    setTheme(color);
    
    const colors = {
      green: '#e8f5e9',
      blue: '#e3f2fd',
      red: '#ffebee',
      default: mode === 'light' ? 'white' : '#121212'
    };
    
    document.body.style.backgroundColor = colors[color] || colors.default;
    showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} theme enabled`, 'success');
    
    if (color !== 'default') {
      setMode('light');
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
        changeTheme={changeTheme}
        theme={theme}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/Home" element={<TextForm showAlert={showAlert} mode={mode} theme={theme} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;