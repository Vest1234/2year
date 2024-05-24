import express from'express';
import router from './router.js';
import path from 'node:path'


const app = express();
app.use(express.json());
app.use(express.static('frontend'));
app.use(router)

const PORT = 4000;
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});