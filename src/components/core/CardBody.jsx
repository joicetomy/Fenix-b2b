import React, { PureComponent } from 'react';
import { CardBody as RCardBody } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardBody Compontent
 */
class CardBody extends PureComponent {
  render() {
    return <RCardBody {...this.props} />;
  }
}

export default CardBody;
