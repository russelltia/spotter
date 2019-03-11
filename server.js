const express = require('express');

const people = require('./people.json');

const listing = require('./listing.json');

const app = express();


app.set('view engine', 'pug');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Spotter',
        people: people.profiles
    });
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

app.get('/', (req, res) => {
    res.render('index', {
        listing: listing.spots    
    });
});

app.get('/listing', (req, res) => {
    const listing = listing.spots.find(p => p.id === req.query.id);
    res.render('profile', {
        title: `${spot.title}`,    
    });
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});