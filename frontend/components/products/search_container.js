import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/products_actions';
import { changeFilter, updateFilter} from '../../actions/filter_actions'
import Filter from './filter';


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products),
    filter: state.ui.filters

});

const mapDispatchToProps = dispatch =>({
    fetchAllProducts: (filter)=> dispatch(fetchAllProducts(filter)),
    updateFilter: (filter, value)=>dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value)=> dispatch(changeFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
