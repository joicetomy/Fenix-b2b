import React from 'react';
import Img from '@common_components/SanityImage';
import PropTypes from 'prop-types';
import { constants } from '@utils/constants';
import { Link } from "gatsby"

const { REF } = constants;

const CatalogsBanner = props => {
  const { image, text, url } = props;
  return (
    <div className='catalogs-banner-outer'>
      <div className='container sub-heading'>
        <h3 className='title-main'>
          {text}
        </h3>
        <div>
          {url
            ? (
              <Link to={url || '###'}>
                <Img
                  id={image?.asset ? image?.asset[REF] : ''}
                  className='w-100'
                  maxWidth={800}
                />
              </Link>
            )
            : (
              <Img
                id={image?.asset ? image?.asset[REF] : ''}
                className='w-100'
                maxWidth={800}
              />
            )}
        </div>
      </div>
    </div>
  );
};
CatalogsBanner.defaultProps = {
  image: null,
  url: null,
  text: null,
};

CatalogsBanner.propTypes = {
  image: PropTypes.objectOf(PropTypes.any),
  url: PropTypes.objectOf(PropTypes.any),
  text: PropTypes.string,
};

export default CatalogsBanner;
