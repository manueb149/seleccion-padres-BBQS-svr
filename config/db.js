
const mongoose = require('mongoose');
const DB_MONGO='mongodb+srv://admin:FeArQzHlkqMUPfLL@cluster0.gcjn4.azure.mongodb.net/votospadres?retryWrites=true&w=majority'; 

const conectarDB = async () => {
    try {
        await mongoose.connect(DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
    }
}

module.exports = conectarDB;
