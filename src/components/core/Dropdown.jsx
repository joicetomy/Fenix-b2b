import React, { PureComponent } from 'react';
import { Dropdown as RDropdown } from 'reactstrap';

/** @class
 * This class is used as react-strap's Dropdown Compontent
 */

class Dropdown extends PureComponent {
  render() {
    return <RDropdown {...this.props} />;
  }
}

export default Dropdown;
