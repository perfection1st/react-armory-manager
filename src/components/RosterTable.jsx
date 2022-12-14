import Table from 'react-bootstrap/Table';
import {useEffect, useState} from 'react';

const API = 'http://localhost:3001';

export const RosterTable = (props) => {

  const soldiers = props.roster.map((soldier) => {
    return (
      <tr key={soldier.id}>
        <td>{soldier.lin}</td>
        <td>{soldier.rank}</td>
        <td>{soldier.name}</td>
        <td>{soldier.weapon}</td>
        <td>{soldier.nvg}</td>
      </tr>
      
    )
  });
  
return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>LIN</th>
          <th>RANK</th>
          <th>NAME</th>
          <th>WEAPON</th>
          <th>NVG</th>
        </tr>
      </thead>
      <tbody>
          {soldiers}
      </tbody>
    </Table>
);
}

