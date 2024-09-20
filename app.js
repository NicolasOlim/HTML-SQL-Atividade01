const express = require('express');
const session = require('express-session');
const app = express();


const userRotas = require('./routes/userRotas');
const livroRotas = require('./routes/livroRotas');
const leituraRotas = require('./routes/leituraRotas');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Define a pasta public para arquivos estáticos
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));  // Pasta para servir imagens enviada

app.use(session({
  secret: 'senai456',
  resave: false,
  saveUninitialized: false
}));

// Usando as rotas de usuário
app.use(userRotas);
app.use(livroRotas);
app.use(leituraRotas);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
