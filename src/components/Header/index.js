import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Bar = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 1.5rem 1rem;
`;

const HeaderLogo = styled.h1`
  margin: 0;
`;

const Header = ({ title }) => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <Bar>
      <HeaderLogo>
        <Link
          to="/"
          style={{
            textDecoration: "none"
          }}
        >
          {title}
        </Link>
      </HeaderLogo>
    </Bar>
  </div>
);

export default Header;
