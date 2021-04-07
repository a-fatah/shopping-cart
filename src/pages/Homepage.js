import React from "react";
import { Container, Icon, Label, Menu } from "semantic-ui-react";
import ProductList from "../components/ProductList";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function Homepage() {
  return (
    <div>
      <Container fluid>
        <Menu>
          <Container fluid>
            <Menu.Item as="a" href="/products" header>
              Products
            </Menu.Item>
            <Menu.Item as="a" href="/cart" header>
              Shopping Cart
            </Menu.Item>
          </Container>
          <Menu.Item>
            <Icon name="cart" />
            <Label>{/* TODO this should be dynamic */}2</Label>
          </Menu.Item>
        </Menu>
        <Container text>
          <Products />
          <ShoppingCart />
        </Container>
      </Container>
    </div>
  );
}

export default Homepage;
