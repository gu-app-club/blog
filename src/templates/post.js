import React from "react";
import styled from "styled-components";
import CreditsTag from "../components/CreditsTag";
import { AskQuestion, SomethingWrong } from "../components/Github";

const Head = styled.h1`
  font-weight: 300;
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Head>{post.frontmatter.title}</Head>
      <CreditsTag post={post} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <hr />

      <SomethingWrong path={post.fileAbsolutePath} />
      <AskQuestion title={post.frontmatter.title} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        author_link
      }
      fileAbsolutePath
    }
  }
`;
