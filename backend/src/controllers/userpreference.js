
const UserPreference = require('../models/UserPreference')

const createOrUpdateUserPreference = async(req, res) => {
    // console.log(req.body);
    try {
        let userPreference = await UserPreference.findOneAndUpdate({username: req.body.username},
            req.body, {new: true, upsert: true})
        // console.log(userPreference);    
        res.status(201).json(userPreference);    
        
    }
    catch(err) {
        res.status(500).json(err);
    }
}

const getUserPreference = async(req, res) => {
    // console.log(req.params.username);
    try {
        let userPreference = await UserPreference.findOne({username: req.params.username});
        // console.log(userPreference);
        res.status(200).json(userPreference);
    }
    catch(err) {
        res.status(500).json(err);
    }
}

module.exports = {createOrUpdateUserPreference, getUserPreference};