import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App.jsx';

class Change extends Component {
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
    
    handleChangeInfo = e =>{
        console.log('EVENT');
    
        const {name, value} = e.target;
    
        this.setState((prevState) => ({
          user: {
            ...prevState.user, //spread operator
            [name]: value
          }
        }));
      }
    
      handleAddUser = e => {
        console.log('PASSED HANDLE ADD USER');
        console.log(this.state.userList);
        console.log('edi wow');
    
        let user = this.state.user;
        let userList = [...this.state.userList];
        
        userList.push(user);
    
        console.log(this.state.userList);
    
        this.setState({userList: userList});
    
        e.preventDefault();
    
      }
    render()
    {
        let user = this.state.user;
        let userList = this.state.userList;

        
        return(
            
            <div className = 'forms-panel'>
            <form>
              Name: <br /> <input type = 'text' name = 'name' placeholder = 'Name' onChange = {this.handleChangeInfo}/> <br />
              Age: <br /> <input type = 'text' name = 'age' placeholder = 'Age'  onChange = {this.handleChangeInfo} /> <br />
              Occupation: <br /> <input type = 'text' name = 'occupation' placeholder = 'Occupation'  onChange = {this.handleChangeInfo}/> <br />
              <br /> <button type = 'button' onClick = {this.handleAddUser}> Add User</button>
             
            </form>

            
      </div>
      
        )
    }
    

}
export default Change;
