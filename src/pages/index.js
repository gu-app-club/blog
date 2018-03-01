import React from "react";
import Feed from "../components/Feed";
import queryString from "query-string";

const IndexPage = props => {
  const params = queryString.parse(props.location.search);
  return <Feed data={props.data} />;
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
