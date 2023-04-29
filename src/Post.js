import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './colors.css';
import './Post.css';

const Post = (id) => {
  const [show, setShow] = useState(true)

  const click = () => {
    show ? setShow(false) : setShow(true);
  };

  const [title, setTitle] = useState('title');
  const [date, setDate] = useState('date');
  const [tags, setTags] = useState('tags');
  const [content, setContent] = useState('content');

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
        setTitle(response.data.message.split('\n')[0].split(":")[1]);
        setDate(response.data.message.split('\n')[1].split(":").splice(1).join(":"));
        setTags(response.data.message.split('\n')[2].split(":")[1].split(","));
        setContent(response.data.message.split('\n').splice(3).join('\n'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMessage();
  }, []);

  return (<div className="post">
          <div className="post-bar" onClick={click}>
    {date}
            <span className="post-minimize">
              —
            </span>
          </div>
          <header className="post-header">
            {title}
          </header>
    {show && (<div className="post-content">
          <hr />
          <div className="post-tags">
            <Link className="post-tags-item" to={"/tags?q="+tags[0]}>{tags[0]}</Link>
            <Link className="post-tags-item" to={"/tags?q="+tags[1]}>{tags[1]}</Link>
            <Link className="post-tags-item" to={"/tags?q="+tags[2]}>{tags[2]}</Link>
          </div>
          <div dangerouslySetInnerHTML={{
            __html: content,
          }}>
          </div>
          </div>)}
        </div>);
}

export default Post;
