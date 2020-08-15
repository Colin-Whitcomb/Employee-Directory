import React, { Component } from 'react';
import './style.css';
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import TableHeader from "./components/TableHead/tableHead";
import TableWrapper from "./components/TableWrapper/tableWrapper";
import TableBody from './components/TableBody/tableBody';
// import Employees from './employee.json';
import employees from '../src/utils/notJsn'

class App extends Component {

  state = {
    // Employees: Employees,
    employees: employees,
    firstNameCheck: true,
    lastNameCheck: false
  }

  //  ------------------ First Name Functions ------------------ //
  // Check which sort item was clicked
  firstNameClicked(upDownCheck) {
    console.log("firstNameClicked!");
    console.log(upDownCheck);
    if (upDownCheck) {
      var sortedEmployees = this.sortFirstName(employees);
      this.setState({
        employees: sortedEmployees,
        firstName: false
      })
       } else { 
         this.sortFirstNameBackwards(employees)
       }
    } 


  // Sorts First Name A-Z
  sortFirstName(Arr) {
    Arr.sort(function(a,b) {
      let fa = a.firstName.toLowerCase(),
          fb = b.firstName.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
    });
    // employees.forEach((e) => {
    //   console.log(`${e.id} ${e.firstName} ${e.lastName}`);
    // })
  }

  // Sorts First Name Z-A
  sortFirstNameBackwards(Arr) {
    Arr.sort((a,b) => {
      let fa = a.firstName.toLowerCase(),
          fb = b.firstName.toLowerCase();
          if (fb < fa) {
            return -1;
          }
          if (fb > fa) {
            return 1;
          }
          return 0;
    })
    employees.forEach((e) => {
      console.log(`${e.id} ${e.firstName} ${e.lastName}`);
    })
  }

//  ------------------ Last Name Functions ------------------ //
  // Check which sort item was clicked
  lastNameClicked(upDownCheck) {
    console.log("lastNameClicked!");
    console.log(upDownCheck);
    if (upDownCheck) {
        this.sortLastName(employees);
       } else { 
         this.sortLastNameBackwards(employees)
       }
    } 

  // Sorts Last Name A-Z
  sortLastName(Arr) {
    Arr.sort((a,b) => {
      let fa = a.lastName.toLowerCase(),
          fb = b.lastName.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
    })
    employees.forEach((e) => {
      console.log(`${e.id} ${e.firstName} ${e.lastName}`);
    })
  }

  // Sorts Last Name Z-A
  sortLastNameBackwards(Arr) {
    Arr.sort((a,b) => {
      let fa = a.lastName.toLowerCase(),
          fb = b.lastName.toLowerCase();
          if (fb < fa) {
            return -1;
          }
          if (fb > fa) {
            return 1;
          }
          return 0;
    })
    employees.forEach((e) => {
      console.log(`${e.id} ${e.firstName} ${e.lastName}`);
    })
  }


  render() {
    console.log(employees);
    employees.sort((a,b) => {
      let fa = a.lastName.toLowerCase(),
      fb = b.lastName.toLowerCase();
      console.log("fa: " +fa);
      if (fb < fa) {
        return -1;
      }
      if (fb > fa) {
        return 1;
      }
      return 0;
})
     employees.forEach((e) => {
       console.log(`${e.id} ${e.firstName} ${e.lastName}`);
     })
    return (
      <div>
        <Jumbotron />
      
          <TableWrapper>
            <TableHeader
            firstNameCheck = {this.state.firstNameCheck}
            lastNameCheck = {this.state.lastNameCheck}
            sortFirstName={this.firstNameClicked}
            sortLastName={this.lastNameClicked}
            />

            {this.state.employees.map(employee => (
            <TableBody
            firstName={employee.firstName}
            lastName={employee.lastName}
            image={employee.image}
            id={employee.id}
            email={employee.email}
            phone={employee.phone}
            />
            ))}
          
          </TableWrapper>
        
      </div>

    );
  }
}
export default App;
