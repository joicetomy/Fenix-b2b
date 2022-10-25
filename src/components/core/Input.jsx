import React, { PureComponent } from 'react';
import { Input as RInput } from 'reactstrap';

/** @class
 * This class is used as react-strap's Input Compontent
 */

class Input extends PureComponent {
  render() {
    return <RInput {...this.props} />;
  }
}

export default Input;
