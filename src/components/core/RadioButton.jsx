import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

/** @class
 * This class is used as react-strap's radio Compontent
 */

class RadioButton extends Component {
  state = {};

  render() {
    const {
      disabled,
      handleChange,
      name,
      item,
      selectedOption,
    } = this.props;
    return (
      <Input
        name={name}
        type="radio"
        value={item}
        checked={selectedOption === item}
        onChange={e => handleChange(e)}
        disabled={disabled}
      />
    );
  }
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  selectedOption: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
};
RadioButton.defaultProps = {
  disabled: false,
  selectedOption: '',
  handleChange: () => {},
};
export default RadioButton;
