import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeritageAsset from '../components/heritage-asset';

const JSONVersion = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
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
  
  return (
    <div className="version">
      <h2 className="heading2">
        Version 2: JSON 🎉🎉
      </h2>
      <HeritageAsset asset={data.allDataJson.nodes[0].bienes[1]} />
    </div>
  );
};

export default JSONVersion;
