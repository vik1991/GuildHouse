import prisma from "../db/prisma"

class PlayerService {
    async getAllPlayers(): Promise<any> {
        return await prisma.player.findMany()
    }
}

export default new PlayerService()
