import React, { Component } from 'react';
import './app-data.sass';
import PersonsList from '../persons-list/persons-list';

class Data extends Component {
   constructor(props){
      super(props);
      this.state = {
         date: new Date()
      }
      this.timer = this.timer.bind(this);
   }

   timer(){
      this.setState({date: new Date()});
   }

   componentDidMount(){
      this.timeID = setInterval(() =>  this.timer(), 5000);
   }

   componentWillUnmount(){
      clearInterval(this.timeID);
   }

   render(){
      const date = this.state.date;
      const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
      const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
      return (
         <div className='container__data'>
            <div className='container__time'>
               <p>Current UTC time: {hours}:{minutes}</p>   
               <p>{this.state.date.toDateString()}</p>         
            </div>    
            <PersonsList />
         </div>
      )
   }
}

export default Data;