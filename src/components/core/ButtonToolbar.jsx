import React, { PureComponent } from 'react';
import { ButtonToolbar as RButtonToolbar } from 'reactstrap';

/** @class
 * This class is used as react-strap's ButtonToolbar Compontent
 */
class ButtonToolbar extends PureComponent {
  render() {
    return <RButtonToolbar {...this.props} />;
  }
}

export default ButtonToolbar;
