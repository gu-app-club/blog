import React from "react";
import styled from "styled-components";

const Head = styled.h1`
  font-weight: 300;
`;

/**
 * Converts an absolute path to the path on github
 */
function githubPath(path) {
  const numOfPathSegments = 3;
  const githubRepo = "https://github.com/gu-app-club/blog/edit/master/";

  const segments = path.split("/");
  const localPath = segments
    .slice(Math.max(segments.length - numOfPathSegments, 1))
    .join("/");

  return githubRepo + localPath;
}

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Head>{post.frontmatter.title}</Head>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <hr />

      <p>
        Something wrong with this post?{" "}
        <a href={githubPath(post.fileAbsolutePath)}>Edit it here.</a>
      </p>
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
      }
      fileAbsolutePath
    }
  }
`;
