import React, { PureComponent } from 'react';
import { CardGroup as RCardGroup } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardGroup Compontent
 */

class CardGroup extends PureComponent {
  render() {
    return <RCardGroup {...this.props} />;
  }
}

export default CardGroup;
