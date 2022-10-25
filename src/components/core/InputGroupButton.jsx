import React, { PureComponent } from 'react';
import { InputGroupButton as RInputGroupButton } from 'reactstrap';

/** @class
 * This class is used as react-strap's InputGroupButton Compontent
 */

class InputGroupButton extends PureComponent {
  render() {
    return <RInputGroupButton {...this.props} />;
  }
}

export default InputGroupButton;
