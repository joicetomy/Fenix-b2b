import React, { PureComponent } from 'react';
import { Table as RTable } from 'reactstrap';

/** @class
 * This class is used as react-strap's Table Compontent
 */

class Table extends PureComponent {
  render() {
    return <RTable {...this.props} />;
  }
}

export default Table;
