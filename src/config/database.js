const mongoose = require('mongoose');
const CategorySeed = require('../utils/seed/CategorySeed');
const UserSeed = require('../utils/seed/UserSeed');
const HelpSeed = require('../utils/seed/HelpSeed');

const databaseURL = process.env.DATABASE_URL || 'mongodb://mongo:27017/miaAjudaDB';
const envType = process.env.NODE_ENV || 'development';

const databaseConnect = async () => {
    try {
        await mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Banco de dados conectado!'))
            .catch((error) => console.log('Não foi possível se conectar ao banco de dados!'));

        await CategorySeed();
        // só popula usuários e ajudas falsos em desenvolvimento
        if (envType === 'development') {
            await UserSeed();
            await HelpSeed();
        }
    } catch (error) {
        console.log('Não foi possível inicicializar corretamente a base de dados!');
        console.log(error);
    }
};

module.exports = databaseConnect;