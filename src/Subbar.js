import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Searchbar from './Searchbar';

import './colors.css';
import './Subbar.css';

const Subbar = () => {
  const [tagbarlist, setMessage] = useState('');

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await axios.get('http://localhost:8080/api/tags');
        let data=response.data.message.split("\n")
        data.length=10;

        data=data.map((item, i) => {
          const tagstring = "/tags?q=" + item;
          return (<li key={i} className="subbar-item">
            <Link to={tagstring}>{item}</Link>
          </li>)
        })

        let end=(<li key="ellipsis" className="subbar-item">
            <Link to="/alltags" className="subbar-item">...</Link>
          </li>)

        setMessage(<ul className="subbar-menu">
            {data}
            {end}
          </ul>);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMessage();
  }, []);

  return (
    <nav className="subbar">
      {tagbarlist}
    </nav>
  );
};

export default Subbar;
