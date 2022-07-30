import React from "react";

const ArrayOfList = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" }
  ];
  return (
    <div>
      {data.map((user) => (
        <div className="user" key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};
export default ArrayOfList;
