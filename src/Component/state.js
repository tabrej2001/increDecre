import React from "react";

class State extends React.Component{

    state={
        count:0,
        count2:0
    }

    render()
    {
        return (<>
        <div className="div1"><h1 id="h1">Increment and decrement</h1></div>
            <div className="div2">
<p>{this.state.count}</p>
<button onClick={()=>{
    this.setState({count:this.state.count-1});
}}>Decrese by 1</button>

            </div>

<div className="div3">
<p>{this.state.count2}</p>
<button onClick={()=>{
    this.setState({count2:this.state.count2+1});
}}>Increse by 1</button>

            </div>





            </>
        )
    }


}

export default State;