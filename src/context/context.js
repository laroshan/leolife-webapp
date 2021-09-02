import React, { Component } from "react";
// import { items } from "./productData";
import { commerce } from "./commerce";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: [],
    cartItms: 0,
    cartTotal: 0,
    storedProducts: [],
    categories: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts() {
    commerce.products
      .list({ limit: 200 })
      .then((products) => {
        const storedProducts = products.data;

        this.setState({
          storedProducts,
        });
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }

  async fetchCategories() {
    const { data: products } = await commerce.products.list({ limit: 200 });
    const { data: categories } = await commerce.categories.list();
    const productsPerCategory = categories.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);

    this.setState({
      categories: productsPerCategory,
    });
  }

  setSingleProduct = (id) => {
    const product = this.state.storedProducts.find((item) => item.id === id);
    // console.log(product);
    // localStorage.removeItem();

    this.setState({
      singleProduct: product,
    });
    localStorage.setItem("product", JSON.stringify(product));
  };

  getSingleProduct = () => {
    let product;
    if (localStorage.getItem("product")) {
      product = JSON.parse(localStorage.getItem("product"));
    } else {
      product = [];
    }
    return product;
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
