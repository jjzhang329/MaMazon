import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/products_actions';
import Search from './search';


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products),
    filter: state.ui.filters.department

});

const mapDispatchToProps = dispatch =>({
    fetchAllProducts: (filter)=> dispatch(fetchAllProducts(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
