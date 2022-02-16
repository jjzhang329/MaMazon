import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/products_actions';
import { updateFilter} from '../../actions/filter_actions'
import Filter from './filter';


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products),
    filter: state.ui.filters

});

const mapDispatchToProps = dispatch =>({
    fetchAllProducts: (filter)=> dispatch(fetchAllProducts(filter)),
    updateFilter: (filter)=>dispatch(updateFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
