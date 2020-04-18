import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "./routes";
import { config } from "dotenv";
config();

class App {
  public app: express.Application = express();
  public routes: Routes = new Routes();
  public mongoUrl: string = process.env.MONGO_CONNECTION_STRING;

  constructor() {
    this.config();
    this.routes.routes(this.app);
    this.mongoSetup();
  }

  private mongoSetup(): void {
    // @ts-ignore
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
  }
}

export default new App().app;
