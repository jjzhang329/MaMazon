import React from 'react'
import { connect } from 'react-redux';
import { FcCheckmark } from 'react-icons/fc';
const AddedToCart = ({ product, currentUser, closeModal })=>{

    return(
        <div id='addedtocart-modal'>
            <FcCheckmark size={20} style={{marginRight: "5px"}}/>
            Successfully Added to Cart
        </div>
    )


}

const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id]
    return {
        product: Object.values(state.entities.products)[0],
        currentUser: currentUser
    }
};

const mapDispatchToProps = (dispatch) => ({
    closeModal: (modal) => dispatch(closeModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddedToCart)
