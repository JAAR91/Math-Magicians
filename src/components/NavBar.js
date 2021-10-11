import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="panel-bg">
      <div className="d-flex flex-row">
        <ul className="d-flex flex-row align-items-center m-0 list-style-none p-0">
          <li className="mx-2">
            <p className="Bookstore-CMS">
              Space Travelers Hub
            </p>
          </li>
          {links.map((link) => (
            <li key={link.id} className="mx-2">
              <NavLink
                className="BOOKS text-decoration-none text-muted"
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
