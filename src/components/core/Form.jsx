import React from 'react';
import { Form as RForm } from 'reactstrap';

/** @class
 * This class is used as react-strap's Form Compontent
 */

class Form extends React.PureComponent {
  render() {
    return <RForm {...this.props} />;
  }
}

export default Form;
