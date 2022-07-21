import React from 'react';

const ArrayOfList =()=>{
  const data = [
    "John Doe" ,
    "Victor Wayne" ,
     "Jane Doe",
     "James",
     "Joe",  
  ];
return(
  <div>
  {data.map((user) => (
    <div className="user" >{user}</div>
  ))}
  </div>
)
}
export default ArrayOfList;