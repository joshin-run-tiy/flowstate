import React, { Component } from 'react'
import axios from 'axios'

class Sites extends Component {
  constructor (props) {
    super(props)
    this.state = {
      siteId: [],
      site: []
    }
  }
  componentDidMount () {
    axios.get(`http://ckjacobson.com/maxicom/sites.json`)
    .then(response => {
      console.log(response)
      this.setState({
        siteIdOne: response.data.sites[0].id,
        siteOne: response.data.sites[0].site,
        siteIdTwo: response.data.sites[1].id,
        siteTwo: response.data.sites[1].site
      })
    })
    // .then(response => {
    //   this.setState({foo: response.data.zeroMin})
    // })
    .catch((error) => {
      console.log('error', error)
    })
  }
  render () {
    return (
      <div className='container'>
        <h1>Sites</h1>
        <p>Data: Site Id - {this.state.siteIdOne}</p>
        <p>Data: Site - {this.state.siteOne}</p>
        <p>Data: Site Id - {this.state.siteIdTwo}</p>
        <p>Data: Site - {this.state.siteTwo}</p>
        <label>Select a Site: </label>
        <select>
          <option>{this.state.siteOne}</option>
          <option>{this.state.siteTwo}</option>
        </select>
      </div>
    )
  }
}

module.exports = Sites
