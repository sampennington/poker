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
      .get(this.gameController.getGameByID)
      .put(this.gameController.updateGame);
  }
}
