import Button from '@core/Button';
import Col from '@core/Col';
import Container from '@core/Container';
import Row from '@core/Row';
import { isListNotEmpty } from '@utils/commonUtils';
import TopPicksCard from '@widgets/ProductCard';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

const TopPicksCarousel = props => {
  const { content } = props;
  const slider = useRef(null);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);

  const next = () => {
    if (!disableNext && slider?.current?.slickNext && typeof slider?.current?.slickNext === 'function') {
      slider.current.slickNext();
    }
  };

  const previous = () => {
    if (!disablePrev && slider?.current?.slickNext && typeof slider?.current?.slickNext === 'function') {
      slider.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setDisableNext(newIndex > 0 && newIndex === oldIndex);
      setDisablePrev(newIndex === 0);
    },
    afterChange: (oldIndex, newIndex) => {
      setDisableNext(newIndex > 0 && newIndex === oldIndex);
      setDisablePrev(newIndex === 0);
    },
  };
  return (
    <>
      <div className='carousel-outer my-4'>
        <Container>
          <Row className='justify-content-between'>
            <Col xs='auto'>
              <span className='sub-heading'>
                <h4 className='title-main'>
                  {content?.title}
                </h4>
              </span>
            </Col>
            <Col xs='auto' className='d-flex content'>
              <Button color='link' className='text-dark' style={{ fontSize: '16px' }}  id={`topPick-view-all-button`}>
                {content?.linkWithText?.text}
              </Button>
              <div
                className={`d-flex ml-3
               ${isListNotEmpty(content?.products) && content?.products.length < 5 ? 'd-md-none' : ''}
               ${isListNotEmpty(content?.products) && content?.products.length < 3 ? 'd-sm-none' : ''}`}
              >
                <Button color='arrow' className={disablePrev ? 'prev disabled' : 'prev'} onClick={previous} />
                <Button color='arrow' className={disableNext ? 'next ml-2 disabled' : 'next ml-2'} onClick={next} />
              </div>
            </Col>
          </Row>
          <Slider {...settings} ref={slider}>
            {isListNotEmpty(content?.products)
              && content?.products.map(product => (
                <div className='slick-item content' key={`top-picks`}>
                  <TopPicksCard
                    product={product}
                    imageSize='thumbnail'
                  />
                </div>
              ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default TopPicksCarousel;
