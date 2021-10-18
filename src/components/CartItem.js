import React, { Component } from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import '../css/cartItem.css';

export class CartItem extends Component {
  render(props) {
    return (
      <Row className='align-items-center justify-content-center mt-5 mb-5 mx-auto'>
        <Col className='d-flex flex-row align-items-center'>
          <img
            src={this.props.item.img}
            alt='iphone 12'
            className='mx-5 cart-item-image'
          />
          <div>
            <h4 className='mb-3'>{this.props.item.name}</h4>
            <p className='mb-1 text-muted'>
              Storage {this.props.item.storage}GB
            </p>
            <div className='d-flex flex-row align-items-center'>
              <p className='text-muted m-0'>Color</p>
              <div
                className='rounded mx-2 cart-item-color'
                style={{
                  backgroundColor: this.props.item.color,
                }}
              ></div>
            </div>
          </div>
        </Col>
        <Col
          md={3}
          className='d-flex flex-row align-items-center justify-content-center'
        >
          <Button
            variant='outline-secondary'
            className='cart-item-button'
            onClick={this.props.decreaseQty}
          >
            -
          </Button>
          <h4 className='mx-4'>{this.props.item.quantity}</h4>
          <Button
            variant='outline-secondary'
            className='cart-item-button'
            onClick={this.props.incrementQty}
          >
            +
          </Button>
        </Col>
        <Col
          md={2}
          className='d-flex flex-row align-items-center justify-content-center'
        >
          <h3 className='text-center'>$ {this.props.item.price}</h3>
        </Col>
        <Col
          md={1}
          className='d-flex flex-row align-items-center justify-content-end'
        >
          <Button
            variant='outline-danger'
            className='cart-item-button'
            onClick={this.props.deleteCartItem}
          >
            x
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CartItem;
