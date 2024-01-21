import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeritageAsset from '../components/heritage-asset';

const APIVersion = () => {
  const data = useStaticQuery(graphql`
    query {
      allApiData {
        nodes {
          bienes {
            antecedentes
            img
            localizacion {
              lat
              long
            }
            nombre
            tipo {
              arquitectura
              epoca
            }
          }
        }
      }
    }
  `);

  const firstNonEmpty = data.allApiData.nodes
    .flatMap(node => node.bienes)
    .find(bien => bien !== null);

  return (
    <div className="version">
      <h2 className="heading2">
        Version 1: API 🎉
      </h2>
      <HeritageAsset asset={firstNonEmpty} />
    </div>
  );
};

export default APIVersion;
