// import React from "react";
// import {
//   Grid,
//   Paper,
//   Container,
//   InputBase,
//   IconButton,
// } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
// import SelectCategory from "./SelectedCategory";
// import { ProductConsumer } from "../context/context";
// import Product from "./Product";

// const FilterProduct = ({
//   categories,
//   addProduct,
//   searchResult,
//   setSearchResult,
// }) => {
//   const defaultCategory = { id: 0, name: "All" };
//   const [keyword, setKeyword] = React.useState("");
//   const [resultMessage, setResultMessage] = React.useState("");
//   const [selectedCategory, setSelectedCategory] =
//     React.useState(defaultCategory);

//   const handleInputChange = (event) => {
//     if (!keyword || !event.target.value) {
//       setResultMessage("");
//       setSearchResult([]);
//       setSelectedCategory(defaultCategory);
//     }
//     setKeyword(event.target.value);
//   };

//   const handleSelectChange = (event) => {
//     const { value } = event.target;
//     const category = categories.find((cat) => cat.id === value);
//     if (value === 0) {
//       setSelectedCategory(defaultCategory);
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const onSubmoit = async (e) => {
//     e.preventDefault();
//     if (!keyword) {
//       setResultMessage("You have to enter a product name");
//     }
//     if (keyword) {
//       try {
//         const categoryId = selectedCategory.id
//           ? { category_id: selectedCategory.id }
//           : {};
//         <ProductConsumer>
//           {(value) => {
//             const { storedProducts } = value;
//             const { data } = storedProducts.map({
//               query: keyword,
//               ...categoryId,
//             });
//           }}
//         </ProductConsumer>;

//         // if (!data) {
//         //   setResultMessage("No result match");
//         //   setSearchResult([]);
//         //   return;
//         // }
//         // setResultMessage("");
//         // setSearchResult(data);
//       } catch (error) {
//         setSearchResult([]);
//       }
//     }
//   };

//   return (
//     <div className="filter-bar">
//       <Container>
//         <Paper component="form" className="root" onSubmit={onSubmoit}>
//           <SelectCategory
//             categories={[defaultCategory, ...categories]}
//             selectedCategory={selectedCategory}
//             onChange={handleSelectChange}
//           />
//           <InputBase
//             className="input"
//             onChange={handleInputChange}
//             placeholder="Search for a product"
//             inputProps={{ "aria-label": "Search for a product" }}
//           />
//           <IconButton type="submit" aria-label="search">
//             <Search />
//           </IconButton>
//         </Paper>
//         {resultMessage && <p className="result-message">{resultMessage}</p>}
//         );
//         {searchResult.length && (
//           <div>
//             <Grid container spacing={4}>
//               {searchResult.map((product) => (
//                 <Grid key={product.id} item xs={12} sm={6} md={4}>
//                   <Product product={product} addProduct={addProduct} />
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default FilterProduct;

import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
export default function FilterProduct() {
  return (
    <ProductConsumer>
      {(value) => {
        const { categories, search, category, handleChange, storedProducts } =
          value;

        let categoriesAll = new Set();
        categoriesAll.add("All");
        // for (let Cate in categories) {
        //   console.log(Cate);
        // }

        categories.map((item) => {
          categoriesAll.add(item.name);
        });

        // categoriesAll.add(Cate.name)

        // console.log(categoriesAll);
        categoriesAll = [...categoriesAll];

        return (
          <div className="row">
            <FilterWrapper>
              {/* text search */}
              {/* <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div> */}
              {/*end of text search */}
              {/* category search */}
              <div className="col-10 mx-auto pb-3">
                <label htmlFor="category" className="pb-3">
                  category
                </label>
                {/* </div>
              <div className="col-10 mx-auto pb-3"> */}
                <select
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={category}
                  className="form-select form-select-sm "
                >
                  {/* <option value="all">all</option>
                    <option value="fuji">fuji</option>
                    <option value="htc">htc</option> */}
                  {categoriesAll.map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </FilterWrapper>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  /* grid-row-gap: 1rem; */
  label {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 20px;
    color: var(--Goldenwheat);
  }

  select {
    color: var(--mainWhite);
    background: var(--SoftWheat);
    background-color: var(--SoftWheat);
    border: 1px solid var(--Goldenwheat);
    font-size: 20px;
    /* box-shadow: 0 0 10px 100px #fff inset; */
  }

  /* select option:checked {
    background: var(--GoldenWheat);
  } */
  select option:hover {
    background: var(--mainWhite);
    color: #fff;
    box-shadow: #fff;
  }
  .select_box {
    width: 200px;
    overflow: hidden;
    border: 1px solid #000;
    position: relative;
    padding: 10px 0;
    color: var(--mainBg);
  }
  .select_box:after {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #f00;
    position: absolute;
    top: 40%;
    right: 5px;
    content: "";
    z-index: 98;
    color: var(--mainBg);
  }
  .select_box select {
    width: 220px;
    border: 0;
    position: relative;
    z-index: 99;
    background: none;
  }
`;
