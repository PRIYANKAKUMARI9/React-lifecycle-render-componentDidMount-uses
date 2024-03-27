import React from "react";

class Renderr extends React.Component{
    constructor(){
        super();
        this.state={
            hello:"pinki"
        }
    }
    render(){
        console.log("render methods in this ok",this.state.hello)
        return(
           <>
            <h1>hello priyanka</h1>
            <button onClick={()=>this.setState({hello:"pinki se pinka"})}>Update hello</button>
           </>
        )
    }
}

export default Renderr;
