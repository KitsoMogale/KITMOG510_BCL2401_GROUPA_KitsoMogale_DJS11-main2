import { Link } from "react-router-dom"
import { useContextE } from './Context.jsx';


export const Header=()=>{

   const { setDataE } = useContextE();
    return(
       <div id='header'>
          <Link  to='/'><h3 style={{color:'white'}}>Home</h3></Link>
          <Link to='/favourites'><h3 style={{color:'white'}}>Favourites</h3></Link>
          <input type="text" placeholder="search show" onChange={(event)=>{setDataE(event.target.value)}}/>
          <Link to='/history'><h3 style={{color:'white'}}>History</h3></Link>
       </div>
    )
}



