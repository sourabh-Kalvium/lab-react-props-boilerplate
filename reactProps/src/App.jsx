
import './App.css'

function App(props) {
  

  return (
    <>
       <div className='parent'>
             <h4>Kalvium gallary</h4>
              <div className='main'>
                 {props.imageData.map((ele)=>{
                 return <img className='elephant' src=   {ele.img} alt="img" />
                 })}
             </div>
           
         </div>
    </>
  )
}

export default App
