import React from 'react';
import logo from './IconeTwitch.svg';
import search from './Search.svg';
import menuIco from './MenuIco.svg';

function Header() {
  return (
    <div>
      <nav className="headerTop">
        <ul className="listeMenu">
          <li className="navLinks">
            <img src={logo} alt="logo twitch" className="logo" />
          </li>
          <li className="navLinks">
            Top Games
          </li>
          <li className="navLinks">
            Top Streams
          </li>
          <li className="navLinks">
            <form className="formSubmit">
              <input type="text" className="inputSearch" />
              <button type="submit">
                <img src={search} alt="icone logo" className="searchLogo" />
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="menuResBtn">
        <img src={menuIco} alt="icone menu responsive" className="menuIco" />
      </div>
    </div>
  )
}
export default Header;
