import React, { Component } from "react";
import CurrencyError from './CurrencyError'

class Currency extends Component {
  render() {
    const money = new Intl.NumberFormat(this.props.locale, {
      style: "currency",
      currency: this.props.currency
    }).format(this.props.value);

    return (
    <div> 
        <CurrencyError>
            {money}
        </CurrencyError>  
    </div>
    )
  }
}

export default Currency;
