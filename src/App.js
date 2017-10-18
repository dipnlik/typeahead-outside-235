import React, { Component } from 'react';
import TypeaheadSearchBar from './components/TypeaheadSearchBar';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <p>
            This is a simple app to reproduce{" "}
            <a href="https://github.com/Pomax/react-onclickoutside/issues/235">react-onclickoutside#235</a>.
          </p>
          <ol>
            <li>Type something in the search bar below, press <kbd>down arrow</kbd> then <kbd>return</kbd> to add the tag to the list.</li>
            <li>Click the &times; icon in the tag to remove the tag from the list.</li>
            <li>Click anywhere on the page.</li>
          </ol>
          <TypeaheadSearchBar />
          <p>Console output:</p>
          <pre className="bg-danger text-danger">
            Uncaught TypeError: Cannot read property 'getInstance' of null (index.js:124)<br/>
            at onClickOutside.getInstance (http://localhost:3001/static/js/bundle.js:49894:18)<br/>
            at onClickOutside._this.__outsideClickHandler (http://localhost:3001/static/js/bundle.js:49815:30)<br/>
            at HTMLDocument.handlersMap.(anonymous function) (http://localhost:3001/static/js/bundle.js:49856:17)<br/>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
