import axios from "axios";

const baseUrl = "localhost:3001";

const createGame = () => axios.post(`${baseUrl}/game`, { players: 2 });

export default { createGame };
