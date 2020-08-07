import React from'react';
import  Card from '../Card/Card';

// import {Robot} from './Robot';

const Cardlist=({Robot})=>{
   
    return (
        <div className='mt1'>
            {
                Robot.map((user,i)=>{
                    return( 
                    <Card 
                    key={i}
                    id={Robot[i].id} 
                    username={Robot[i].username}
                    name={Robot[i].name}
                    email={Robot[i].email}
                         />
            
                )
                })
            }

</div>
    )
}

export default Cardlist;