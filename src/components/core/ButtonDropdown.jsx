import React, { PureComponent } from 'react';
import { ButtonDropdown as RButtonDropdown } from 'reactstrap';

/** @class
 * This class is used as react-strap's ButtonDropdown Compontent
 */
class ButtonDropdown extends PureComponent {
  render() {
    return <RButtonDropdown {...this.props} />;
  }
}

export default ButtonDropdown;
