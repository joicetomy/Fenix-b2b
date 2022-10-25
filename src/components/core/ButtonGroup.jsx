import React, { PureComponent } from 'react';
import { ButtonGroup as RButtonGroup } from 'reactstrap';

/** @class
 * This class is used as react-strap's ButtonGroup Compontent
 */
class ButtonGroup extends PureComponent {
  render() {
    return <RButtonGroup {...this.props} />;
  }
}

export default ButtonGroup;
