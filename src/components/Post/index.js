import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Card = styled.div`
  border: 0;
  margin: 2.5rem 0;
  border-radius: 5px;
  max-width: 600px;
`;

const Head = styled.h1`
  font-weight: 300;
`;

export default ({ post }) => (
  <Card>
    <Link to={post.frontmatter.path}>
      <Head>{post.frontmatter.title}</Head>
    </Link>

    <p>
      <b>{post.frontmatter.date}</b> - {post.excerpt}{" "}
    </p>
  </Card>
);
