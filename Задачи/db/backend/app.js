const express = require('express');
const router = require('./router.js');
const path = require('node:path')
const frontend = path.resolve(__dirname, "../frontend")

const app = express();
app.use(express.json());
app.use(express.static(frontend));
app.use(router)

const PORT = 5000;
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});