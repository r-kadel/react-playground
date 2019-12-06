import React, { Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };
  }

  renderContent() {
    
  }

  render() {
    const createList = this.props.sections.map((section, i) => {
        return (
            <li key={i}>
                <button onClick={this.renderContent}>{section.title}</button>
            </li>
        )
      });
    

    return (
        <ul>
            {createList}
        </ul>
    )}
}

export default Accordion;
