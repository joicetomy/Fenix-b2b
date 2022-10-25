import React, { PureComponent } from 'react';
import { CardImg as RCardImg } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardImg Compontent
 */

class CardImg extends PureComponent {
  render() {
    return <RCardImg {...this.props} />;
  }
}

export default CardImg;
