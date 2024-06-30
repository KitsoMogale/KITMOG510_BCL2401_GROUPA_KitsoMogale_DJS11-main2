import { useContextA } from './Context.jsx';
import { useContextB } from './Context.jsx';


export const SelectComponent = ({ option1,option2 }) => {

    // const handleChange = (event) => {
    //   onSelectChange(event.target.value);
    //   console.log(event.target.value)
    // };

    const { setDataA } = useContextA();
  
    return (
      <div>
        <select onChange={(event)=>setDataA(event.target.value)}>
          <option value="A-Z">{option1}</option>
          <option value="Z-A">{option2}</option>
        </select>
      </div>
    );
  };


  export const SelectGenre = () => {
     
    const {setDataB} = useContextB();
  
    return (
      <div>
        <select onChange={(event)=>{setDataB(event.target.value)}}>
        <option value="0">Genre</option>
          <option value="1">Personal Growth</option>
          <option value="2">Investigative Journalism</option>
          <option value="3">History</option>
          <option value="4">Comedy</option>
          <option value="5">Entertainment</option>
          <option value="6">Business</option>
          <option value="7">Fiction</option>
          <option value="8">News</option>
          <option value="9">Kids and Family</option>
        </select>
      </div>
    );
  };