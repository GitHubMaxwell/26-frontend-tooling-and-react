import React from 'react';
// import ReactDOM from 'react-dom';
import { BONG, BUNNY, CALVIN, CHEESE, DAEMON, DEFAULT, DRAGON } from 'cowsay';
import './style/app.scss';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   cowType: this.props.cowType,
    // };
    // this.menuPop = this.menuPop.bind(this);
    // this.props.menuSelect = this.menuSelect.bind(this);

  }

  handleChange(event) {
    // const selection = (event.target.innerHTML).toUpperCase();
    const selection = event.target.value;

    // console.log('handleChange in menu.js: ',selection );

    this.props.menuSelect(selection);
    //fire the click button event
    // this.setState({
    //   cowType : selection,
    // });
  }
  // why dont you have to use the props object for the menuSelect

  // prb have to change these to input so i can use the value attribute and pass that back otherwise its just passing a string and i need it to be a value name
  render() {
    return (
      <React.Fragment>
        <select onChange={this.handleChange.bind(this)}>
          <option value = {DAEMON}>DAEMON</option>
          <option value = {BONG}>BONG</option>
          <option value = {BUNNY}>BUNNY</option>
          <option value = {CALVIN}>CALVIN</option>
          <option value = {CHEESE}>CHEESE</option>
          <option value = {DEFAULT}>DEFAULT</option>
          <option value = {DRAGON}>DRAGON</option>
        </select>
      </React.Fragment>
    );
  }
}

export default Menu;
 

/* <ul onClick={this.handleChange.bind(this)}>
    <li key="BONG">Bong</li>
    <li key="BUNNY">Bunny</li>
    <li>Calvin</li>
    <li>Cheese</li>
    <li>Daemon</li>
    <li>Default</li>
    <li>Dragon</li>
</ul> */