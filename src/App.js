import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmailNotify from './Email/Email'

import TodoFunctional from './todo/todo-functional/todo-func'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <section>
            <TodoFunctional/>
          </section>
          {/* <section>
            <EmailNotify/>
          </section> */}
        </main>
      </div>
    );
  }
}

export default App;
