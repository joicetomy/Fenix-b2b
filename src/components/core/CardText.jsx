import React, { PureComponent } from 'react';
import { CardText as RCardText } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardText Compontent
 */

class CardText extends PureComponent {
  render() {
    return <RCardText {...this.props} />;
  }
}

export default CardText;
