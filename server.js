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


app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Viajes back Team-04'});
})

app.listen(3000)
console.log('app running on port ', 3000);
