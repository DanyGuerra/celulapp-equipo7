import React, { Component } from 'react';

export class TotalAmount extends Component {
  render(props) {
    return (
      <div className='d-flex flex-row justify-content-end mb-3'>
        <h4 className='text-muted'>
          Total ammount <span className='text-black'>$ {this.props.total}</span>
        </h4>
      </div>
    );
  }
}

export default TotalAmount;
