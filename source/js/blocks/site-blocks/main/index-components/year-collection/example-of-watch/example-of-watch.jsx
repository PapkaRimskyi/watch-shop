import React from 'react';
import PropTypes from 'prop-types';

export default function ExampleOfWatch({ modelExamplePrice, modelExampleDiameter }) {
  return (
    <div className="example-of-watch">
      <p className="example-of-watch__info example-of-watch__info--price">{modelExamplePrice} &#8381;</p>
      <p className="example-of-watch__info example-of-watch__info--diameter">{modelExampleDiameter}</p>
    </div>
  );
}

ExampleOfWatch.propTypes = {
  modelExamplePrice: PropTypes.string.isRequired,
  modelExampleDiameter: PropTypes.string.isRequired,
};
