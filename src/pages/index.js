import React from "react";
import Link from "gatsby-link";
import Post from "../components/Post";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({ node: post }) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
            author_link
          }
        }
      }
    }
  }
`;
