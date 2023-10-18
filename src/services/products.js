require('dotenv/config.js') // cargando variables de entorno

const pool = require('../config/database.js')

const updateProduct = async (call, callback) => {
     let success = true

     try {
          // obteniendo datos provenientes de la solicitud al microservicio
          const { id, description } = call.request

          // realizando operacion del microservicio
          await pool.query('UPDATE product SET description = $1 WHERE id = $2', [description, id])

     } catch (err) {
          success = false
          console.log(err)

     } finally {
          // enviando respuesta
          callback(null, { success })
     }
}

module.exports = {
     updateProduct: updateProduct
}