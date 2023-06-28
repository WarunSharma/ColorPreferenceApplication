import axios from 'axios';

export const getUserPreference = async(user: string, setColorPreference: (color: string) => void) => {
    try {
        let userPreference = await axios.get(`https://color-preference-application.onrender.com/preference/${user}`);
        if (userPreference.data) {
            console.log(JSON.stringify(userPreference.data));
            setColorPreference(userPreference.data.colorpreference);
        }
        else 
            setColorPreference(""); 

    }   
    catch(err) {
        console.log("Error: " + err);
    }
}

export const updateUserPreference = async(userData: any) => {
    try {
        const response = await axios.post(`https://color-preference-application.onrender.com/preference`, userData);
        console.log("Preference: " + JSON.stringify(response.data));
    }
    catch(error) {
        console.log(error);
    }
    
}


