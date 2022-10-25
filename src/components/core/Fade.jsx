import React, { PureComponent } from 'react';
import { Fade as RFade } from 'reactstrap';

/** @class
 * This class is used as react-strap's Fade Compontent
 */

class Fade extends PureComponent {
  render() {
    return <RFade {...this.props} />;
  }
}

export default Fade;
