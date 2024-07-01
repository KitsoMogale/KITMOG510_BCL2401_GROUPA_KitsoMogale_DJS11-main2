import { useState } from "react";

export const Favourites = ()=>{

    const [copyLocal,setCopyLocal] = useState();



    let favs = JSON.parse(localStorage.getItem('favs'));

    const removeEpi = (episode,shows)=>{
         
        favs = favs.filter(item=>{
            
            return item.title !== episode.title && item.show !== shows.show
        })

         localStorage.setItem('favs',JSON.stringify(favs));
         let copy = favs;
         setCopyLocal(copy);

    }

    function removeDuplicates(arr) {
        const seen = new Set();
        return arr.filter(item => {
          const key = `${item.show}-${item.title}-${item.season}`; 
          const duplicate = seen.has(key); 
          seen.add(key);
          return !duplicate; 
        });
      }

      function removeDuplicates1(arr) {
        const seen = new Set();
        return arr.filter(item => {
          const key = `${item[0].show}`; 
          const duplicate = seen.has(key); 
          seen.add(key);
          return !duplicate; 
        });
      }
      
      const uniqueFavs = removeDuplicates(favs);

      const groupedFavs = uniqueFavs.map((item)=>{

            const filterByShow = uniqueFavs.filter(fav=>{
             return fav.show == item.show;
            })
               console.log(filterByShow)
            return filterByShow

      });


      console.log(groupedFavs);

      const filteredFavs = removeDuplicates1(groupedFavs);
      console.log(filteredFavs);

    return(
        <div className="favContainer">
           {
            
            filteredFavs.length > 0 ? 
            filteredFavs.map(item=>{
                
              return  <div key={item[0].title}>
                    {console.log(item[0].time)}
                   <h1><img className="simg" src={item[0].image}/> {item[0].show} </h1>
                   
                   <div className="favs">
                    {
                        item.map((epi)=>{
                        return  <div className="epifav" key={epi.time}>
                             <h4>{epi.title}</h4>
                             <h4>{item[0].season}</h4>
                             <h4>Liked on:{epi.time}</h4>
                             <button onClick={()=>{removeEpi(epi,item)}}>remove</button>
                          </div>
                        })
                    }
                   </div>
                   <hr/>
                </div>
                

            })
               : console.log('nothing')
           }
              

        </div>
    )
}