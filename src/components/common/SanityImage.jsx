import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { sanity } from '../../config/config';

const SanityImage = ({ id, maxWidth, className, style, lazyLoadClassName }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const imageData = getGatsbyImageData(id, { maxWidth, placeholder: 'blurred' }, sanity);
    setImage(imageData);
  }, [id]);

  return image && (
      <GatsbyImage
        image={image}
        className={className}
        style={{ ...style }}
        alt=''
      />
  );
};
SanityImage.defaultProps = {
  className: '',
  maxWidth: '10',
  style: {},
  lazyLoadClassName: '',
};
SanityImage.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  lazyLoadClassName: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};
export default SanityImage;
