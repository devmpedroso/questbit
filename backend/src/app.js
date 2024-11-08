import express from 'express';
import cors from 'cors';
import conectaNaDataBase from './config/dbConnect.js'; // importação do dbConnect
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase(); // interface para usar o mongoose + função que conecta ao banco

// liga conexao:
conexao.on('error', (erro) => {
    console.error('Erro ao conectar ao banco: ', erro);
});

// uma vez que a conexao é estabelecida: 
conexao.once('open', () => {
    console.log('Conexao com o banco estabelecida');
}); // fim da conexão com o banco

const app = express();
app.use(cors({
    origin: 'http://localhost:5500', // Permite requisições somente dessa origem
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Se precisar enviar cookies ou autenticação
})); 
routes(app); //importa as rotas


export default app;