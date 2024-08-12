import express from 'express';
import cors from 'cors';
import flashcardRoutes from './routes/FlashcardRoutes.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use('/api/flashcards', flashcardRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
