
// FilterDropdown.js  
import { display_filter, down } from '../assets/images';

 
import React, { useState } from 'react';  
  
function FilterDropdown({  
  selectedGrouping,  
  setSelectedGrouping,  
  selectedOrdering,  
  setSelectedOrdering,  
}) {  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  
  
  const handleDropdownClick = () => {  
   setIsDropdownOpen(!isDropdownOpen);  
  };  
  
  const handleGroupingChange = (e) => {  
   setSelectedGrouping(e.target.value);  
  };  
  
  const handleOrderingChange = (e) => {  
   setSelectedOrdering(e.target.value);  
  };  
  
  return (  
   <div className="filter-dropdown-container">  
    <div className="display-button" onClick={handleDropdownClick}>  
      <img src={display_filter} alt="Display Filter Logo" className="filter-logo" />  
      Display  
      <img src={down} alt="Display Filter Logo" className="down-logo" />  
    </div>  
    {isDropdownOpen && (  
      <div className="filter-dropdown">  
       <div className="filter-group">  
        <label className="grouping">Grouping:</label>  
        <select value={selectedGrouping} onChange={handleGroupingChange} className="select">  
          <option value="status">Status</option>  
          <option value="priority">Priority</option>  
          <option value="user">User</option>  
        </select>  
       </div>  
       <div className="filter-group">  
        <label className="ordering">Ordering:</label>  
        <select value={selectedOrdering} onChange={handleOrderingChange} className="select">  
          <option value="priority">Priority</option>  
          <option value="title">Title</option>  
        </select>  
       </div>  
      </div>  
    )}  
   </div>  
  );  
}  
  
export default FilterDropdown;
