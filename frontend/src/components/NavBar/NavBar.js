import React,{useRef} from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(){

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <a href='#about'>About</a>
        </li>
        {/* <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/user/signup">Signup</Link>
        </li>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
        <li>
          <Link to="/user/dashboard">Dashboard</Link>
        </li> */}
      </ul>
    </nav>
  );

}