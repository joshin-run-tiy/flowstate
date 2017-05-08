// import React, { Component } from 'react'
// import axios from 'axios'
// import cookie from 'react-cookie'
// import { Modal,Button  } from 'react-bootstrap'
// import { API_URL, CLIENT_ROOT_URL, errorHandler } from '../../actions/index'
//
// class NameofClass extends Component {
//
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       classrooms: [],
//       profile: {country: '', firstName: '', lastName: '', gravatar: '', organization: ''}
//     }
//   }
//   componentDidMount(){
//     const authorization = "Some Name" + cookie.load('token').replace("JWT","")
//       axios.get(`${API_URL}/your/endpoint`, {
//         headers: { 'Authorization': authorization }
//       })
//       .then(response => {
//         this.setState({
//           classrooms:response.data.classrooms,
//           profile:response.data.profile
//         })
//       })
//       .then(response => {
//         this.setState({classrooms: response.data.profile})
//       })
//       .catch((error) => {
//         console.log("error",error)
//       })
//   }
//   render () {
//     return (
//       <div className='container'>
//         <div className='jumbotron'>
//           <h1>NameofClass Page</h1>
//           <p>Welcome {this.state.profile.firstName}  {this.state.profile.lastName}</p>
//         </div>
//         <div className='well'>
//            {
//              this.state.classrooms.map((room) => {
//                 return (
//                   <div>
//                     <p>{room.name}</p>
//                   </div>
//                 )
//              })
//            }
//         </div>
//       </div>
//     )
//   }
// }
//
// export default NameofClass
