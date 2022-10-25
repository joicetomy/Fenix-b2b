import React, { PureComponent } from 'react';
import { InputGroupButtonDropdown as RInputGroupButtonDropdown } from 'reactstrap';

/** @class
 * This class is used as react-strap's InputGroupButtonDropdown Compontent
 */

class InputGroupButtonDropdown extends PureComponent {
  render() {
    return <RInputGroupButtonDropdown {...this.props} />;
  }
}

export default InputGroupButtonDropdown;
