import React, { Component } from 'react';
import './persons-list.sass';
import userImage from '../../../image/svg/user.svg';

class PersonsList extends Component {
   constructor(props){
      super(props);
      this.state = {
         data: {},
         isLoaded: false,
         error: null
      };
   }
   
   componentDidMount(){
      this.getData();      
   }

   componentDidUpdate(prevPros){
      if (this.props.date !== prevPros.date){
         this.getData();
      }
   }

   getData = () => {
      fetch('http://api.open-notify.org/astros.json')
         .then(response => response.json())
         .then(result => this.setState({data: result, isLoaded: true}))
         .catch(error => this.setState({data: result, isLoaded: true, error: e}));
   }

   render(){
      const { data, isLoaded, error } = this.state;
      if (error) {
         return <div> Error: {error.message} </div>
      } else if (!isLoaded) {
         return <div> Loading... </div>
      } else {
         return (
            <div className='list-wrapper'>
               <ul className='list'>
                  {data.people.map((el, i) => {
                     return <li key={i} className='list-item'>
                        <div className='list-block'>
                           <img src={userImage} alt='user'/>
                           <p>{el.name}</p>                    
                        </div> 
                     </li>
                  })}               
               </ul>
               <p className='list-amount'>Total amount: {data.number} people on ISS</p>
            </div>
         )
      }     
   }
} 

export default PersonsList;