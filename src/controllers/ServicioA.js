import ServicioAModel from '../../models/ServicioA';
import fs from 'fs';
import util from 'util'

const ServicioA = {

  create(req, res) {
    const servicio = ServicioAModel.create(req.body);
    fs.appendFileSync("./JSON/serviciosAereos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(201).send(servicio);
  },

  getAll(req, res) {
    const servicio = ServicioAModel.findAll();
    fs.appendFileSync("./JSON/serviciosAereos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(servicio);
  },
  
  getOne(req, res) {
    const servicio= ServicioAModel.findOne(req.params.id);
    if (!servicio){
      return res.status(404).send({'message': 'servicio not found'});
    }
    fs.appendFileSync("./JSON/serviciosAereos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(servicio);
  },

  update(req, res) {
    const servicio= ServicioAModel.findOne(req.params.id);
    if (!servicio) {
      return res.status(404).send({'message': 'servicio not found'});
    }
    const updatedservicio= ServicioAModel.update(req.params.id, req.body)
    fs.appendFileSync("./JSON/serviciosAereos.json",util.inspect(updatedservicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    return res.status(200).send(updatedservicio);
  },

  delete(req, res) {
    const servicio= ServicioAModel.findOne(req.params.id);
    if (!servicio) {
      return res.status(404).send({'message': 'servicio not found'});
    }
    fs.appendFileSync("./JSON/serviciosAereos.json",util.inspect(servicio)+"\r\n",function(err){
        if(err){
            return console.log(err);
        }
    });
    const ref = ServicioAModel.delete(req.params.id);

    return res.status(204).send(ref);
  }
}

export default ServicioA;