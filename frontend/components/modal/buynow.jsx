import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import React from "react"

const BuyNow = ({product, currentUser, closeModal})=>{
    const today = new Date()
    let date_start = today.setDate(today.getDate() + 2)
    let date_end = today.setDate(today.getDate() + 7)
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    date_start = new Intl.DateTimeFormat('en-US', options).format(date_start)
    date_end = new Intl.DateTimeFormat('en-US', options).format(date_end)
    date_start = date_start.split(",").slice(1).join(",")
    date_end = date_end.split(",").slice(1).join(",")
    return(
        
        <div className="checkout-modal">
            <header className="modal-header">
                <h4>
                    <div className="modal-title">Buy now: {product.name}</div>
                    
                </h4>
                <button id="modal-close-button" onClick={()=>closeModal()}> X </button>
            </header>
            <div className="checkout-modal-row1">
                <div className="checkout-prodcut-info">
                    <div className="image-div">
                        <img src={product.photoUrl}/>
                    </div>
                    <div className="row-right">
                        <span className="arriving">Arriving {date_start} - {date_end}</span> 
                        <span className="message">FREE Standard Shipping</span>
                        <span className="message">Sold by <span className="color">Mamazon</span></span>
                    </div>
                </div>
            </div>
            <div className="checkout-modal-row2">
                <div className="row-left">Ship To</div>
                <div className="row2-right">{currentUser.name}</div>
            </div>
            <div className="checkout-modal-row3">
                <div className="row-left">
                    <div className="row3-total"> Total </div>
                   
                </div>
                <div className="row-right">
                    <span className="modal-price">${product.price}</span></div>
            </div>
            <div className="modal-footer">
                <div className="place-order-button">
                    <button id="modal-checkout-button">Place your order</button>
                </div>
            </div>
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
    closeModal: (modal)=>dispatch(closeModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyNow)