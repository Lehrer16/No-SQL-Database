import { Router } from 'express';
import {
  getThoughts,
  createThought,
  updateThought,
  deleteThought
} from '../controllers/thoughtController';

const router = Router();

router.get('/thoughts', getThoughts);
router.post('/thoughts', createThought);
router.put('/thoughts/:id', updateThought);
router.delete('/thoughts/:id', deleteThought);

export default router;
