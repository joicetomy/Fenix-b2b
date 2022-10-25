import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

const Logo = ({ logoUrl, preOrderHomePageUrl }) => {
  const type = logoUrl && logoUrl.slice(-3);
  return (
    <Link
      to='/'
      className='navbar-brand'
    >
      {logoUrl
        && (type === 'svg'
          ? (
            <span>
              <object
                data={logoUrl}
                aria-label='logo'
                type='image/svg+xml'
                style={{
                  pointerEvents: 'none',
                }}
              />
            </span>
          )
          : (<img src={logoUrl} alt='logo' />))}
    </Link>
  );
};

Logo.defaultProps = {
  logoUrl: null,
  preOrderHomePageUrl: '/',
};
Logo.propTypes = {
  logoUrl: PropTypes.string,
  preOrderHomePageUrl: PropTypes.string,
};
export default Logo;
