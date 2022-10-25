/**
 * Copyright(c) 2020 Mozanta Technologies Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Mozanta
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Mozanta.
 *
 * @author Dipin
 *
 */
import React, { PureComponent } from 'react';
import { Spinner as RSpinner } from 'reactstrap';

/** @class
 * This class is used as react-strap's Progress Compontent
 */
class Progress extends PureComponent {
  render() {
    return <RSpinner {...this.props} />;
  }
}

export default Progress;
