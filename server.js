// server.js
import express from 'express';
import User from './src/controllers/User';
import Activity from './src/controllers/Activity';
import Location from './src/controllers/Location';



const app = express()

app.use(express.json())

app.post('/users', User.create);
app.get('/users', User.getAll);
app.get('/users/:id', User.getOne);
app.put('/users/:id', User.update);
app.delete('/users/:id', User.delete);

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.get('/hola', (req, res) => {
    return res.status(200).send({'message': 'Holaaa!'});
  })

app.listen(3000)
console.log('app running on port ', 3000);
