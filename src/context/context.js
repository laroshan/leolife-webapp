import React, { Component } from "react";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: [],
    cartItms: 0,
    cartTotal: 0,
    storedProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: [],
    loading: true,
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    let storedProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });

    let featuredProducts = storedProducts.filter(
      (item) => item.featured === true
    );

    this.setState({
      storedProducts,
      filteredProducts: storedProducts,
      featuredProducts,
      // cart: this.getStorageCart(),
      // singleProduct: this.getStorageProduct(),
      loading: false,
    });
  };

  setSingleProduct = (id) => {
    const product = this.state.storedProducts.find((item) => item.id === id);
    console.log(product);
    this.setState({
      singleProduct: product,
    });
    console.log(this.state.singleProduct);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
