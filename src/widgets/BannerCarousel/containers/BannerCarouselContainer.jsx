import React from 'react';
import PropTypes from 'prop-types';
import { isListNotEmpty } from '@utils/commonUtils';
import BannerCarouselAlpha from '../layouts/BannerCarouselAlpha';

const BannerCarouselContainer = ({ content, parentId }) => (content && isListNotEmpty(content.contents)
  ? <BannerCarouselAlpha items={content.contents} parentId={parentId} />
  : '');

BannerCarouselContainer.defaultProps = {
  content: {},
  parentId: '',
};

BannerCarouselContainer.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
  parentId: PropTypes.string,
};
export default BannerCarouselContainer;
