import React from 'react';
import Link from '@utils/link';

const FooterSocialShare = () => (
  <div>
    <div className='social-icons'>
      <Link to='/' className='btn btn-social'>
        <i className='fab fa-facebook-f' />
      </Link>
      <Link to='/' className='btn btn-social'>
        <i className='fab fa-instagram' />
      </Link>
      <Link to='/' className='btn btn-social'>
        <i className='fab fa-twitter' />
      </Link>
      <Link to='/' className='btn btn-social'>
        <i className='fab fa-youtube' />
      </Link>
    </div>
  </div>
);

export default FooterSocialShare;
