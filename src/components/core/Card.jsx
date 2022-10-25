import React, { PureComponent } from 'react';
import { Card as RCard } from 'reactstrap';

/** @class
 * This class is used as react-strap's Card Compontent
 */
class Card extends PureComponent {
  render() {
    return <RCard {...this.props} />;
  }
}

export default Card;
