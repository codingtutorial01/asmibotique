import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return <div className="cart_section">
        <div className="cart_container">
            <div className="left_cart">
                <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                <div className="cart_btn">
                    <button  className="cart_btn1">Add to Cart</button>
                    <NavLink to="/buynow"><button  className="cart_btn2">Buy Now</button> </NavLink>
                </div>           
                </div>
            <div className="right_cart">
                <h3>Fitness Gear</h3>
                <h4>Pigeon Electric Kettle (1.5 L, Silver, Black) </h4>
                <Divider /> 
                <p className="mrp">M.R.P.: ₹1,347</p> 
                <p>Deal of The Day: <span style={{color: "#B12704"}}> -48% ₹699</span></p>  
                <p>You Save: <span style={{color: "#B12704"}}> rs 570.00/-</span></p>  
                <div className="discount_box">
                    <h5>Discount: <span style={{color:"#111"}}>Extra 10% Off</span></h5>
                    <h4>Free Delivery: <span style={{color:"#111", fontWeight:600}}>Oct 8-21</span> Details</h4>
                    <p>Fastest Delivery : <span style={{color:"#111", fontWeight:600}}>Tomorrow 11AM</span></p>
                </div>
                <p className="description">About the Item :
                 <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}> The classical mirror polish of the appearance makes your electric kettle 1.8 Litre unique and aesthetic, which can match any type of kitchen design and 360° swivel base is connected with standard power cord for safe usage and convenient storage</span></p>
            </div>
            
        </div>

    </div>
};

export default Cart;