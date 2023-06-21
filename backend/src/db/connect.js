const mongoose = require('mongoose');
const connectionString = "mongodb+srv://warun:warun@cluster0.krqrz25.mongodb.net/ColorPreferenceApp";

(async function() {
    try {
        let con = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        if (con)
            console.log("Database connected");
    }
    catch(error) {
        console.log("Error: " + error);
    }
})()
