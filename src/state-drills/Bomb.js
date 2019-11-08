import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            word: 'word'
        }
    }

    componentDidMount() {
        setInterval(() => {
                this.setState({count: this.state.count + 1})
                this.bomb();
        }, 1000);
        this.bomb();
      }

    bomb() { 
        this.state.count % 2 ? this.setState({word: 'tick'}) : this.setState({word: 'tock'})
        if(this.state.count >= 8) {
            this.setState({word: 'BOOOMM!!!'}); 
            clearInterval();
        }      
    }

    render() {

        return(
            <div>
                <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb;