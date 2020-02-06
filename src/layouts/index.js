import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/header";
import Avatar from "../components/avatar";
import "./index.css";
import "typeface-open-sans";
import "typeface-sanchez";
import "typeface-quattrocento-sans";

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Jonathan Foster, Software Engineer." },
        { name: "keywords", content: "javascript" },
        {
          name: "google-site-verification",
          content: "Fu8OGArxgaPKQOgzL7WkR1zkTpArjuUnu3CmjOjPxVk",
        },
      ]}
    />
    <div className="top">
      <Avatar />
      <div>
        <Header />
        <div>{children()}</div>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  margin: 3rem auto;
  width: 100%;
  max-width: 800px;
`;

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
