import React, { PureComponent } from 'react';
import { CardSubtitle as RCardSubtitle } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardSubtitle Compontent
 */

class CardSubtitle extends PureComponent {
  render() {
    return <RCardSubtitle {...this.props} />;
  }
}

export default CardSubtitle;
