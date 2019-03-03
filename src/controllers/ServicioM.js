import ServicioMModel from '../../models/ServicioM';
import fs from 'fs';
import util from 'util'

const ServicioM = {

  create(req, res) {
    const servicio = ServicioMModel.create(req.body);
    fs.appendFileSync("./JSON/serviciosMaritimos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(201).send(servicio);
  },

  getAll(req, res) {
    const servicio = ServicioMModel.findAll();
    fs.appendFileSync("./JSON/serviciosMaritimos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(servicio);
  },
  
  getOne(req, res) {
    const servicio= ServicioMModel.findOne(req.params.id);
    if (!servicio){
      return res.status(404).send({'message': 'servicio not found'});
    }
    fs.appendFileSync("./JSON/serviciosMaritimos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(servicio);
  },

  update(req, res) {
    const servicio= ServicioMModel.findOne(req.params.id);
    if (!servicio) {
      return res.status(404).send({'message': 'servicio not found'});
    }
    const updatedservicio= ServicioMModel.update(req.params.id, req.body)
    fs.appendFileSync("./JSON/serviciosMaritimos.json",util.inspect(updatedservicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(updatedservicio);
  },

  delete(req, res) {
    const servicio= ServicioMModel.findOne(req.params.id);
    if (!servicio) {
      return res.status(404).send({'message': 'servicio not found'});
    }
    fs.appendFileSync("./JSON/serviciosMaritimos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    const ref = ServicioMModel.delete(req.params.id);

    return res.status(204).send(ref);
  }
}

export default ServicioM;