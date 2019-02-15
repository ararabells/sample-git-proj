import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Change from './Change.jsx';
import {handleChangeInfo} from './Change'

class App extends Component {
  constructor(props){
    super(props);

    //set default state
    this.state = {
      userList: [
      {
        name: 'Edubells',
        age: 25,
        occupation: 'Gardener'
      },
      {
        name: 'Thomasito',
        age: 24,
        occupation: 'Sky Diver'
      }
      ],
      user: {
        name: '',
        age: '',
        occupation: ''
      }
    }
    // add funciton bindings
  }

  //add event handlers

  // handleChangeInfo = e =>{
  //   console.log('EVENT');

  //   const {name, value} = e.target;

  //   this.setState((prevState) => ({
  //     user: {
  //       ...prevState.user, //spread operator
  //       [name]: value
  //     }
  //   }));
  // }

  // handleAddUser = e => {
  //   console.log('PASSED HANDLE ADD USER');
  //   console.log(this.state.userList);

  //   let user = this.state.user;
  //   let userList = [...this.state.userList];
    
  //   userList.push(user);

  //   console.log(this.state.userList);

  //   this.setState({userList: userList});

  //   e.preventDefault();

  // }

  deleteUser = index => {
    let userList = [...this.state.userList];
    userList.splice(index, 1); // 1 is yung kung ilang elements yung idedelete

    this.setState({userList: userList});
  }

  render() {

    let userList = this.state.userList;
    let user = this.state.user;

    
    return (
      <div className="App">
      <Change />
      
      <div className = 'table-panel'>
      <table>
         <thead></thead>
         <tbody>
           <tr>
             <th className = 'user-table-cell'> NAME </th>
             <th className = 'user-table-cell'> AGE </th>
             <th className = 'user-table-cell'> OCCUPATION </th>
             <th> </th>
           </tr>
           {
             userList.map((user, index) => { // si index ay optional parameter na pwedeng gamitin. index per iteration
              return(
                <tr className = 'user-table-row'>
                  <td className = 'user-table-cell'> {user.name} </td>
                  <td className = 'user-table-cell'> {user.age} </td>
                  <td className = 'user-table-cell'> {user.occupation} </td>
                  <td className = 'user-table-cell'> <button type = 'button' onClick = { () => this.deleteUser(index)}>DELETE USER</button></td>
                </tr>
              )
             })
           }
         </tbody>
       </table>
      </div>

      
      </div>
    );
  }
}

export default App;
