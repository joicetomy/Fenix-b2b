import React, { PureComponent } from 'react';
import { CarouselItem as RCarouselItem } from 'reactstrap';

/** @class
 * This class is used as react-strap's CarouselItem Compontent
 */

class CarouselItem extends PureComponent {
  render() {
    return <RCarouselItem {...this.props} />;
  }
}

export default CarouselItem;
