import { useEffect, useState }  from "react"
import { Link } from "react-router-dom";


export const Home=()=>{

    const [data,setdata] = useState([]);

    useEffect( ()=>{

        fetch('https://podcast-api.netlify.app')
        .then(res=>{
           return res.json()})
        .then(data=>
            setdata(data)
        )
        .catch(err=>{
            console.log(err)})
  
        
    },[])


    return(
        <div id="grid-container">
        
        {data.length > 0 &&
      <> 
       { data.map(show=>
       {   
        
      return( <div className='preview_div' key={show.id}>
        <img className="imgHome" src={`${show.image}`} />
        <div className="info">
          <p className='preview_Info'>Title: {show.title}</p>
          <p className='preview_Info'>Seasons: {show.seasons}</p>
          <Link to={`/id/${show.id}`} onClick={()=>{clickHandler(show.id)}}>open</Link>
        </div>
      </div>)
       }
       
    
   )

       }

      </>
     }        
        </div>
        
    )
}