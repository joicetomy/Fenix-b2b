import React, { PureComponent } from 'react';
import { Jumbotron as RJumbotron } from 'reactstrap';

/** @class
 * This class is used as react-strap's Jumbotron Compontent
 */

class Jumbotron extends PureComponent {
  render() {
    return <RJumbotron {...this.props} />;
  }
}

export default Jumbotron;
