// server.js
import express from 'express';
import Reflection from './src/controllers/Reflection';
import Empresa from './src/controllers/Empresa';
import ServicioT from './src/controllers/servicioT';



const app = express()

app.use(express.json())

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

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