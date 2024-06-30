


export const SelectComponent = ({ onSelectChange,option1,option2 }) => {

    const handleChange = (event) => {
      onSelectChange(event.target.value);
      console.log(event.target.value)
    };
  
    return (
      <div>
        <select onChange={handleChange}>
          <option value="A-Z">{option1}</option>
          <option value="Z-A">{option2}</option>
        </select>
      </div>
    );
  };


  export const SelectGenre = ({ onSelectChange}) => {

    const handleChange = (event) => {
      onSelectChange(event.target.value);
    };
  
    return (
      <div>
        <select onChange={handleChange}>
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