import React, { PureComponent } from 'react';
import { CarouselControl as RCarouselControl } from 'reactstrap';

/** @class
 * This class is used as react-strap's CarouselControl Compontent
 */

class CarouselControl extends PureComponent {
  render() {
    return <RCarouselControl {...this.props} />;
  }
}

export default CarouselControl;
