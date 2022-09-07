import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
  );
};
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
      </tr>
      <tr>
        <td>Mac</td>
      </tr>
      <tr>
        <td>Dee</td>
      </tr>
      <tr>
        <td>Dennis</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    const { studentNames } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody studentNames={studentNames} />
      </table>
    );
  }
}
export default Table;
