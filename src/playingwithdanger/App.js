import React, { Component } from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyError>
            Germany: <Currency value={21} locale="en-ES" currency='JPY' />
            USA: <Currency value={21} locale="en-US" currency="US"/>
        </CurrencyError>
      </div>
    );
  }
}

export default App;