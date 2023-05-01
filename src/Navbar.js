import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Searchbar from './Searchbar';

import './Navbar.css';
import './colors.css';

const Navbar = () => {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Perform your search logic here
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" viewBox="0 0 960 960"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>
            <span className="navbar-item-label">Home</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" viewBox="0 0 960 960"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680V400H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"/></svg>
            <span className="navbar-item-label">Projects</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/posts" className="navbar-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" viewBox="0 0 960 960"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Zm183 470 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/></svg>
            <span className="navbar-item-label">Posts</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" viewBox="0 0 960 960"><path d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
            <span className="navbar-item-label">About</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" viewBox="0 0 960 960"><path d="M480 656q33 0 56.5-23.5T560 576q0-33-23.5-56.5T480 496q-33 0-56.5 23.5T400 576q0 33 23.5 56.5T480 656ZM320 816h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369 719q-23 10-36 30t-13 44v23Zm420 160H220q-24 0-42-18t-18-42V236q0-24 18-42t42-18h341l239 239v501q0 24-18 42t-42 18Zm0-60V442L534 236H220v680h520Zm-520 0V236v680Z"/></svg>
            <span className="navbar-item-label">Contact</span>
          </Link>
        </li>
      </ul>
      <span className="navbar-banner">Code Like Nobody Is Watching</span>
      <ul className="navbar-menu-right">
        <li className="navbar-item" style={{width: "3rem"}}>
          <span style={{position: "relative"}}>
            <span style={{position: "absolute", top: "80%", left: "-0.5rem"}}>
              <a href="/rss.xml"><img className="navbar-image" src="./images/rss.svg"></img></a>
            </span>
          </span>
        </li>
        <li className="navbar-item">
          <a className="navbar-item-link" style={{padding:"1rem"}} href="/gpg.txt">GPG</a>
        </li>
        <li className="navbar-search">
          <Searchbar onSearch={handleSearch} />
        </li>
        <li className="navbar-item">
          <Link to="https://github.com/samchristywork" className="navbar-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 32 26"><path fill="white" d="M17.8 20.6c.4-.1.8-.1 1.2-.2 1.2-.3 2.2-.9 2.7-2 .6-1.2.7-2.4.4-3.7-.1-.6-.4-1-.8-1.5-.1-.1-.1-.2-.1-.3.2-.8.2-1.5-.1-2.3 0-.1-.1-.2-.3-.2-.5 0-.9.2-1.3.4s-.7.4-1 .6c-.1.1-.2.1-.3.1-1.6-.4-3.1-.4-4.7 0-.1 0-.2 0-.3-.1-.7-.4-1.3-.8-2.1-.9-.5-.1-.5-.1-.6.4-.2.7-.2 1.4 0 2.1v.2c-.9 1-1.1 2.3-.9 3.5.1.4.1.7.2 1.1.5 1.4 1.5 2.2 3 2.6.4.1.8.2 1.3.3-.3.3-.5.8-.6 1.2 0 .1-.1.1-.1.1-1 .4-2.1.3-2.8-.8-.3-.5-.7-.9-1.4-1h-.5c-.2 0-.2.2-.1.3l.2.2c.5.3.9.8 1.1 1.4.4.9 1.1 1.3 2.1 1.4.4 0 .9 0 1.4-.1v1.9c0 .3-.3.5-.7.4-.8-.3-1.6-.7-2.4-1.2-3-2.1-4.6-5-4.4-8.7.2-4.6 3.6-8.3 8.1-9.2 5.2-1 10.2 2.2 11.6 7.3 1.3 5-1.6 10.2-6.4 11.8-.5.2-.8 0-.8-.6v-2.4c.1-.8 0-1.5-.6-2.1z"/></svg>
            <span className="navbar-item-label">GitHub</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
