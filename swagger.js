const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/app/controllers/supermarket/supermarket.controller.js']

swaggerAutogen(outputFile, endpointsFiles)