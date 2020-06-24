import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import routes from "./routes";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    app.use(routes);

    // start express server
    app.listen(3333);

    console.log(
      "Express server has started on port 3333. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
