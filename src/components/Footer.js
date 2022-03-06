import React from "react";
import styled from "styled-components";

const Footer = () => {
  const DIV = styled.div`
    position: fixed;
    bottom: 30px;
    margin-left: 20px;
  `;

  const LINK = styled.a`
    color: blue;
    text-decoration: underline;
  `;
  return (
    <DIV>
      © Pratham Bhagat. Inspired by
      <LINK href="https://manassaloi.com/"> Manas J. Saloi</LINK>
    </DIV>
  );
};

export default Footer;
