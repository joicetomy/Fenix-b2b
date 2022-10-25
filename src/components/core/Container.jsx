import React, { PureComponent } from 'react';
import { Container as RContainer } from 'reactstrap';

/** @class
 * This class is used as react-strap's Container Compontent
 */

class Container extends PureComponent {
  render() {
    return <RContainer {...this.props} />;
  }
}

export default Container;
