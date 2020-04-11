import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const GameSchema = new Schema({
  players: {
    type: Number,
    required: "Number of players required",
  },
  hands: [
    {
      winningHand: String,
      player: String,
    },
  ],
  buyIn: Number,
});
