import HostalModel from '../../models/Hostal';

const Hostal ={
    create(req, res){
        if(!req.body.nombre && !req.body.descripcion && !req.body.precio && !req.body.telefono && !req.body.sitioWeb && !req.body.ciudad && !req.body.direccion && !req.body.puntuacion){
            return res.status(400).send({'message': 'All fields are required'})
        }
        const hostal = HostalModel.create(req.body);
        if(hostal.error != undefined){
            return res.status(202).send({'message': 'An hostal with that name already exist'})
        }
        return res.status(201).send(hostal);
    },
    getAll(req, res){
        const hostales = HostalModel.findAll();
        return res.status(200).send(hostales);
    },
    getOne(req, res){
        const hostal = HostalModel.findOne(req.params.nombre);
        if (!hostal) {
            return res.status(404).send({'message': 'hostal not found'});
        }
        return res.status(200).send(hostal);
    },
    update(req, res) {
        const hostal = HostalModel.findOne(req.params.nombre);
        if (!hostal) {
            return res.status(404).send({'message': 'hostal not found'});
        }
        const updatedHostal = HostalModel.update(req.params.nombre, req.body);
        return res.status(200).send(updatedHostal);
    },
    delete(req, res) {
        const hostal = HostalModel.findOne(req.params.nombre);
        if (!hostal) {
            return res.status(404).send({'message': 'hostal not found'});
        }
        const deletedHostal = HostalModel.delete(req.params.nombre);
        return res.status(204).send({'message': 'hostal deleted'});
    }
}
export default Hostal;