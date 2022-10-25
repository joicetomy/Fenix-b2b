import Header from '@widgets/Header/layouts/Header';
import PropTypes from 'prop-types';
import React from 'react';

const HeaderContainer = props => {
  
  return (
    <Header
    />
  );
};

HeaderContainer.propTypes = {
  page: PropTypes.string.isRequired,
};

export default HeaderContainer;
