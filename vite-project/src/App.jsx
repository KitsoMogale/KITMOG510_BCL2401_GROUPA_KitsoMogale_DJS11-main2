import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Season } from './components/Seasons'

function App() {

  const [render,setRender] = useState();

  const rerender=(val)=>{
    let trigger = val;
    setRender(trigger)
  }

return(
  <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout render={render} rerender={rerender}/>}>
          <Route index element={<Home/>}/>
          <Route path='/id/:id' element={<Season rerender={rerender}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)


}
 

export default App
