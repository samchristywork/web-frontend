import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Subbar from './Subbar';
import Post from './Post';

import './App.css';
import './colors.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Navbar-border"></div>
        <Subbar />
        <Home />
        <Posts />
        <About />
        <Contact />
        <Tags />
      </div>
    </Router>
  );
}

const Home = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return <RecentPosts />;
  }

  return null;
};

const Posts = () => {
  const location = useLocation();

  if (location.pathname === '/posts') {
    return <RecentPosts />;
  }

  return null;
};

const About = () => {
  const location = useLocation();

  if (location.pathname === '/about') {
    return <button>About</button>;
  }

  return null;
};

const Contact = () => {
  const location = useLocation();

  if (location.pathname === '/contact') {
    return <button>Contact</button>;
  }

  return null;
};

const Tags = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const q = query.get('q');

  if (q) {
    return <p style={{color: "white"}}>{q}</p>;
  }

  return null;
};

const RecentPosts = () => {
  const location = useLocation();

  const post0=Post("2023-04-24");
  const post1=Post("2023-04-23");

  return <div>
    <br />
    {post0}
    {post1}
  </div>;
};

export default App;
