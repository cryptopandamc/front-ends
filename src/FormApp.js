import React, { Component } from 'react';  

import FormContainer from './components/FormContainer';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <h3>React Form</h3>
        <FormContainer />
      </div>
    );
  }
}

export default App; 