import { getAllFlashcards, createFlashcard, updateFlashcard as updateFlashcardInModel, deleteFlashcard as deleteFlashcardInModel } from '../models/Flashcards.js';

const getFlashcards = async (req, res) => {
  try {
    const flashcards = await getAllFlashcards();
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ error: 'Database query failed' });
  }
};

const addFlashcard = async (req, res) => {
  const { question, answer, category } = req.body;
  if (!question || !answer || !category) {
    return res.status(400).json({ error: 'Question, answer, and category are required' });
  }

  try {
    const result = await createFlashcard(question, answer, category);
    res.status(201).json({ id: result.insertId, question, answer, category });
  } catch (err) {
    res.status(500).json({ error: 'Database insert failed' });
  }
};

const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { question, answer, category } = req.body;
  if (!question || !answer || !category) {
    return res.status(400).json({ error: 'Question, answer, and category are required' });
  }

  try {
    const result = await updateFlashcardInModel(id, question, answer, category);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Flashcard not found' });
    }
    res.json({ id, question, answer, category });
  } catch (err) {
    res.status(500).json({ error: 'Database update failed' });
  }
};

const deleteFlashcard = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteFlashcardInModel(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Flashcard not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Database delete failed' });
  }
};

export { getFlashcards, addFlashcard, updateFlashcard, deleteFlashcard };
