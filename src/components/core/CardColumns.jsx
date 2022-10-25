import React, { PureComponent } from 'react';
import { CardColumns as RCardColumns } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardColumns Compontent
 */
class CardColumns extends PureComponent {
  render() {
    return <RCardColumns {...this.props} />;
  }
}

export default CardColumns;
