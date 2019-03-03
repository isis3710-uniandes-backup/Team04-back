// server.js
import express from 'express';
import User from './src/controllers/User';
import Empresa from './src/controllers/Empresa';
import ServicioT from './src/controllers/ServicioT';
import ServicioA from './src/controllers/ServicioA';
import Location from './src/controllers/Location';
import User from './src/controllers/User';




const app = express()

app.use(express.json())

/*
--------------------------------USUARIOS--------------------------------------
*/
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
/*
--------------------------------EMPRESAS--------------------------------------
*/
app.post('/empresas', Empresa.create);
app.get('/empresas', Empresa.getAll);
app.get('/empresas/:id', Empresa.getOne);
app.put('/empresas/:id', Empresa.update);
app.delete('/empresas/:id', Empresa.delete);

/*
--------------------------------SERVICIOS TERRESTRES--------------------------------------
*/
app.post('/serviciost', ServicioT.create);
app.get('/serviciost', ServicioT.getAll);
app.get('/serviciost/:id', ServicioT.getOne);
app.put('/serviciost/:id', ServicioT.update);
app.delete('/serviciost/:id', ServicioT.delete);

/*
--------------------------------SERVICIOS AEREOS--------------------------------------
*/
app.post('/serviciosa', ServicioA.create);
app.get('/serviciosa', ServicioA.getAll);
app.get('/serviciosa/:id', ServicioA.getOne);
app.put('/serviciosa/:id', ServicioA.update);
app.delete('/serviciosa/:id', ServicioA.delete);


app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Viajes back Team-04'});
})

app.listen(3000)
console.log('app running on port ', 3000);
