import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #131313;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;

  h2 {
    font-size: 2rem;
  }

  .thin {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>
        <span className="thin">my</span>restaurant
      </h2>
      <p>2021 all rights reserved</p>
    </FooterContainer>
  );
};

export default Footer;
