import React from "react";
import { Button, Card, IMG, H4 } from "./style";

export default function Product(props) {
  const { product, onAdd } = props;

  return (
    <Card>
      <IMG src={product.image} alt={product.name}></IMG>
      <H4>{product.name}</H4>
      <div>${product.price}</div>
      <div>
        <Button onClick={() => onAdd(product)}>Add To Cart</Button>
      </div>
    </Card>
  );
}
