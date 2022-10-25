import React, { PureComponent } from "react";
import { UncontrolledCarousel as RUncontrolledCarousel } from "reactstrap";

/** @class
 * This class is used as react-strap's UncontrolledCarouselText Compontent
 */

class UncontrolledCarousel extends PureComponent {
  render() {
    return <RUncontrolledCarousel {...this.props} />;
  }
}

export default UncontrolledCarousel;
