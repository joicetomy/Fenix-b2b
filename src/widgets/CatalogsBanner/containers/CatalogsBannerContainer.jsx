import React from 'react';
import PropTypes from 'prop-types';
import WidgetLayout from '../layouts/CatalogsBanner';

const CatalogsBannerContainer = ({ content }) => (<WidgetLayout image={content?.image} text={content?.text} url={content.url} />);

CatalogsBannerContainer.defaultProps = {
  content: {},
};

CatalogsBannerContainer.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
};

export default CatalogsBannerContainer;
