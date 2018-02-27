import React from "react";

const GITHUB_PATH = "https://github.com/gu-app-club/blog";

/**
 * Converts an absolute path to the path on github
 */
function masterRepoPath(path) {
  const numOfPathSegments = 3;
  const githubRepo = GITHUB_PATH + "/edit/master/";

  const segments = path.split("/");
  const localPath = segments
    .slice(Math.max(segments.length - numOfPathSegments, 1))
    .join("/");

  return githubRepo + localPath;
}

function questionPath(title) {
  const issueTitle = encodeURIComponent(
    `[${title}] - <put your question here>?`
  );
  const body = encodeURIComponent(
    `<!-- Please keep the title of the article in your issue's title! -->`
  );

  return `${GITHUB_PATH}/issues/new?title=${issueTitle}&body=${body}`;
}

export const SomethingWrong = ({ path }) => (
  <p>
    Something wrong with this post?{" "}
    <a href={masterRepoPath(path)}>Edit it here.</a>
  </p>
);

export const AskQuestion = ({ title }) => (
  <p>
    Didn't understand something? Have a question?{" "}
    <a href={questionPath(title)}>Ask it here.</a>
  </p>
);
