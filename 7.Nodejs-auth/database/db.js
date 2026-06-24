const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            family: 4, // Force IPv4 — fixes Node.js SRV DNS resolution on Windows
        });
        console.log("MongoDB Connected Successfully ✓");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectToDB;
