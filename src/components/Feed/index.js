import React from "react";
import Link from "gatsby-link";
import PostPreview from "../PostPreview";
import Footer from "../Footer";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts.map(({ node: post }) => {
        const key = post.frontmatter.title + post.frontmatter.date;
        return <PostPreview key={key} post={post} />;
      })}
      <Footer />
    </div>
  );
};
