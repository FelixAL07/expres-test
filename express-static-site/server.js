
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const team = [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Project Manager" }
  ];

  // Rute for hjemmesiden
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', message: 'Welcome to my static website!' });
  });
  
  // Rute for "about"-siden
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', message: 'This is the about page of our website.' });
  });
  
  
  app.get('/team', (req, res) => {
    res.render('team', { title: 'Our Team', members: team });
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
