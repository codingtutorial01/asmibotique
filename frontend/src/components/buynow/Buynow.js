import { Divider } from '@mui/material'
import React from 'react'
import './buynow.css'
import Option from './Option'


const Buynow = () => {
  return (
    <div className='buynow_section'>
     <div className='buynow_container'>
        <div className='left_buy'>
            <h1>Shopping Cart</h1>
            <p>Select all Items</p>
            <span className='leftbuyprice'>Price</span>
            <Divider />
            <div className='item_containert'>
                <img src='smartwatch.jpg' style={{width:150, height: 200}} alt='' />
                <div className='item_details'>
                    <h3>Mobile Sense 500 smartwatch (Black strap, Freesize)</h3>
                    <h3>Smart Watches</h3>
                    <h3 className='differentprice'> ₹ 4049.00</h3>
                    <p className='unusuall'>unusualy dispatched in 8 days.</p>
                    <p>Eligible for FREE shipping</p>
                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                <Option />
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Buynow
