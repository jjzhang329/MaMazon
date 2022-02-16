import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BuyNowContainer from './buynow'
import AddedToCart from './addedToCart'
import SearchOptions from './searchOptions';

function Modal({ modal, closeModal, filter, updateFilter }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'buynow':
            component = <BuyNowContainer/>;
        break;
        case 'addtocart':
            component = <AddedToCart/>
        break;
        case 'dropdown':
            component= <SearchOptions filter={filter} updateFilter={updateFilter}/>
        break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        filter: state.ui.filters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateFilter: (filter) => dispatch(updateFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);