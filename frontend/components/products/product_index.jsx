import React from 'react';
import Header from '../home/header';
import NavBarContainer from '../home/nav_bar_container'
import ProductIndexItem from './product_index_item'
class ProductIndex extends React.Component{

    constructor(props){
        super(props)
    }
    saveStateToLocalStorage() {
        
        localStorage.setItem("filter", JSON.stringify(this.props.filter))

    }
    componentDidMount(){   
        let filter = localStorage.getItem("filter")
        this.props.fetchAllProducts(JSON.parse(filter))
        window.addEventListener("beforeunload", this.saveStateToLocalStorage.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload",
            this.saveStateToLocalStorage.bind(this)
        )
        this.saveStateToLocalStorage()
    }
    render(){
        console.log(this.props.filter)
        if(!this.props.products) return null;
        return(
            <div>
                <Header/> 
                <NavBarContainer/>
                {this.props.products.map(product => {
                    return <ProductIndexItem product={product} key={product.id}/>
                })}
            </div>
        )
    }
}
export default ProductIndex;