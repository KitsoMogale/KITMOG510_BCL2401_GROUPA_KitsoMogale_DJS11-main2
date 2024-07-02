import { useEffect, useState }  from "react"
import { Link } from "react-router-dom";
import { useContextE } from './Context.jsx';


export const Carousel=()=>{

    const [data,setdata] = useState([]);
    const {dataE} = useContextE();

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

  let filteredData;

  if(dataE != ''){

    filteredData = data.filter(item=>{
        return item.title.includes(dataE)
    })
  }
  else{
    filteredData = data;
  }


    return (
        <div id='carousel' >
           {
             filteredData.length > 0 ? filteredData.map(show=>{
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