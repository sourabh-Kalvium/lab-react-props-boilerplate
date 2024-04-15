import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{

  imageData = this.props.imageData
  
  render(){
      return(
        <div className='parent'>
             <h4>Kalvium gallary</h4>
              <div className='main'>
                 {this.imageData.map((ele)=>{
                 return <img className='elephant' src=   {ele.img} alt="img" />
                 })}
             </div>
           
         </div>
      )
  }

}
