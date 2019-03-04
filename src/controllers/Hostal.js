import HostalModel from '../../models/Hostal';
import fs from 'fs';
import util from 'util';

const Hostal ={
    
    create(req, res){
        const hostal = HostalModel.create(req.body);
        fs.appendFileSync("./JSON/hostal.json", util.inspect(hostal) + "\r\n", function (err) {
          if (err) {
            return console.log(err);
          }
        });
        return res.status(201).send(hostal);
    },

    getAll(req, res) {
        const hostal = HostalModel.findAll();
        fs.appendFileSync("./JSON/hostal.json",util.inspect(hostal)+"\r\n",function(err){
            if(err){
                return console.log(err);
            }
        });
        return res.status(200).send(hostal);
      },
      
      getOne(req, res) {
        const hostal= HostalModel.findOne(req.params.id);
        if (!hostal){
          return res.status(404).send({'message': 'hostal not found'});
        }
        fs.appendFileSync("./JSON/hostal.json",util.inspect(hostal)+"\r\n",function(err){
            if(err){
                return console.log(err);
            }
        });
        return res.status(200).send(hostal);
      },
    
      update(req, res) {
        const hostal= HostalModel.findOne(req.params.id);
        if (!hostal) {
          return res.status(404).send({'message': 'hostal not found'});
        }
        const updatedHostal= HostalModel.update(req.params.id, req.body)
        fs.appendFileSync("./JSON/hostal.json",util.inspect(updatedHostal)+"\r\n",function(err){
            if(err){
                return console.log(err);
            }
        });
        return res.status(200).send(updatedHostal);
      },
    
      delete(req, res) {
        const hostal= HostalModel.findOne(req.params.id);
        if (!hostal) {
          return res.status(404).send({'message': 'hostal not found'});
        }
        fs.appendFileSync("./JSON/hostal.json",util.inspect(hostal)+"\r\n",function(err){
            if(err){
                return console.log(err);
            }
        });
        const ref = HostalModel.delete(req.params.id);
    
        return res.status(204).send(ref);
      }
}
export default Hostal;