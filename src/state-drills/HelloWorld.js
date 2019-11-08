import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        console.log('props in constructor', props);
        super(props)
        this.state = {
            who: 'world'
        }
    }


    componentDidMount() {
        let interval = setInterval(() => {
            () => {
                this.setState({count: this.state.count + 1})
            }
        }, 2000);
        this.setState({ interval })
      }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => {
                    this.setState({ who: 'World' })
                }}>
                    World
                </button>
                <button onClick={() => {
                    this.setState(
                        { who: 'Friend' })
                }}
                >Friend</button>
                <button onClick={() => {
                    this.setState(
                        {
                            who: 'React'
                        }
                    )
                }}
                >React
                </button>
            </div>
        )
    }
}


export default HelloWorld;