import React, { Component } from 'react';

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
            <div>
               <ul>
                  {data.people.map((el, i) => {
                     return <li key={i}>{el.name}</li>
                  })}               
               </ul>
               <p>Total amount: {data.number} people on ISS</p>
            </div>
         )
      }     
   }
} 

export default PersonsList;