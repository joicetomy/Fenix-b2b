import React, { PureComponent } from 'react';
import { Label as RLabel } from 'reactstrap';

/** @class
 * This class is used as react-strap's Label Compontent
 */

class Label extends PureComponent {
  render() {
    return <RLabel {...this.props} />;
  }
}

export default Label;
