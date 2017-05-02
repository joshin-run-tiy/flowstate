import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import Data from './components/Data'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: Data
    }
  }

  

  render() {
    return (
      <div>
        <p>FlowState</p>
        <Data />
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
