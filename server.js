// server.js
import express from 'express';
import Location from './src/controllers/Location';
import User from './src/controllers/User';




const app = express()

app.use(express.json())

app.post('/users', User.create);
app.get('/users', User.getAll);
app.get('/users/:id', User.getOne);
app.put('/users/:id', User.update);
app.delete('/users/:id', User.delete);

app.post('/locations', Location.create);
app.get('/locations', Location.getAll);
app.get('/locations/:nombre', Location.getOne);
app.put('/locations/:nombre', Location.update);
app.delete('/locations/:nombre', Location.delete);

app.post('/locations/:nombre/activities', Location.createActivities);
app.get('/locations/:nombre/activities', Location.getAllActivities);
app.get('/locations/:nombre/activities/:nombreActivity', Location.getOneActivity);
app.put('/locations/:nombre/activities/:nombreActivity', Location.updateActivity);


app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.get('/hola', (req, res) => {
    return res.status(200).send({'message': 'Holaaa!'});
  })

app.listen(3000)
console.log('app running on port ', 3000);
