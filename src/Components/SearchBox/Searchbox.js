import React from 'react';

const Searchbox=({serachfield,searchChange})=>{
    return(
        <div className="pa2">
    <input className="pa3 bg-lightest-blue ba b--green" 
    type='search' 
    placeholder="Search Robots" 
    onChange={searchChange}
    
    />
    </div>
    );
}

export default Searchbox;