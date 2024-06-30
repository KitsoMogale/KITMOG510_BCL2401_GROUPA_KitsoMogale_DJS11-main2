import { useEffect, useState } from "react"
import { useParams,useSearchParams } from "react-router-dom";


export const Audio = ({rerender})=>{

    const [close,setClose] = useState(true);
    
    let searchValue = JSON.parse(localStorage.getItem('audio'));

   const closeModal = ()=>{
    localStorage.setItem('play','false');setClose(false);
    rerender(new Array);

   }
  
    return(
        <>

                  { 
                     close?
                      <div className='audioDiv'>
                          <div id='audiopic'>
                          <img className="audioimage" src={searchValue.image}/>
                          <p>{searchValue.title}</p>
                          <button onClick={()=>{}}>fav</button>
                          </div>
                            <audio src={searchValue.url} controls/>
                             <br/>
                               <button onClick={()=>{closeModal()}}>close</button>
                        </div>: null
                   }
        </>
    )
}