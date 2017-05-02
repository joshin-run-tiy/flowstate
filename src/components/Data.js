import React, { Component } from 'react'

class Data extends Component {

  window.onload = function() {
  const dataSrc = '../scripts/data.json';

  fetch(dataSrc, { method: 'get' })
  .then(function(response) {
    console.log('response', response);
    return response.json();
  }).then(function(data) {
    console.log('data', data);
  }).catch(function(err) {
    console.log('err', err);
  })

  console.log( 'async?', dataSrc);


  render() {

    return (
      <div className="data-stack">
        <p className="data-title">Data</p>
        <button onClick={dataFetch}>Data</button>
      </div>
    )
  }
}


module.exports = Data
