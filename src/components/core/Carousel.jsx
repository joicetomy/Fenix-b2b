import React, { PureComponent } from 'react';
import { Carousel as RCarousel } from 'reactstrap';

/** @class
 * This class is used as react-strap's Carousel Compontent
 */

class Carousel extends PureComponent {
  render() {
    return <RCarousel {...this.props} />;
  }
}

export default Carousel;
