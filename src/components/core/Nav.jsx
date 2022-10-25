import React, { PureComponent } from 'react';
import { Nav as RNav } from 'reactstrap';

/** @class
 * This class is used as react-strap's Nav Compontent
 */

class Nav extends PureComponent {
  render() {
    return <RNav {...this.props} />;
  }
}

export default Nav;
