import React from 'react';

const Card =(props)=>{
  
   const {name,email,id,username}=props ;   

    return (
<div className='bg-light-purple dib br3  ma2 grow bw2 shadow-5' > 
    <img  alt="Robots" src={`https://robohash.org/${id}${username}50x50`} />
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </div>
    
    );
}
export default Card;
//style={{width:'216px',height:'320.166px'}}