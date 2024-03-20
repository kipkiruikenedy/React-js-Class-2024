// Home.js
import React, { useState } from 'react';

function MapMethodHandling() {

    const users=[
        {id:1, name:"kenedy", age:12},
        {id:2, name:"kenedy2", age:14},
        {id:3, name:"kenedy3", age:14},
        {id:4, name:"kenedy4", age:12},
        {id:1, name:"kenedy", age:12},
        {id:2, name:"kenedy2", age:14},
        {id:3, name:"kenedy3", age:14},
        {id:4, name:"kenedy4", age:12},
        {id:1, name:"kenedy", age:12},
        {id:2, name:"kenedy2", age:14},
        {id:3, name:"kenedy3", age:14},
        {id:4, name:"kenedy4", age:12}
    ]
   

  return (
    <div className='container'>
   
      
   {users.map(user=>(
<>
   <div>{user.id}</div>
   <div>{user.name}</div>
</>
   ))}

    </div>
  );
}

export default MapMethodHandling;
