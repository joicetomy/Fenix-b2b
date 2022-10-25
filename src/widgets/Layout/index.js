import React from 'react';
import FooterTape from '@widgets/FooterTape';
import Header from '@widgets/Header';

const Layout = ({children}) => {

  return (
    <>
      <Header/>
      <div className='body-layout-outer'>
        <div className='body-overlay' />
        <main>{children}</main>
      </div> 
      <footer>
        <FooterTape />
      </footer>
    </>
  );
};

export default Layout;
