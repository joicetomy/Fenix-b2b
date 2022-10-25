import React, { PureComponent } from 'react';
import { Media as RMedia } from 'reactstrap';

/** @class
 * This class is used as react-strap's Media Compontent
 */

class Media extends PureComponent {
  render() {
    return <RMedia {...this.props} />;
  }
}

export default Media;
