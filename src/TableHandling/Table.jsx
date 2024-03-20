import React from 'react';
import './Table.css'; // Import CSS file for styling

function Table() {
    const users = []; // Assuming users will be populated later
    const role = "admin";

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                   <th>User ID</th>

                        <th>Name</th>
                        <th>Age</th>
                        {role === 'admin' && <th>Actions</th>}
                    </tr> 
                </thead>
                <tbody> 
                    {users.length === 0 ? 
                        <tr>
                            <td colSpan="3">No users in the database</td>
                        </tr>
                        :
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
