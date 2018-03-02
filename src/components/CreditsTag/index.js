import React from "react";

const AuthorLink = ({ href, children }) => {
  if (href) {
    return <a href={href}>{children}</a>;
  }
  return <span>{children}</span>;
};

export default ({ post }) => {
  const author = post.frontmatter.author || "🤐 Anonymous";

  return (
    <p>
      by <AuthorLink href={post.frontmatter.author_link}>{author}</AuthorLink>,{" "}
      <b>{post.frontmatter.date}</b>
    </p>
  );
};
