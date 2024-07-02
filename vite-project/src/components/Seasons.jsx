import { useParams,useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import {useContextD} from './Context.jsx';


export const Season=({rerender})=>{

    const [data,setdata] = useState([]);
    const [open,setOpen] = useState(false);
    const [openEp,setOpenEp] = useState(false);
    const [ episodes,setEpisodes] = useState();
    const {id} = useParams();
    const {setDataD} = useContextD();

    useEffect( ()=>{
        localStorage.setItem('audio',JSON.stringify({}));
        localStorage.setItem('play','false');

        fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then(res=>{
           return res.json()})
        .then(data=>
            setdata(data)
        )
        .catch(err=>{
            console.log(err)})
  
        
    },[]);

    const playAudio = (obj)=>{
        let local = JSON.stringify(obj)
        localStorage.setItem('audio',local);
        localStorage.setItem('play','true');
        rerender(new Array);
        setDataD(JSON.parse(localStorage.getItem('audio')));
    }


  const openEpisodes= (id)=>{
    
    let theOne;
    theOne = data.seasons.filter(item=>{
      
      return  item.season == id;
    })

    setEpisodes(<div  id='episodes'>
                   
        {theOne[0].episodes.map(epi=>{
        return(  <div key={epi.episode} className='episode'>
            <p> {epi.title}</p> 
            <button onClick={()=>{playAudio({'title':epi.title,'url':epi.file,'image':theOne[0].image,'season':theOne[0].title,'show':data.title})}} >play</button>
          </div>)
        })}

        <button onClick={()=>setOpenEp(false)}>close</button>
        

      </div>)
setOpenEp(true);

}


    return(
       <div id='seasons'>
          {  

          data.seasons ?
           <>
            <div id='top1'>
              <img className="season-img" src={data.seasons[0].image}/>
              <div className="update">
              <p>Updated: {data.updated}</p>
              <button id='btnom1' onClick={()=> setOpen(true)}>view desc</button>
              </div>
              </div>
               { open?
                  <div id='modal1'>
                    <h3>{data.description}</h3>
                    <button onClick={()=> setOpen(false)}>close</button>
                  </div>: null
               }

                  {  
                    openEp? episodes : null
                   }
            


         <div id="grid-container">
             {
               data.seasons.map(season =>{
        
                 return(  
                        <div key={season.season} className="preview-divs" >
                          <img className="simg" src={season.image} alt='img'/>
                             <h2>  Season {season.season}</h2>
                             <p>Episodes: {season.episodes.length}</p>
                            <button onClick={()=>openEpisodes(season.season)}>open</button>
                        </div>
                        )
              })

            }
        </div>
         
          </>
               :
                <h1>Loading....</h1>
}

       </div>
    )
}