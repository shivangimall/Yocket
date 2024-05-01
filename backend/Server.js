const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sample city and vehicle data
const cities = [
  { name: 'Yapkashnagar', distance: 60 },
  { name: 'Lihaspur', distance: 50 },
  { name: 'Narmis City', distance: 40 },
  { name: 'Shekharvati', distance: 30 },
  { name: 'Nuravgram', distance: 20 }
];

const vehicles = [
  { type: 'EV Bike', range: 60, count: 2 },
  { type: 'EV Car', range: 100, count: 1 },
  { type: 'EV SUV', range: 120, count: 1 }
];

// Route to get cities data
app.get('/cities', (req, res) => {
  res.json(cities);
});

// Route to get vehicles data
app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

// Route to handle capturing the fugitive
app.post('/capture', (req, res) => {
  // Extract cop's chosen cities and vehicles from request body
  const { cops } = req.body;

  // Get a random index to select a city as the fugitive's location
  const randomIndex = Math.floor(Math.random() * cities.length);
  const fugitiveCity = cities[randomIndex].name;

  // Logic to determine if any cop successfully captured the fugitive
  let success = false;
  let capturingCop = null;

  cops.forEach((cop, index) => {
    if (cop.city === fugitiveCity) {
      success = true;
      capturingCop = `Cop ${index + 1}`;
    }
  });

  res.json({ success, capturingCop });
});

// // Route to handle capturing the fugitive
// app.post('/capture', (req, res) => {
//   // Extract cop's chosen cities from request body
//   const { cops } = req.body;

//   // Get a random index to select a city as the fugitive's location
//   const randomIndex = Math.floor(Math.random() * cities.length);
//   const fugitiveCity = cities[randomIndex].name;

//   // Logic to determine if any cop successfully captured the fugitive
//   let success = false;
//   let capturingCop = null;

//   cops.forEach((cop, index) => {
//     if (cop.city === fugitiveCity) {
//       success = true;
//       capturingCop = `Cop ${index + 1}`;
//     }
//   });

//   res.json({ success, capturingCop });
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
