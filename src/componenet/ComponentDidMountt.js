import React from 'react'

class ComponentDidMountt extends React.Component{
    constructor(){
        super();
        this.state={
            nam:"sethere"
        }
    }
    componentDidMount(){
        console.log("here is component Did Mount call")
    }
    render(){
         console.log("render call after constructor .. !! ")
        return(
            <>
            <h1>ComponentDidMountt uses here !! {this.state.nam}</h1>
            <button onClick={()=>{this.setState({nam:"updated set here"})}}>update nam</button>
            </>
        )
    }
}

export default ComponentDidMountt;