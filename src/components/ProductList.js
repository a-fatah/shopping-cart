import React from "react";
import { Container, Item, Header } from "semantic-ui-react";
import Product from "./Product";
function ProductList({ products }) {
  return (
    <Item.Group divided>
      {products.map((product) => (
        <Product name={product.name} />
      ))}
    </Item.Group>
  );
}

export default ProductList;
