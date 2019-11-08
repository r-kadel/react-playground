import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
      };
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    // componentWillUnmount() {
    //     clearTimeout(this.timeout)
    // }

    spin = () => {
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout( () => {
            const bullet = Math.floor(Math.random() * 8 + 1)
            this.setState({chamber: bullet, spinningTheChamber: false})
        }, 2000)
        console.log(this.state.chamber)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
      }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.spin}>Pull the trigger</button>
            </div>
        )
    }

}

export default RouletteGun;