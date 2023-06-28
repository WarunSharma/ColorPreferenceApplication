import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectionString: string | undefined = process.env.MONGODB_CONNECTION_STRING;

(async function () {
    try {
            if (!connectionString || (!connectionString.startsWith('mongodb://') && !connectionString.startsWith('mongodb+srv://'))) {
                throw new Error('Invalid MongoDB connection string');
            }
            const connection = await mongoose.connect(connectionString);
            if (connection) {
                console.log("Database Connection Established");
            }
    } catch (error) {
        console.log("Error: " + error);
    }
})();