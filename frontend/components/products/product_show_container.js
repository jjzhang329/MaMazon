import { connect } from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct} from "../../actions/products_actions"

const mapStateToProps = (state, {match}) => ({
    product: state.entities.products[match.params.id]
});

const mapDispatchToProps = (dispatch)=>({
    fetchProduct: (id)=>dispatch(fetchProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
