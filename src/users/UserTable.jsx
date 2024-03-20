import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css'; // Import the CSS file

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  // Fetch users data from JSONPlaceholder API using Axios
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
      
  }, []);

  const handleViewUser = (user) => {
    setSelectedUser(user);
  };

  const handleEditUser = (user) => {
    setEditedUser(user);
    setIsEditing(true);
  };

  const handleDeleteUser = (user) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(() => {
        setUsers(users.filter(u => u.id !== user.id));
        setSelectedUser(null);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleSaveEdit = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser)
      .then(() => {
        setUsers(users.map(u => (u.id === editedUser.id ? editedUser : u)));
        setIsEditing(false);
        setEditedUser(null);
      })
      .catch(error => console.error('Error saving edit:', error));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUser(null);
  };

  return (
    <div>
      <h2>User Table</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={() => handleViewUser(user)}>View</button>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>ID: {selectedUser.id}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
        </div>
      )}
      {isEditing && (
        <div>
          <h2>Edit User</h2>
          <input type="text" value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default UserTable;
