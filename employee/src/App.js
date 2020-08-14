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
        <div>
          <TableWrapper>
            <TableHeader/>

            {this.state.Employees.map(employee => (
            <TableBody
            name={employee.name}
            image={employee.image}
            id={employee.id}
            />
            ))}
          
          </TableWrapper>
          </div>
      </div>

    );
  }
}
export default App;
