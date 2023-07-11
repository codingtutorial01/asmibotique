import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

      <header>
        <nav>
          <div className="left">
            <div className='navlogo'>
              <NavLink to="/"> <img src='./amazon_PNG25.png' alt="" /></NavLink>

            </div>
            <div className='nav_searchbaar'>
              <input type="text" name="" id="" />
              <div className="search_icon">
                {/* <i className="fas fa-search" id="search"></i> */}
                <SearchIcon id="search" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
              <NavLink to="/login">Sign in</NavLink>
            </div>
            <div className='cart_btn'>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>
              <NavLink to="/getproductsone/:id">Cart</NavLink>

            </div>
            <Avatar className="avatar" />
          </div>
        </nav>
      </header>
    </div>
  )
}
