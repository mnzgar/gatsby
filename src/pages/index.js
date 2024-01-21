import React from 'react';
import Layout from '../components/layout';
import APIVersion from '../components/api-version';
import JSONVersion from '../components/json-version';

const pageTitle = "Inicio";

const IndexPage = () => {
  return (
    <Layout>
      <APIVersion />
      <JSONVersion />
    </Layout>
  )
};

export default IndexPage;

export const Head = () => <title>{pageTitle}</title>;
