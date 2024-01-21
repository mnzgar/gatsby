import React from 'react';
import PropTypes from 'prop-types';

const HeritageAsset = ({ asset }) => {
  return (
    <div className="card">
      <p className="name">{asset.nombre}</p>
      <img
        className="img"
        alt={`Imagen del bien patrimonial ${asset.nombre}`}
        src={asset.img}
      />
      <p>{asset.antecedentes}</p>
      <p>{asset.tipo.arquitectura}</p>
      <p>{asset.tipo.epoca}</p>
      <p>{asset.localizacion.lat} - {asset.localizacion.long}</p>
    </div>
  );
};

HeritageAsset.propTypes = {
  asset: PropTypes.any.isRequired,
};

export default HeritageAsset;
