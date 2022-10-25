import React, { PureComponent } from 'react';
import { FormFeedback as RFormFeedback } from 'reactstrap';

/** @class
 * This class is used as react-strap's FormFeedback Compontent
 */

class FormFeedback extends PureComponent {
  render() {
    return <RFormFeedback {...this.props} />;
  }
}

export default FormFeedback;
