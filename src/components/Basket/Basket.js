import React from "react";
import {
  BasketStyle,
  Button,
  ButtonAdd,
  ButtonRemove,
  Div,
  DivDireita,
  Divi,
  H2,
  Row,
} from "./style";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, clearCart, checkoutCart } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <BasketStyle>
      <H2>Cart Items</H2>
      <hr />
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <Row key={item.id}>
          <Div>{item.name}</Div>
          <Div>
            <ButtonAdd onClick={() => onAdd(item)}>+</ButtonAdd>
            <ButtonRemove onClick={() => onRemove(item)}>-</ButtonRemove>
          </Div>
          <DivDireita>
            {item.qty} x ${item.price}
          </DivDireita>
        </Row>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <Row>
            <Div>Items Price</Div>
            <Divi>${itemsPrice}</Divi>
          </Row>
          <Row>
            <Div>Shipping Price</Div>
            <Divi>${shippingPrice}</Divi>
          </Row>
          <Row>
            <Div>
              <strong>Total Price</strong>
            </Div>
            <Divi>
              <strong>${totalPrice}</strong>
            </Divi>
          </Row>
          <hr />
          <Row>
            <Button onClick={checkoutCart}>Checkout </Button>
            <Button onClick={clearCart}>Clear Cart </Button>
          </Row>
        </>
      )}
    </BasketStyle>
  );
}
