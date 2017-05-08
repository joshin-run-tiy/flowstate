import React, { Component } from 'react'
import axios from 'axios'

class DataExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      classrooms: [],
      profile: {country: '', firstName: '', lastName: '', gravatar: '', organization: ''}
    }
  }
  componentDidMount(){
      axios.get(`http://ckjacobson.com/maxicom/reports/flow/1.json`)
      .then(response => {
        console.log(response)
        this.setState({
          dataArrays:response.data.flow[0].report_data,
          flow: response.data.flow,
          response: response,
          reportId: response.data.flow[0].report_data[0].report_id,
          timeStamp: response.data.flow[0].report_data[0].timestamp,
          value: response.data.flow[0].report_data[0].value
        })
      })
      // .then(response => {
      //   this.setState({foo: response.data.zeroMin})
      // })
      .catch((error) => {
        console.log("error",error)
      })
  }
  render () {
    return (
      <div className='container'>
          <h1>Flow Data</h1>
          <p>Data: Report Id - {this.state.reportId}</p>
          <p>Data: Timestamp - {this.state.timeStamp}</p>
          <p>Data: Value - {this.state.value}</p>
      </div>
    )
  }
}

module.exports = DataExample
