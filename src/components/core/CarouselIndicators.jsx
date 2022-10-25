import React, { PureComponent } from 'react';
import { CarouselIndicators as RCarouselIndicators } from 'reactstrap';

/** @class
 * This class is used as react-strap's CarouselIndicators Compontent
 */

class CarouselIndicators extends PureComponent {
  render() {
    return <RCarouselIndicators {...this.props} />;
  }
}

export default CarouselIndicators;
