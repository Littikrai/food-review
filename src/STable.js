import React from "react";
import { Table } from "react-bootstrap";

const STable = ({ info }) => {
  const data = info;
  data.sort(function (a, b) {
    return b.value - a.value;
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Word</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 100).map((item) => {
          return (
            <tr>
              <th>{item.text}</th>
              <th>{item.value}</th>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default STable;
