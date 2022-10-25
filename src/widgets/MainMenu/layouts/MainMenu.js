import Col from '@core/Col';
import Container from '@core/Container';
import Row from '@core/Row';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import Navigation from './Navigation';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { sanity } from '../../../config/config';
import { Link } from 'gatsby';
import Nav from '@core/Nav';
import NavItem from '@core/NavItem';
import Dropdown from '@core/Dropdown';
import DropdownMenu from '@core/DropdownMenu';
import DropdownItem from '@core/DropdownItem';
import DropdownToggle from '@core/DropdownToggle';



const MainMenu = props => {

  const { categories, logo ,contents} = props;
  const [isOpen, updateIsOpen] = useState(false);


  const getImageUrl = (id) => {
    const imageData = getGatsbyImageData(id, { placeholder: 'blurred' }, sanity);
    return imageData?.images?.fallback?.src;
  };

  return (
    <>
      <div className='header-outer'>
        <header id='header-navbar'>
          <Container fluid>
            <Row className='align-items-center'>
              <Col xl='auto' className='nav-outer desktop content'><Navigation categories={categories} /></Col>
              <Col xs='4' md='auto' className='brand-outer'>
                <Link
                  to={'/'}
                  className='navbar-brand'
                >
                  <img src={getImageUrl(logo?.asset._ref)} alt='logo' />
                </Link>
              </Col>
              <Col md='auto' className='nav-search-outer'>
                <div className='search-field icon-left'>
                  <DebounceInput 
                  placeholder={contents?.searchLabel}
                  />
                  <i className='fal fa-search' role='button' aria-label='Search' />
                </div>
              </Col>
              <Col xs='4' md='auto' className='nav-right-outer'>
                <Nav>
                  <NavItem className={`hidden-md`}>
                    <Link to='/wishlist' className='nav-link' id='header-link-wishlist'>
                      <span className='content'>{contents?.wishlistBtnLabel}</span>
                    </Link>
                  </NavItem>
                  <NavItem className='hidden-md'>
                    <Dropdown
                      onMouseOver={() => updateIsOpen(true)}
                      onMouseLeave={() => updateIsOpen(false)}
                      toggle={() => updateIsOpen(!isOpen)}
                      isOpen={isOpen}
                      id='header-order-dropdown'
                    >
                      <DropdownToggle color='transparent' caret>
                        <span className='content'>Order</span>
                      </DropdownToggle>
                      <DropdownMenu right className='content'>
                        <DropdownItem id='header-csv-upload' >{contents?.orderMenu?.csvUpload}</DropdownItem>
                        <DropdownItem id='header-view-orders' onClick={() => {}}>{contents?.orderMenu?.viewAllOrders}</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                  <NavItem className='btn-cart'>
                    <Link to='/cart' className='nav-link' id='header-link-cart'>
                      <span className='content'>{contents?.cartBtnLabel}</span>
                    </Link>
                  </NavItem>
                </Nav>
            </Col>
            </Row>
          </Container>
        </header>
      </div>
    </>
  );
};

MainMenu.defaultProps = {
  menu: [],
  headerText: {},
  logoUrl: '',
  productSuggestions: [],
  categorySuggestions: [],
  checkoutHeader: {},
  preOrderHomePageUrl: '',
};

MainMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.any),
  headerText: PropTypes.objectOf(PropTypes.any),
  checkoutHeader: PropTypes.objectOf(PropTypes.any),
  logoUrl: PropTypes.string,
  preOrderHomePageUrl: PropTypes.string,
  searchText: PropTypes.string.isRequired,
  productSuggestions: PropTypes.arrayOf(PropTypes.any),
  categorySuggestions: PropTypes.arrayOf(PropTypes.any),
  clearSearch: PropTypes.func.isRequired,
  handleSearchTextChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  navigateToUrl: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  navigateToOrder: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  totalProducts: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  searchFieldActive: PropTypes.bool.isRequired,
};

export default MainMenu;
