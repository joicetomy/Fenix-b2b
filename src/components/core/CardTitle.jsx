import React, { PureComponent } from 'react';
import { CardTitle as RCardTitle } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardTitle Compontent
 */

class CardTitle extends PureComponent {
  render() {
    return <RCardTitle {...this.props} />;
  }
}

export default CardTitle;
