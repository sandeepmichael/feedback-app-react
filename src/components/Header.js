import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header style={{backgroundColor:'pink'}}>
            <div className='container'>
           <h1>Feedback Section</h1> 
          </div>
          <div style={{paddingRight:'20px'}}>
          <Link to='/about'>About</Link>
            </div>
       
     
        </header>
    )
}

export default Header
