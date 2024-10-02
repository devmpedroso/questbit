import "dotenv/config"; //tem que ser exportado na parte mais externa da aplicação, por isso está aqui
import app from './src/app.js';
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Escutando na porta 3000');
});