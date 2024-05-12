import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('static'));

const PORT = 3000;
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});