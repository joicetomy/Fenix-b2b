import Button from '@core/Button';
import Col from '@core/Col';
import Container from '@core/Container';
import Dropdown from '@core/Dropdown';
import DropdownItem from '@core/DropdownItem';
import DropdownMenu from '@core/DropdownMenu';
import DropdownToggle from '@core/DropdownToggle';
import Modal from '@core/Modal';
import ModalHeader from '@core/ModalHeader';
import ModalBody from '@core/ModalBody';
import Row from '@core/Row';
import { Link } from 'gatsby';
import React, { useState } from 'react';

const TopMenu = (props) => {
  const { hidePrice, handleHidePrice, contents } = props;
  const [isOpen, updateIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div className='nav-top content' id='promotionHeader'>
      <Container fluid>
        <Row>
          <Col xs='auto' className='d-flex align-items-center p-0'>

            <ul className='pre-order-btn content'>
              <li className='pre-order-btn-item'>
                <Button
                  color='primary'
                  block
                  className='active'
                >
                  <span className='content'>
                    {contents?._rawCatalogTabs?.reorderBtn}
                  </span>
                </Button>
              </li>
              <li className='pre-order-btn-divider' />
              <li className='pre-order-btn-item'>
                <Button
                  color='primary'
                  block
                  onClick={toggleModal}
                >
                  <span className='content'>
                    {contents?._rawCatalogTabs?.preorderBtn}
                  </span>
                </Button>
              </li>
            </ul>
            <Modal isOpen={isModalOpen} size='md' className='pre-order-modal' centered>
              <ModalHeader toggle={toggleModal}>
                <h3 className='pre-order-modal-header heading'>
                  {contents?._rawCatalogTabs.preOrderModalHeader}
                </h3>
              </ModalHeader>
              <ModalBody className='pre-order-modal-body content'>
                {contents?._rawCatalogTabs.preOrderModalMessage}
                <div className='pre-order-modal-footer mt-4 mb-1'>
                  <Button color='primary' onClick={toggleModal}>
                    {contents?._rawCatalogTabs.preOrderModalButtonLabel}
                  </Button>
                </div>
              </ModalBody>
            </Modal>
          </Col>
          <div class='d-md-flex col-lg-8 ml-auto'>
            <Col xs='auto' className='ml-auto'>
              <ul className='nav-top-list'>
                <li>
                  <Button
                    color='transparent'
                    block
                    id='header-link-toggle-price'
                  >
                    {hidePrice
                      ? (<span className='content' onClick={handleHidePrice}>{contents?._rawHeaderLabel.HeaderTape.priceManagement.hidePriceLabel}</span>)
                      : (<span className='content' onClick={handleHidePrice}>{contents?._rawHeaderLabel.HeaderTape.priceManagement.showPriceLabel}</span>
                      )}
                  </Button>
                </li>
                <li>
                  <Link to='/pricat' className='btn nav-top-link' id='header-link-pricat'>
                    <span className='content'>{contents?._rawHeaderLabel.HeaderTape.pricatLabel}</span>
                  </Link>
                </li>
                <li>
                  <Link to='/help' className='btn nav-top-link' id='header-link-help'>
                    <span className='content'>{contents?._rawHeaderLabel.HeaderTape.helpLabel}</span>
                  </Link>
                </li>
                <li>
                  <span className='font-weight-bold content' id='header-link-sites'>
                    Germany
                  </span>
                </li>
                <>
                  <li>
                    <Dropdown
                      onMouseOver={() => updateIsOpen(true)}
                      onMouseLeave={() => updateIsOpen(false)}
                      toggle={() => { }}
                      isOpen={isOpen}
                      id='header-toggle-user-account'
                    >
                      <DropdownToggle className='nav-top-link' color='transparent' caret>
                        <>
                          <span className='content'>joicetomy</span>
                        </>
                      </DropdownToggle>
                      <DropdownMenu >
                        <Link to='/switch-account' id='header-link-switch-account'>
                          <DropdownItem className='content'>{contents?._rawHeaderLabel.HeaderTape.profileManagement.switchSubAccount}</DropdownItem>
                        </Link>
                        <Link to='/switch-account' id='header-link-switch-sales-company'>
                          <DropdownItem className='content'>{contents?._rawHeaderLabel.HeaderTape.profileManagement.switchSalesCompany}</DropdownItem>
                        </Link>
                        <Link to='/my-account' id='heade-link-my-account'>
                          <DropdownItem className='content'>{contents?._rawHeaderLabel.HeaderTape.profileManagement.profile}</DropdownItem>
                        </Link>
                        <DropdownItem id='header-link-logout'>
                          <div className='content'>
                            {contents?._rawHeaderLabel.HeaderTape.profileManagement.signout}
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                </>
              </ul>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TopMenu;
