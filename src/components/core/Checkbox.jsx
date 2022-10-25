import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

/** @class
 * This class is used as react-strap's Checkbox Compontent
 */

class Checkbox extends Component {
  state = {
    isChecked: false,
  };

  componentWillReceiveProps(nextProps) {
    const { isChecked } = this.state;
    if (nextProps.checked !== isChecked) {
      this.setState({ isChecked: nextProps.checked });
    }
  }

  toggleCheckBox = (checked) => {
    this.setState({ isChecked: !checked });
    return !checked;
  };

  render() {
    const { isChecked } = this.state;
    const {
      onCheck, item, disabled, name,
    } = this.props;

    return (
      <Input
        name={name}
        type="checkbox"
        className="ml-1"
        checked={isChecked}
        onChange={() => onCheck(name, this.toggleCheckBox(isChecked), item)}
        disabled={disabled}
      />
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  onCheck: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};
Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  onCheck: () => {},
};
export default Checkbox;
