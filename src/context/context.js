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
    search: "",
    category: "all",
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
        // console.log(storedProducts);
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
    // console.log(categories);
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

  //handle filtering
  handleChange = (event) => {
    const name = event.target.name;
    // console.log(name);
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortData
    );
  };
  sortData = () => {
    const { categories, category } = this.state;

    let tempProducts = [...categories];

    // filtering based on category
    if (category !== "all") {
      tempProducts = tempProducts.filter((item) => item.name === category);
    }

    // if (search.length > 0) {
    //   tempProducts = tempProducts.filter((item) => {
    //     let tempSearch = search.toLowerCase();
    //     let tempTitle = item.name.toLowerCase().slice(0, search.length);
    //     if (tempSearch === tempTitle) {
    //       return item;
    //     }
    //   });
    // }
    let tempList = [];
    tempProducts.map((item) => {
      tempList = item.productsData;
    });
    // console.log(tempList);

    this.setState({
      filteredProducts: tempProducts,
    });
    // console.log(this.state.filteredProducts);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setSingleProduct: this.setSingleProduct,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
