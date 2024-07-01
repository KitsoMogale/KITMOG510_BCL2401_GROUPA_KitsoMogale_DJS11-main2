import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Audio } from "./Audio"
import { useEffect, useState } from "react"
import { SelectComponent, SelectDate, SelectGenre } from "./Select"
import { useLocation } from 'react-router-dom';
import { Carousel } from "./Carousel"


export const Layout=({rerender,render})=>{

   const location = useLocation();

  useEffect(()=>{
    const div = document.getElementById('main');
    if(localStorage.getItem('play') == 'false'){
          div.style.top = '10vh'
    }
    else{
        div.style.top = '45vh'
    }
  },[render ]);
  
     return(
        <>
          <Header/>
          <div id='buttons'>
          <SelectComponent   option1={'A-Z'} option2={'Z-A'}/>
          <SelectDate/>
          <SelectGenre />
          </div>
       { localStorage.getItem('play') == 'true' ? <Audio rerender={rerender} />:null}
          <main id='main'>
              {location.pathname == '/' && <Carousel/>}
              {console.log(location.pathname == '/')}
             <Outlet/>
          </main>

          <Footer/>
           
        </>
     )
}