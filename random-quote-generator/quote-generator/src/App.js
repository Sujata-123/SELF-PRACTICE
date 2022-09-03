import React, { useEffect,useState } from "react";
import axios from 'axios';
import './App.css';
const App=()=>{
    const [advice,setAdvice]=useState('');


    useEffect(()=>{
        console.log("entered on ui")
    },[])
    return(
        <>
        <h1>App</h1>
        </>
    )
}
export default App;