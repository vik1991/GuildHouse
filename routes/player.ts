import express from 'express';
const router = express.Router();
import playerController from '../controllers/PlayerController'

router.get('/', playerController.getPlayers);

export default router;