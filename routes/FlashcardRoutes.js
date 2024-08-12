import express from 'express';
import { getFlashcards, addFlashcard, updateFlashcard, deleteFlashcard } from '../controllers/FlashcardController.js';

const router = express.Router();

router.get('/getall', getFlashcards);
router.post('/add', addFlashcard);
router.put('/:id', updateFlashcard);
router.delete('/:id', deleteFlashcard);

export default router;
