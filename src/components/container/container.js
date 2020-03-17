import React, { Component } from 'react';
import './container.sass';
import AppLocation from '../app-location/app-location';
import Data from '../app-data/app-data';

class Container extends Component {
   constructor(props){
      super(props);
      this.state = {
         date: new Date()
      }
      this.time = this.time.bind(this);
   }

   time(){
      this.setState({date: new Date()});      
   }

   componentDidMount(){
      this.timerID = setInterval(() => this.time(), 5000);
   }

   componentWillUnmount(){
      clearInterval(this.timerID);
   }

   render(){
      return (
         <div className='container'>
            <AppLocation date={this.state.date}/>
            <Data date={this.state.date}/>         
         </div>
      )
   }
}

export default Container;