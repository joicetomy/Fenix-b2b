import React, { PureComponent } from 'react';
import { FormText as RFormText } from 'reactstrap';

/** @class
 * This class is used as react-strap's FormText Compontent
 */

class FormText extends PureComponent {
  render() {
    return <RFormText {...this.props} />;
  }
}

export default FormText;
