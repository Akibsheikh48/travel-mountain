import React from 'react'
import './Home.css';
import Navbar from '../components/Navbar';
function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home-text">
                <h1>LOSANGELES</h1>
                <h2>MOUNTAINS</h2>
            </div>
        </div>
    )
}

export default Home
