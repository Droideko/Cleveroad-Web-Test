import React, { Component } from 'react';
import './container.sass';
import AppLocation from '../app-location/app-location';
import Data from '../app-data/app-data';

class Container extends Component {
   render(){
      return (
         <div className='container'>
            <AppLocation />
            <Data />         
         </div>
      )
   }
}

export default Container;