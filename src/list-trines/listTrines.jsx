import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export const CListTrines = ({ trinesList }) => {
  console.log(trinesList);
  return (
    <Table hover>
      <thead>
        <tr>
          <th>nome</th>
          <th>prenome</th>
          <th>age</th>
          <th>Filiere</th>
          <th>groupe</th>
        </tr>
      </thead>
      <tbody>
        {trinesList?.map((s) => (
          <tr>
            <td>{s.firstName}</td>
            <td>{s.lastName}</td>
            <td>{s.age}</td>
            <td>{s.filier}</td>
            <td>{s.groupe}</td>
            <td>
              <Button variant="outline-danger">supprimer</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
