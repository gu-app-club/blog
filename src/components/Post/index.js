import React from "react";
import Link from "gatsby-link";

export default ({ post }) => (
  <div>
    <h1>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h1>
    <h2>{post.frontmatter.date}</h2>

    {post.excerpt}
  </div>
);
