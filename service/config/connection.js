require('dotenv').config();
const mongoose = require('mongoose');

exports.connectToDb = async function () {
    await mongoose.connect(
        process.env.MONGODB_CLOUD,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, 
        () => {
            console.log('MongoDB connection successful');
        }
    );
    const db = mongoose.connection;
    db.on(
        'error',
        console.error.bind(console, 'MongoDB connection error')
    );
}