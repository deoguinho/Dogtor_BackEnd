require('dotenv').config({path:'variaveis.env'});
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');
const  express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extend:false}));
server.use(bodyParser.json())
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


server.use('/api', routes);

server.listen(3001, () => {
    console.log("API documentation: http://localhost:3001/docs");
  });

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})

