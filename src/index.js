import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.css'
import Data from './components/Data'
import DataExample from './components/DataExample'
import Sites from './components/Sites'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: Data
    }
  }
  render () {
    return (
      <div>
        <p className='header-title'>FlowState</p>
        <DataExample />
        <Sites />
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
