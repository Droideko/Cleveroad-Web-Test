import React, { Component } from 'react';
import './app-location.sass';

class AppLocation extends Component {
   constructor(props){
      super(props);
      this.state = {
         coordinate: {},
         isLoaded: false,
         error: null
      }
   }

   componentDidMount(){
      this.getData();
      this.intervalID = setInterval(this.getData.bind(this), 5000);      
   }

   componentWillUnmount(){
      clearInterval(this.intervalID);
   }

   getData = () => {
      fetch('http://api.open-notify.org/iss-now.json')
         .then(response => response.json())
         .then(result => this.setState({coordinate: result, isLoaded: true}))
         .catch(e => this.setState({coordinate: result, isLoaded: true, error: e}));
   }
   

   render(){
      const { coordinate, isLoaded, error } = this.state;

      if (error) {
         return <h3> Error: {error.name} </h3>
      } else if (!isLoaded){
         return (
            <div className='container-location'>
               <h2>Loading...</h2>            
            </div>
         )
      } else {
         return (
            <div className='container-location'>
               <div className='container-location__info'>
                  <p>ISS is now located at:</p>
                  <p>longitude: {coordinate.iss_position.longitude}, latitude: {coordinate.iss_position.latitude}</p>
               </div>
               <div>Map</div>   
            </div>
         );
      }
   }
}

export default AppLocation;