import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../components/Styles/Home.css";

const Home = () => {
  const LINK = styled.a`
    color: blue;
    text-decoration: underline;
  `;

  // Add Social Icons
  return (
    <div className="bio">
      <h4>👋, I am Pratham Bhagat.</h4>
      <ul>
        <li>Computer Science' 2024</li>
        <li>
          I spend most of my time on{" "}
          {
            <Link to="/summaries">
              <LINK>reading</LINK>
            </Link>
          }
          ,
          <Link to="/blogs">
            <LINK> writing</LINK>
          </Link>{" "}
          ,
          <Link to="/projects">
            <LINK> programming</LINK>
          </Link>{" "}
          or hanging out with friends.
        </li>
        <li>
          Roles that excites me: Full-stack development, Technical Writing,
          Product Management
        </li>
        <li>I play Football & Badminton on weekends. Siuuuu</li>
      </ul>
      <p>Thanks for checking out. Have a great day 🤗</p>
    </div>
  );
};

export default Home;
