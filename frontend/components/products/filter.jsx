import React from 'react';
import ProductIndex from './product_index';

const Filter = ({products, fetchAllProducts, changeFilter, filter, updateFilter}) => (
   <div>
       <ProductIndex changeFilter= {changeFilter} products={products} updateFilter={updateFilter} fetchAllProducts={fetchAllProducts} filter={filter}/>
   </div>
)

export default Filter;
