import React, { Component } from 'react';
import Checkout from './Checkout';
import TotalAmount from './TotalAmount';
import CartItem from './CartItem';

export class Cart extends Component {
  state = { items: [] };

  componentDidMount() {
    this.setState({
      items: [
        {
          name: 'iPhone 12 Grey',
          storage: 128,
          color: 'blue',
          quantity: 1,
          price: 980,
          img: 'https://www.techinn.com/f/13782/137821848/apple-iphone-12-pro-max-6gb-128gb-6.7.jpg',
        },
        {
          name: 'iPhone XS',
          storage: 64,
          color: 'gray',
          quantity: 1,
          price: 900,
          img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xs/iphone-xs-gold.jpg',
        },
        {
          name: 'iPhone 8 Plus',
          storage: 64,
          color: 'black',
          quantity: 1,
          price: 865,
          img: 'https://m.media-amazon.com/images/I/61K5-sw7yDL._AC_SX679_.jpg',
        },
      ],
    });
  }

  incrementQty(index) {
    const items = [...this.state.items];
    items[index].quantity = items[index].quantity + 1;
    this.setState({ items });
  }

  decreaseQty(index) {
    const items = [...this.state.items];
    if (items[index].quantity > 1) {
      items[index].quantity = items[index].quantity - 1;
      this.setState({ items });
    }
  }

  deleteCartItem(index) {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }

  render() {
    return this.state.items.length > 0 ? (
      <div className='w-50 mx-auto'>
        <div className='cart-items'>
          {this.state.items.map((item, i) => (
            <CartItem
              key={i}
              item={item}
              incrementQty={() => this.incrementQty(i)}
              decreaseQty={() => this.decreaseQty(i)}
              deleteCartItem={() => this.deleteCartItem(i)}
            />
          ))}
        </div>
        <TotalAmount
          total={this.state.items.reduce(
            (total, { price }) => total + price,
            0
          )}
        />
        <Checkout />
      </div>
    ) : (
      <div className='d-flex flex-row justify-content-center mt-5'>
        <h2>No has agregado nada al carrito</h2>
      </div>
    );
  }
}

export default Cart;
