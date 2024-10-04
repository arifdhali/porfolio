import axios from 'axios';
import React, { useState } from 'react'

const Github = () => {
    const [data, setData] = useState('');
    const gitUrl = import.meta.env.VITE_GITHUB_USER;
    const handleGit = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}github/${gitUrl}`);
        if (response.data.status) {
            setData(response?.data?.git_data);
        }
    }

    return (
        <div className='container'>
            <h1>Git</h1>
            <button onClick={handleGit}>Get</button>
            <p>Public reposite count {data.public_repos}</p>
        </div>
    )
}

export default Github
