import React, { PureComponent } from 'react';
import { InputGroup as RInputGroup } from 'reactstrap';

/** @class
 * This class is used as react-strap's InputGroup Compontent
 */

class InputGroup extends PureComponent {
  render() {
    return <RInputGroup {...this.props} />;
  }
}

export default InputGroup;
