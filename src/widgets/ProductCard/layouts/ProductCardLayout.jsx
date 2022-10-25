import Button from '@core/Button';
import Card from '@core/Card';
import CardBody from '@core/CardBody';
import CardSubtitle from '@core/CardSubtitle';
import CardText from '@core/CardText';
import CardTitle from '@core/CardTitle';
import { Link } from 'gatsby';
import Img from '../../../components/common/SanityImage';
import React from 'react';

const ProductCardLayout = props => {
  const {
    product,
  } = props;
  return (
    <>
      <Card className='card-product'>
        <div className={`card-img-col`}>
          <Link to={product?.link} className='out'>
            <Img
              className='w-100'
              id={product?.productImage?.asset._ref}
            />
          </Link>
          <div className='card-btn'>
            <Button color='primary' className='content' block >
              Add to cart
            </Button>
            <Button color='primary' block outline className='content' >
              Add to wishlist
            </Button>
          </div>
        </div>
        <CardBody>
          <CardSubtitle className='content plp-card'>
            {product?.listPrice}
          </CardSubtitle>
          <CardText className='content text-fade plp-card'>
            {product?.recommendedRetailPrice}
          </CardText>
          <CardTitle className='content'>{product?.productName}</CardTitle>
          <CardText className='content'>
            {product?.productId}
            <>
              <span className='mx-1'>&#9679;</span>
              {product?.productColor}
              <span className='mx-1'>&#9679;</span>
              {product?.variantId}
            </>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCardLayout;
