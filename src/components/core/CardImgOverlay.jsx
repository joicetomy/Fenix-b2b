import React, { PureComponent } from 'react';
import { CardImgOverlay as RCardImgOverlay } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardImgOverlay Compontent
 */

class CardImgOverlay extends PureComponent {
  render() {
    return <RCardImgOverlay {...this.props} />;
  }
}

export default CardImgOverlay;
