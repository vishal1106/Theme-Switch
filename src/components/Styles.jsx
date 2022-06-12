import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const Styles = () => {

const {changetheme}=useContext(ThemeContext)

  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",height:"80px", width:"90%",margin:"auto",marginTop:"20px"}}>
        <button style={{marginTop:"20px"  ,backgroundColor:"black",color:"white",paddingLeft:"10px",paddingRight:"10px"}} 
        onClick={changetheme}>SWITCH</button>
    </div>
  )
}

export default Styles