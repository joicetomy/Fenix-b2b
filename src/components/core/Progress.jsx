import React, { PureComponent } from 'react';
import { Progress as RProgress } from 'reactstrap';

/** @class
 * This class is used as react-strap's Progress Compontent
 */

class Progress extends PureComponent {
  render() {
    return <RProgress {...this.props} />;
  }
}

export default Progress;
