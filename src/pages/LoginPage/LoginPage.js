import React, { useEffect, useState } from 'react';
import InitialPage from '../InitialPage/InitialPage';


export default function LoginPage(){
     
    const [initial, setInitial] = useState(true);

    useEffect(()=>{
       setTimeout(()=>{
          setInitial(false)
       },3000)
    },[])



    return(
        <>
        {initial ? <InitialPage /> : <h1>Login</h1>}
        </>
    )
}