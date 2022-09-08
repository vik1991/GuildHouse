import {Request, Response} from 'express';
import playerService from "../services/PlayerService";

class PlayerController {
    async getPlayers(req: Request, res: Response): Promise<any> {
        const players = await playerService.getAllPlayers()
        return res.render('players', {players});
    }
}

export default new PlayerController()


