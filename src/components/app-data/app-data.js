import React, { Component } from 'react';
import './app-data.sass';
import PersonsList from '../persons-list/persons-list';

class Data extends Component {
   render(){      
      const date = this.props.date;
      const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
      const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
      return (
         <div className='container__data'>
            <div className='container__time'>
               <p>Current UTC time: {hours}:{minutes}</p>   
               <p>{date.toDateString()}</p>         
            </div>    
            <PersonsList date={date}/>
         </div>
      )
   }
}

export default Data;