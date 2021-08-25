import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: [],
    cartItms: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
  };
  render() {
    return (
      <ProductContext.Provider>{this.props.children}</ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
