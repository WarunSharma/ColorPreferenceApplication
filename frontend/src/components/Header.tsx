
import React, { useState, useEffect } from 'react';
import { getUserPreference, updateUserPreference } from '../services/data/dataUtils';

interface HeaderProps {
    colorPreference: string;
    setColorPreference: (color: string) => void;
}

const Header: React.FC<HeaderProps> = ({ colorPreference, setColorPreference }) => {
    const users = ["", "sharmaw", "rajuk", "rajeshs", "maheshp"];
    const [user, setUser] = useState("");
    const [status, setStatus] = useState("Set Preference")
    const [update, setUpdate] = useState(false);

    useEffect(()=>{
        setStatus("Fetching");
        (async function(){
            getUserPreference(user, setColorPreference);
            setStatus("Set Preference");
        })();
    }, [user]);

    async function handleColorPreference() {
        setUpdate(true);
        setStatus("Updating");
        updateUserPreference({username: user, colorpreference: colorPreference});
        setUpdate(false);
        setStatus("Set Preference");
    }
    return (
        <>
            <div style={{margin: 10}}>
                <h3 style={{display:"inline"}}>User </h3>
                <select className="select" placeholder="user name" value={user} onChange={(event)=> setUser(event.target.value)} style={{height:30, width: 100}}>
                    {
                        users.map(user => <option key={user} value={user}>{user}</option>)
                    }
                </select>
            </div>
            <div style={{margin: 10}}>
                <h3 style={{display:"inline"}}>Color Preference </h3>
                <select className="select" style={{height:30, width: 100}} value={colorPreference} 
                onChange={(event) => setColorPreference(event.target.value)}>
                    <option value=""></option>
                    <option  value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="blue">blue</option>
                </select>
                    <br/>
                <button className="button" disabled={user === "" || colorPreference === "" || 
                status === "Updating" || status === "Fetching"} 
                onClick={()=> handleColorPreference()}>
                    {status}
                </button>
            </div>
        </>
    )
}

export default Header;