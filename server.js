const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Sostituisci 'public' con la directory che contiene i tuoi file HTML, CSS e altre risorse statiche, se diversa

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Sostituisci 'public' e 'index.html' con i nomi appropriati per il tuo progetto, se diversi
});

app.listen(port, () => {
  console.log(`Frontend listening at http://localhost:${port}`);
});
