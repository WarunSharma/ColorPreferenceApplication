import ReactDOM from 'react-dom/client';
import React from 'react';
import Header from './components/Header';
import { useState } from 'react';

const Layout = () => {
    const [colorPreference, setColorPreference] = useState("");
    return <div style={{backgroundColor: colorPreference, height: 800}}>
        {/* <h1>Hello World</h1> */}
        <Header colorPreference= {colorPreference} setColorPreference={setColorPreference}/>
    </div>
}

const element = document.getElementById('root');

if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<Layout/>);
} else {
    console.log('Element not found');
}