import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Container, Icon, Label, Menu } from "semantic-ui-react";
import ProductList from "../components/ProductList";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function Homepage() {
  return (
    <div>
      <BrowserRouter>
        <Container fluid>
          <Menu>
            <Container fluid>
              <Menu.Item header>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item header>
                <Link to="/cart">Shopping Cart</Link>
              </Menu.Item>
            </Container>
            <Menu.Item>
              <Icon name="cart" />
              <Label>{/* TODO this should be dynamic */}2</Label>
            </Menu.Item>
          </Menu>
          <Container text>
            <Switch>
              <Route exact path="/">
                <Products />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/cart">
                <ShoppingCart />
              </Route>
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default Homepage;
