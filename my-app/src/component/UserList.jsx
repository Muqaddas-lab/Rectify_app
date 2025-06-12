import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { title } from 'process';

const UserList = () => {
    const [users, setUsers] = useState([]);              //users->api user save 
    const [loading, setLoading] = useState(true);      //loading->ya true hotta hy jab tak data load ho raha ho
    const [error, setError] = useState(null);            //error->api call karty wakt koi error ayy tu yaha store ho ga

    const API_BASE_URL = process.env.NEXT_PUBLIC_SECRET_KEY;                            //.env file sy API uthay ga
    
    useEffect(() => {
        const fetchUsers = async () => {
            if (!API_BASE_URL) {
                setError(new Error("API Base URL is not defined. Check your .env file."));
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/posts`);
                setUsers(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // const handleAdd=async()=>{
    //     const newuser={
    //         title:"ali",
    //         email:"@gmail"
    //     };
    //     try{
    //             const response= await axios.post(${API_BASE_URL}/posts,newuser);
    //             setUsers([...users, response.data]);
    //         }catch(err){
    //             console.error("Error adding users:",err);
    //     }
    // }


    const handleDelete = async (id) => {
        if (!API_BASE_URL) {
            alert("API Base URL is not defined. Cannot delete.");
            return;
        }
        try {
            await axios.delete(`${API_BASE_URL}/posts/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            console.error("Error deleting item:", err);
            alert("Failed to delete item.");
        }
    };

    if (loading) {
        return <div style={styles.message}>Loading users...</div>;
    }

    if (error) {
        return <div style={{...styles.message, color: 'red'}}>Error: {error.message}</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>User List</h1>
            <ul style={styles.list}>
                {users.map(user => (
                    <li key={user.id} style={styles.listItem}>
                        <div>
                            <strong>{user.title}</strong> <br />
                            <small style={{color: '#555'}}>{user.email || "No email available"}</small>
                        </div>
                        <button 
                            style={styles.deleteButton} 
                            onClick={() => handleDelete(user.id)}
                            title="Delete user"
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f7f9fc',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontWeight: '700',
        fontSize: '2rem'
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: '12px',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
    },
    deleteButton: {
        backgroundColor: '#ff4d4f',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '18px',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    message: {
        textAlign: 'center',
        marginTop: '60px',
        fontSize: '1.2rem',
        color: '#555',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }
};

// Add hover effect with React inline styles workaround using event handlers or use CSS file for cleaner approach

export default UserList;
