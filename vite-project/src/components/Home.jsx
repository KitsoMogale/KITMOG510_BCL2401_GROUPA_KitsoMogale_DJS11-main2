import { useEffect, useState }  from "react"
import { Link } from "react-router-dom";
import { useContextA,useContextB,useContextC } from './Context.jsx';


export const Home=()=>{

    const [data,setdata] = useState([]);
    const [who,setWho] = useState('0');
    const { dataA } = useContextA();
    const {dataB} = useContextB();
    const {dataC} = useContextC();

    useEffect( ()=>{

        fetch('https://podcast-api.netlify.app')
        .then(res=>{
           return res.json()})
        .then(data=>
            setdata(data)
        )
        .catch(err=>{
            console.log(err)})
  
        
    },[]);


    if(data.length > 0){
      
      if(dataA == 'Z-A'){
      data.sort(function(a, b){
      if(a.title < b.title) { return 1; }
      if(a.title > b.title) { return -1; }
      return 0;}
      
  );
}
else{
  data.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;}
      
  );
}

}

useEffect(()=>{
  setWho('0')
},[dataA])


useEffect(()=>{
  setWho('1')
},[dataC])

if(who == '1'){

    if(data.length > 0){
      
      if(dataC == 'New'){
      data.sort(function(a, b){
      if(a.updated < b.updated) { return 1; }
      if(a.updated > b.updated) { return -1; }
      return 0;}
      
  );
}
else{
  data.sort(function(a, b){
      if(a.updated < b.updated) { return -1; }
      if(a.updated > b.updated) { return 1; }
      return 0;}
      
  );
}

}
}



    return(
        <div id="grid-container">
        
        {data.length > 0 ?
      <> 
       { data.map(show=>
       {   

        const obj = {
          '1': 'Personal Growth',
          '2': 'Investigative Journalism',
          '3':'History',
          '4':'Comedy',
          '5':'Entertainment',
          '6':'Business',
          '7':'Fiction',
          '8':'News',
          '9':'Kids and Family'
        };

          let pg = show.genres.map((num)=>{
             
               let keys = Object.keys(obj);
             
             return keys.includes(`${num}`)?`${obj[num]}, ` : null

           });

    if(show.genres.includes(Number(dataB)) || dataB == '0')
      return(
         <div className='preview_div' key={show.id}>
        <Link to={`/id/${show.id}`} onClick={()=>{clickHandler(show.id)}}>
        <img className="imgHome" src={`${show.image}`} />
        <div className="info">
          <p className='preview_Info'>Title: {show.title}</p>
          <p className='preview_Info'>Seasons: {show.seasons}</p>
          <p className='preview_Info'>Genre: {pg} </p>
        </div>
        </Link>
      </div>)
       }
       
    
   )

       }

      </> : <h1>Loading...</h1>
     }        
        </div>
        
    )
}