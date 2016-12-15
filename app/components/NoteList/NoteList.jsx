import React from 'react';

export default class NoteList extends React.Component{
  constructor() {
    super();
    this.state = {
      isToggleOn:true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn : !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'on' : 'false'}
      </button>
    );
  }
}
