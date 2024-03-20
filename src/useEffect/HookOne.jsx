import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HookOne() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  return (
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Street</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    {users.map(
     user=>{
      <tr key={user.id}>
<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.address.street}</td>
<td>{user.address.city}</td>
      </tr>
     }
    )}
  </tbody>
</table>
  );
};

export default HookOne;
