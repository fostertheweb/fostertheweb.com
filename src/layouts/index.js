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
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Jonathan Foster, Software Engineer." },
        { name: "keywords", content: "javascript" },
      ]}
    />
    <Header />
    <Row>
      <Sidebar />
      <div>{children()}</div>
    </Row>
  </div>
);

const Row = styled.div`
  display: flex;
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
