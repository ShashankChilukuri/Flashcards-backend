import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Shashank@05112004',
  database: 'Flashcards'
});

const getAllFlashcards = async () => {
  const [rows] = await pool.query('SELECT * FROM Flashcards');
  return rows;
};

const createFlashcard = async (question, answer, category) => {
  const [result] = await pool.query('INSERT INTO Flashcards (question, answer, category) VALUES (?, ?, ?)', [question, answer, category]);
  return result;
};

const updateFlashcard = async (id, question, answer, category) => {
  const [result] = await pool.query('UPDATE Flashcards SET question = ?, answer = ?, category = ? WHERE id = ?', [question, answer, category, id]);
  return result;
};

const deleteFlashcard = async (id) => {
  const [result] = await pool.query('DELETE FROM Flashcards WHERE id = ?', [id]);
  return result;
};

export { getAllFlashcards, createFlashcard, updateFlashcard, deleteFlashcard };
