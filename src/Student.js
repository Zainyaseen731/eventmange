import React,{Component} from "react";
class Student extends Component{
    hendelClick=(e)=>{
       e.preventDefault();
        console.log("Button clicked")

    };
    render(){
        return(
            <div>
                <h1>Hi zain</h1>
                <a href="https://www.youtube.com/watch?v=hTAsjKInRa8&list=PLbGui_ZYuhignjLLXTJWkRJKN-SgAqClL&index=22" onClick={this.hendelClick}>Click me</a>
            </div>
        )
    }
}

export default Student;