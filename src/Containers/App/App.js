import React, { Component } from 'react';
import Cardlist from '../../Components/CardList/Cardlist';
import Searchbox from '../../Components/SearchBox/Searchbox'
// import { Robot } from '../../Robot';
import './App.css';
import Scroll from '../../Components/Scroll/Scroll.js';
import ErrorBoundary from '../../Components/ErrorBoundry/ErrorBoundary'

  
class App extends Component{
    constructor(){
        super()
        this.state={
        Robot : [],
        searchfield:'',

    }

    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=> this.setState({Robot:users}))
   
}

    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value})
    
    }

 render() {
     const {Robot,searchfield}=this.state;
    const filteredRobot=Robot.filter(Robot=>{
        return Robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
   
        return !Robot.length?<h1>Loading....</h1>:
        (

            <div className="tc">
            <h1 className="f1">Robo-Friends</h1>
            <Searchbox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
            <Cardlist  Robot={filteredRobot} />
            </ErrorBoundary>
            </Scroll>
            </div>
        )

    

    
        
}
}
export default App;