import React, { useEffect, useState } from "react";
import { RiArrowDropDownFill } from 'react-icons/ri'
import { fetchAllProducts } from "../../actions/products_actions";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import { GoSearch } from "react-icons/go";
import { openModal } from "../../actions/modal_actions";

const SearchBar = ({fetchAllProducts, products, filter, updateFilter, openModal})=>{
    const [search, setsearch] = useState(filter)
    
    const [select, setSelected] = useState('All')
    const [active, setActive] = useState(false)
    
    // useEffect(()=>{
    //     fetchAllProducts(filter)
    // }, [])
    useEffect(() => {
        console.log(search)
        fetchAllProducts(filter)
    }, [search])

    return (
        <div className='searchbar'>
            <div className='dropdown' onClick={()=>openModal('dropdown')}>
              <div className='all'>{
              filter.department === '' ?  'All' : filter.department 
            }
            </div>

              <RiArrowDropDownFill className='dropdownicon'/>
            </div>
          
            <input className='searchinput' type="text" />
            <GoSearch className='searchicon' />
        </div>
    )
}

const mapState = (state)=>({
    products: Object.values(state.entities.products),
    filter: state.ui.filters
})
const mapDispatch = (dispatch) => ({
    fetchAllProducts: (filter)=>dispatch(fetchAllProducts(filter)),
    openModal: (modal)=>dispatch(openModal(modal)),
    updateFilter: (filter)=> dispatch(updateFilter(filter))
})
export default connect(mapState, mapDispatch)(SearchBar);