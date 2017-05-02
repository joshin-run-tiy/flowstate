import React, { Component } from 'react'
// import jQuery from '../scripts/jquery-3.2.1.min'
// import $ from '../scripts/jquery-3.2.1.min'

class Data extends Component {

//   dataFlow () {
//
//   const whoIs = 'people/'
//   const url = 'http://swapi.co/api/' + whoIs
//
//   $.ajax({
//     url: url
//   }).done(function(data) {
//     console.log('The returned object is:', data)
//
//     if ( whoIs === 'people/') {
//       const results = data.results;
//       const resultsLength = results.length;
//       const people = [];
//
//       for (let i = 0; i < resultsLength; i++) {
//         people.push(results[i].name)
//       }
//
//       console.log('the people are:', people);
//     }
//     else {
//       console.log('the person is:', data.name)
//     }
//   })
// }


  render() {

    return (
      <div className="data-stack">
        <p className="data-title">Data</p>
        <button>Data</button>
      </div>
    )
  }
}


module.exports = Data
