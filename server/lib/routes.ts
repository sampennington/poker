import { Request, Response } from "express";
import { GameController } from "./controllers/game";

export class Routes {
  public gameController: GameController = new GameController();

  public routes(app): void {
    app
      .route("/game")
      .get(this.gameController.getGames)
      .post(this.gameController.createGame);

    app
      .route("/game/:id")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "GET request successfulll!!!!",
        });
      })
      .put((req: Request, res: Response) => {
        res.status(200).send({
          message: "PUT request successfulll!!!!",
        });
      });
  }
}
