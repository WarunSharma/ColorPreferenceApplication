const express = require('express');
require('./src/db/connect')
const cors = require('cors');
const app = express();
const preferenceRoute = require('./src/routes/userPreference');
const port = process.env.PORT || 3000;

// CORS applied
app.use(cors({
    origin: '*'
}));

app.use(express.json());

// Preference Route
app.use('/preference', preferenceRoute);

app.use((req, res) => {
    res.status(200).json({});
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/dist"));
}

app.listen(port, ()=>{
    console.log("application running on port " + port);
})