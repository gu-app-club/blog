import React from "react";
import Link from "gatsby-link";
import Post from "../components/Post";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({ node: post }) => {
        return <Post post={post} />;
      })}
      <Footer />
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
            date(formatString: "YYYY")
            path
            author
            author_link
          }
        }
      }
    }
  }
`;
