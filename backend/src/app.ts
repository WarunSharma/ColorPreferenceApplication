import express from 'express';
import ('./db/connect')
import cors from 'cors';
const app = express();
const preferenceRoute = require('./routes/userPreference');
const port = process.env.PORT || 3000;

// CORS applied
app.use(cors({
    origin: 'https://649251e76244cd08dd16eb31--elaborate-churros-8dc5dd.netlify.app'
}));

app.use(express.json());

// Preference Route
app.use('/preference', preferenceRoute);

app.use((req, res) => {
    res.status(200).json({});
});

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("frontend/dist"));
// }

app.listen(port, ()=>{
    console.log("application running on port " + port);
})