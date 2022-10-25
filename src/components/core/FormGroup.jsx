import React, { PureComponent } from 'react';
import { FormGroup as RFormGroup } from 'reactstrap';

/** @class
 * This class is used as react-strap's FormGroup Compontent
 */

class FormGroup extends PureComponent {
  render() {
    return <RFormGroup {...this.props} />;
  }
}

export default FormGroup;
