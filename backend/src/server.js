const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();

// Configure o CORS para aceitar solicitações de qualquer origem
app.use(cors());

const user = 'app';
const password = '9p5zn2vjj0b7KOn6';
const server = `mongodb+srv://${user}:${password}@cluster0.bl7jxbx.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(server, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Conexão com o banco de dados estabelecida');
}).catch((error) => {
  console.error('Erro na conexão com o banco de dados:', error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/images', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

// Adicione a variável global.IP_ADDRESS como parte do caminho
console.log(global.IP_ADDRESS);
app.use(`${global.IP_ADDRESS}`, routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Servidor iniciado na porta ' + (process.env.PORT || 3333));
}).on('error', (error) => {
  console.error('Erro ao iniciar o servidor:', error);
});