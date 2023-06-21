import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { useState } from 'react';

const Layout = () => {
    const [colorPreference, setColorPreference] = useState("");
    return <div style={{backgroundColor: colorPreference, height: 800}}>
        
        <Header colorPreference= {colorPreference} setColorPreference={setColorPreference}/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout/>);