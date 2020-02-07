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
    <Flex>
      <Avatar />
      <div>
        <Header />
        <div>{children()}</div>
      </div>
    </Flex>
  </Container>
);

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  margin: 1rem;
  max-width: 800px;

  @media (min-width: 1024px) {
    margin: 2rem auto 0 auto;
  }

  @media print {
    margin: 0 auto;
  }
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
