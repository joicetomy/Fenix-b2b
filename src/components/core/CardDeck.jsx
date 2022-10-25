import React, { PureComponent } from 'react';
import { CardDeck as RCardDeck } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardDeck Compontent
 */

class CardDeck extends PureComponent {
  render() {
    return <RCardDeck {...this.props} />;
  }
}

export default CardDeck;
