import React from 'react';
import PropTypes from 'prop-types';
import { Widget } from '@utils/DynamicComponentConstructor';

const HomeLayout = ({ pageConfiguration }) => {
  const { id: configId, widgets } = pageConfiguration;
  const {
    PRIMARY, SECONDARY, SECTION_ONE, BOTTOM,
  } = widgets;
  return (
    <div className='home-layout-outer'>
      <Widget
        configId={configId}
        widgetConfig={PRIMARY}
      />
      <Widget
        configId={configId}
        widgetConfig={SECONDARY}
      />
      <Widget
        configId={configId}
        widgetConfig={SECTION_ONE}
      />
      <Widget
        configId={configId}
        widgetConfig={BOTTOM}
      />
    </div>
  );
};
HomeLayout.propTypes = {
  pageConfiguration: PropTypes.objectOf(PropTypes.any).isRequired,
  //methods
};
export default HomeLayout;
