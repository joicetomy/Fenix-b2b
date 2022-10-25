import React, { PureComponent } from 'react';
import { Button as RButton } from 'reactstrap';

/** @class
 * This class is used as react-strap's Button Compontent
 */
class Button extends PureComponent {
  render() {
    return <RButton {...this.props} />;
  }
}

export default Button;
