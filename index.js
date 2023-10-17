require('dotenv/config.js') // cargando variables de entorno

const { ServerCredentials } = require('@grpc/grpc-js')
const server = require('./config/server.js')

// las credenciales son obligatorias para iniciar el servidor, en este caso, se optara por no tener credenciales seguras
const credentials = ServerCredentials.createInsecure()

server.bindAsync(`localhost:${process.env.PORT}`, credentials, () => {
     server.start()
})