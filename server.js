const express = require('express');

const listings = require('./listings.json');

const app = express();


app.set('view engine', 'pug');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Spotter',
        spots: listings.spots
    });
});

app.get('/spot', (req, res) => {
  const spot = listings.spots.find(p => p.id === req.query.id);
  res.render('listing', {
    title: `About ${spot.firstname} ${spot.lastname}`,
    spot,
  });
});

app.get('/', (req, res) => {
    res.render('index', {
        listing: listing.spots    
    });
});

app.get('/listing', (req, res) => {
    const listing = listing.spots.find(p => p.id === req.query.id);
    res.render('listing', {
        title: `${spot.title}`,    
    });
});
let port = process.env.PORT || 7000;
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});