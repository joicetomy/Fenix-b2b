import BlockContent from '../components/common/BlockContent';
import Col from '@core/Col';
import Container from '@core/Container';
import Row from '@core/Row';
import FooterTape from '@widgets/FooterTape';
import Header from '@widgets/Header';
import React from 'react';

const staticPage = context => {
  return (
    <>
      <Header />
      <div className='terms-layout-outer top-shadow bg-dark-snow'>
        <div className='sub-header'>
          <h4 className='heading'>
            {context?.pageContext?.page?.name}
          </h4>
        </div>
        <Container>
          <Row>
            <Col xs='12' className='static-body'>
              <BlockContent data={context?.pageContext?.page?._rawPageData?.richTextBox} />
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        <FooterTape />
      </footer>
    </>
  );
};

export default staticPage;
