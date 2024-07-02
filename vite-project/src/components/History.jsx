import { useEffect, useState } from 'react';
import {useContextD} from './Context.jsx';

export const History = ()=>{

    const {dataD} = useContextD();
    const [dataArray,setArray] = useState([])
    
    useEffect(()=>{
        let copy = [...dataArray]
         copy.push(dataD);
         setArray(copy);
    },[dataD]);

    return(
        <div id='history'>
           {
             console.log(dataArray)
           }
          
        </div>
    )
    
}