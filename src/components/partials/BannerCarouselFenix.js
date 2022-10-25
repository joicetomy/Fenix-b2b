import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@core/Button';
import Container from '@core/Container';
import Carousel from '@core/Carousel';
import CarouselItem from '@core/CarouselItem';
import CarouselIndicators from '@core/CarouselIndicators';

const BannerCarouselFenix = props => {
  const { bannerList: items } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items
        && items.map(item => {
          const { id, header, defaultMediaUrl, body, navigable } = item;
          return (
            <CarouselItem
              key={id}
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
            >
              <img src={defaultMediaUrl} alt={body} />
              <div className='intro-text'>
                <div>
                  {body && (<h1>{body}</h1>)}
                  {header && (
                    <Button color='light' href='/'>
                      {header}
                    </Button>
                  )}
                </div>
              </div>
            </CarouselItem>
          );
        });
  return (
    <>
      <div className='banner-carousel'>
        <Container>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <span
              role='button'
              tabIndex='0'
              onKeyDown={() => {}}
              data-slide='prev'
              className='carousel-controls carousel-prev'
              onClick={previous}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path d='M11.074 17.029c-.489-.472-.539-1.228-.141-1.758l.108-.127 7.86-8.139c.511-.53 1.355-.544 1.885-.033.489.472.54 1.228.142 1.758l-.11.128-6.931 7.179 7.178 6.933c.49.472.54 1.228.142 1.758l-.109.127c-.472.49-1.228.54-1.758.142l-.127-.109-8.139-7.86z' />
              </svg>
            </span>
            <span
              role='button'
              tabIndex='0'
              onKeyDown={() => {}}
              data-slide='next'
              className='carousel-controls carousel-next'
              onClick={next}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path d='M20.943 15.057c.48.48.517 1.237.11 1.76l-.11.126-8 8c-.52.52-1.365.52-1.886 0-.48-.48-.517-1.237-.11-1.76l.11-.126L18.113 16l-7.056-7.057c-.48-.48-.517-1.237-.11-1.76l.11-.126c.48-.48 1.237-.517 1.76-.11l.126.11 8 8z' />
              </svg>
            </span>
          </Carousel>
          {/* <div className='indicator-outer'>
            {items.map(item => (
              <Button key={item.id} color='link' href='/'>
                {item.header}
              </Button>
            ))}
          </div> */}
        </Container>
      </div>
    </>
  );
};

BannerCarouselFenix.propTypes = {
  bannerList: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default BannerCarouselFenix;
