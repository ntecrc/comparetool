import React, { Component }from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/Form';
import Button from './components/Button';


class App extends Component {
  render() {
  return (
    <fragment>
      <div>
        <Navbar />
      </div>
      <TextArea />
      <br />
      <div>
        <Button />
      </div>
    </fragment>
         
      
    
  );
}
}

export default App;