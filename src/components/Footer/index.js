import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export default () => (
  <Footer>
    <hr />
    <p>
      Made with ❤️ by{" "}
      <a href="http://gumad.club/">
        Gonzaga University's Makers and Developers
      </a>
    </p>
  </Footer>
);
