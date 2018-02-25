import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Bits, a blog by GUMAD"
      meta={[
        {
          name: "description",
          content: "A tiny, bite-sized tech blog maintained by GUMAD."
        },
        { name: "keywords", content: "gumad, tech, blog, tiny, axios" }
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 700,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
