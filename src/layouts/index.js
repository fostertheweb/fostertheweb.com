import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "./index.css";
import "typeface-sanchez";
import "@fostertheweb/typeface-oakes";

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Jonathan Foster, Software Engineer." },
        { name: "keywords", content: "javascript" },
        { name: "google-site-verification", content: "Fu8OGArxgaPKQOgzL7WkR1zkTpArjuUnu3CmjOjPxVk" },
      ]}
    />
    <Header />
    <Row>
      <Sidebar />
      <div>{children()}</div>
    </Row>
  </Container>
);

const Row = styled.div`
  display: flex;
`;

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
