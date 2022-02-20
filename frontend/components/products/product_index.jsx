import React, { useEffect, useRef, useState } from 'react';
import ProductIndexItem from './product_index_item'
class ProductIndex extends React.Component{

    constructor(props){
        super(props)
        this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)
    }
    saveStateToLocalStorage() {
        localStorage.setItem("filter", JSON.stringify(this.props.filter))
    }
    componentDidMount(){   
        console.log('1')
        let filter = localStorage.getItem("filter")
        debugger    
        this.props.updateFilter("department", JSON.parse(filter).department)
        // window.addEventListener("beforeunload", ()=>{
        //     // this.props.updatefilter("department", JSON.parse(filter).department)
        //     this.saveStateToLocalStorage()
        // })

    }

    componentWillUnmount() {
     
        // window.removeEventListener("beforeunload", this.saveStateToLocalStorage.bind(this))
        this.props.updateFilter('department', "")
       
    }   
    render(){
        if(!this.props.products) return null;
        return(
            <div>
                
                <div className='product-index-container'>
                    {this.props.products.map(product => {
                        return <ProductIndexItem product={product} key={product.id}/>
                    })}
                </div>
            </div>
        )
    }
}





export default ProductIndex;



