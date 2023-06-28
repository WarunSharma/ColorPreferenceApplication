
import {useState, useEffect} from 'react';
import axios from 'axios';

const Header = ({colorPreference, setColorPreference}) => {
    const users = ["", "sharmaw", "rajuk", "rajeshs", "maheshp"];
    const [user, setUser] = useState("");
    const [status, setStatus] = useState("Set Preference")
    const [update, setUpdate] = useState(false);

    useEffect(()=>{
        setStatus("Fetching");
        (async function(){
            try {
                // let result = await fetch(`http://localhost:3000/preference/${user}`);
                let userPreference = await axios.get(`https://color-preference-application.onrender.com/preference/${user}`);
                if (userPreference.data)
                    setColorPreference(userPreference.data.colorpreference);
                else 
                    setColorPreference(""); 
    
            }   
            catch(err) {
                console.log("Error: " + err);
            }

            setStatus("Set Preference");
        })();
    }, [user]);

    async function handleColorPreference() {
        setUpdate(true);
        setStatus("Updating");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, colorpreference: colorPreference })
        };
        try {
            // let response = await fetch(`http://localhost:3000/preference`, requestOptions);
            // const preference = await response.json();
            const response = await axios.post(`https://color-preference-application.onrender.com/preference`, { username: user, colorpreference: colorPreference })
            console.log("Preference: " + response.data);
        }
        catch(err) {
            console.log("Error: " + err);
        }
        
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
                    {/* { !update ? "Set Preference" : "updating" } */}
                    {status}
                </button>
            </div>
        </>
    )
}

export default Header;