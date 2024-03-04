import React, { useState } from 'react';
import './Table.css'; // Import CSS file for styling

function Table() {
    const users = [
        { id: 1, name: "kenedy", age: 12 },
        { id: 2, name: "kenedy2", age: 14 },
        { id: 3, name: "kenedy3", age: 14 },
        { id: 4, name: "kenedy4", age: 12 },
        { id: 5, name: "kenedy5", age: 16 }
    ];

    const [userID, setUserID]=useState(0);

    const handleEditUser=(id)=>{
        setUserID()
    }
    const handleDeleteUser=()=>{
        console.log("user delete button clicked")
    }
    const handleViewUser=()=>{
        console.log("user view button clicked")
    }



    return (
        <div className='container'>
            <p>user id:{userID}</p>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                  
                </thead>

                <tbody>
                  
                {users.map(
                    user=>(
                       <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <button  onClick={()=>handleViewUser(user.id)}><span className='viewbtn'>view</span></button>
                            <button onClick={handleEditUser}>Edit</button>
                            <button onClick={handleDeleteUser}>Delete</button>
                        </td>
                       </tr>
                    )
                )}
                </tbody>

            </table>
        </div>
    );
}

export default Table;


