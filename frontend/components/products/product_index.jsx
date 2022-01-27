import React from 'react';
import Header from '../home/header';
import NavBar from '../home/nav_bar';
import ProductIndexItem from './product_index_item'
class ProductIndex extends React.Component{

    componentDidMount(){
        // this.props.fetchAllProducts(this.props.filter)
    }
    
    render(){
        if(!this.props.products) return null;
        return(
            <div>
                <Header/>
                {/* <NavBarCont/> */}
                {this.props.products.map(product => {
                    return <ProductIndexItem product={product} key={product.id}/>
                })}
            </div>
        )
    }
}
export default ProductIndex;