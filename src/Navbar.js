import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  // Handler for theme changes
  const handleThemeChange = (color) => {
    props.changeTheme(color);
  };

  // Handler for dark mode toggle
  const handleModeChange = () => {
    props.toggleMode();
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/Home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">Home<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/About">{props.about}<span className="sr-only"></span></Link>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          {/* Green Theme Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input 
              className="form-check-input bg-success" 
              type="checkbox" 
              onChange={() => handleThemeChange('green')}
              checked={props.theme === 'green'}
              role="switch" 
              id="greenThemeSwitch"
            />
            <label className="form-check-label" htmlFor="greenThemeSwitch">Green</label>
          </div>

          {/* Blue Theme Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input 
              className="form-check-input bg-primary" 
              type="checkbox" 
              onChange={() => handleThemeChange('blue')}
              checked={props.theme === 'blue'}
              role="switch" 
              id="blueThemeSwitch"
            />
            <label className="form-check-label" htmlFor="blueThemeSwitch">Blue</label>
          </div>

          {/* Red Theme Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input 
              className="form-check-input bg-danger" 
              type="checkbox" 
              onChange={() => handleThemeChange('red')}
              checked={props.theme === 'red'}
              role="switch" 
              id="redThemeSwitch"
            />
            <label className="form-check-label" htmlFor="redThemeSwitch">Red</label>
          </div>

          {/* Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              onChange={handleModeChange}
              checked={props.mode === 'dark'}
              role="switch" 
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "set about",
  mode: "light",
  theme: "default"
};