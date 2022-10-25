import React, { PureComponent } from 'react';
import { TabPane as RTabPane } from 'reactstrap';

/** @class
 * This class is used as react-strap's TabPane Compontent
 */

class TabPane extends PureComponent {
  render() {
    return <RTabPane {...this.props} />;
  }
}

export default TabPane;
