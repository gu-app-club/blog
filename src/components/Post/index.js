import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Card = styled.div`
  border: 0;
  margin: 2.5rem 0;
  border-radius: 5px;
  max-width: 600px;
`;

export default ({ post }) => (
  <Card>
    <h1>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h1>

    <p>
      <b>{post.frontmatter.date}</b> - {post.excerpt}{" "}
    </p>
  </Card>
);
