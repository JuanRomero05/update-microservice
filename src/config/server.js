const { Server } = require('@grpc/grpc-js')
const { readProtoFile } = require('../utils/proto.js')
const { updateProduct } = require('../services/products.js')

const server = new Server()

const protoFilePath = __dirname + '/../update.proto'
const package = readProtoFile(protoFilePath, 'updateProductPackage')

server.addService(package.Update.service, {
     'updateProduct': updateProduct
})

module.exports = server
