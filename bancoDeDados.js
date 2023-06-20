const mongoose = require('mongoose') // utilizando mongoose
require('dotenv').config()
async function conectaBancoDeDados() {
    try {
        console.log('Conexão com banco de dados iniciada')

    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexão com banco de dados feita')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados