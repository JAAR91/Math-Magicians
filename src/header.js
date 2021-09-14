import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Quote from './Quote';
import myCalculator from './components/Calculator';

const Header = () => {
  ReactDOM.render(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex flex-row justify-content-bettween">
          <button className="navbar-brand border-0 bg-transparent" type="button">Math Magicians</button>
          <div className="">
            <div className="navbar-nav" id="navbarLinks">
              <button className="nav-link active border-0 bg-transparent" type="button">Home</button>
              <button className="nav-link border-0 bg-transparent" type="button">Calculator</button>
              <button className="nav-link border-0 bg-transparent" type="button">Quote</button>
            </div>
          </div>
        </div>
      </nav>
      <div id="container" className="container" />
    </>,
    document.getElementById('root'),
  );

  const navbarLink = document.getElementById('navbarLinks');

  const activeLinks = (state) => {
    navbarLink.childNodes.forEach((link) => {
      if (link.textContent === state) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  navbarLink.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
      Home();
      activeLinks('Home');
    }

    if (e.target.textContent === 'Quote') {
      Quote();
      activeLinks('Quotes');
    }

    if (e.target.textContent === 'Calculator') {
      myCalculator();
      activeLinks('Calculator');
    }
  });
};

export default Header;
