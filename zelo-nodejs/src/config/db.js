const mongoose = require('mongoose');

async function connect() {
    try {
        // await mongoose.connect(process.env.DATABASE_URL, {
        await mongoose.connect('mongodb://localhost/danh_ba', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            retryWrites: true,
        });

        console.log('Connect success');
    } catch (error) {
        console.log('Connect failed');
    }
}

module.exports = { connect };
