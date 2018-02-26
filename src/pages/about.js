import React from "react";
import Link from "gatsby-link";
import { Title } from "../components/UI/typography";

const NotFoundPage = () => (
  <div>
    <Title> About </Title>

    <p>
      Bits is a project by Gonzaga University Makers And Developers (<a href="http://gumad.club/">
        GUMAD
      </a>). The goal is to provide focused, digestible information in order to
      educate the next generation of technologists.
    </p>

    <p>
      In an effort to meet this goal, all articles are limited in their content.
      Short articles have two main advantages beyond simply being quicker to
      read:
    </p>

    <ul>
      <li>
        {" "}
        They force the author to edit and carefully consider their content.{" "}
        <b>Authors are forced to focus on one particular subject. </b>
      </li>
      <li>
        {" "}
        They <b>remove informational noise</b> when attempting to understand a
        subject.{" "}
      </li>
    </ul>

    <h2> {"Can anyone submit an article?"} </h2>

    <p>
      Yes. You do not need to be a Gonzaga student or alumni to submit an
      article. To submit an article, follow the information{" "}
      <Link to="/publishing"> listed here</Link>.
    </p>

    <h2> {"How's it built?"} </h2>

    <p>
      Bits is a <a href="https://www.gatsbyjs.org/"> Gatsby </a> project hosted
      on <a href="https://www.netlify.com/"> Netlify</a>. Because we don't use
      wordpress or another blogging platform, we end up with a fair amount of
      control over the finished product.
    </p>
    <p>
      If you're interested in helping out with the development or you think
      you've found a bug, feel free to submit a PR or an Issue on{" "}
      <a href="https://github.com/gu-app-club/blog"> our Github repo.</a> The
      entire code base is open source under MIT.
    </p>
    <h2> Contact </h2>
    <p>
      If you have a question, feel free to send a DM to the current maintainer,{" "}
      <a href="https://twitter.com/flaqueeau">@flaqueeau</a>, on twitter.
    </p>
  </div>
);
export default NotFoundPage;
