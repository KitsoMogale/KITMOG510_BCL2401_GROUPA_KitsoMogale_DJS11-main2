import { useEffect, useState }  from "react"
import { Link } from "react-router-dom";


export const Carousel=()=>{

    const [data,setdata] = useState([]);

    useEffect( ()=>{

        fetch('https://podcast-api.netlify.app')
        .then(res=>{
           return res.json()})
        .then(data=>
            setdata(data)
        )
        .catch(err=>{
            console.log(err)});
  
        
    },[]);


    return (
        <div id='carousel'>
           {
             data.length > 0 ? data.map(show=>{
              return(
              <Link to={`/id/${show.id}`} onClick={()=>{clickHandler(show.id)}}>
                <div className="caroudiv" key={show.id}>
                                  
                <img className="imgHome" src={`${show.image}`} />
                <div className="info">
                <p className='preview_Info'>Title: {show.title}</p>
                <p className='preview_Info'>Seasons: {show.seasons}</p>
                </div>

             </div>
             </Link>
              )
             }):
              <h1>Loading...</h1>
           }
        </div>
    )

}