import { isListNotEmpty } from '@utils/commonUtils';
import React from 'react';
import WidgetLayout from '../layouts/TopPicksCarousel';


const TopPicksContainer = ({  content }) => {

  return (
          <WidgetLayout
            content={content}
          />
  );
};

export default TopPicksContainer;
