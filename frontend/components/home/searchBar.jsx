import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../../actions/products_actions";
import { connect } from "react-redux";
import { changeFilter, updateFilter } from "../../actions/filter_actions";
import { GoSearch } from "react-icons/go";
import { openModal } from "../../actions/modal_actions";
import SearchDrop from './searchDrop'
import ResultDrop from "./resultDrop";
import { NavLink } from "react-router-dom";

const SearchBar = ({changeFilter, products, filter, updateFilter, fetchAllProducts})=>{
    const [input, setInput] = useState('')
    const [result, setResult] = useState([])
    const [toggle, setToggle] = useState(true)
    const [resultActive, setResultActive] = useState(true)
    const savedfilter = JSON.parse(localStorage.getItem('filter'))
    const [department, setDepartment] = useState(savedfilter.department)
  
    useEffect(()=>{
        setDepartment(savedfilter.department)
    }, [savedfilter.department])

    useEffect(()=>{     
        
        const search = { 'name': input }
        
        const key = {'department': department.toLowerCase()}
        console.log(department)
        const searchFilter = { ...key, ...search }
       
       fetchAllProducts(searchFilter).then((docs)=>setResult(Object.values(docs.products)))       
       
    }, [input, department])
    return (
        <div className='searchbar'>
            <SearchDrop toggle={toggle} setToggle={setToggle} setDepartment={setDepartment} filter={filter} updateFilter={updateFilter} changeFilter={changeFilter}/>
            <div className="search-center">
                <input className='searchinput' value={input} type="text" onChange={(e)=>setInput(e.currentTarget.value)} 
                onClick={()=>{
                    setResultActive(true)
                    setToggle(false)
                    }}/>
                {result.length && input && resultActive && <ResultDrop result={result} setInput={setInput} setResult={setResult} setResultActive={setResultActive}/>}
                {input && !result.length && (<div className="result-list-container">
                    <NavLink to='/products' onClick={() => {
                        setInput("")
                        setResultActive(false)
                        
                    }}
                    className="search-result-list">No Result Found</NavLink>
                </div>)}
            </div>
            <NavLink to='/products' onClick={() => 
                updateFilter('department', department.toLowerCase())                
                } replace>
                <GoSearch className='searchicon' />
            </NavLink>
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
    updateFilter: (filter, value)=> dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value)=>dispatch(changeFilter(filter, value))
})
export default connect(mapState, mapDispatch)(SearchBar);