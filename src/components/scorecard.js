/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import './scorecard.css';
import {Table} from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
class Scorecard extends Component {
  render() {
    return (
      <div className="App-scorecard">
        <Table striped bordered hover responsive="md" size="sm">
          <thead>
            <tr>
              <th colSpan="1">#</th>
              <th colSpan="1">Turns</th>
              <th colSpan="2">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1" />
              <td colSpan="1" />
              <td colSpan="2" />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Scorecard;
