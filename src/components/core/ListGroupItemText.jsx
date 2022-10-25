import React, { PureComponent } from 'react';
import { ListGroupItemText as RListGroupItemText } from 'reactstrap';

/** @class
 * This class is used as react-strap's ListGroupItemText Compontent
 */

class ListGroupItemText extends PureComponent {
  render() {
    return <RListGroupItemText {...this.props} />;
  }
}

export default ListGroupItemText;
