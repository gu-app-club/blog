import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Title } from "../UI/typography";

const Card = styled.div`
  border: 0;
  margin: 2.5rem 0;
  border-radius: 5px;
  max-width: 700px;
`;

export default ({ post }) => (
  <Card>
    <Link to={post.frontmatter.path}>
      <Title>{post.frontmatter.title}</Title>
    </Link>

    <p>
      <b>{post.frontmatter.date}</b> - {post.excerpt}{" "}
    </p>
  </Card>
);
