import * as mongoose from "mongoose";
import { GameSchema } from "../models/game";
import { Request, Response } from "express";

const Game = mongoose.model("Game", GameSchema);

export class GameController {
  public createGame(req: Request, res: Response) {
    const newGame = new Game(req.body);

    newGame.save((err, game) => {
      if (err) {
        res.send(err);
      }
      res.json(game);
    });
  }

  public getGames(req: Request, res: Response) {
    Game.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContactWithID(req: Request, res: Response) {
    Game.findById(req.params.gameId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }
}
