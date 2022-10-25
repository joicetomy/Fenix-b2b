import React, { PureComponent } from 'react';
import { TabContent as RTabContent } from 'reactstrap';

/** @class
 * This class is used as react-strap's TabContent Compontent
 */

class TabContent extends PureComponent {
  render() {
    return <RTabContent {...this.props} />;
  }
}

export default TabContent;
