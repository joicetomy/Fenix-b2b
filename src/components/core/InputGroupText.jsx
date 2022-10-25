import React, { PureComponent } from 'react';
import { InputGroupText as RInputGroupText } from 'reactstrap';

/** @class
 * This class is used as react-strap's InputGroupText Compontent
 */

class InputGroupText extends PureComponent {
  render() {
    return <RInputGroupText {...this.props} />;
  }
}

export default InputGroupText;
