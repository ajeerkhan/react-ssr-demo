import React from 'react';
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    incrementCounter(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    getDateTime() {
        return Date().toString();
    }

  componentDidMount(){
  
        setInterval(()=>{
            this.incrementCounter();
        }, 1000)
  
  }
   
   render() {
    


    return (
            <React.Fragment>
             <h1>Welcome!!! you logged in</h1>
             {
                  
                    <span>Screen refreshed by {this.state.counter} times.</span>
                  
             } 
            </React.Fragment>
    )
}
}
