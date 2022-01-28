import React from 'react'
import { connect } from 'react-redux';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { fetchAllProducts } from '../../actions/products_actions';
import NavBar from './nav_bar';


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products),
    filter: state.ui.filters

});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter,value)),
    // fetchAllProducts: (filter)=>dispatch(fetchAllProducts(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);