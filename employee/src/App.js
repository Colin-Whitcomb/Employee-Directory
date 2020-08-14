import React from 'react';
import './style.css';
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import TableHeader from "./components/TableHead/tableHead";
// import TableWrapper from "./components/TableWrapper/tableWrapper";

function App() {
  return (
    <div>
      <Jumbotron />
      <TableHeader
       />
    </div>
  );
}

export default App;
