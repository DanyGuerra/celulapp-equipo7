import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Checkout extends Component {
  render() {
    return (
      <div className='d-flex flex-row justify-content-end'>
        <Button variant='primary'>Checkout now</Button>
      </div>
    );
  }
}

export default Checkout;
