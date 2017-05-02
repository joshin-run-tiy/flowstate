import React, { Component } from 'react'
import axios from 'axios'

class Data extends Component {
  render () {
    axios.get('http://swapi.co/api/whois')
    .then(response => { console.log(response) })

    return (
      <div className='data-stack'>
        <p className='data-title'>Data</p>
        <button>Data</button>
      </div>
    )
  }
}
module.exports = Data
