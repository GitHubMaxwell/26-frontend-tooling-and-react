import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.scss';
import Faker from 'faker';
import { say, DAEMON} from 'cowsay';
import Menu from './menu.js';
import {Title, Deck, Card, Pre} from './style/modules-style.js';

// const Title = styled.h1`
//     color:green;
//     font-size: 30px;
// `;

class Header extends React.Component {
// youve been passed monster from App, this.state.monster
// but in here its passed THROUGH the props object
// we need to capture (best term?)
// if youre only calling props you actually dont need to call super
// [eslint] 'monster' is missing in props validation (react/prop-types)
// any
// in chrome console
// Uncaught TypeError: Super expression must either be null or a function, not undefined
// constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <Title>Generate Cowsay Lorem</Title>
    );
  }
}

class Footer extends React.Component {

  render() {
    return <p>Get to da Foota!</p>;
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content : '',
      cowType: DAEMON,
    };
    this.cowTalk = this.cowTalk.bind(this);
    // this.menuSelect = this.menuSelect.bind(this);
  }

  cowTalk() {
    let content = say({text : Faker.fake('{{lorem.words}}'), cow: this.state.cowType});
    // need to change the cow style
    this.setState({
      content,
    });
  }

  menuSelect(selection) {
    // let cowType = eval(selection);

    console.log('menuSelection in main.js:', selection);

    this.setState({
      cowType : selection,
    });
  }

  render() {
    return(
      <React.Fragment>
        <Header />
        <Menu menuSelect={this.menuSelect.bind(this)}/>
        {/* <Menu menuSelect={this.menuSelect}/> */}

        <button onClick={this.cowTalk}>click me</button>
        <Deck>
          <Card>
            <Pre>{this.state.content}</Pre>
          </Card>
          <Card>
            <Pre>{this.state.content}</Pre>
          </Card>
        </Deck>
        <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


// say the className's footer ?? so we need some state
// lift it up to where you can safely branch off/safely share state as in the App component

//can pass down function from app to other components but then have them fire that function (event target passing?)
// inside App
/* 

onRoar() {
    alert('Roar)
}

App render
<Header onRoar={this.onRoar}/>

Header render
<button onClick={this.props.onRoar}></button>
*/
