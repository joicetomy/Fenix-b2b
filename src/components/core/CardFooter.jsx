import React, { PureComponent } from 'react';
import { CardFooter as RCardFooter } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardFooter Compontent
 */

class CardFooter extends PureComponent {
  render() {
    return <RCardFooter {...this.props} />;
  }
}

export default CardFooter;
