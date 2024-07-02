import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Season } from './components/Seasons'
import {ContextAProviderA,ContextBProviderB,ContextAProviderC, ContextAProviderD,ContextAProviderE} from './components/Context.jsx'
import { Favourites } from './components/Favourites.jsx'

function App() {

  const [render,setRender] = useState();

  const rerender=(val)=>{
    let trigger = val;
    setRender(trigger)
  }



return(
  <>
  <ContextAProviderC>
  <ContextAProviderA>
    <ContextBProviderB>
      <ContextAProviderD>
      <ContextAProviderE>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout render={render} rerender={rerender}/>}>
          <Route index element={<Home/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/id/:id' element={<Season rerender={rerender}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextAProviderE>
    </ContextAProviderD>
    </ContextBProviderB>
    </ContextAProviderA>
    </ContextAProviderC>
  </>
)


}
 

export default App
