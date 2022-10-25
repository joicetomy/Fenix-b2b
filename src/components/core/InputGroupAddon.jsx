import React, { PureComponent } from 'react';
import { InputGroupAddon as RInputGroupAddon } from 'reactstrap';

/** @class
 * This class is used as react-strap's InputGroupAddon Compontent
 */

class InputGroupAddon extends PureComponent {
  render() {
    return <RInputGroupAddon {...this.props} />;
  }
}

export default InputGroupAddon;
