import React from 'react';
import NavItem from '@core/NavItem';
import NavLink from '@core/NavLink';
import Nav from '@core/Nav';
import Row from '@core/Row';
import Col from '@core/Col';

const FooterAdditionalInfo = props => {
  const { collectionsData } = props;
  return (
    <>
      {collectionsData.map(data => (
        <Col lg='3' key={data.title}>
          <p className='nav-title'>{data.title}</p>
          <Row className='mt-2'>
            <Col>
              <Nav>
                <NavItem>
                  <NavLink>{data.navlink1}</NavLink>
                  <NavLink>{data.navlink2}</NavLink>
                  <NavLink>{data.navlink3}</NavLink>
                  <NavLink>{data.navlink4}</NavLink>
                  <NavLink>{data.navlink5}</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Col>
      ))}
    </>
  );
};

export default FooterAdditionalInfo;
