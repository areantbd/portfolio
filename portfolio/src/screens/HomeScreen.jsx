import React from 'react'
import codeImg from "./images/home-code.png"
import me2 from "./images/me2.png"
 
function HomeScreen() {
  return (
    <div className='home-screen'>
      <div className='container home-data'>
        <div className='py-5 row justify-content-md-between '>
          <img src={me2} alt="me" className='col-md-5 p-0 w-50 mx-auto'></img>
          <img src={codeImg} alt="code" className='code ms-auto py-5 col-md-5 p-0' style={{maxWidth: "100"}} ></img>
        
        </div>
      </div>
    </div>
  )
}

export default HomeScreen