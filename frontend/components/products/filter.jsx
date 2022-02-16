import React from 'react';
import ProductIndex from './product_index';

const Filter = ({products, fetchAllProducts, filter, updateFilter}) => (
   <div>
       <ProductIndex products={products} updateFilter={updateFilter} fetchAllProducts={fetchAllProducts} filter={filter}/>
   </div>
)

export default Filter;
