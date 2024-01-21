import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import './styles/style.scss';

import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  
  return (
    <main className="page">
      <Header title={data.site.siteMetadata.title} />
      <Main content={children} />
      <Footer title={data.site.siteMetadata.title} />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
