import React, { PureComponent } from 'react';
import { CardLink as RCardLink } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardLink Compontent
 */

class CardLink extends PureComponent {
  render() {
    return <RCardLink {...this.props} />;
  }
}

export default CardLink;
