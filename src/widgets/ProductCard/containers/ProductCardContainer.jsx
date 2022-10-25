import React from 'react';
import WidgetLayout from '../layouts/ProductCardLayout';

const ProductCardContainer = props => {
  const {
    product,
  } = props;

  return (
    <WidgetLayout
      product={product}
    />
  );
};
export default ProductCardContainer;
