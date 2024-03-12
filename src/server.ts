import { config } from "dotenv";
config({ path: "variaveis.env" });
import swaggerUi from "swagger-ui-express";
import "./swagger";
import swaggerFile from "../swagger-output.json";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import routes from "./routes";


const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


server.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
  console.log(
    `Swagger rodando em: http://localhost:${process.env.PORT}/api/docs`
  );
});

