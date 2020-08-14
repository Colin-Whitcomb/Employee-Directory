import React, { Component } from 'react';
import './style.css';
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import TableHeader from "./components/TableHead/tableHead";
import TableWrapper from "./components/TableWrapper/tableWrapper";
import TableBody from './components/TableBody/tableBody';
import Employees from './employee.json';

class App extends Component {

  state = {
    Employees: Employees,
  }

  render () {
    return (
      <div>
        <Jumbotron />
      
          <TableWrapper>
            <TableHeader/>

            {this.state.Employees.map(employee => (
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
