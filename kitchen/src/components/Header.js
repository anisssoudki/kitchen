import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import SearchBar from './SearchBar'
const Header = () => {
    return (
        <div className="ui header">

        <div className="ui inverted pointing menu">
        <Link to="/" className="ui red button"> <i className="large middle aligned icon food"/> </Link>
        {/* <Link to="/yummlys" className="item"> recipe book <i className="large middle aligned icon book"/></Link> */}
          <div className="right menu">
              
          <Link to="/login" className="item">  <GoogleAuth />  </Link>
         
            <div className=" ui inverted item">
              <div className="ui fluid category search">
              <SearchBar/>  
               
             
              </div>
            </div>
          </div>
        </div>
        
                </div>
    
    
    )
};

export default Header;