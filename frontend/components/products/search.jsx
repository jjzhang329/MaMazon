import React from 'react';
import ProductIndex from './product_index';

const Search = ({products, fetchAllProducts, filter}) => (
   <div>
       <ProductIndex products={products} fetchAllProducts={fetchAllProducts} filter={filter}/>
   </div>
)

export default Search;
