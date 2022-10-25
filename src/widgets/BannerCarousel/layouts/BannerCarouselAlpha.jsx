import Img from '@common_components/SanityImage';
import Button from '@core/Button';
import Carousel from '@core/Carousel';
import CarouselIndicators from '@core/CarouselIndicators';
import CarouselItem from '@core/CarouselItem';
import { constants } from '@utils/constants';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { forceVisible } from 'react-lazyload';

const { REF } = constants;

const BannerCarouselAlpha = props => {
  const {
    items,
    parentId,
  } = props;
  console.log(items, "bannercarousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    forceVisible();
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    forceVisible();
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
    forceVisible();
  };

  const goToLink = url => {
    if (url) {
      console.log("GO TO PAGE");
    }
  };
  const getFontSizeString = fontSize => (`${fontSize}px`);
  const slides = items?.map((item, index) => {
    const indexString = index.toString();
    const bannerButtonId = `banner-carousel-${parentId}-${indexString}-button`;
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <>
          {
            item?.image?.asset
            && (
              item?.url
                ? (
                  <Link to={item.url}>
                    <Img
                      id={item?.image?.asset ? item?.image?.asset[REF] : ''}
                      className='w-100'
                      maxWidth='800'
                    />
                  </Link>
                ) : (
                  <Img
                    id={item?.image?.asset ? item?.image?.asset[REF] : ''}
                    className='w-100'
                    maxWidth='800'
                  />
                )
            )
          }
          <div className='carousel-caption'>
            <span className='carousel-title content'>
              {item?.textFontSize ?
                (
                  <span style={{ fontSize: getFontSizeString(item?.textFontSize) }}>{item.text}</span>
                ) :
                (<h1 >{item.text}</h1>)}
            </span>
            <div>
              <span className='content'>
                {item?.bannerButton && item?.bannerButton.kind === 'button'
                  ? (
                    <Button color='light' onClick={() => goToLink(item?.bannerButton?.url)}
                      style={item?.bannerButton?.linkFontSize
                        ? { fontSize: getFontSizeString(item?.bannerButton?.linkFontSize) }
                        : {}}
                      id={bannerButtonId}
                    >
                      {item?.bannerButton?.text}
                    </Button>
                  ) : ''}
                {item?.bannerButton && item?.bannerButton.kind === 'link'
                  ? (
                    <a color='light' href={item?.bannerButton?.url} style={item?.bannerButton?.linkFontSize
                      ? { fontSize: getFontSizeString(item?.bannerButton?.linkFontSize) }
                      : {}}  >
                      {item?.bannerButton?.text}
                    </a>
                  ) : ''}
              </span>
            </div>
          </div>
        </>
      </CarouselItem >
    )
  });

  const carouselControls = (
    <>
      {/* <div className='carousel-control-prev' tabIndex='0' onKeyDown={() => { }} data-slide='prev' onClick={previous} role='button'>
      <FaChevronLeft/>
      </div>
      <div className='carousel-control-next' tabIndex='0' onKeyDown={() => { }} data-slide='next' onClick={next} role='button'>
      <FaChevronRight/>
      </div> */}
    </>
  );

  return (
    <div className='banner-carousel'>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        {carouselControls}
      </Carousel>
    </div>
  );
};

BannerCarouselAlpha.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  parentId: PropTypes.string.isRequired,
};

export default BannerCarouselAlpha;
