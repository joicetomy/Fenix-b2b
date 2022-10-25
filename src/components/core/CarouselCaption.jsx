import React, { PureComponent } from 'react';
import { CarouselCaption as RCarouselCaption } from 'reactstrap';

/** @class
 * This class is used as react-strap's CarouselCaption Compontent
 */

class CarouselCaption extends PureComponent {
  render() {
    return <RCarouselCaption {...this.props} />;
  }
}

export default CarouselCaption;
