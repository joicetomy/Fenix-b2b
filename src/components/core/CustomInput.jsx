import React, { PureComponent } from 'react';
import { CustomInput as RCustomInput } from 'reactstrap';

/** @class
 * This class is used as react-strap's CostumInput Compontent
 */

class CustomInput extends PureComponent {
  render() {
    return <RCustomInput {...this.props} />;
  }
}

export default CustomInput;
