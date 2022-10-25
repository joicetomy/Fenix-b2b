import Collapse from '@core/Collapse';
import DropdownToggle from '@core/DropdownToggle';
import Nav from '@core/Nav';
import Navbar from '@core/Navbar';
import NavbarToggler from '@core/NavbarToggler';
import { Link } from 'gatsby';
import React from 'react';


const Navigation = props => {
  const {categories} = props
  return (
    <>
      <Navbar light expand='md'>
        <NavbarToggler  />
        <Collapse isOpen={false} navbar>
          <Nav className='mx-auto' navbar>
            {Array.isArray(categories) && categories.map((category) => (
                <Link to={category ? category.link : '#'} id={`nav-menuItem`}>
                  <DropdownToggle nav caret tag='div' className='content'>
                  {category.title}
                  </DropdownToggle>
                </Link>
            ))};
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
