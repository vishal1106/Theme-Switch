import React, {  createContext } from 'react'

import { useState } from 'react'





export const ThemeContext=createContext()
export const ThemeProvider = ({children}) => {
const [auth,setAuth]=useState(false)




const changetheme=()=>{
   
    if(!auth){
        setAuth(true)
       
    }
    else{
        setAuth(false)
       
      
    }
    
}




 return <ThemeContext.Provider value={{changetheme,auth}}>{children}</ThemeContext.Provider>

}